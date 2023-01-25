import { useRef } from 'react'
import axios from 'axios';
import './Login.css'

const Login = () => {
  const emailRef=useRef();
  const passwordRef=useRef();

  const handalelogin=async(e)=>{
    e.preventDefault();
    const loginuser={
      email:emailRef.current.value,
      password:passwordRef.current.value,
    }
    try{
        await axios.post("http://localhost:8000/api/login",loginuser)
        .then((res)=>localStorage.setItem("user",JSON.stringify(res.data)))
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='login'>
        <div className="logincontainer">
          <img src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5=w240-h480-rw" alt="" />
          <form className='loginform'>
            <input type="email" ref={emailRef} className='logininput' placeholder='Enter Your Email'/>
            <input type="password" ref={passwordRef} className='logininput' placeholder='********'/>
            <input type="submit" onClick={handalelogin} value="Log In" className='loginsubmit'/>
          </form>
        </div>
    </div>
  )
}

export default Login
