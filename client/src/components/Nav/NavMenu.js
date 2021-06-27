import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { navVariants, navItemVariants } from './animations'
import './Navbar.css'
import Navbar from "./Navbar";
import darkLogo from '../../images/darkLogo.png';

const NavMenu = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
   <nav className="navbar">

   
    <div>
     <Link to='/'> 

    <img className='Navbar-Logo' src={darkLogo} alt=""/> 
         </Link>    

    </div>

  <motion.ul className={isMobile ? "nav-links-mobile" : "nav-links"}
    onClick={() => setIsMobile(false)}
    animate={isMobile ? "open" : "closed"}
    variants={navVariants}
  > 

    <motion.li className='Home-Mobile-Item'
    variants={navItemVariants}
    >
    <Link to="/About" className="Home">Our company</Link>
    </motion.li>

    <motion.li className='Locations-Mobile-Item' 
        variants={navItemVariants}
        >
      <Link to="/Locations" className='Locations' >locations</Link>
    </motion.li>

    <motion.li className='Contact-Mobile-Item'
        variants={navItemVariants}
        >
    <Link to="/Contact" className="Contact">Contact</Link>
    </motion.li>
  </motion.ul>
  
  <button  className="mobile-menu-icon"
    onClick={() => setIsMobile(!isMobile)}
  >
  {isMobile ? (
    <i className="fas fa-times"></i>
  ) : ( <i className="fas fa-bars"></i>

  )}
  </button>
  <Navbar/>
  </nav>
  )
};

export default NavMenu