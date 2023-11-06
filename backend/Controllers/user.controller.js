const User = require('../Models/user')
const jwt = require('jsonwebtoken')


//create token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '7d'})
}

//Login user
const loginUser = async (req, res) =>{
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create token 
        const token = createToken(user.id)
        res.status(200).json({email, token})

    } catch(error) {
        res.status(400).json({error : error.message})
    }
}


//signup user
const signupUser = async (req, res) =>{

    const userdata = req.body

    try {
        const user = await User.signup(userdata)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email,token})
    }catch (error) {
        res.status(400).json({error: error.message})
    }

}

//get all users data

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        res.status(200).json(users)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// get user by id
const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        console.log(user)
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//update user data
const updateUser = async (req, res) => {
    try{
        const userId = req.params.id
        const updateData = req.body
        const updateUser = await User.findByIdAndUpdate(userId, updateData, {new: true})
        res.status(200).json(updateUser)
        
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete user data
const deleteUser = async (req, res) => {
    try{
        const userId = req.params.id
        const deleteUser = await User.findByIdAndDelete(userId)
        res.status(200).json(deleteUser)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = {
    loginUser,
    signupUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}