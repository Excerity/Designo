import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import darkLogo from './images/logo-dark.png'
import '../Navbar.css'


function Navbar() {

    return (
        <div className='nav'>
             <img className='Logo' src="/images/darkLogo.png" alt=""/>

            <svg className='Hamburger' width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fill-rule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg>
        
        </div>
        
    )
}

export default Navbar
