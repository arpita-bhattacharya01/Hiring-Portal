import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import fs from 'fs';
import multer from 'multer';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const SECRET_KEY = process.env.SECRET_KEY;
const otpStore = {};
const app = express();
const PORT = 3000;

// Import Sequelize models
import {
  sequelize,
  User,
  Admin,
  AdminActivity,
  PersonalDetails,
  Language,
  Education,
  Project,
  Employer,
  Jobs,
  AppliedJob
} from './models/index.js';

const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "dist"))); 
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// Global error handler to prevent crashes
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Don't exit the process, just log the error
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit the process, just log the error
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  sequelize.close().then(() => {
    console.log('Database connection closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  sequelize.close().then(() => {
    console.log('Database connection closed');
    process.exit(0);
  });
});

const authorization = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log("This is authHeader", authHeader)
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];
  console.log("this is token", token)
  if (!token) return res.status(401).json({ message: 'Token not provided' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log('Decoded token:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT Verification Failed:', error.message);
    return res.status(403).json({ message: 'Invalid token' });
  }
};

app.post('/reset-password', async (req, res) => {
  const { email, newPassword, accountType } = req.body;
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  try {
    if (accountType === 'employer') {
      const employer = await Employer.findOne({
        where: {
          [Op.or]: [
            { loginEmail: email },
            { officialEmail: email }
          ]
        }
      });

      if (!employer) {
        return res.status(404).json({ message: "Employer not found" });
      }

      await employer.update({ password: hashedPassword });

    } else if (accountType === 'user') {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await user.update({ password: hashedPassword });

    } else {
      return res.status(400).json({ message: "Invalid account type" });
    }

    return res.json({ message: "Password reset successful" });

  } catch (error) {
    console.error('Reset Password Error:', error);
    res.status(500).json({ message: "Password reset failed" });
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '01arpitabhattacharya@gmail.com',
    pass: 'ukqambtlaragvgmk',
  },
});

app.post('/update-key-skills', authorization, async (req, res) => {
  const userID = req.user.userId;
  const { keySkills } = req.body;
  try {
    const updateUser = await User.findByPk(userID);
    await updateUser.update({
      keySkills: JSON.stringify(keySkills)
    });
    res.status(200).json({ message: "Key Skills Updated Successfully", user: updateUser })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to update key skills" })
  }

})

app.post('/check-email', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  return res.status(200).json({ message: 'Email is available' });
});

app.get('/companies', async (req, res) => {
  const companies = await Employer.findAll();
  console.log("Companies fetched:", companies);
  res.status(200).json({ success: true, data: companies });
})

app.post('/add-education', authorization, async (req, res) => {
  const userId = req.user.userId
  const { education, university, course, specialization, startingYear, endingYear } = req.body
  console.log(education, university, course, specialization, startingYear, endingYear)
  try {
    const newEducation = await Education.create({
      education,
      university,
      course,
      specialization,
      startingYear,
      endingYear,
      userId,
    });
    res.status(200).json({ message: "Education added successfully", data: newEducation })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "failed to save education" })
  }
})

app.get('/get-jobdata', async (req, res) => {
  try {
    const data = await Jobs.findAll({
      where: {
        status: "approved"
      },
      include: [{
        model: Employer,
        as: 'employer',
        attributes: ['companyname', 'companyType', 'industryType', 'linkedin', 'facebook', 'twitter', 'website']
      }]
    });
    console.log(data)
    return res.status(200).json({ success: "true", data: data })
  } catch (error) {
    console.log("An error accured while fetching data", error)
  }
})

app.get('/fetchall-userdata', authorization, async (req, res) => {
  const userId = req.user.userId
  console.log(userId)
  const userdata = await User.findByPk(userId, {
    include: [{
      model: PersonalDetails,
      as: 'personalDetails',
      attributes: ['address']
    }]
  });
})

app.get('/get-education-data', authorization, async (req, res) => {
  const userId = req?.user?.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }

  try {
    const educationList = await Education.findAll({
      where: { userId },
      // include: { projects: true }, // Uncomment if you have related tables
    });

    console.log("Fetched education data:", educationList);
    res.status(200).json({ success: true, data: educationList });
  } catch (error) {
    console.error("Error fetching education data:", error);
    res.status(500).json({ error: "Could not retrieve education data" });
  }
});

