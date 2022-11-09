const express = require('express');

const {getAllProductsController, getByNameProductController, getByCategoryController} = require('../../controllers/productController');

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id: 
 *           type: integer
 *           example: 1, 2, 3, 4, 5
 *         name: 
 *           type: string
 *           example: "ENERGETICA MR BIG"
 *         url_image:
 *           type: string
 *           example: "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg"
 *         price:
 *           type: float
 *           example: 1490.70
 *         discount:
 *           type: integer
 *           example: 20
 *         category:
 *           type: string
 *           example: "bebida energetica"
 *     Category:
 *       type: object
 *       properties:
 *         id: 
 *           type: integer
 *           example: 1, 2, 3
 *         name: 
 *           type: string
 *           example: "bebida"
 */

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags:
 *       - All Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Product"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get('/products', getAllProductsController)


/**
 * @openapi
 * /api/v1/products/{name} :
 *   get:
 *     tags:
 *       - Filter Products by Name
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         description: The name of products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Product"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get('/products/:name', getByNameProductController)

/**
 * @openapi
 * /api/v1/products/category/{category} :
 *   get:
 *     tags:
 *       - Filter Products by Category
 *     parameters:
 *       - in: path
 *         name: category
 *         schema:
 *           type: string
 *         description: The category of the products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Product"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get('/products/category/:category', getByCategoryController)

module.exports = router
