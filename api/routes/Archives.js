const router = require("express").Router();
const Archive =require('../models/Archive')

router.post('/archive',async (req,res)=>{
    try{
      const newArchive=new Archive({
        archive:req.body.archive,
          
      })
      
      const saveArchive = await newArchive.save();
      res.status(201).json(saveArchive);
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
  router.get('/archive',async (req,res)=>{
    try{
      
      const getarchive = await Archive.find();
      res.status(201).json(getarchive);
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
 
  
  module.exports=router;