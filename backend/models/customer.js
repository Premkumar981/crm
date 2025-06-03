const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Customer = sequelize.define('Customer', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  totalSpent: DataTypes.FLOAT,
  lastVisited: DataTypes.DATE,
});

module.exports = Customer;
