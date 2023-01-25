import { useRef } from "react";
import axios from "axios";
import "./Register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const nameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();
  const handelregister = async (e) => {
    e.preventDefault();
    const newReg={
        username:nameref.current.value,
        email:emailref.current.value,
        password:passwordref.current.value,
    }
    
    try{
        await axios.post('http://localhost:8000/api/user',newReg)

    }catch(err){
        console.log(err)
    }
  };
 
  return (
    <div className="register">
      <img
        src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5=w240-h480-rw"
        alt=""
      />
    <from className="registerform"  >
        <input
          type="text"
          ref={nameref}
          className="registerinput"
          placeholder="Enter Your Username"
        />
        <input
          type="email"
          ref={emailref}
          className="registerinput"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          ref={passwordref}
          className="registerinput"
          placeholder="********"
        />
        <input type="submit" value="Register" className="registersubmit" onClick={handelregister}/>
      </from>
      <div className="loginbutton">
        <span>You are register All Ready click Login Button</span>
        <NavLink to="/"><button className="loginbtn">Login</button></NavLink>
      </div>
    </div>
  );
};

export default Register;
