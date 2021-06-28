import React from 'react'
import WorldClassMobile from '../../images/mobile-world-class-talent.jpg'
import WorldClassTablet from '../../images/tablet-world-class-talent.jpg'
import WorldClassDesktop from '../../images/image-world-class-talent.jpg'
import './AboutImages.css' 

function WorldClassImg() {
    return (
        <div>
 <div className='MidPage'>
            <img className='About_Page_Desktop' id='World__Class__About__Page__Desktop__Image' src={WorldClassDesktop} alt=""/>
            <img className='About_Page_Tablet' src={WorldClassTablet} alt=""/>
            <img className='About_Page_Mobile' id='Mobile-World-Class-Image' src={WorldClassMobile} alt=""/>
        </div>
            
        </div>
    )
}

export default WorldClassImg
