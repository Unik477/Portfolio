import React from "react";
import Slider from "react-slick";
import { projectData } from "./projectData";
export default function ProjectImgSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    draggable: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      
    ]
  };
  const projectName= props.projectImage;
  const images = Object.values(projectData[projectName].image); //note this 
  return (
    <Slider className="project-image-slider" {...settings}>
     
      {images.map((image,index) =>
        <div className="project-image-slider-slide" key={index}>
        <img  src={process.env.PUBLIC_URL + `${image}`} alt="something's wrong" />
        </div>
    
    )}
      
    </Slider>
  );
}

