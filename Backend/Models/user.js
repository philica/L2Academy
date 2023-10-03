const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

//user schema
const userSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: false,
      trim: true
    },
    last_name: {
      type: String,
      required: false,
      trim: true
    },
    user_name: {
      type: String,
      required: false,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: false
    },
    profile_picture: {
      type: String
    },
    contact_info: {
      type: Number,
      trim: true
    },
    social_profiles: {
      type: Object
    },
    preferences: {
      type: Object
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    is_deleted: {
      type: Boolean,
      default: false
    }
  });



//create static signup method
userSchema.statics.signup = async function (email,password) {

  //check if both the fields are filled 
  if(!email || !password) {
    throw Error('All fields must be filled')
  }

  if(!validator.isEmail(email)) {
    throw Error("Email is not valid")
  }
  
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough")
  }

  const exists = await this.findOne({email})

  if(exists){
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  //create a document
  const user = await this.create({email, password: hash})
  console.log(user)
  return user 
}

module.exports = mongoose.model('User', userSchema)