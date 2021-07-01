import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

  return (
   <nav>   

  <ul className='Desktop-nav-links'>

    <li className='Home-Mobile-Item'>
    <Link to="/About" className="Desktop-Home">Our company</Link>
    </li>

    <li className='Locations-Mobile-Item'>
      <Link to="/Locations" className='Desktop-Locations'>locations</Link>
    </li>

    <li className='Contact-Mobile-Item'>
    <Link to="/Contact" className="Desktop-Contact">Contact</Link>
    </li>

    </ul>
  </nav>
  )
};

export default Navbar