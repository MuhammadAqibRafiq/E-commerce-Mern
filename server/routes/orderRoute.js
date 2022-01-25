const express = require("express");
const { addOrderItem, orderById, updateOrderToPaid, getMyOrder } = require('../controller/orderController');
const router = express.Router();
const protect = require("../middlewares/authMiddleware")


//My orders
router.route('/myorders').get(protect, getMyOrder)

//Create new order
router.route('/').post(protect, addOrderItem)

//Get order by id
router.route('/:id').post(protect, orderById)

//pay order
router.route('/:id/pay').put(protect, updateOrderToPaid)



module.exports = router