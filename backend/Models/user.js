const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

//user schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'instructor', 'administrator'],
    required: true
  },
  profile_picture: {
    type: String
  },
  phone_number: {
    type: String
  },
  social_profiles: {
    type: [
      {
        platform: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        }
      }
    ]
  },
  is_deleted: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});



//create static signup method
userSchema.statics.signup = async function (user) {
  console.log(user)
  //check if both the fields are filled 
  if(!user.email || !user.password) {
    throw Error('All fields must be filled')
  }

  if(!validator.isEmail(user.email)) {
    throw Error("Email is not valid")
  }
  
  if (!validator.isStrongPassword(user.password)) {
    throw Error("Password is not strong enough")
  }

  const email = user.email
  const exists = await this.findOne({email})

  if(exists){
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(user.password, salt)
  user.password = hash
  //create a document
  const User = await this.create(user)
  console.log(User)
  return User 
}


//create a static login method 
userSchema.statics.login = async function(email, password) {
  if(!email || !password) {
    throw Error("All fields must be filled")
  }

  const user = await this.findOne({email})

  if(!user) {
    throw Error("User doesn't exist")
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match) {
    throw Error("Incorrect password")
  }

  return user
}

module.exports = mongoose.model('User', userSchema)