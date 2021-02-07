import React from 'react'
import './LandmarkImages.css'

function LocationImages({ Circle }) {
    return (
        <div className='MidPage'>
     
        <div className="Canada__Container">
        <div className="circle">
            <img src={Circle} alt=""/>
        
        </div>
        
        <img className='MidPage__Picture Canada__Image' src='/images/illustration-canada.svg' alt=""/>
                <div className='Landmark__Country'>
                <h2>Canada</h2>
               
                </div>
        </div>
        

        <div className='Australia__Container'>
        <div className="circle">
            <img src={Circle}alt=""/>
        
        </div>
        <img className='MidPage__Picture Australia__Image' src='/images/illustration-australia.svg' alt=""/>
        
        <div className='Landmark__Country'>
        <h2>Australia</h2>
      
        </div>
        </div>


        <div className='UK__Container'>
        <div className="circle">
        <img src={Circle} alt=""/>
        </div>
       
        <div>

   
<img className='MidPage__Picture UK__Image' src='/images/illustration-united-kingdom.svg' alt=""/>
        
        <div className='Landmark__Country'>
        <h2>United Kingdom</h2>
          
        </div>
    </div>
        </div>
        
                </div>
    )
}

export default LocationImages
