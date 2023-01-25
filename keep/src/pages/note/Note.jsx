/*eslint-disable */
import { useRef } from 'react';
import  { useState, useEffect } from 'react'
import axios from 'axios'
import Addnote from '../../component/addnote/Addnote'
import "./Note.css"

export default function Note() {
    const[notes,setNotes]=useState([]);
    const nameref=useRef();
    useEffect(()=>{
        const getnotes=async() =>{
          try{
            await axios.get(`http://localhost:8000/api/notes`)
              .then((res) => setNotes(res.data))
              
          }catch(err){
            console.log(err)
          }
        }
        getnotes();
      },[notes])
      
      const handlesubmit= async(e)=>{
        e.preventDefault();
        const note={notes:nameref.current.value}
        try{
          await axios.post(`http://localhost:8000/api/notes`,note)
        }catch(err){
          console.log(err)
        }
      }
    return (
        <div className="note">
            <h1 className="notetitle">Notes</h1>
            <div className="notetop">
            <form className='formnote' onSubmit={handlesubmit}>
            <input type="text" placeholder='add Notes' className='noteinput' ref={nameref}  />
            <input type="submit" value="Add Note" className='notebutton'/>
            </form>
            </div>
            <div className="notebottom">
            {notes.map((item=>(<Addnote notes={item.notes} id={item._id} type={'notes'}/>)))}      
            </div>
        </div>
    )
}
