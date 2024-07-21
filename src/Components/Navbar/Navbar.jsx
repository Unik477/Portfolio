import avatar from "./avatar.png"

export default function Navbar(){

return(
    <div className="navbar">
        <div className="unik">
        <h4 >Nikhil Upadhyay</h4>
        <img className="avatar" src={avatar} alt="avatar"/>
        </div>
        
       <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Connect</a></li>
            <li><a href="/">Know me More</a></li>
        </ul>
    </div>
)
}