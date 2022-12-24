const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const cardSchema = new mongoose.Schema({
    cardNumber: String,
    cardType: {
        type: String
    },
    customerName: String,
    status: {
        type: String,
        default: 'Active',
        description: ' ACTIVE / INACTIVE'
    },
    vision: String,
    customerID: {
        type: ObjectId,
        ref: 'Customer'
    }
});

module.exports = mongoose.model('Card', cardSchema);