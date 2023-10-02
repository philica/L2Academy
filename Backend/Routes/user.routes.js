const express = require('express')

// controller functions 
const {loginUser,signupUser} = require('../Controllers/user.controller')

const router = express.Router()

//Login route
router.post('/login',loginUser)

//Signup route
router.post('/signup',signupUser)



module.exports = router