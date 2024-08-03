import { useState } from "react";
import "./projectDetails.css";
import "./projectPage.css"
import WorkCard from "./workCards";
import ProjectPage from "./projectPageComponent";
import {projectData} from "./projectData" 

export default function ProjectDetails() {
  const [web, setWeb] = useState(true);
  const [database, setDatabase] = useState(false);
  const [android, setAndroid] = useState(false);
  const [projectDetails, setProjectDetails]=useState(false);

  const[image, setImage]=useState("")
  const[name, setName]=useState("")
  const[about, setAbout]=useState("")
 
  function handlePortfolio(){
    console.log("clicked  ")
    setWeb(false);
    setProjectDetails(true);
    setImage(projectData.portfolio.image)
    setName(projectData.portfolio.name)
    setAbout(projectData.portfolio.about)
    
  }
  function  handleCarRental(){
    setWeb(false);
    setProjectDetails(true);
    setImage(projectData.ezRental.image)
    setName(projectData.ezRental.name)
    setAbout(projectData.ezRental.about)

}
function handleSql(){
  setDatabase(false);
  setProjectDetails(true);
  setImage(projectData.sql.image)
  setName(projectData.sql.name)
  setAbout(projectData.sql.about)
}
function handleAndroid(){
  setAndroid(false);
  setProjectDetails(true);
  setImage(projectData.android.image)
  setName(projectData.android.name)
  setAbout(projectData.android.about)
}
  return (
    <div className="project-main">
      <div className="project-left-division">
        <ul>
          PROJECTS
          <li
            onClick={() => {
              setProjectDetails(false)
              setWeb(true);
              setDatabase(false);
              setAndroid(false)
            }}
          >
            Web Development
          </li>
          <li
            onClick={() => {
              setProjectDetails(false)
              setDatabase(true);
              setWeb(false);
              setAndroid(false)
            }}
          >
            DBMS Project
          </li>
          <li onClick={() => {
            setProjectDetails(false)
              setAndroid(true)
              setWeb(false);
              setDatabase(false);
            }}>Android Development</li>
        </ul>
      </div>

      <div className="project-right-division">
        {web && (
          <>
          <section onClick={handlePortfolio}>

            <WorkCard
              image="/images/portfolioImage.png"
              heading="Portfolio Website:"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
            />
          </section>

          <section onClick={handleCarRental}>

            <WorkCard
              image="/images/CarRental1.png"
              heading="Car Rental System (EZ Rentals)"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
              />
              </section>
          </>
        )}

        {database && (
          <>
          <section onClick={handleSql}>

            <WorkCard
              image="/images/sqlImage.png"
              heading="SQL database  for WholeSale Management System"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
              />
              </section>
          </>
        )}

        {android && (
          <>
          <section onClick={handleAndroid}>

            <WorkCard
              image="/images/kotlinImage.png"
              heading="Plant Information Application (FarmEasy)"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
              />
              </section>
          </>
        )}

        {projectDetails && <ProjectPage name={name} image={image} about={about}/>}
      </div>
    </div>
  );
}