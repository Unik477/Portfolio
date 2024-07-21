
import homeDesign from "./homeimg2.png"
import Name from "./name"
export default function Home(){
    return(
        <div  className='home'>
            <div className="homeName" style={{width:"40%"}}>
            <Name/>
            </div>

            <div className="homeImgDiv" style={{width:"60%"}}>
                <img  className="homeImg" src= {homeDesign} alt="designer"></img>
               
            </div>
        </div>
    )
}