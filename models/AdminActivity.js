import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const AdminActivity = sequelize.define('AdminActivity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false
    },
    targetType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    targetId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'AdminActivities',
    timestamps: false
  });

  return AdminActivity;
};
