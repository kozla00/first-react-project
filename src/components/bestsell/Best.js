import React from 'react'

import Pc1 from "../../assets/pc1.jpg"


import "./Best.css"

const Best = () => {
  return (
    <div className="best">
        <h1>Best Selling Gaming PC-s </h1>
        <div className='container'>
            <img src={Pc1} alt="" />
            <img src={Pc1} alt="" />
        </div>
    </div>
  )
}

export default Best
