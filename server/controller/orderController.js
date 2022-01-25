const Order = require('../model/orderModel')
const asyncHandler = require('express-async-handler')

const addOrderItem = asyncHandler(async (req, res) => {

    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400).json({ message: "No order Found" })
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
})

//getOrder by ID
const orderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    console.log(order)
    if (order) {
        res.json(order)
    } else {
        res.status(400).json({ error: "Order Not Found" })
    }
})

//paidEndPoint
const updateOrderToPaid = asyncHandler(async (req, res) => {
    // const { checkbox } = req.body
    // console.log("checkbox", checkbox)
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    // console.log(order)
    if (order) {
        order.isPaid = true,
            order.paidAt = Date.now(),
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address
            }
        const updateOrder = await order.save()
        res.json(updateOrder)

    } else {
        res.status(400).json({ error: "Order Not Found" })
    }
})

const getMyOrder = asyncHandler(async (req, res) => {
    
    const orders = await Order.find({user:req.user._id})
    res.json(orders)

})


module.exports = { addOrderItem, orderById, updateOrderToPaid, getMyOrder }