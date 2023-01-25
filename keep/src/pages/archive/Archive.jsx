import React from 'react'
import "./Archive.css"
import  { useState, useEffect } from 'react'
import axios from 'axios'
import Addnote from '../../component/addnote/Addnote'

export default function Archive() {
  const[archives,setarchives]=useState([]);
    useEffect(()=>{
        const getarchives=async() =>{
          try{
            await axios.get(`http://localhost:8000/api/archive`)
              .then((res) => setarchives(res.data))
              
          }catch(err){
            console.log(err)
          }
        }
        getarchives();
      },[archives])
  return (
    <div className='archive'>
      <h1 className="archivetitle">Archive</h1>
      
      <div className="notebottom">
            {archives.map((item=>(<Addnote notes={item.archive} id={item._id} type={'archive'}/>)))}      
      </div>
    </div>
  )
}
