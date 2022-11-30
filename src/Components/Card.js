import React from "react"
import fuji from "../resources/fuji.jpg"
function Card(props){
    console.log(props);
    return(
        <div>
        <div className="">
            
            <img src={props.item.imageUrl} className="image" alt={props.item.title}/>
                <h4>{props.location}</h4>
                <a href="#" className="maps">View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <p>{props.startDate}- {props.endDate}</p>
                <p>{props.item.description}</p>
                
        </div>
        <hr/>
        </div>
    )
}

export default Card;