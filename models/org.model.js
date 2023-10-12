const mongoose = require('mongoose');

const Organization = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register'
    },
    OrganizationName:{
        type : String,
        requireq: true
    },
    OrganizationWebsite:{
        type : String,
        requireq: true
    },
    organizationEmail:{
        type : String,
        requireq: true
    },
    OrganizationPhone:{
        type : Number,
        requireq: true
    },
    isActive: {
        type : Boolean,
        requireq: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const OrganizationModel = mongoose.model("Organization", Organization);

module.exports = OrganizationModel;