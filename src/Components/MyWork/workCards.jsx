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
            {props.headingContent} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ab neque adipisci saepe, excepturi quia magnam
            veritatis deleniti quae sapiente quidem nulla! Corrupti
            reprehenderit neque sapiente porro quaerat deleniti nesciunt
            perspiciatis inventore. Dolorum neque nisi dolor!
          </p>
          <div className="work-source-button">
            <button>View Source</button>
          </div>
        </div>
      </div>
      <div className="work-card-more-info"></div>
    </div>
  );
}
