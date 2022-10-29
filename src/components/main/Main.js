import React from 'react'
import {BiSearchAlt} from "react-icons/bi"

import "./Main.css"

const Main = () => {
  return (
    <div className="main">
        <div className="content">
            <h1>Find the best gaming setup for you</h1>          
            <p className="search-text">Search and buy your gaming computer, on the best online platform.</p>
                <div className="search">
                    <div>
                        <input type="text" placeholder="Search for your gaming PC..." />
                    </div>
                    <div className="search">
                        <button type="submit"><BiSearchAlt /></button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Main
