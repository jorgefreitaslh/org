'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Upcoming = sequelize.define('Upcoming', {
    learnerId: DataTypes.STRING,
    volunteerId: DataTypes.STRING,
    date: DataTypes.STRING,
    priority: DataTypes.STRING,
    experience: DataTypes.STRING,
    name: DataTypes.STRING,
    call: DataTypes.STRING
  }, {});
  return Upcoming;
};