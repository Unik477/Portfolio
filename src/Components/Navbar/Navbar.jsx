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
            <li><a onClick={()=>navigate("/mywork")}>My Work</a></li>
            <li><a onClick={()=>navigate("/message")}>Send a Message</a></li>
        </ul>
        </div>
    </div>
)
}