import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { PiSneakerMoveThin } from "react-icons/pi";
import useCartStore from '../app/cartStore';
import { PiSneaker } from "react-icons/pi";
import { MdCancelPresentation } from "react-icons/md";



const Header = () => {
    const cart = useCartStore((state) => state.cart)
    const [menuOpen,setMenuOpen]=useState(false);


  return (
    <div className='header'>
      <div className="logo-container">
        <Link style={{textDecoration:'none',color:'black'}} to='/'><img src={Logo} alt="" /></Link>
      </div>
      <div className="nav-items-container">
        <div className={menuOpen?'hamburger-menu':'hamburger-menu show'} onClick={()=>{
          setMenuOpen(true);
        }}>
          <PiSneaker size={40}/>
        </div>
        <div className={menuOpen? 'close-menu show':'close-menu'} onClick={()=>{
          setMenuOpen(false);

        }}>
          <MdCancelPresentation size={40} />
        </div>

        <ul className={menuOpen?'open':''}>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/about'>About</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/contact'>Contact</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/contact'>Login</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to='/cart'><PiSneakerMoveThin size={35}/>
            <span style={{backgroundColor: "#5cbdb9", color: "white", padding:'5px 10px', borderRadius:'20px', marginLeft:'2px' ,position: "absolute"}}>{cart.length}</span>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
