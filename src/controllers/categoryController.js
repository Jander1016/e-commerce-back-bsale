const { getAllCategoriesService } = require("../services/categoryService");

const getAllCategoriesController = async ( req, res ) => {
  try {
    const listCategories = await getAllCategoriesService()
    res.status(200).json({status: 'OK', data: listCategories})
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}


module.exports = getAllCategoriesController