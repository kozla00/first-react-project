import React, {useState}  from 'react'
import {HiOutlineMenuAlt1} from "react-icons/hi"
import {BiExit} from "react-icons/bi"
import {BsShieldShaded} from "react-icons/bs"

import './Navbar.css'


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className="navbar">
        <div className='container'>
            <h1><span> <BsShieldShaded className="logo" />IT Shield</span></h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Weekly Special</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="menu" onClick={handleClick}>
                {click ? (<BiExit className="icon1" />) : (<HiOutlineMenuAlt1 className="icon" />)}
                
            </div>
        </div>    
    </div>
  )
}

export default Navbar
