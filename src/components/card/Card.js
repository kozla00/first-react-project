import React from 'react'

import "./Card.css"

const Card = () => {
  return (
    <div className='pricing'>
        <div className='recommend'><h1>Our recommendation</h1></div>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Fantom -</h3>
                    <img src="./pc4.jpg" className='img' />
                    <p className='btc'>$659</p>
                    <p>Intel i5-9700k</p>
                    <p>NVIDIA RTX 2060 Ti</p>
                    <p>Corsair 16GB DDR4 3200MHz</p>
                    <p>PowerSupply EVGA 850W</p>
                </div>
                <div className='card'>
                    <h3>- Entry -</h3>
                    <img src="./pc4.jpg" className='img' />
                    <p className='btc'>$449</p>
                    <p>Ryzen 5 5600G 3.9GHz</p>
                    <p>AMD Radeon Vega Graphics</p>
                    <p>16GB (8GB*2) DDR4 3200MHz</p>
                    <p>550W 80 Plus Power supply</p>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <img src="./pc4.jpg" className='img' />
                    <p className='btc'>$699</p>
                    <p>Intel Core i5-11400F</p>
                    <p>NVIDIA GeForce RTX 3050 8GB</p>
                    <p>8gb DDR4 3200MHz</p>
                    <p>DEEPCOOL V2 600W</p>
                </div>
                <div className='card'>
                    <h3>Sky-dream</h3>
                    <img src="./pc4.jpg" className='img' />
                    <p className='btc'>$1499</p>
                    <p>AMD Ryzen 5 5600X</p>
                    <p>NVIDIA GeForce RTX 3060</p>
                    <p>16GB ToughRam DDR4 RGB</p>
                    <p>MSI 850W - Modular</p>
                </div>
                <div className='card'>
                    <h3>Rampage</h3>
                    <img src="./pc4.jpg" className='img' />
                    <p className='btc'>$1750</p>
                    <p>AMD Ryzen 7 3700X </p>
                    <p>GeForce RTX 3060 12GB GDDR6</p>
                    <p>16GB DDR4 3200MHz</p>
                    <p> 80 Plus Gold Certified 600 W</p>
                </div>
                <div className='card'>
                    <h3>Mid-entry</h3>
                    <img src="./pc4.jpg" className='img' />
                    <p className='btc'>$499</p>
                    <p>Ryzen 5 3rd Gen 3600 (3.60GHz)</p>
                    <p>NVIDIA GeForce GTX 1650 4GB </p>
                    <p>8GB DDR4 3200MHz</p>
                    <p>700W Gold+</p>
                </div>
            </div>
        </div>
    )
}

export default Card
