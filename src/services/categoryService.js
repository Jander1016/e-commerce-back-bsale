const { allCategories } = require("../models/Category")

const getAllCategoriesService = async () =>{
  try {
    const categories =  await allCategories()
    return categories
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllCategoriesService
}
