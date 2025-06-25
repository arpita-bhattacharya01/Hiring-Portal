import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    client: {
      type: DataTypes.STRING,
      allowNull: true
    },
    projectEmployment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    projectStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startYear: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startMonth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endYear: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endMonth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    projectSite: {
      type: DataTypes.STRING,
      allowNull: true
    },
    employmentNature: {
      type: DataTypes.STRING,
      allowNull: true
    },
    teamSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Projects',
    timestamps: false
  });

  return Project;
};
