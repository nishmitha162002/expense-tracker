const express =require('express');
const {addTransection, getAllTransection,editTransection,deleteTransection } = require('../controllers/transectionCtrl');


//router object
const router=express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);
//edit transection POST MEthod
router.post("/edit-transection", editTransection);
//add transection POST MEthod
router.post("/delete-transection", deleteTransection);

//get transactions
router.post('/get-transection', getAllTransection);

module.exports=router;