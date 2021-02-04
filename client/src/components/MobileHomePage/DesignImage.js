import React from 'react'
import './DesignImage.css'
function DesignImage({ MobileType, TabletType }) {
    return (
        <div>
            <div className='Tablet'>
            <img className='TabletImg' src={`/images/tablet-${TabletType}-design.jpg`} alt=""/>
            </div>

            <div className='Mobile'>
            <img  className='MobileImg' src={`/images/mobile-${MobileType}-design.jpg`} alt=""/>
            </div>
        </div>
    )
}

export default DesignImage
