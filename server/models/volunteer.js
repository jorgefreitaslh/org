'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define('Volunteer', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    bio: DataTypes.STRING,
    company: DataTypes.STRING,
    role: DataTypes.STRING,
    rate: DataTypes.STRING,
    image: DataTypes.TEXT,
    language: DataTypes.JSON,
    hour: DataTypes.STRING,
    skill: DataTypes.JSON,
    preference: DataTypes.JSON,
    newsletter: DataTypes.STRING,
    requests: DataTypes.STRING,
  }, {});
  return Volunteer;
};