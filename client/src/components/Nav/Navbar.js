import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom"
import '../Navbar.css'

function Navbar() {
        
    return (
        <div className='nav'>
             <img className='Navbar__Logo' src="/images/darkLogo.png" alt=""/>
            
            <svg className='Hamburger' width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fill-rule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg>
        
            <div className='Nav__Links'>
            <Link to='./HomePage' className='link'>Our Company</Link>
            <Link to='./Locations' className='link'>Locations</Link>
            <Link to='./Contact' className='link'>Contact</Link>
            </div>
        </div>
        
    )
}

export default Navbar
    