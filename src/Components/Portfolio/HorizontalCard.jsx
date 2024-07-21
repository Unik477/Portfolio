export default function HorizontalCard(props){
    return(
        <div className="horizontal-card">
            <h2>{props.profile} {props.button && <button>View</button>}</h2>
            <div className="upper-card">
                <img src={process.env.PUBLIC_URL+`${props.image}`} alt="404"/>
                <p className="upper-card-p">{props.info}</p>
            </div>

            <div className="lower-card">
                <h5><b>Duration: </b>{props.duration}</h5>
                <h5><b>Skills: </b>{props.skills}</h5>
            </div>
        </div>
    )
}



