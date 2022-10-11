import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {ImReddit} from "react-icons/im"

import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-media-icon'>
            <FaFacebookF className='icon' />
            <BsInstagram className='icon' />
            <BsTwitter className='icon' />
            <ImReddit className='icon' />
        </div>
        <div className='container'>
            <div className='col'>
                <h3>Contact</h3>
                <p>Location: Swazibin</p>
                <p>Address: South Gate, 592 Kazlaw street</p>
                <p>Phone number: +932 930 3920</p>          
            </div>
            <div className='col'>
                <p>
                <h3>About</h3>
                Small company, based in Central Europe.<br></br>
                Number "1" for selling "Gaming computers"
                </p> 
            </div>
            <div className='col'>          
                <h3>Our Products</h3>
                <p>Gaming computers</p>
                <p>Monitors</p>
                <p>Gaming peripherals</p>
            </div>
        </div>    
    </div>
  )
}

export default Footer

