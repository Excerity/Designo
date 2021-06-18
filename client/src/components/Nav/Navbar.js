import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
   <nav className="navbar">

    <Link to='/'>
    <img className='Navbar-Logo' src="/images/darkLogo.png" alt=""/>
    </Link>   

  <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
    onClick={() => setIsMobile(false)}
  >
    <Link to="/About" className="Home">
    <li>Our company</li>
    </Link>
      <Link to="/Locations" className="Locations">
    <li>Locations</li>
    </Link>
      <Link to="/Contact" className="Contact">
    <li>Contact</li>
    </Link>
  </ul>
  
  <button  className="mobile-menu-icon"
    onClick={() => setIsMobile(!isMobile)}
  >
  {isMobile ? (
    <i className="fas fa-times"></i>
  ) : ( <i className="fas fa-bars"></i>

  )}
  </button>
  
  </nav>
  )
};

export default Navbar