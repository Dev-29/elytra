// models/User.js

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type : String , unique : true, required : true },
    qrToken: {  type : String },
})

module.exports = mongoose.model('User', userSchema)