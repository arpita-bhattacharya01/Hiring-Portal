import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Jobs = sequelize.define('Jobs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jobType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobDiscription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    requirement: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    responsibilities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    benifit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    posted: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    openings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pending'
    },
    Department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Jobs',
    timestamps: false
  });

  return Jobs;
};
