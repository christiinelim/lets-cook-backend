const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verified: {
    type: DataTypes.STRING,
    defaultValue: 'No',
    allowNull: false,
  }
}, {
  createdAt: 'created_at', 
  updatedAt: 'updated_at'
});

module.exports = User;