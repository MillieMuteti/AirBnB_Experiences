import React from "react"
import Navbar from "./Components/Navbar"
// import Hero from "./Components/Hero"
import Card from "./Components/Card"

export default function App() {
    return (
        <div className="main">
           <Navbar />
            {/* <Hero /> */}
            <Card 
            img="(../images/katie-zaferes.png)"
            rating={5.0}
            reviewCount="(6)"
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
            />
        </div>

    )
}