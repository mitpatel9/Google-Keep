const router = require("express").Router();
const User =require("../models/user")

router.post('/user',async (req,res)=>{
  try{
    const newuser=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    
    const saveuser = await newuser.save();
    res.status(201).json(saveuser);

  }catch(err){
    res.status(500).json(err);
  }

})

module.exports=router;