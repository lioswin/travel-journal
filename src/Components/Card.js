import React from "react"
import fuji from "../resources/fuji.jpg"
function Card(){
    return(
        <div>
        <div className="">
            <img src={fuji} className="image" alt="fuji"/>
                <h4>Japan</h4>
                <a href="#" className="maps">View on Google Maps</a>
                <h1>Mount Fuji</h1>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
        <hr/>
        </div>
    )
}

export default Card;