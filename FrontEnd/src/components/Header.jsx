import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-items-container">
        <ul>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/about'>About</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/contact'>Contact</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/cart'>Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
