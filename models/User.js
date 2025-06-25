import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joinDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    jobapplied: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active'
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    workStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    heading: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keySkills: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });

  return User;
};
