const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Customer = require('./customer');

const Order = sequelize.define('Order', {
  amount: DataTypes.FLOAT,
  date: DataTypes.DATE,
});

Order.belongsTo(Customer);
Customer.hasMany(Order);

module.exports = Order;
