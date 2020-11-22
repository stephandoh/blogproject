import React from 'react';
import './style.css'
import {NavLink} from  'react-router-dom'

const Header=(props)=> {
    return (
        <header className='header'>
            <nav className='headerMenu'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-us'>About us</NavLink>
                <NavLink to='/contact-us'>Contact us</NavLink>
            </nav>
            <div>
                social media links
            </div>
        </header>
    )
}

export default Header