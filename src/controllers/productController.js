const {getAllProductsService, getByNameProductService, getByCategoryService} = require("../services/productService");


const getAllProductsController = async (req, res) => {
  try {
    const listProducts = await getAllProductsService()
    res.json({status: "OK", data: listProducts})
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

const getByNameProductController = async (req, res) => {
  try {
    const {name} = req.params
    if (!name) res.status(400).send({status: "FAILED", data:{ error: "Parameter ':name' can not be empty" }})
    const [findProduct] = await getByNameProductService(name)
    !findProduct 
    ? res.status(404).json({status: "NOT FOUND"}) 
    : res.status(200).json({status: "OK", data: findProduct})
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

const getByCategoryController = async (req, res) => {
  try {
    const {category} = req.params
    if (!category) res.status(400).send({status: "FAILED", data:{ error: "Parameter ':category' can not be empty" }})
    const [findProduct] = await getByCategoryService(category)
    !findProduct 
    ? res.status(404).json({status: "NOT FOUND"}) 
    : res.status(200).json({status: "OK", data: findProduct})
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

module.exports = {
  getAllProductsController,
  getByNameProductController,
  getByCategoryController
}