app.get('/get-project-data', authorization, async (req, res) => {
  console.log("insside get project data")
  const userId = req.user.userId;
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized access" })
  }
  try {
    const projectlist = await Project.findAll({
      where: { userId: userId }
    })
    console.log("fetch project data", projectlist)
    res.status(200).json({ success: true, data: projectlist })
  } catch (error) {
    console.error("Error fetching project data", error)
    res.status(500).json({ error: "Failed to fetch project data" })
  }

})

app.post('/project-data', authorization, async (req, res) => {
  const userId = req.user.userId;
  console.log("User ID:", userId);

  const {
    projectTitle,
    client,
    projectEmployment,
    projectStatus,
    startYear,
    startMonth,
    endYear,
    endMonth,
    projectSite,
    employmentNature,
    teamSize,
    role,
    skills,
  } = req.body;

  try {
    const newProject = await Project.create({
      userId,
      projectTitle,
      client,
      projectEmployment,
      projectStatus,
      startYear,
      startMonth,
      endYear,
      endMonth,
      projectSite,
      employmentNature,
      teamSize: parseInt(teamSize, 10),
      role,
      skills,
    });

    res.status(200).json({ message: 'Project added successfully', data: newProject });
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(500).json({ message: 'Failed to save project' });
  }
});

app.post('/personal-data', authorization, async (req, res) => {
  const userId = req.user.userId;
  const {
    gender,
    maritalStatus,
    dob,
    category,
    differentlyAbled,
    careerBreak,
    address,
    hometown,
    pincode,
    languages,
  } = req.body;

  const dobString = `${dob.day}-${dob.month}-${dob.year}`;
  try {
    // Find existing personal details or create new ones
    let personalDetails = await PersonalDetails.findOne({
      where: { userId: userId }
    });

    if (personalDetails) {
      // Update existing record
      await personalDetails.update({
        gender,
        maritalStatus,
        dob: dobString,
        category,
        differentlyAbled,
        careerBreak,
        address,
        hometown,
        pincode,
      });

      // Clear existing languages and create new ones
      await Language.destroy({
        where: { personalDetailsId: personalDetails.id }
      });
    } else {
      // Create new record
      personalDetails = await PersonalDetails.create({
        userId,
        gender,
        maritalStatus,
        dob: dobString,
        category,
        differentlyAbled,
        careerBreak,
        address,
        hometown,
        pincode,
      });
    }

    // Create language records
    if (languages && languages.length > 0) {
      const languageData = languages.map(lang => ({
        personalDetailsId: personalDetails.id,
        language: lang.language,
        proficiency: lang.proficiency,
        read: lang.read,
        write: lang.write,
        speak: lang.speak,
      }));
      await Language.bulkCreate(languageData);
    }

    res.status(200).json({ message: 'Personal details saved successfully', personalDetails });
  } catch (error) {
    console.error('Error saving personal details:', error);
    res.status(500).json({ error: 'Failed to save personal details' });
  }
});

