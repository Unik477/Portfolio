export default function WorkCard(props) {
  return (
    <div className="work-card">
      <div className="work-card-info">
        <img
          src={process.env.PUBLIC_URL + `${props.image}`}
          alt="Something is wrong"
        />
        <div className="work-card-info-text">
          <h2>{props.heading}</h2>
          <p>
            {props.headingContent} 
          </p>
          <div className="work-source-button">
            <button>View More</button>
          </div>
        </div>
      </div>
      <div className="work-card-more-info"></div>
    </div>
  );
}
