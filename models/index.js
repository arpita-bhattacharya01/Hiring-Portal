import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Create Sequelize instance with database
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 10,
    min: 2,
    acquire: 30000,
    idle: 10000,
    handleDisconnects: true
  },
  dialectOptions: {
    connectTimeout: 60000,
    acquireTimeout: 60000,
    timeout: 60000,
    keepAlive: true,
    reconnect: true
  },
  retry: {
    max: 3,
    timeout: 10000
  }
});

// Test the connection and create database if needed
const testConnection = async () => {
  try {
    console.log('Attempting to connect to database...');
    
    // First, try to connect without database
    await sequelizeWithoutDB.authenticate();
    console.log('MySQL connection successful');
    
    // Try to create database if it doesn't exist
    try {
      await sequelizeWithoutDB.query(`CREATE DATABASE IF NOT EXISTS \`hiringdb\``);
      console.log(`Database 'job_portal_db' is ready`);
    } catch (dbError) {
      console.log('Database creation error (might already exist):', dbError.message);
    }
    
    // Now try to connect to the specific database
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    console.error('Error details:', {
      code: error.parent?.code,
      errno: error.parent?.errno,
      sqlState: error.parent?.sqlState,
      sqlMessage: error.parent?.sqlMessage
    });
  }
};

testConnection();

// Import models
import UserModel from './User.js';
import AdminModel from './Admin.js';
import AdminActivityModel from './AdminActivity.js';
import PersonalDetailsModel from './PersonalDetails.js';
import LanguageModel from './Language.js';
import EducationModel from './Education.js';
import ProjectModel from './Project.js';
import EmployerModel from './Employer.js';
import JobsModel from './Jobs.js';
import AppliedJobModel from './AppliedJob.js';

const User = UserModel(sequelize, Sequelize);
const Admin = AdminModel(sequelize, Sequelize);
const AdminActivity = AdminActivityModel(sequelize, Sequelize);
const PersonalDetails = PersonalDetailsModel(sequelize, Sequelize);
const Language = LanguageModel(sequelize, Sequelize);
const Education = EducationModel(sequelize, Sequelize);
const Project = ProjectModel(sequelize, Sequelize);
const Employer = EmployerModel(sequelize, Sequelize);
const Jobs = JobsModel(sequelize, Sequelize);
const AppliedJob = AppliedJobModel(sequelize, Sequelize);


// Define associations
// User associations
User.hasOne(PersonalDetails, { foreignKey: 'userId', as: 'personalDetails' });
User.hasMany(Education, { foreignKey: 'userId', as: 'education' });
User.hasMany(Project, { foreignKey: 'userId', as: 'projects' });
User.hasMany(AppliedJob, { foreignKey: 'userId', as: 'appliedjob' });

PersonalDetails.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Education.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Project.belongsTo(User, { foreignKey: 'userId', as: 'user' });
AppliedJob.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// PersonalDetails associations
PersonalDetails.hasMany(Language, { foreignKey: 'personalDetailsId', as: 'languages' });
Language.belongsTo(PersonalDetails, { foreignKey: 'personalDetailsId', as: 'personalDetails' });

// Admin associations
Admin.hasMany(AdminActivity, { foreignKey: 'adminId', as: 'AdminActivity' });
AdminActivity.belongsTo(Admin, { foreignKey: 'adminId', as: 'admin' });

// Employer associations
Employer.hasMany(Jobs, { foreignKey: 'employerId', as: 'jobs' });
Jobs.belongsTo(Employer, { foreignKey: 'employerId', as: 'employer' });

// Jobs associations
Jobs.hasMany(AppliedJob, { foreignKey: 'jobsId', as: 'appliedjob' });
AppliedJob.belongsTo(Jobs, { foreignKey: 'jobsId', as: 'jobs' });

// Sync database (this will create all tables automatically)
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // force: false means it won't drop existing tables
    console.log('Database synced successfully - all tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

// Call syncDatabase to create all tables
syncDatabase();

export {
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
};
