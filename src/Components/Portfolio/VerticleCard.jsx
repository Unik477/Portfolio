export default function VerticleCard({ heading, info, image }) {
    return (
      <div className="card">
        <div className="cardinner">
           <img src={process.env.PUBLIC_URL+`${image}`} alt="dev" />
        <div className="cardtext">

          <h3>{heading}</h3>
          <CardList info={info} />
        </div>
        </div>
      </div>
    );
  }
  
  function CardList(info) {
    const items = Object.values(info);
    const listItems = items[0].map((item) => <li  key={item}> {item}</li>);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  