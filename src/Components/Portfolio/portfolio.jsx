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
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6500,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
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
    if (certifications === true) setCertifications(!certifications);
    if (experience === true) setExperience(!experience);
    if (skills === true) setSkills(!skills);
  }

  const handleSkills = (e) => {
    setSkills(!skills);
    if (certifications === true) setCertifications(!certifications);
    if (experience === true) setExperience(!experience);
  };
  const handleCertifications = (e) => {
    setCertifications(!certifications);
    if (experience === true) setExperience(!experience);
    if (skills === true) setSkills(!skills);
  };

  const handleExperience = (e) => {
    setExperience(!experience);
    if (certifications === true) setCertifications(!certifications);
    if (skills === true) setSkills(!skills);
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
                image="/images/twinspark.png"
                profile="Web Developer"
                info="Working as an Intern Web Developer at TwinSpark Technology."
                duration="May 2025 - Present"
                skills="Full Stack Web Development, HTML, CSS, JavaScript, Bootstrap, PHP, Github"
              />
                <HorizontalCard
                  image="/images/freelance.png"
                  profile="Graphic Designer (Freelancer)"
                  info="I design Logos and Promotional Brand designs."
                  duration="2020 - Present"
                  skills="Photoshop, Illustrator, Coral Draw"
                />
              <HorizontalCard
                image="/images/techM.png"
                profile="Network Technical Support"
                info="Worked as a Technical Support Associate for NETGEAR at Tech-Mahindra."
                duration="Aug' 2022 - Jan' 2023"
                skills="Network Configuration, Netwrok management, Network Protocols"
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
                  info={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React.JS",
                    "Node.JS",
                    "Spring Boot",
                    "GitHub"
                  ]}
                />
                <VerticleCard
                  image={"/images/programming_icon.png"}
                  heading={"Programming Languages"}
                  info={["Java", "Python", "C++", "C", "SQL"]}
                />
                <VerticleCard
                  image={"/images/Cloud.png"}
                  heading={"Cloud & Networking"}
                  info={[
                    "Network Protocols",
                    "AWS Cloud Compute Services",
                    "configuring and managing network devices like routers, switches, firewalls, and A.P.",
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
                  image="/images/AWS.png"
                  profile="AWS Cloud"
                  info="Earned for completing AWS Cloud Technical Essentials Course by AWS on Coursera."
                  duration="January 31, 2025"
                  skills=" AWS IAM, EC2, Lambda, ECS, AWS VPC, Amazon RDS,DynamoDB, S3."
                  button="true"
                  link="https://www.coursera.org/account/accomplishments/verify/50UYPH0WNA9S"
                />
                <HorizontalCard
                  image="/images/js.png"
                  profile="JavaScript"
                  info="Earned for completing Javascript Course on Udemy."
                  duration="Feb' 2025 - March 2025"
                  skills="ES6, Asynchronous JavaScript, Advanced JS concepts."
                  button="true"
                  link="https://drive.google.com/file/d/1tgXFQyor1Ewy1lt1NKME4uhYU4PbGUfm/view?usp=sharing"
                />
                <HorizontalCard
                  image="/images/samsung.png"
                  profile="Coding & Programming"
                  info="Earned for completing C&P Course by SAMSUNG INNOVATION CAMPUS."
                  duration="Aug' 2024 - Sep' 2024"
                  skills="Python, JupyterNotebook, Data Analysis"
                  button="true"
                  link="https://drive.google.com/file/d/1vdUR_eE4jo8jIP3ppynfRd_kyF5RbL-A/view?usp=sharing"
                />
                <HorizontalCard
                  image="/images/SQL.png"
                  profile="SQL"
                  info="Earned for completing 15 Days of SQL course on Udemy."
                  duration="16 June 2025"
                  skills="PostgreSQL, Relational Database Management "
                  button="true"
                  link="https://drive.google.com/file/d/1SoyyfSjMzK8N4FNdC9h1FIZ74T67eByW/view?usp=sharing"
                />
                <HorizontalCard
                  image="/images/udemy.jpg"
                  profile="Git & Github Basics"
                  info="Earned for completing Basic Git and Github-Essentials course on Udemy."
                  duration="13 Feb 2025"
                  skills="Git, Github "
                  button="true"
                  link="https://www.udemy.com/certificate/UC-52ff1d7e-c4c5-4aa3-80cb-d4a62faa82de/"
                />
                <HorizontalCard
                  image="/images/udemy.jpg"
                  profile="DevOps, CI/CD Basics"
                  info="Earned for completing DevOps, CI/CD Basics course on Udemy."
                  duration="14 Feb 2025"
                  skills="CI/CD pipelines, devOps"
                  button="true"
                  link="https://www.udemy.com/certificate/UC-13192898-ca56-41ac-9196-4d6edcbc93ce/"
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
                  image="/images/GL_JAVA.png"
                  profile="Java Programming"
                  info="Earned for completing Java Programming online course by GREAT LEARNING"
                  duration="December, 2021"
                  skills="Core Java, Basic Java Programming"
                  button="true"
                  link="https://drive.google.com/file/d/1ywQJ1wmvdIGK1NYegjrgYhkIEK2s7biO/view?usp=sharing"
                />
                <HorizontalCard
                  image="/images/GoogleBusiness.png"
                  profile="Google My Business"
                  info="Earned an Achievement to create listings that will stand out when customers search online."
                  duration="December 22, 2021"
                  skills="Local SEO, Creating & optimizing Business profiles, Analyze insights"
                  button="true"
                  link="https://drive.google.com/file/d/17cNyim7dTrPzNEUa3sfaZQiniivZQPRe/view?usp=drive_link"
                />
                {/* <HorizontalCard
                  image="/images/Accenture.png"
                  profile="Strategy Consulting"
                  info="Certification in Strategy Consulting Job Simulation"
                  duration="July 6, 2024"
                  skills="Photoshop, Illustrator, Luminar Ai, Coral Draw"
                  button="true"
                  link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/rMSFymzsPCwMGRun8_Accenture%20North%20America_oiXYSo6HnxCF27yhn_1720257018908_completion_certificate.pdf"
                /> */}
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
