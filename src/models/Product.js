const {conn} = require("../database/db")

const sqlProduct = 'SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name as category FROM product p, category c WHERE c.id = p.category'

const allProducts = async () => {
  try {
    const [listProducts] = await conn.query(sqlProduct + ' order by p.id asc')
    return listProducts
  } catch (error) {
    throw {
      status : 500,
      message : error?. message || error
    }
  }
}

const getProductsbyName = async (name) => {
  try {
    const [listProducts] = await conn.query(sqlProduct + ` AND LOWER(p.name) LIKE LOWER('%${name}%')`)
    return [listProducts]
  } catch (error) {
    throw {
      status : 500,
      message : error?. message || error
    }
  }
}

const getProductsByCategory = async (category) => {
  try {
    const [listProducts] = await conn.query(sqlProduct + ` AND c.name = '${category}'`)
    return [listProducts]
  } catch (error) {
    throw {
      status : 500,
      message : error?. message || error
    }
  }
}

module.exports = {
  allProducts,
  getProductsbyName,
  getProductsByCategory
}
