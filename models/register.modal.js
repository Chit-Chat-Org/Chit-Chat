const mongoose = require('mongoose');

const register = new mongoose.Schema({
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
        required:true
    }
})

const user = mongoose.model('register',register);

module.exports = user;