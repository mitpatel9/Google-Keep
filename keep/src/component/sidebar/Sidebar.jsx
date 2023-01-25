import React from 'react'
import "./Sidebar.css"
import {Link} from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CreateIcon from '@mui/icons-material/Create';
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Sidebar({sidebar}) {
  return (
    <div className={sidebar ? "sidebar":"sidebaropen"}>
      <div className="sidebarwrapper">
        <div className="sidebaritem">
             <LightbulbIcon className='sidebaricon'/>
            <span className="sidebartitle"><Link className='navlink'  to='/'>Notes</Link></span>
        </div>
        <div className="sidebaritem">
             <NotificationsNoneIcon className='sidebaricon'/>
            <span className="sidebartitle"><Link className='navlink'  to='/reminder'>Reminders</Link></span>
        </div>
        <div className="sidebaritem">
             <LabelIcon className='sidebaricon'/>
            <span className="sidebartitle">Work</span>
        </div>
        <div className="sidebaritem">
             <LabelIcon className='sidebaricon'/>
            <span className="sidebartitle">Personal</span>
        </div>
        <div className="sidebaritem">
             <LabelIcon className='sidebaricon'/>
            <span className="sidebartitle">Passowrd</span>
        </div>
        <div className="sidebaritem">
             <CreateIcon className='sidebaricon'/>
            <span className="sidebartitle">Edit Lable</span>
        </div>
        <div className="sidebaritem">
             <ArchiveIcon className='sidebaricon'/>
            <span className="sidebartitle"><Link className='navlink'  to='/archive'>Archive</Link></span>
        </div>
        <div className="sidebaritem">
             <DeleteIcon className='sidebaricon'/>
            <span className="sidebartitle"><Link className='navlink'  to='/trash'>Trash</Link></span>
        </div>
      </div>
    </div>
    
  )
}
