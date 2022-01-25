const express = require("express");
const products = require('./data/products')
const dotenv = require('dotenv')
const {errorHandler} = require('./middlewares/errorHandler')
const app = express();
const productRoutes = require('./routes/productRoute')
const usersRoutes = require('./routes/usersRoutes')
const orderRoutes = require('./routes/orderRoute')


dotenv.config({ path: './config.env' })
require('./db/connect')
//midleware bodyparser
app.use(express.json())


app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.use("/api",productRoutes)
app.use("/api/users",usersRoutes)
app.use("/api/orders",orderRoutes)


app.use(errorHandler)

//PRODUCT ACCESS FROM data/products FILE(LOCAL)
// app.get('/products', (req, res) => {
//     console.log(products)
//     res.json(products)

// })

// app.get('/products/:id', (req, res) => {
//     const product = products.find(p => p.id === req.params.id)
//     res.json(product)
// })


app.listen(8000, () => {
    console.log("you are on port 8000")
})