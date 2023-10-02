const User = require('../Models/user')


//Login user
const loginUser = async (req, res) =>{
    res.json({message : 'Login user'})
}


//signup user
const signupUser = async (req, res) =>{
    res.json({message : 'Signup user'})
}

module.exports = {loginUser,signupUser}