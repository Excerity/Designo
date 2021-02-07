import React from 'react'
import './DesignImage.css'
function DesignImage({ MobileType, TabletType, DesktopType }) {
    return (
        <div>
            <div className='Tablet'>
            <img className='TabletImg' src={`/images/tablet-${TabletType}-design.jpg`} alt=""/>
            </div>

            <div className='Mobile'>
            <img  className='MobileImg' src={`/images/mobile-${MobileType}-design.jpg`} alt=""/>
            </div>

            <div className='Desktop'>
            <img  className='DesktopImgWeb DesktopImg' src={`/images/desktop-web-design-large.jpg`} alt=""/>
            </div>

            <div className='Desktop'>
            <img  className='DesktopImg' src={`/images/desktop-${DesktopType}-design.jpg`} alt=""/>
            </div>
        </div>
    )
}

export default DesignImage