app.get('/get-personal-data', authorization, async (req, res) => {
  console.log("inside get pesonal data route")
  try {
    const userId = req.user.userId;
    const personalData = await PersonalDetails.findOne({
      where: { userId: userId },
      include: [{
        model: Language,
        as: 'languages'
      }]
    });

    res.json({ success: true, data: personalData });
  } catch (error) {
    console.error("Error fetching personal data:", error);
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

app.post('/update-password', authorization, async (req, res) => {
  const { loginEmail, password, newPassword } = req.body
  console.log(loginEmail, password, newPassword)
  const userId = req.user.userId;
  console.log(userId)
  try {

    const user = await Employer.findByPk(userId);

    if (!user) {
      return res.status(400).json({ message: "user not found!" })
    }

    // if(password != user.password){
    //   return res.status(400).json({message: "incorrect old password"})
    // }

    const ismatch = await bcrypt.compare(password, user.password)

    if (!ismatch) {
      return res.status(400).json({ message: "Wrong Old Password" })
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10)
    await user.update({ password: hashedNewPassword })
    return res.status(200).json({ message: "password updated successfully" })
  } catch (error) {
    console.log("Error updating password", err)
    return res.status(400).json({ message: "Password updation failed Try again later" })
  }
})

app.post('/jobs-data', async (req, res) => {
  const { jobTitle, location, salary, experience, jobType, skills, jobDiscription, requirement, benifit, employerId, openings, Department, responsibilities } = req.body;
  console.log(jobTitle, location, salary, experience, jobType, skills, jobDiscription, requirement, benifit, employerId, openings, Department, responsibilities)
  try {
    const newJob = await Jobs.create({
      jobTitle,
      location,
      openings,
      Department,
      salary,
      experience,
      jobType,
      skills,
      jobDiscription,
      requirement,
      responsibilities,
      benifit,
      employerId,
    });
    res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Failed to create job" });
  }
});

app.get('/my-jobs', authorization, async (req, res) => {
  try {
    const employerId = req.user.userId;

    const jobs = await Jobs.findAll({
      where: {
        employerId: employerId,
      },
      order: [['posted', 'DESC']],
    });

    res.json(jobs); // Send jobs back to client
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
});

app.get('/pending', async (req, res) => {
  try {
    const job = await Jobs.findAll({
      where: {
        status: 'Pending'
      },
      include: [{
        model: Employer,
        as: 'employer',
        attributes: ['companyname']
      }],
      order: [['posted', 'DESC']]
    })
    res.json(job)
  } catch (error) {
    console.log("Erroe Fetching Jobs", error)
    res.status(500).json({ message: "Failed to fetch Jobs" })
  }
})

app.patch('/:id/approve', authorization, async (req, res) => {
  const jobId = parseInt(req.params.id);
  const userId = req.user.userId;

  try {
    // Update the job status to Approved
    const [updatedCount] = await Jobs.update(
      { status: 'Approved' },
      { where: { id: jobId } }
    );

    // If no job was updated (ID not found)
    if (updatedCount === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Log the admin activity
    await AdminActivity.create({
      adminId: userId,
      action: 'Approved Job',
      targetType: 'Job',
      targetId: jobId
    });

    // Fetch the updated job to return
    const updatedJob = await Jobs.findByPk(jobId);

    res.status(200).json({
      message: "Job approved successfully",
      job: updatedJob
    });
  } catch (error) {
    console.error("Error approving job:", error);
    res.status(500).json({ message: "Failed to approve job" });
  }
});



app.patch('/:id/reject', authorization, async (req, res) => {
  const jobId = parseInt(req.params.id);
  const userId = req.user.userId;

  try {
    // Correct order: update values first, then options
    const [updatedCount] = await Jobs.update(
      { status: "Rejected" },
      { where: { id: jobId } }
    );

    if (updatedCount === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    await AdminActivity.create({
      adminId: userId,
      action: 'Rejected Job',
      targetType: 'Job',
      targetId: jobId
    });

    const updatedJob = await Jobs.findByPk(jobId);

    res.status(200).json({ message: "Job Rejected Successfully", job: updatedJob });
  } catch (error) {
    console.error("Error in job rejection", error);
    res.status(500).json({ message: "Failed to reject job" });
  }
});


app.patch('/:employerId/verify', authorization, async (req, res) => {
  const employerId = parseInt(req.params.employerId);
  const userId = req.user.userId
  console.log(employerId);
  try {
    const updatestate = await Employer.update({
      status: "verified",
    }, {
      where: {
        id: employerId,
      }
    });
    await AdminActivity.create({
      adminId: userId,
      action: 'Verify Employer',
      targetType: 'Employer',
      targetId: employerId
    });
    res.json({ message: "Employer status changed to verified" });
  } catch (error) {
    console.error("Error updating status to verified", error);
    res.status(500).json({ error: "Failed to update status" });
  }
});

app.patch('/:employerId/suspended', authorization, async (req, res) => {
  const employerId = parseInt(req.params.employerId);
  const userId = req.user.userId;
  try {
    const updatestate = await Employer.update({
      status: "suspended",
    }, {
      where: {
        id: employerId,
      }
    });
    await AdminActivity.create({
      adminId: userId,
      action: 'Suspend Employer',
      targetType: 'Employer',
      targetId: employerId
    });
    res.json({ message: "Employer status changed to suspended" });
  } catch (error) {
    console.error("Error updating status to suspended", error);
    res.status(500).json({ error: "Failed to update status" });
  }
});


app.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.count();
    const totalEmployers = await Employer.count();
    const activeJobs = await Jobs.count({
      where: { status: "Approved" }
    })
    const pendingApprovals = await Jobs.count({
      where: { status: "Pending" }
    })
    res.json({
      totalUsers,
      totalEmployers,
      activeJobs,
      pendingApprovals
    })
  } catch (error) {
    console.error("Failed to fetch Stats", error)
    res.status(500).json({ message: "Failed to fetch stats" })
  }
})
app.get('/state', async (req, res) => {
  try {

    const totalAdmin = await Admin.count({
      where: { role: "Admin" }
    })
    const totalActiveUsers = await User.count({
      where: { status: "Active" }
    });
    const totalSuspendedUsers = await User.count({
      where: { status: "Suspended" }
    });

    const totalActiveEmployers = await Employer.count({
      where: { status: "verified" }
    });

    const totalSuspendedEmployer = await Employer.count({
      where: { status: "suspended" }
    });

    const totalPendingEmployer = await Employer.count({
      where: { status: "pending" }
    });
    const activeJobs = await Jobs.count({
      where: { status: "Approved" }
    })
    const pendingApprovals = await Jobs.count({
      where: { status: "Pending" }
    })
    res.json({
      totalAdmin,
      totalActiveUsers,
      totalSuspendedUsers,
      totalActiveEmployers,
      totalSuspendedEmployer,
      totalPendingEmployer,
      activeJobs,
      pendingApprovals
    })
  } catch (error) {
    console.error("Failed to fetch Stats", error)
    res.status(500).json({ message: "Failed to fetch stats" })
  }
})

app.post('/reportaproblem', upload.single('file'), async (req, res) => {
  const { name, email, mobile, landline, details, areaOfConcern, subject } = req.body;
  const file = req.file;

  const mailOptions = {
    from: '01arpitabhattacharya@gmail.com',
    to: '01arpitabhattacharya@gmail.com',
    subject: `New Problem Reported: ${areaOfConcern}`,
    text: `Name: ${name}
           Email: ${email}
           Mobile: ${mobile}
           Landline: ${landline}
           Area: ${areaOfConcern}
           Subject: ${subject}
           Details: ${details}`,
    attachments: file
      ? [
        {
          filename: file.originalname,
          path: file.path,
        },
      ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);

    // Optionally delete the file
    if (file) fs.unlinkSync(file.path);

    // ✅ Make sure this is returned
    res.status(200).json({ message: 'Problem reported successfully via email.' });

  } catch (error) {
    res.status(500).json({
      error: 'Failed to send email.',
      details: error.message
    });
  }

});
app.post('/update-resume-headline', authorization, async (req, res) => {
  console.log("Route hit!");
  const userId = req.user.userId;
  const { heading } = req.body;
  try {
    await User.update({
      heading
    }, {
      where: { id: userId }
    });
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Profile update failed' });
  }
});


app.post('/check-employer-email', async (req, res) => {
  const { email } = req.body;
  console.log("Checking employer email:", email);
  try {
    const employer = await Employer.findOne({
      where: {
        [Op.or]: [
          { loginEmail: email },
          { officialEmail: email }
        ]
      }
    });

    if (employer) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking employer email:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/forgot-password', async (req, res) => {
  const { email, accountType } = req.body;

  try {
    let user;

    // Validate accountType
    if (accountType === "user") {
      user = await User.findOne({
        where: { email },
      });
    } else if (accountType === "employer") {
      user = await Employer.findOne({
        where: {
          [Op.or]: [
            { loginEmail: email },
            { officialEmail: email }
          ]
        }
      });
    } else {
      return res.status(400).json({ message: "Invalid account type" });
    }

    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000;

    otpStore[email] = { otp, expiresAt, verified: false };

    // Send OTP email
    await transporter.sendMail({
      from: '01arpitabhattacharya@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    return res.status(200).json({ message: 'OTP sent to your email' });
  } catch (error) {
    console.error('Error in forgot-password:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});


app.post('/send-otp', async (req, res) => {
  console.log("inside send otp api")
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000;

  otpStore[email] = { otp, expiresAt, verified: false };

  try {
    await transporter.sendMail({
      from: '01arpitabhattacharya@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    res.status(200).json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ message: 'Failed to send OTP', error: err.message });
  }
});
app.post('/send-callback-email', async (req, res) => {
  const { fullname, email, mobile, hiringType, designation, companyname, city } = req.body;
  try {
    await transporter.sendMail({
      from: '01arpitabhattacharya@gmail.com',
      to: '01arpitabhattacharya@gmail.com',
      subject: 'New Callback Request Received',
      html: `
        <h3>New Callback Request</h3>
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Hiring For:</strong> ${hiringType === 'company' ? 'Company' : 'Consultancy'}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Company Name:</strong> ${companyname}</p>
        <p><strong>City:</strong> ${city}</p>
        <br/>
        <p>Please follow up with this candidate as soon as possible.</p>
      `
    });

    res.status(200).json({ message: 'Callback request email sent successfully' });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ message: 'Failed to send callback email', error: err.message });
  }
});

app.post('/verify-otp', (req, res) => {
  const { email, otp, accountType } = req.body;
  const record = otpStore[email];


  console.log(`[OTP Verify] Email: ${email}`);
  console.log(`[OTP Verify] Received OTP: ${otp}`);
  console.log(`[OTP Verify] Stored OTP: ${record?.otp}`);

  if (!record) {
    return res.status(400).json({ message: 'No OTP found for this email' });
  }

  if (Date.now() > record.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ message: 'OTP expired' });
  }

  if (record.otp !== otp.toString()) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  otpStore[email].verified = true;
  return res.status(200).json({ message: 'OTP verified successfully' });
});

app.patch('/setadmin-password', async (req, res) => {
  const { newpassword, email } = req.body
  console.log(newpassword)
  const hashpassword = await bcrypt.hash(newpassword, 10);
  try {
    const response = await Admin.update({
      password: hashpassword
    }, {
      where: {
        email: email
      }
    });
    return res.status(200).json({ message: "password updated successfully" })
  } catch (error) {
    console.error("An error accured while changing password ", error)
  }
})

app.post("/change-admin-password", authorization, async (req, res) => {
  console.log("inside change admin password");

  const { oldPassword, newPassword } = req.body;
  const userId = req.user.userId;
  console.log(oldPassword, newPassword, userId);

  try {
    const user = await Admin.findByPk(userId);

    if (!user) {
      return res.status(400).json({ message: "Admin not found!" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong Old Password" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await user.update({ password: hashedNewPassword });

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).json({ message: "Password update failed. Try again later." });
  }
});



app.get('/applied/:jobId', authorization, async (req, res) => {
  const userId = req.user.userId
  const jobId = parseInt(req.params.jobId)

  const applied = await AppliedJob.findOne({
    where: {
      userId,
      jobsId: jobId
    }
  })
  if (applied) {
    return res.json({ applied: true })
  }
  else {
    return res.json({ applied: false })
  }
})


app.post('/employer-registration', async (req, res) => {
  const { fullName, officialEmail, password, loginEmail } = req.body;
  console.log(fullName, officialEmail, password, loginEmail)

  // Step 1: Validate inputs
  if (!fullName || !officialEmail || !password || !loginEmail) {
    return res.status(400).send({ success: false, error: 'All fields are required' });
  }

  try {
    // Step 2: Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Step 3: Create user
    console.log("Registering employer with:", { fullName, officialEmail, password, loginEmail });
    const newUser = await Employer.create({
      fullName,
      officialEmail,
      password: hashedPassword,
      loginEmail,
    });

    // Step 4: Delete OTP from store
    delete otpStore[officialEmail]; // or use loginEmail if that's your key

    // Step 5: Send response
    res.send({
      success: true,
      message: 'User registered successfully',
      employer: newUser,
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).send({ success: false, error: 'Registration failed' });
  }
});


app.put('/employer-profile', async (req, res) => {
  const { id, hiringfor, companyname, industry, employes, designation, pincode, companyaddress } = req.body;
  console.log(companyname, industry, employes, designation, pincode, companyaddress)
  try {
    const updatedEmployer = await Employer.update({
      hiringfor,
      companyname,
      industry,
      employes,
      designation,
      pincode,
      companyaddress,
    }, {
      where: { id: Number(id) }
    });

    res.send({
      success: true,
      message: 'Profile updated successfully',
      employer: updatedEmployer,
    });

  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).send({ success: false, error: 'Update failed' });
  }
});


app.post('/register', async (req, res) => {
  const { fullName, email, password, mobile, workStatus } = req.body;

  try {
    const existinguser = await User.findOne({
      where: { email },
    });

    if (existinguser) {
      return res.status(400).send({
        success: false,
        message: "Email is already used. Please Login",
      });
    }

    if (!otpStore[email] || !otpStore[email].verified) {
      return res.status(400).send({
        success: false,
        message: "Please verify OTP before registration",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      mobile,
      workStatus,
    });

    delete otpStore[email];

    res.send({
      success: true,
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: 'Registration failed' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user
    });

  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
app.post('/admin-login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request with:", email, password);

  try {
    if (!email || !password) {
      console.log("Missing credentials");
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await Admin.findOne({ where: { email } });
    console.log("User found:", user);

    if (!user) {
      console.log("No user found with email");
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match status:", isMatch);

    if (!isMatch) {
      console.log("Invalid password");
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    console.log("Login successful, sending response");
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user
    });

  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


app.post('/employer-login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const employe = await Employer.findOne({
      where: {
        [Op.or]: [
          { officialEmail: email },
          { loginEmail: email }
        ]
      }
    });

    if (!employe) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, employe.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: employe.id, email: employe.officialEmail || employe.personalEmail },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      employer: employe
    });

  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get("/get-employers", async (req, res) => {
  try {
    console.log("inside get employers");

    const employers = await Employer.findAll({
      include: [{
        model: Jobs,
        as: 'jobs'
      }]
    });

    const enrichedEmployers = employers.map(emp => {
      const totalJobs = emp.jobs.length;
      const activeJobs = emp.jobs.filter(j => j.status === "Approved").length;

      return {
        ...emp.toJSON(),
        jobsPosted: totalJobs,
        activeJobs
      };
    });

    res.json(enrichedEmployers);
  } catch (error) {
    console.error("Error fetching employers:", error);
    res.status(500).json({ error: "Failed to fetch employers" });
  }
});



app.get("/get-user", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.patch("/:id/suspend", authorization, async (req, res) => {
  const userId = req.params.id;
  const adminId = req.user.userId;
  try {
    const updatedUser = await User.update({
      status: "suspended"
    }, {
      where: { id: Number(userId) }
    });
    await AdminActivity.create({
      adminId: adminId,
      action: 'Suspend User',
      targetType: 'user',
      targetId: parseInt(userId)
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error suspending user:", error);
    res.status(500).json({ error: "Failed to suspend user" });
  }
});

// Activate a user
app.patch("/:id/activate", authorization, async (req, res) => {
  const userId = req.params.id;
  const adminId = req.user.userId;
  try {
    const updatedUser = await User.update({
      status: "active"
    }, {
      where: { id: Number(userId) }
    });
    await AdminActivity.create({
      adminId: adminId,
      action: 'Active User',
      targetType: 'user',
      targetId: parseInt(userId)
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error activating user:", error);
    res.status(500).json({ error: "Failed to activate user" });
  }
});
app.post('/applyjob', authorization,
  upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'photo', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        position,
        city,
        state,
        experience,
        education,
        degree,
        university,
        graduationYear,
        coverLetter,
        portfolio,
        skills,
        availability,
        salary
      } = req.body;

      const resume = req.files?.resume?.[0]?.filename || null;
      const photo = req.files?.photo?.[0]?.filename || null;

      console.log({
        firstName,
        lastName,
        email,
        phone,
        position,
        city,
        state,
        experience,
        education,
        degree,
        university,
        graduationYear,
        resume,
        photo,
        coverLetter,
        portfolio,
        skills,
        availability,
        salary
      });

      const newapply = await AppliedJob.create({
        userId: req.user.userId,
        jobsId: parseInt(req.body.jobId),
        firstName,
        lastName,
        email,
        phone,
        position,
        city,
        state,
        experience,
        education,
        degree,
        university,
        graduationYear: parseInt(graduationYear),
        resume,
        photo,
        coverLetter,
        portfolio,
        skills,
        availability,
        salary: parseInt(salary)
      });
      res.status(200).json({ message: 'Application received successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
);


app.post("/update-account", authorization, async (req, res) => {
  console.log("inside update account api");
  const { username, email, role, reportingManager, mobile } = req.body;
  console.log(username, email, role, reportingManager, mobile);
  const userId = req.user.userId;

  try {
    const response = await Employer.update(
      {
        fullName: username,
        loginEmail: email,
        designation: role,
        reportingmanager: reportingManager,
        mobile: mobile
      },
      {
        where: {
          id: userId
        }
      }
    );

    return res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("some error occurred during updating data", error);
    return res.status(500).json({ error: "Some error occurred during updating data" });
  }
});


app.post('/user-carrier-data', authorization, async (req, res) => {
  const { industry, department, roleCategory, jobRole, jobType, employmentType, shift, location, salary } = req.body
  console.log(industry, department, roleCategory, jobRole, jobType, employmentType, shift, location, salary)
  const userId = req.user.userId
  try {
    const response = await carrierdata.create({
      where : {
        id : userId   
       },
       data:{
           industry , 
           department, 
           role
       }
    })
  } catch (error) {
    console.error("error storing carrir data " , error)
  }
})


app.get('/get-application-data', authorization, async (req, res) => {
  const employerId = req.user.userId;

  try {
    const applicationdata = await AppliedJob.findAll({
      include: [
        {
          model: User,
          as: 'user', // ✅ make sure this alias matches your model
          attributes: ['id', 'fullName', 'email'],
        },
        {
          model: Jobs,
          as: 'jobs', // ✅ match the correct alias defined in your association
          where: { employerId: employerId },
          attributes: ['id', 'jobTitle', 'status'],
        },
      ],
    });
    console.log("this is application data" , applicationdata)
    res.status(200).json(applicationdata);
  } catch (error) {
    console.error("Failed to fetch application data", error);
    res.status(500).json({ error: "Something went wrong while fetching applications" });
  }
});

app.post("/create-admin", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const existingAdmin = await Admin.findOne({
      where: { email },
    });

    if (existingAdmin) {
      return res.status(409).json({ error: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).json({ error: "Something went wrong while creating the admin." });
  }
});


app.get("/admin-activities", async (req, res) => {
  try {
    const activities = await AdminActivity.findAll({
      order: [['timestamp', 'DESC']],
      include: [{
        model: Admin,
        as: 'admin',
        attributes: ['name'],
      }],
      limit: 50,
    });

    res.json(activities);
  } catch (err) {
    console.error("Error fetching admin activities:", err);
    res.status(500).json({ message: "Failed to fetch activities" });
  }
});


app.post("/company-deatils", authorization, async (req, res) => {
  const userId = req.user.userId;
  const { companyType, industryType, contactPerson, alias, designation, website, classifieds, phone1, phone2, fax, tan, discription, noOfEmployes, aboutus } = req.body
  console.log(companyType, industryType, contactPerson, alias, designation, website, classifieds, phone1, phone2, fax, tan, discription, noOfEmployes, aboutus)
  try {
    const response = await Employer.update(
      {
        companyType,
        industryType,
        contactPerson,
        alias,
        designation,
        website,
        classified: classifieds,
        phone1,
        phone2,
        fax,
        tan,
        discription,
        noOfEmployes,
        aboutus
      },
      {
        where: { id: userId }
      }
    )
    console.log("Updated company data:", response);
    return res.status(200).json({ message: "Company data added successfully" });
  } catch (error) {
    console.error("An error accured while updating", error)
    return res.status(500).json({ error: "Error sending company data" })
  }
})

app.post("/update-link", authorization, async (req, res) => {
  const userId = req.user.userId
  const { website, linkedin, facebook, twitter, others } = req.body
  console.log(website, linkedin, facebook, twitter, others)

  try {
    const response = await Employer.update(
      {
        website,
        linkedin,
        twitter,
        facebook,
        others
      },
      {
        where: { id: userId }
      }
    )
    return res.status(200).json({ message: "linked updated successfully" })
  } catch (error) {
    return res.status(500).json({ error: "An error acccured while updating link" })
  }
})

app.get("/fetch-employer", authorization, async (req, res) => {
  const userId = req.user.userId;

  try {
    const employer = await Employer.findByPk(userId);

    if (!employer) {
      return res.status(404).json({ error: "Employer not found" });
    }

    res.status(200).json(employer);
  } catch (error) {
    console.error("Error fetching employer data:", error);
    res.status(500).json({ error: "Failed to fetch employer data" });
  }
});

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    // Test database connection
    await sequelize.authenticate();
    res.status(200).json({
      status: 'OK',
      message: 'Server is running and database is connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: 'Database connection failed',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Health check available at: http://localhost:3000/health');
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  }
});

// Graceful shutdown for server
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    sequelize.close().then(() => {
      console.log('Database connection closed');
      process.exit(0);
    });
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    sequelize.close().then(() => {
      console.log('Database connection closed');
      process.exit(0);
    });
  });
});

app.on('close', () => {
  console.log('Server closed');
});




// comment to test the github
