import React from 'react'
import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className='header'>
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-items-container">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
