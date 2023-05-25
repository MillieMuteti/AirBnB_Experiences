import React from "react";

export default function Hero() {
    return (
        <section className="hero__section">
            <img src={require("../images/photo-grid.png")} alt="" className="hero__grid"/>
            
                <h1 className="hero__header">Online Experiences</h1>
                <p className="hero__text">Join unique interactive activities led by <br></br>one-of-a-kind hosts—all without leaving <br></br>home.</p>

            

            </section>
    )
}