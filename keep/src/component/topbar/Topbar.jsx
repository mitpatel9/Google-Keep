import React from 'react'
import "./Topbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function Topbar({opensidebar}) {
    const Logout=()=>{
        localStorage.clear();
    }
    return (
        <div className='topbar'>
            <div className="tobarcontainer">
                <div className="topbarLeft">
                    <button className='clickbutton' onClick={opensidebar}><MenuIcon className="topbarleftIcon"/></button>
                    <img src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5=w240-h480-rw" alt="" className="tobarleftimg" />
                    <span className="topbarlefttitle">Keep</span>
                </div>
                <div className="tobarcenter">
                    <div className="tobarcentercontainer">
                    <SearchIcon className='topbarcenterIcon'/>
                    <input type="text" className="tobarcenterinput" />
                    </div>
                </div>
                <div className="topbarright">
                     <RefreshIcon className='tobarrigthicon'/>
                     <LogoutIcon className='tobarrigthicon' onClick={Logout} />
                     <SettingsIcon className='tobarrigthicon'/>
                     <img src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5=w240-h480-rw" alt="" className="tobarrigthimg" />
                </div>
            </div>
        </div>
    )
}
