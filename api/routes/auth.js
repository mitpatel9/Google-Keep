const router = require("express").Router();
const User =require('../models/user')


router.post('/login',async (req,res)=>{
    try{
      const loginuser=await User.findOne({email:req.body.email})
      const userpass= loginuser.password === req.body.password
      if(userpass){
        res.status(201).json(loginuser);
      }
      
      
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })

module.exports=router;