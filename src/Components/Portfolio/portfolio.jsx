import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticleCard from "./VerticleCard";
import Slider from "react-slick";
import HorizontalCard from "./HorizontalCard";
import TypingAnimation from "../Home/typingAnimation";

export default function Portfolio() {
  var settings = {
    dots: true,
    infinite: true,
    draggable: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [portfolioActive, setPortfolioActive] = useState(false);
  const [skills, setSkills] = useState(false);
  const [certifications, setCertifications] = useState(false);
  const [experience, setExperience] = useState(false);

  useEffect(() => {
    if (portfolioActive) {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
    if (skills) {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
    if (certifications) {
      window.scrollTo({ top: 800, behavior: "smooth" });
    }
    if (experience) {
      window.scrollTo({ top: 800, behavior: "smooth" });
    }
  }, [portfolioActive, skills, certifications, experience]);

  function handleClickState() {
    setPortfolioActive(!portfolioActive);
    if(certifications===true ) setCertifications(!certifications);
    if( experience===true) setExperience(!experience);
    if(skills===true)setSkills(!skills);
  }

  const handleSkills = (e) => {
    setSkills(!skills);
    if(certifications===true ) setCertifications(!certifications);
    if( experience===true) setExperience(!experience);
  };
  const handleCertifications = (e) => {
    setCertifications(!certifications);
    if( experience===true) setExperience(!experience);
    if(skills===true)setSkills(!skills);
  };

  const handleExperience = (e) => {
    setExperience(!experience);
    if(certifications===true ) setCertifications(!certifications);
    if(skills===true)setSkills(!skills);
  };

  return (
    <>
      <div className="portfolio" onClick={handleClickState}>
        <div className="portfolio-text">
          <h1>
            PORTF
            {!portfolioActive ? (
              <div className="portfolio-circle" />
            ) : (
              <b>
                <TypingAnimation text={"Welcome ◔◡◔"} speed={150} />
              </b>
            )}
            LIO
          </h1>
        </div>
      </div>

      {portfolioActive && (
        <div className="portfolio-contents-horizontal">
          <h2 className="h2" onClick={handleExperience}>
            ● EXPERIENCE
          </h2>
          {experience && (
            <div className="portfolio-cards">
              <HorizontalCard
                image="/images/techM.png"
                profile="Network Engineer"
                info="Worked as a network engineer for NETGEAR at Tech-Mahindra."
                duration="Aug' 2022 - Jan' 2023"
                skills="Network Configuration, Netwrok management, Network Protocols"
              />
              <HorizontalCard
                image="/images/freelance.png"
                profile="Graphic Designer (Freelance)"
                info="Working as a Freelance Graphic Designer.I design Logos and Promotional Brand designs."
                duration="2020 - Present"
                skills="Photoshop, Illustrator, Luminar Ai, Coral Draw"
              />
              {/* <HorizontalCard
                image="/images/digipodium.png"
                profile="Android App Dev (Internship)"
                info="Worked with Digipodium as an intern.Learned App Dev using kotlin and Android Studio."
                duration="Aug' 2021 - Oct' 2021"
                skills="Kotlin, Android Studio, Firebase, Android Emulator"
              /> */}
            </div>
          )}
        </div>
      )}

      {portfolioActive && (
        <div className="portfolio-items">
          <div className="portfolio-contents">
            <h2 className="h2" onClick={handleSkills}>
              ● SKILLS
            </h2>
            {skills && (
              <div className="portfolio-cards">
                <VerticleCard
                  image={"/images/development_icon.png"}
                  heading={"Web Development"}
                  info={["HTML", "CSS", "JavaScript", "React", "MongoDb", "GitHub","Bootstrap CSS"]}
                />
                <VerticleCard
                  image={"/images/programming_icon.png"}
                  heading={"Programming Languages"}
                  info={["Java", "Python", "C++", "C", "SQL"]}
                />
                <VerticleCard
                  image={"/images/illustration.png"}
                  heading={"OS & Networking"}
                  info={[
                    "Network Protocols",
                    "Network Configuration and Management",
                    "Virtual machine setup and management (VMware)",
                    "Linux/Unix OS",
                  ]}
                />
                <VerticleCard
                  image={"/images/design_icon.png"}
                  heading={"Design (UI/UX)"}
                  info={["AbodeXD", "Photoshop", "Illustrator"]}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {portfolioActive && (
        <div className="portfolio-contents-horizontal">
          <h2 className="h2" onClick={handleCertifications}>
            ● CERTIFICATIONS
          </h2>
          {certifications && (
            <div>
              <Slider className="portfolio-cards-slider" {...settings}>
                <HorizontalCard
                  image="/images/GoogleBusiness.png"
                  profile="Google My Business"
                  info="Earned an Achievement to create listings that will stand out when customers search online."
                  duration="December 22, 2021"
                  skills="Local SEO, Creating & optimizing Business profiles, Analyze insights"
                  button="true"
                  link="https://drive.google.com/file/d/17cNyim7dTrPzNEUa3sfaZQiniivZQPRe/view?usp=drive_link"
                />
                <HorizontalCard
                  image="/images/Accenture.png"
                  profile="Data Analytics"
                  info="Completed a simulation focused on advising a social media client as a Data Analyst at Accenture"
                  duration="July 6, 2024"
                  skills="Data Modelling & Analytics, MS Excel"
                  button="true"
                  link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_oiXYSo6HnxCF27yhn_1721242384630_completion_certificate.pdf"
                />
                <HorizontalCard
                  image="/images/Accenture.png"
                  profile="Strategy Consulting"
                  info="Certification in Strategy Consulting Job Simulation"
                  duration="July 6, 2024"
                  skills="Photoshop, Illustrator, Luminar Ai, Coral Draw"
                  button="true"
                  link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/rMSFymzsPCwMGRun8_Accenture%20North%20America_oiXYSo6HnxCF27yhn_1720257018908_completion_certificate.pdf"
                />
                <HorizontalCard
                  image="/images/digipodium.png"
                  profile="Android App Dev"
                  info="Earned a Certificate for App Development.Learned App Dev using kotlin and Android Studio."
                  duration="Aug' 2021 - Oct' 2021"
                  skills="Kotlin, Android Studio, Firebase, Android Emulator"
                  button="true"
                  link="https://drive.google.com/file/d/1zIF5HOY9h0oOkcU4nKNrpNUai7uKQxBK/view?usp=drive_link"
                />
              </Slider>
            </div>
          )}
        </div>
      )}
    </>
  );
}
