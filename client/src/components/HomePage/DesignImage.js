import React from 'react'
import './DesignImage.css'
import { HashLink as Link } from 'react-router-hash-link';


function DesignImage({ MobileType, TabletType, OpenTab, Background }) {

    
 const HomeImage = {
      backgroundImage: `url(${Background})`  
 }

    return (

        <div>
            
            <div className='Home__Tablet'>
            <Link to='/'>
            <img className='Home__TabletImg' src={`/images/tablet-${TabletType}-design.jpg`} alt=""/>
            </Link>
            </div>
          
            <div className='Home__Mobile'>
            <Link to={OpenTab}>
            <div className='Overlay' >
            
            <img  className='Home__MobileImg' src={`/images/mobile-${MobileType}-design.jpg`} alt=""/>
            </div>
            </Link>

             </div>      
        </div>
    )
}

export default DesignImage