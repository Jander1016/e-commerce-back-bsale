const {conn} = require("../database/db")

const allCategories = async () => {
  try {
    const [listCategories] = await conn.query('SELECT * FROM category')
    return listCategories
  } catch (error) {
    throw{
      status: 500,
      message: error?.message || error
    }
  }
}
module.exports = {
  allCategories
}
