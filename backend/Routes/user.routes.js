const express = require('express')

//user authentication middleware
const userAuth = require('../Middleware/userAuth')

// controller functions 
const { loginUser,
        signupUser,
        getAllUsers,
        getUserById,
        updateUser,
        deleteUser
     }
    = require('../Controllers/user.controller')

const router = express.Router()
// router.use(userAuth)

//Login route
router.post('/login', loginUser)

//Signup route
router.post('/signup', signupUser)

//Logout route
// router.post('/logout', logoutUser)

//Get all user route
router.get('/profile', getAllUsers)

//Get user by id route
router.get('/profile/:id', getUserById)

//Update user route
router.patch('/profile/:id', updateUser)

//Delete user route
router.delete('/profile/:id', deleteUser)



module.exports = router