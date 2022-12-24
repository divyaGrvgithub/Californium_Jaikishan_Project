const customerModel = require('../models/customerModel');
const cardModel = require('../models/cardModel');

const createCustomer = async function (req, res) {
    const body = req.body;
    const createdCustomer = await customerModel.create( body );
    res.send( {data: createdCustomer});
};

const getUsers = async function (req, res) {
    const allUsers = await customerModel.find();
    res.send({data: allUsers});
};

const deleteCustomer = async function (req, res) {
    const body = req.body;
    const customerDeleted = await customerModel.findOneAndDelete(body);
    res.send({data: customerDeleted});
};

const createCard = async function (req, res) {
    const body = req.body;
    const cardCreated = await cardModel.create(body);
    res.send({data: cardCreated});
};

const getCards = async function (req, res) {
    const allCards = await cardModel.find().populate('customerID');
    res.send({data: allCards});
};

module.exports.createCustomer = createCustomer;
module.exports.getUsers = getUsers;
module.exports.deleteCustomer = deleteCustomer;

module.exports.createCard = createCard;
module.exports.getCards = getCards;