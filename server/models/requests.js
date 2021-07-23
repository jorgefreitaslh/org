'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    learnerId: DataTypes.STRING,
    priority: DataTypes.STRING,
    experience: DataTypes.STRING,
    volunteers: DataTypes.STRING,
    dates: DataTypes.JSON,
  }, {});
  return Request;
};