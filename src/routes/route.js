const express = require ("express") 
const router = express.Router() 
const Customers = require ("../Model/customerModel")
const Cards = require ("../Model/cardModel")

// ====================================================================customer APIs

router.post("/createCustomer" , async (req,res) => {
    let  customerData = req.body
    let  customerData1 =  await Customers.create(customerData)
    res.status(200).send ({msg : customerData1})
})

router.get ("/getCustomer", async (req,res) => {
    let findCustomer = await Customers.find()
    res.status(200).send({msg : findCustomer})
})

router.delete("/deleteCustomer" , async (req,res) => {
    let accData = await Customers.findOneAndRemove({status:{$eq:"InActive"}})
    res.status(200).send({msg : accData})
})
 

 //===========================================================card APIs


router.post("/createCard", async (req,res) => {
    let cardData = req.body 
    let cardData1 = await Cards.create(cardData)
    res.status(200).send({msg : cardData1})
})

router.get ("/cardList", async (req,res) => {
    let cardData= await Cards.find () 
    res.status(200).send({msg : cardData})
})

module.exports = router;

