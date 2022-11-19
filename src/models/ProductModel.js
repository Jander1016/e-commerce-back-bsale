const { DataTypes } = require( 'sequelize');
const { conn } = require('../database/db');
const Category = require('./CategoryModel');

const Product = conn.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps:false,
    freezeTableName: true
  }
  )

  Product.hasMany(Category,{
    foreignKey: 'id',
    sourceKey: 'category'
  })

  Category.belongsTo(Product,{
    foreignKey: 'id',
    targetKey: 'id'
  })

  module.exports = Product

