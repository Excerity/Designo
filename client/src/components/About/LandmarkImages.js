import React from 'react'
import { Fragment } from 'react'
  import { HashLink as Link} from 'react-router-hash-link';
import './LandmarkImages.css'
import Canada from '../../images/illustration-canada.svg'
import Australia from '../../images/illustration-australia.svg'
import Uk from '../../images/illustration-united-kingdom.svg'
import Circle from '../../images/bg-pattern-small-circle.svg'

function LocationImages() {
    return (
      <div className='Locations-Images-Container'>
   
        <div className='Location__Landmark'>
        <div className='Canada__Container Location-Country"'>
         <div className="circle">
             <img className='LandMark__Small__Circle' src={Circle}alt=""/>
         </div>

         <img className='Location__Picture Canada__Image' src={Canada} alt=""/>
         
         <div className='Landmark__Country'>
         <h2>Canada</h2>
         </div>

         <Link to="Locations#MapImageCanada">
         <button className="Landmark-Button ">
         <p>See location</p>
         </button>
         </Link>
         </div>
    

        <div className='Australia__Container Location-Country"'>
            
        <div className="circle">
            <img className='LandMark__Small__Circle' src={Circle}alt=""/>
        
        </div>
        <img className='Location__Picture Australia__Image' src={Australia} alt=""/>
        
        <div className='Landmark__Country'>
        <h2>Australia</h2>
        </div>

        <Link to="Locations#MapImageAustralia">
        <button className="Landmark-Button ">
        <p>See location</p>
        </button>
        </Link>
  
        </div>

    <div className='UK__Container Location-Country"'>
            
            <div className="circle">
                <img className='LandMark__Small__Circle Uk-small-circle' src={Circle}alt=""/>

            </div>
            <img className='Location__Picture UK__Image' src={Uk} alt=""/>
            
            <div className='Landmark__Country'>
            <h2>United Kingdom</h2>
            </div>
    
            <Link to="Locations#MapImageAustralia">
            <button className="Landmark-Button uk-landmark-button">
            <p>See location</p>
            </button>
            </Link>
    
           </div>
             </div>
                 </div>
    )
}

export default LocationImages
