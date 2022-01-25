const express = require("express");
const { authController, getUserProfile, regiterUser, updateUserProfile } = require('../controller/usersController');
const protect = require('../middlewares/authMiddleware')

const routes = express.Router();

//registration
routes.route('/').post(regiterUser);

// routes.post('/login',authController)
routes.route('/login').post(authController);

// private routes
routes.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);


module.exports = routes