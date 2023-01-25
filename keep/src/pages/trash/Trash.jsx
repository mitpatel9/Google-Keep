import React from 'react'
import "./Trash.css"
import  { useState, useEffect } from 'react'
import axios from 'axios'
import Addnote from '../../component/addnote/Addnote'

export default function Trash() {
  const[deletes,setdeletes]=useState([]);
  useEffect(()=>{
      const getDelete=async() =>{
        try{
          await axios.get(`http://localhost:8000/api/delete`)
            .then((res) => setdeletes(res.data))
            
        }catch(err){
          console.log(err)
        }
      }
      getDelete();
    },[deletes])
  return (
    <div className='trash'>
      <h1 className="deletetitle">trash</h1>
      
      <div className="notebottom">
            {deletes.map((item=>(<Addnote notes={item.delete} id={item._id} type={'delete'}/>)))}      
      </div>

    </div>
  )
}
