import React from "react"



export default function Card() {
    return (
        <div className="card">
            <img src={require("../images/katie-zaferes.png")} alt="" className="card__image" />
            <div className="card__body">
                <div className="card__stats">
                <img src={require("../images/star.png")} alt="" className="card__star"  />
                <span>5.0 </span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
                 
               
                </div> 
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
    )
}