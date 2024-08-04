import {  useEffect, useState } from "react";
import resume from "../Home/NIKHILResume1.pdf"
export default function About() {
  const [about, setAbout] = useState(false);
  useEffect(() => {
    if (about) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  }, [about]);
  
  function handleAbout() {
    setAbout(!about);
    // window.scrollTo({ top: 1000, behavior: 'smooth' });
  }
  return (
    <>
    <div onClick={handleAbout} className="about">
      <h1 >
        AB
        {about ? (
            <div onClick={e=>e.stopPropagation()} className="about-text">
            <p>
                Hello! I'm Nikhil,
                <br/>
              Aspiring web developer with a strong foundation in React.
              Currently pursuing my MCA, I bring
              a unique blend of skills from my background in network
              engineering, enhancing my ability to create robust and efficient
              web apps.
              <br/>
              <br/>
               Proficient in Adobe Photoshop and Illustrator, I
              leverage design principles to build visually appealing and
              user-friendly interfaces.
              <br/>
              {about && <a href={resume} target="_blank" rel="noreferrer"><button  className="resumedown">⬇️Resume</button></a>}
            </p>
            
          </div>
        ) : (
            <div className="about-circle" />
        )}
        UT
      </h1>
     
    </div>
        </>
  );
}
