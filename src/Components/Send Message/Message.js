import Footer from "../Footer/footer"
import { useState } from "react"

export default function Message(){
    
    const[message, setMessage]=useState("")

function handleClick(){
    alert("Message Sent!")
}

function handleChange(e){
    setMessage(e.target.value)
    e.preventDefault();
}


    return(
        <>
        <div className="outer-message">
            <div className="send-message">
            <form>
                <h1>Send me a message personally</h1>
               
                <input type="email" placeholder="Your Email here" value={message} onChange={handleChange}/> 
                
                <input type="text" disabled={message===""} placeholder="How can i Help?"/>
                <button onClick={handleClick}>Send</button>
            
            </form>
            </div>

            <h2>or</h2>
        </div>

        <Footer/>

        </>
    )
}