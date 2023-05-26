import React from "react"



export default function Card(props) {
    return (
        <div className="card">
            <img src={ require(`../images/${props.img}`) }  alt="fgvbh" className="card__image"/>
            {/* <img src={props.img }  alt="" className="card__image"/> */}

                <div className="card__body">
                <div className="card__stats">
                <img src={require("../images/star.png")} alt="" className="card__star"  />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} .</span>
                <span className="gray">{props.country}</span>
                 
               
                </div> 
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}