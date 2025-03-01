const mongoose = require('mongoose');

const register = new mongoose.Schema({
    _id: { type: String, required: true },
    UserName:{
        type:String,
        required:true,
        unique : true
    },
    UserEmail:{
        type:String,
        required:true,
        unique : true
    },
    Password:{
        type:String,
        required:false
    }
})

const user = mongoose.model('register',register);

module.exports = user;