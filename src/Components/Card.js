import React from "react"
import fuji from "../resources/fuji.jpg"
function Card(props){
    
    return(
        <div>
        <div className="">
            
            <img src={props.imageUrl} width="500px" className="image" alt={props.title}/>
                <h4>{props.location}</h4>
                <a href="#" className="maps">View on Google Maps</a>
                <h1>{props.title}</h1>
                <p>{props.startDate}- {props.endDate}</p>
                <p>{props.description}</p>
                
        </div>
        <hr/>
        </div>
    )
}

export default Card;