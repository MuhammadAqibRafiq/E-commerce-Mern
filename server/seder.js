const mongoose = require("mongoose")
const dotenv = require('dotenv');

const users = require('./data/users');
const products = require('./data/products');

const User = require('./model/userModel');
const Product = require('./model/productModel');
const Order = require('./model/orderModel');

dotenv.config({ path: './config.env' })
require('./db/connect')

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createUser = await User.insertMany(users);
        const adminUser = createUser[0]._id
        const sampleData = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleData)
        console.log("data imported")
        process.exit()
    }
    catch (err) {
        console.log(err)
        console.log("error in seed")
    }
};

const destroyData = async() => {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('data destroy')
    process.exit()
};

if(process.argv[2]==="-d"){
    destroyData()
}else{
    importData()
}
