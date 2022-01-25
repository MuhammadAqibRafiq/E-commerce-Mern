const Users = require('../model/userModel')
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler");
// const { findById } = require('../model/userModel');

const protect = asyncHandler(async (req, res, next) => {

    let token;

    // Testing purpose
    // console.log("req ",req.headers.authorization || req.headers.authorization.startsWith('Bearer'));
    // token = req.headers.authorization.split(' ')[1]
    // console.log("token", token)
    // const decode = jwt.verify(token,process.env.SECRET_KEY)
    // console.log("Decode", decode)
    // next()

    if (req.headers.authorization && req.headers.authorization.startsWith('bearer'))
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.SECRET_KEY)
            req.user = await Users.findById(decode.id).select("-password")
            next();
        } catch (err) {
            res.status(401).json({error:"Not Anutharized, token failed"})
        }
    if (!token) {
        res.status(401).json({error:"Not Anutharized, no token"})
    }

})

module.exports = protect