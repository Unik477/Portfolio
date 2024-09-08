import { NavLink } from "react-router-dom"
import avatar from "./avatar.png"
import { useNavigate } from "react-router"
export default function Navbar(){
const navigate=useNavigate()
return(
    <div className="navbar">
        <div className="unik" onClick={()=>navigate("/")}>
        <h4 >Nikhil Upadhyay</h4>
        <img className="avatar" src={avatar} alt="avatar"/>
        </div>

        <div className="nav-links">
       <ul>
            {/* <li><a onClick={()=>navigate("/")}>Home</a></li> */}
            <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/mywork">Projects</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/message">Message</NavLink></li>
        </ul>
        </div>
    </div>
)
}