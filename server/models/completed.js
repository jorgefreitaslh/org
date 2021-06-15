'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Completed = sequelize.define('Completed', {
    learnerId: DataTypes.STRING,
    volunteerId: DataTypes.STRING,
    date: DataTypes.STRING,
    evaluate: DataTypes.STRING,
    priority: DataTypes.STRING
  }, {});
  return Completed;
};