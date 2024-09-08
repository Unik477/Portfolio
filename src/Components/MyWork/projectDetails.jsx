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
  const [graphic, setGraphic] = useState(false);
  const [projectDetails, setProjectDetails]=useState(false);

  const[image, setImage]=useState("")
  const[name, setName]=useState("")
  const[about, setAbout]=useState("")
  const[sliderImages, setSliderImages]=useState("portfolio")
  const[github,setGithub]=useState("/")
  const[live,setlive]=useState(false)
  
  function handlePortfolio(){
    console.log("clicked  ")
    setWeb(false);
    setlive(true)
    setProjectDetails(true);
    setImage(projectData.portfolio.image.icon)
    setName(projectData.portfolio.name)
    setAbout(projectData.portfolio.about)
    setSliderImages("portfolio")
    setGithub(projectData.portfolio.github)
    
  }
  function  handleCarRental(){
    setWeb(false);
    setProjectDetails(true);
    setImage(projectData.ezRental.icon)
    setName(projectData.ezRental.name)
    setAbout(projectData.ezRental.about)
    setSliderImages("ezRental")
    setGithub(projectData.ezRental.github)

}

function handleSql(){
  setDatabase(false);
  setProjectDetails(true);
  setImage(projectData.sql.icon)
  setName(projectData.sql.name)
  setAbout(projectData.sql.about)
  setSliderImages("sql")
  setGithub(projectData.sql.github)
}
function handleAndroid(){
  setAndroid(false);
  setProjectDetails(true);
  setImage(projectData.farmeasy.icon)
  setName(projectData.farmeasy.name)
  setAbout(projectData.farmeasy.about)
  setSliderImages("farmeasy")
  setGithub(projectData.farmeasy.github)
}
function handleRoxstar(){
  setGraphic(false);
  setWeb(false);
  setlive(true)
  setProjectDetails(true);
  setImage(projectData.roxstar.icon)
  setName(projectData.roxstar.name)
  setAbout(projectData.roxstar.about)
  setSliderImages("roxstar")
  setGithub(projectData.roxstar.github)
}
function handleImageSearch(){
  setGraphic(false);
  setWeb(false);
  setlive(true)
  setProjectDetails(true);
  setImage(projectData.ImageSearch.icon)
  setName(projectData.ImageSearch.name)
  setAbout(projectData.ImageSearch.about)
  setSliderImages("ImageSearch")
  setGithub(projectData.ImageSearch.github)
}
  return (
    <div className="project-main">
      <div className="project-left-division">
        <ul>
          <h4>PROJECTS</h4>
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
            }}
            >
              Android Development</li>
          {/* <li onClick={() => {
            setGraphic(true)
            setProjectDetails(false)
              setAndroid(false)
              setWeb(false);
              setDatabase(false);
            }}
            >
              Graphic Designing</li> */}
        </ul>
      </div>

      <div className="project-right-division">
        {web && (
          <>

          <section onClick={handleCarRental}>

            <WorkCard
              image="/images/CarRental1.png"
              heading="Car Rental System (EZ Rentals)"
              headingContent="The Car Rental System is a modern web application developed using the MERN stack, which comprises MongoDB, Express.js, React, and Node.js. "
              />
              </section>
          <section onClick={handleRoxstar}>

            <WorkCard
              image="/images/roxstar/RoxStarGames.png"
              heading="Gaming Website"
              headingContent="The Car Rental System is a modern web application developed using the MERN stack, which comprises MongoDB, Express.js, React, and Node.js. "
              />
              </section>
          <section onClick={handleImageSearch}>

            <WorkCard
              image="/images/ImageSearch/imageSearchIcon.png"
              heading="Image Search using Usplash API"
              headingContent="This project is Image Explorer, a powerful and intuitive web application designed to search and display high-quality images from the Unsplash API."
              />
              </section>
          <section onClick={handlePortfolio}>

            <WorkCard
              image="/images/portfolioImage.png"
              heading="Portfolio Website:"
              headingContent="This project is a personal portfolio website designed to showcase my skills, experience, and certifications as a web developer. It serves as a comprehensive platform to present my professional journey, highlight my technical expertise, and share the projects I’ve passionately worked on."
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
              headingContent="The Wholesale Management System is designed to streamline and enhance the operations of wholesale businesses by efficiently managing inventory, orders, and customer relationships."
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
              headingContent="FarmEasy app is an easy, reliable way for farmers to get information about their desirable crops. Farmers or farming interested people can easily get information about the crops in a convenient manner and can get the information directly on their mobile phone whenever they want."
              />
              </section>
          </>
        )}
        {/* {graphic && (
          <>
          <section onClick={handleGraphic}>

            <WorkCard
              image="/images/kotlinImage.png"
              heading="Graphic Designing"
              headingContent="Working as a Freelance Graphic Designer, I have designed Logos, Product Mockups, Promotional Social Media content, Advertisements, Promotional Banners, etc. for some Start-ups and Businesses. "
              />
              </section>
          </>
        )} */}

        {projectDetails && <ProjectPage live={live} github={github} projectImage={sliderImages} name={name} image={image} about={about}/>}
      </div>
    </div>
  );
}
