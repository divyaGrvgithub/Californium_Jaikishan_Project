const mongoose = require ("mongoose" ) 
const cardSchema = new mongoose.Schema ({

   cardNumber : String,
   cardType  : String ,
   customerName : String,
   status : String,
   vision : String,
   customerID : String,


},  {timestamps:true})

module.exports = mongoose.model("Card" ,cardSchema )