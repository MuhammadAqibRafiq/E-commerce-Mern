const Products = require('../model/productModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async (req, res) => {
    const allProduct = await Products.find({})
    res.json(allProduct)

})

const getProduct = asyncHandler(async (req, res) => {
    const singleProduct = await Products.findById(req.params.id)
    console.log(singleProduct)
    if (singleProduct) {
        res.json(singleProduct)
    } else {
        res.status(404).json({ message: "Product not found" })
    }
})

module.exports = { getProducts, getProduct }
