const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgresql::memory:");

const Task = sequelize.define("Task", {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskDescription: {
    type: DataTypes.STRING,
  },
  taskDueDate: {
    type: DataTypes.DATEONLY,
  },
  taskComplete: {
    type: DataTypes.TINYINT,
  },
});
