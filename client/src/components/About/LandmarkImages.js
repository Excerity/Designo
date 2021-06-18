import React from 'react'
import { Fragment } from 'react'
  import { HashLink as Link} from 'react-router-hash-link';
// import {Link} from 'react-router-dom'
import './LandmarkImages.css'

function LocationImages({ Circle }) {
    return (
        <div className='MidPage__Landmark'>
     
        <div className="Canada__Container">
        <div className="circle">
            <img className='LandMark__Small__Circle' src={Circle} alt=""/>
        
        </div>
        
        <img className='MidPage__Picture Canada__Image' src='/images/illustration-canada.svg' alt=""/>
                <div className='Landmark__Country'>
                <h2>Canada</h2>
                <Link to='Locations#MapImageCanada'>
                <button  className="Landmark-Button">
                <p>See location</p>
                </button>
                </Link>
          
                </div>
        </div>
        

        <div className='Australia__Container'>
            
        <div className="circle">
            <img className='LandMark__Small__Circle' src={Circle}alt=""/>
        
        </div>
        <img className='MidPage__Picture Australia__Image' src='/images/illustration-australia.svg' alt=""/>
        
        <div className='Landmark__Country'>
        <h2>Australia</h2>
        <Link to="Locations#MapImageAustralia">
        <button className="Landmark-Button ">
        <p>See location</p>
        </button>
        </Link>
  
        </div>
        </div>


        <div className='UK__Container'>
        <div className="circle">
        <img className='LandMark__Small__Circle' src={Circle} alt=""/>
        </div>
    
        <div>


        <img className='MidPage__Picture UK__Image' src='/images/illustration-united-kingdom.svg' alt=""/>
        
        <div id="UK_Text" className='Landmark__Country'>
        <h2>United Kingdom</h2>
        <Link to='Locations#MapImageUK'>
        <button  className="Landmark-Button">
        <p>See location</p>
        </button>
        </Link>
    
        </div>
           </div>
             </div>
               </div>
    )
}

export default LocationImages
