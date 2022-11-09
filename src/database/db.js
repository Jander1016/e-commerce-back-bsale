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
  dialect: DB_DIALECT,
  pool: {
    max: 500,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = {
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
