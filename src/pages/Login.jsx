import React from 'react'
import {useNavigate} from "react-router-dom";
import { TOKEN } from '../utils/AppConstrains';

 
const Login = () => {
    let navigate = useNavigate(); 
     const Loginclick=()=>{
       localStorage.setItem(TOKEN, "erefasfdasdadadsa")
       navigate("/")
     }


  return (
    <div>
        Login
      <button onClick={()=> Loginclick()}>Login</button>
    </div>
  )
}

export default Login
