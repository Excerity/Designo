import React from 'react'
import './DesignImage.css'
function DesignImage({ MobileType, TabletType }) {
    return (
        <div>
            <div className='Home__Tablet'>
            <img className='Home__TabletImg' src={`/images/tablet-${TabletType}-design.jpg`} alt=""/>
            </div>
 
            <div className='Home__Mobile'>
            <img  className='Home__MobileImg' src={`/images/mobile-${MobileType}-design.jpg`} alt=""/>
            </div> 
            
        </div>
    )
}

export default DesignImage
