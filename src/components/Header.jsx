import Link from 'react-router-dom'
import {Link} from "react-router-dom";
import {useNavigate} from "react";
import { TOKEN } from '../utils/AppConstrains';


const Header = () =>{
    let navigate = useNavigate();
    const logoutClick = () =>{
        localStorage.setItem(TOKEN,"")
        navigate("/")
    }
    return<div>
    <ul>
    <li>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/errorpage">Error 404</Link>
        <span onClick={()=>{logoutClick()}}>Logout</span>
    </li>
    </ul>

    </div>
    
}
export default Header;