import React from "react"
import Navbar from "./Components/Navbar"
// import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"
export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    }) 
    return (
        <div className="main">
           <Navbar />
            {/* <Hero /> */}
            {cards}
          
        </div>

    )
}