const { DataTypes } = require( 'sequelize');
const { conn } = require('../database/db');

  const Category = conn.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps:false,
    freezeTableName: true
  }
  )

module.exports = Category