const User = require("../models/User");

const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Token = sequelize.define("Token", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(new Date().getTime() + 60 * 60 * 1000)
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}, {
  createdAt: 'created_at', 
  updatedAt: 'updated_at'
});

module.exports = Token;