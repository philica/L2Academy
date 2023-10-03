const express = require('express')

//user authentication middleware
const userAuth = require('../Middleware/userAuth')

// controller functions 
const {loginUser,signupUser} = require('../Controllers/user.controller')

const router = express.Router()
router.use(userAuth)

//Login route
router.post('/login',loginUser)

//Signup route
router.post('/signup',signupUser)



module.exports = router