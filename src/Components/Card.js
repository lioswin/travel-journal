import React from "react"
import fuji from "../resources/fuji.jpg"
function Card(){
    return(
        <div>
        <div className="">
            <img src={fuji} className="image" alt="fuji"/>
        </div>
        <hr/>
        </div>
    )
}

export default Card;