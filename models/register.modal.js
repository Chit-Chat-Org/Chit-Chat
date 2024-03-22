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
        required: true
    },
    avatar:{
        type: String,
        default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Faui.atlassian.com%2Faui%2Flatest%2Fdocs%2Favatars.html&psig=AOvVaw0XktEIuKsy-Ho9AdmRSSRa&ust=1711219599508000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCjhfTDiIUDFQAAAAAdAAAAABAE"

    }
})

const user = mongoose.model('register',register);

module.exports = user;