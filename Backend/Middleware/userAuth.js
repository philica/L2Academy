const jwt = require('jsonwebtoken')

const userAuth = async (req, res, next) => {

    //verify authentication for all user routes
    const {authorization} = req.headers

    console.log("headers: ",req.headers)
    console.log("authorization: ",authorization)

    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]
    console.log("token: ",token)

    try {
       const {_id} = jwt.verify(token, process.env.SECRET)  
       console.log("verify: ", jwt.verify(token, process.env.SECRET))
        req.user = await User.findOne({_id}).select('id')
        next()
    } catch(error) {
        console.log(error)
        res.status(401).json({error: 'request is not authorized'})
    }
}

module.exports = userAuth