require('dotenv').config()
const {Sequelize} = require('sequelize');

const {
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT
});

module.exports = {
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
