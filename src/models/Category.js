const Category = require("./CategoryModel");

const allCategories = async () => {
  try {
    // const [listCategories] = await conn.query('SELECT * FROM category')
     const listCategories = await Category.findAll();
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
