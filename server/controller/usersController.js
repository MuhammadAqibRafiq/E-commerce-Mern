const Users = require('../model/userModel')
const asyncHandler = require('express-async-handler')
const generateToken = require("../utils/generateToken")
// const { findOne } = require('../model/userModel')



const regiterUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    const userExist = await Users.findOne({ email })
    if (userExist) {
        res.status(400).json({ error: 'User Already exist' })
    }else{
        const user = await Users.create({ name, email, password })
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(400).json({ error: 'User Not Found' })
        }
    }

})

const authController = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    // res.send({email,password})
    const user = await Users.findOne({ email });
    // console.log("User",user)
    if (user && (await user.matchPassword(password))) {
        
         res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({ error: 'email/password not valid' })
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    // res.send("Success")

    const user = await Users.findById(req.user._id)
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400).json({ error: 'User Not Found' })


    }
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updateUser = await user.save()
        
        res.status(201).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser._id)
        })
        console.log("update User",updateUser)

    }else{
        res.status(400).json({ error: 'update error' })

    }

})


module.exports = { authController, getUserProfile, regiterUser, updateUserProfile } 