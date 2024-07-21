import TypingAnimation from "../Home/typingAnimation";
import linkedin from "./linkedin.png"
import insta from "./insta.png"

import { useEffect, useState } from "react";

export default function Footer() {
    const [state,setState]=useState(false)
    useEffect(() => {
      if (state) {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
    }, [state]);
    function handleClickState(){
        setState(!state)
        // window.scrollTo({ top: 800, behavior: 'smooth' });
    }
  return (
    <div className="footer">
      <div className="footertop" onClick={handleClickState} >
        <h1>C{!state? <div className="contact-circle" /> : <b><TypingAnimation text={ "Connect with me?"} speed={150} /></b>}NTACT</h1>
      </div>
      {state && <div className="email" style={{  transition: "right 1000ms ease-in-out" }}>
        <h5>Contact me at <a href="mailto:nikhilupadhyay477@gmail.com" >nikhilupadhyay477@gmail.com</a>, or hit me up on LinkedIn.</h5>
      <div className="footerlink">
        <a  href="https://www.linkedin.com/in/nikhil-upadhyay-a58204222/" target="_blank" rel="noreferrer"><img className="linkedin" src={linkedin} alt="LinkedIn"/></a>
       <a href="https://www.instagram.com/unik.i0?igsh=MWZmdzZpYWg4aWI4" target="_blank" rel="noreferrer"><img  className="insta" src={insta} alt="Instagram"/></a> 
      </div>
      </div>}
      
    </div>
  );
}
