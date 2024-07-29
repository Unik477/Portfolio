import { useState } from "react";
import WorkCard from "./workCards";



export default function WorkList() {

  const[webShow, setWebShow]=useState(false)
  const[designShow, setDesignShow]=useState(false)
  return (
    <div className="work-list">
      {/* web dev section */}
      <div className="work-section">
      <h1 onClick={()=>{setWebShow(!webShow)}}>● Web Development Projects</h1>
      {webShow && <section>
        
      <WorkCard
        image="/images/portfolioImage.png"
        heading="How I Built My Portfolio Website:"
        headingContent="Detailed explanation of the process, technologies used, and challenges faced."
      />
      <WorkCard
        image="/images/CarRental.png"
        heading="How I Built My Portfolio Website:"
        headingContent="Detailed explanation of the process, technologies used, and challenges faced."
      />
      <WorkCard
        image="/images/portfolioImage.png"
        heading="How I Built My Portfolio Website:"
        headingContent="Detailed explanation of the process, technologies used, and challenges faced."
      />
        </section>}
      </div>
        
      <div className="work-section">
      <h1 onClick={()=>setDesignShow(!designShow)}>● Graphic Design</h1>
      {designShow && <section>
        
      <WorkCard
        image="/images/portfolioImage.png"
        heading="How I Built My Portfolio Website:"
        headingContent="Detailed explanation of the process, technologies used, and challenges faced."
      />
     
        </section>}
      </div>
    </div>
  );
}
