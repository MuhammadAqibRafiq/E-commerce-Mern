const express = require("express");
// const Products = require('../model/productModel')
// const asyncHandler = require('express-async-handler')
const { getProducts, getProduct } = require('../controller/productController');
const routes = express.Router();



// routes.get(, asyncHandler(async (req, res) => {
//     const allProduct = await Products.find({})
//     res.json(allProduct)

// }))

routes.route('/products').get(getProducts)

routes.route('/products/:id').get(getProduct)


module.exports = routes