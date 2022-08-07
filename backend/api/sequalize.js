const Sequelize = require('sequelize');
const config = require('./config.json')

module.exports = new Sequelize("emp","root","root", config["development"]);

