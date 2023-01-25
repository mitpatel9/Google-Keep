import  './Addnote.css'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';

const Addnote = ({notes, id ,type}) => {
  const handeldelete= async()=>{
    try{
      await axios.delete(`http://localhost:8000/api/delete/${id}`)
    }catch(err){
      console.log(err)
    }
  }
 
  return (
    <div className='addnote'>
    {type==='notes' && <>
    <div className="topaddnote">{notes}</div>
     <div className="bttomaddnote">
       <ArchiveIcon className='iconsaddnote' />
       <DeleteIcon className='iconsaddnote'  />
     </div>
    </>}
    {type==='archive' && <>
    <div className="topaddnote">{notes}</div>
     <div className="bttomaddnote">
       <UnarchiveIcon className='iconsaddnote' />
       <DeleteIcon className='iconsaddnote' />
     </div>
    </>}
    {type==='delete' && <>
    <div className="topaddnote">{notes}</div>
     <div className="bttomaddnote">
       <UnarchiveIcon className='iconsaddnote' />
       <DeleteIcon className='iconsaddnote' onClick={handeldelete} />
     </div>
    </>}
     
    </div>
  )
}

export default Addnote
