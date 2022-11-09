const {allProducts, getProductsbyName, getProductsByCategory} = require("../models/Product")

const getAllProductsService = async () => {
  try {
    const allProduct = await allProducts()
    return allProduct
  } catch (error) {
    throw error
  }
}

const getByNameProductService = async (name) => {
  try {
    const productsByName = await getProductsbyName(name)
    return productsByName
  } catch (error) {
    throw error
  }
}

const getByCategoryService = async (category) => {
  try {
    const productsByCategory = await getProductsByCategory(category)
    return productsByCategory
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllProductsService,
  getByNameProductService,
  getByCategoryService
}
