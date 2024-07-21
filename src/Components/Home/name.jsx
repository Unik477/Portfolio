import TypingAnimation from "./typingAnimation";
import resume from "./NIKHILResume1.pdf"
export default function Name() {
  return (
    <>
      <h1 className="hi" style={{color:"white"}}>
        <TypingAnimation text="Hello, I'm Unik " speed={55} />
      </h1>
      
      <h2>
        <TypingAnimation text="a computer science student and an aspiring web developer " speed={100} />
      </h2>

      <div>
        <a href="https://www.linkedin.com/in/nikhil-upadhyay-a58204222/" target="_blank" rel="noreferrer">
        <button>Hire me</button>
        </a>
        <a href={resume} target="_blank" rel="noreferrer"> 
          <button  download="homeDesign">Download CV</button>
          </a>
       
      </div>
    </>
  );
}
