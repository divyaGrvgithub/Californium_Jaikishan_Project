const express = require('express');
const router = express.Router();
const mid = require('../middlewares/middleware');
const controller = require('../controllers/controller');

router.post('/create-customer', mid.custMid1, mid.custMid2, controller.createCustomer);
router.get('/get-customers', controller.getUsers);
router.delete('/delete-customer', controller.deleteCustomer);

router.post('/create-card', mid.cardMid1, mid.cardMid2, mid.cardMid3, controller.createCard);
router.get('/get-cards', controller.getCards);

module.exports = router;