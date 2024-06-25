const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Follow = sequelize.define("Follow", {
  follower: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  following: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Follow;