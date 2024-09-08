import ProjectImgSlider from "./projectImgSlider";

export default function ProjectPage(props) {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>{props.name}</h1>

        {
        (props.live)? 
        <a href={props.github} target="_blank" rel="noreferrer">
         <button>View Live</button>
         </a>
          : 
         <a href={props.github} target="_blank" rel="noreferrer">
         <button>GitHub</button>
         </a>
         }
        
      </div>
      <div className="project-page-image">
        <ProjectImgSlider projectImage={props.projectImage} image1="/images/kotlinImage.png"/>
      </div>
        <section className="project-page-documentation">
            <p dangerouslySetInnerHTML={{ __html: props.about }} style={{fontSize: "20px"}}></p>
        </section>

    </div>
  );
}
