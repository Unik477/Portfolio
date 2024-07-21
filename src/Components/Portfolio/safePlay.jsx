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



/* horizontal-card starts */
// .horizontal-card{
//     background-color: #2e384d;
//     transition: all 2000ms ease;
//     display: inline-block;
//     align-items: center;
//     justify-content: center;
//     /* text-align: center; */
//     height: 280px;
//     width: 350px;
//     padding:  10px 25px;
//     border: 2px solid #2e384d ;
//     margin: 10px;
//    border-radius: 5px;
//    animation: enter 500ms ease-in;
  
//   }
  
//   .horizontal-card:hover{
//     transition: none !important;
//     border: 2px solid #1e8fffba;
//   }
  
//   .upper-card{
//     display: flex;
//     justify-content: center;
//     align-items:self-start;
    
//   }
//   .upper-card img{
//     height: 75px;
//       width: 107px;
//     padding: 5px;
//   }
  
//   .upper-card-p{
//     font-size: 16px;
//     padding: 5px;
//     margin: 0px;
//   }
  
//   .lower-card{
//     font-size: 20px;
//   }
//   .lower-card b{
//     font-size: 20px;
//   }
//   .lower-card h5{
//     margin: 10px;
//   }
  /* horizontal-card ends */