const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Campaign = sequelize.define('Campaign', {
  name: DataTypes.STRING,
  rules: DataTypes.JSON,
});

module.exports = Campaign;
