
import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from "./component/topbar/Topbar"
import Note from './pages/note/Note';
import Reminder from './pages/reminders/Reminder';
import Trash from './pages/trash/Trash';
import Archive from "./pages/archive/Archive"
import { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import Register from './pages/register/Register';
import Login from './pages/login/Login';



function App() {
  const user=localStorage.getItem("user")
  // sidebar open function
  const [side, setsidebar] = useState(true);

  const toggle = () => {
    setsidebar((prevState) => !prevState)
  }
  // sidebar close function
  return (
    <div>
      {/* <Register/> */}
      {!user ? (<Login/>):
        <>
      <Topbar opensidebar={toggle} />
      <div className='app'>
        <Sidebar sidebar={side} />
        <Routes>
        <Route eaxct path='/' element={<Note/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reminder' element={<Reminder/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/trash' element={<Trash/>}/>
        </Routes>
      </div> 
      </>
}
    
     
    </div>
  );
}

export default App;
