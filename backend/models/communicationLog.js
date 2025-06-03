const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Campaign = require('./campaign');
const Customer = require('./customer');

const CommunicationLog = sequelize.define('CommunicationLog', {
  message: DataTypes.STRING,
  status: DataTypes.ENUM('SENT', 'FAILED'),
});

CommunicationLog.belongsTo(Campaign);
CommunicationLog.belongsTo(Customer);

module.exports = CommunicationLog;
