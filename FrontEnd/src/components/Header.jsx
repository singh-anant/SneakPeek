import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { LuShoppingBag } from "react-icons/lu";


const Header = () => {
  return (
    <div className='header'>
      <div className="logo-container">
        <Link style={{textDecoration:'none',color:'black'}} to='/'><img src={Logo} alt="" /></Link>
      </div>
      <div className="nav-items-container">
        <ul>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/about'>About</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/contact'>Contact</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/cart'>
            <LuShoppingBag size={30}/>
            </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
