const mongoose = require ("mongoose")
const customerSchema = new mongoose.Schema ( {
    
    firstName : {
        type : String,
        required : true
    },
    lastName : String,
    mobNumber : Number ,
    DOB : Date ,
    emailID : String,
    address : String,
    customerID : String,
    status :String 

} , {timestamps : true})

module.exports = mongoose.model ("Customer" ,customerSchema )



