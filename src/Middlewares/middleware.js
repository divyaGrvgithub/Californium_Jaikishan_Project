const custMid1 = function (req, res, next) {
    const body = req.body;
    if ( body.mobileNumber.length == 10 && body.mobileNumber == parseInt(body.mobileNumber )) {
        next();
    } else {
        res.send({Validation_Err: 'Mobile number is not valid'});
    };
};

const custMid2 = function (req, res, next) {
    const body = req.body;
    if ( body.status == 'Active' || body.status == 'Inactive' ) {
        next();
    } else {
        res.send({Validation_Err: 'Customer status is not valid'});
    };
};

const cardMid1 = function (req, res, next) {
    const body = req.body;
    if ( body.cardType == 'Regular' || body.cardType == 'Special') {
        next();
    } else {
        res.send({Validation_Err: 'Card type is not valid'});
    };
};

const cardMid2 = function (req, res, next) {
    const body = req.body;
    if ( body.status == 'Active' || body.status == 'Inactive' ) {
        next();
    } else {
        res.send({Validation_Err: 'Card status is not valid'});
    };
};

const cardMid3 = function (req, res, next) {
    const body = req.body;
    if ( body.customerID.length == 24)  {
        next();
    } else {
        res.send({Validation_Err: 'CustomerId is not valid'});
    };
};

module.exports.custMid1 = custMid1;
module.exports.custMid2 = custMid2;
module.exports.cardMid1 = cardMid1;
module.exports.cardMid2 = cardMid2;
module.exports.cardMid3 = cardMid3;