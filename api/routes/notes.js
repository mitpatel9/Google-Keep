const router = require("express").Router();
const Note =require('../models/note')

router.post('/notes',async (req,res)=>{
    try{
      const newnote=new Note({
          notes:req.body.notes,
          
      })
      
      const savenote = await newnote.save();
      res.status(201).json(savenote);
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
  router.get('/notes',async (req,res)=>{
    try{
      
      const getnote = await Note.find();
      res.status(201).json(getnote);
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
  router.delete('/notes/:id',async (req,res)=>{
    try{
      await Note.findByIdAndDelete(req.params.id);
      res.status(200).json("delete note");
  
    }catch(err){
      res.status(500).json(err);
    }
  
  })
  
  module.exports=router;