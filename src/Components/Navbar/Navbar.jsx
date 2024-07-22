import avatar from "./avatar.png"

export default function Navbar(){

return(
    <div className="navbar">
        <div className="unik">
        <h4 >Nikhil Upadhyay</h4>
        <img className="avatar" src={avatar} alt="avatar"/>
        </div>

        <div className="nav-links">
       <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Send a Message</a></li>
            {/* <li><a href="/">Know me More</a></li> */}
        </ul>
        </div>
    </div>
)
}