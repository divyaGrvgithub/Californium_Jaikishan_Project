const { Module } = require('module');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema ( {
    firstName: String,
    lastName: String,
    mobileNumber: {
        type: String
    }, 
    DOB: {
        type: Date
    },
    emailID: {
        type: String, 
        description: 'abc@xyz.com'
    },
    address: String,
    customerID: {
        type: String,
        description: 'UUID'
    },
    status: {
        type: String,
    }
});

module.exports = mongoose.model('Customer', customerSchema);