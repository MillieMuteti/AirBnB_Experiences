import React from "react"



export default function Card() {
    return (
        <section>
            <img src={require("../images/katie-zaferes.png")} alt="" />
            <div className="card__body">
                <span>
                <img src={require("../images/star.png")} alt="" />
                5.0 (6) .USA
                </span> 
                <p>Life lessons with Katie Zaferes</p>
                <p>From $136 / person</p>
            </div>
        </section>
    )
}