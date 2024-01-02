import React from 'react'
import '../styles/Header.css'
import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <ul>
            <li><img className='logo' src={logo} alt='logo'></img></li>
            <li><Link className='header' to='/'>Home</Link></li>
            <li><Link className='header' to='about-us'>About Us</Link></li>
            <li><Link className='header' to='contact'>Contact</Link></li>
        </ul>
    </>
  )
}

export default Header;