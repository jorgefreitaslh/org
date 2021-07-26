'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Learner = sequelize.define('Learner', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    bio: DataTypes.STRING,
    businessName: DataTypes.STRING,
    businessRole: DataTypes.STRING,
    businessType: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    image: DataTypes.TEXT,
    language: DataTypes.JSON,
    skill: DataTypes.JSON,
    invited: DataTypes.JSON,
    matching: DataTypes.STRING,
    emailSettings: DataTypes.JSON
  }, {});
  return Learner;
};