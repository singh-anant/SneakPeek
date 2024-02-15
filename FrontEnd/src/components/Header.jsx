import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { PiSneakerMoveThin } from "react-icons/pi";
import useCartStore from '../app/cartStore';


const Header = () => {
    const cart = useCartStore((state) => state.cart)

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
            <li><Link style={{textDecoration:'none',color:'black'}} to='/contact'>Login</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to=''><PiSneakerMoveThin size={35}/>
            <span style={{backgroundColor: "#5cbdb9", color: "white", padding:'5px 10px', borderRadius:'20px', marginLeft:'2px' ,position: "absolute"}}>{cart.length}</span>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
