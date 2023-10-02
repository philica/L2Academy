const mongoose = require('mongoose')

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
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: false,
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


  module.exports = mongoose.model('User', userSchema)