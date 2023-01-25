const router = require("express").Router();
const Delete =require('../models/Delete')

router.post('/delete',async (req,res)=>{
    try{
      const deletenote=new Delete({
          delete:req.body.delete,
          
      })
      
      const deletesave = await deletenote.save();
      res.status(201).json(deletesave);
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
  router.get('/delete',async (req,res)=>{
    try{
      
      const getdelete = await Delete.find();
      res.status(201).json(getdelete);
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
router.delete('/delete/:id',async (req,res)=>{
    try{
      await Delete.findByIdAndDelete(req.params.id);
      res.status(200).json("delete note");
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
 
  
  module.exports=router;