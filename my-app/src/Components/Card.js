import React from "react"


export default function Card(props) {
         return (
        
      
        <div className="card">
            <div>Sold Out</div>
            
            <img src={ require(`../images/${props.img}`) }  alt="" className="card__image"/>
            {/* <img src={props.img }  alt="" className="card__image"/> */}

                <div className="card__body">
                <div className="card__stats">
                <img src={require("../images/star.png")} alt="" className="card__star"  />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} .</span>
                <span className="gray">{props.location}</span>
                 
               
                </div> 
                <p className="card--title">{props.title}</p>
                <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}