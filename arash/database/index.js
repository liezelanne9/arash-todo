const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize('databaseName', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => console.log('connected to mysql database'))
  .catch(err => console.log(err));

module.exports = connection;