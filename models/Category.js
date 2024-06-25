const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Category = sequelize.define("Category", {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Category;