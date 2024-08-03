export default function ProjectPage(props) {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>{props.name}</h1>
        <button>GitHub</button>
      </div>
      <div className="project-page-image">
        <img src={process.env.PUBLIC_URL + `${props.image}`} />
      </div>
        <section className="project-page-documentation">
            <p dangerouslySetInnerHTML={{ __html: props.about }} style={{fontSize: "20px"}}></p>
        </section>

    </div>
  );
}
