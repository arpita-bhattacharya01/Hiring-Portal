import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Employer = sequelize.define('Employer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    officialEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    loginEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    companyname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hiringfor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    employes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reportingmanager: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    industryType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classified: {
      type: DataTypes.STRING,
      allowNull: true
    },
    noOfEmployes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aboutus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    others: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    joinDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    companyaddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    }
  }, {
    tableName: 'Employers',
    timestamps: false
  });

  return Employer;
};
