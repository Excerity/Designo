import React from 'react'
import RealDealMobile from '../../images/mobile-real-deal.jpg'
import RealDealTablet from '../../images/tablet-real-deal.jpg'
import RealDealDesktop from '../../images/image-real-deal.jpg'
import './AboutImages.css'

function RealDeal() {
    return (
        <div className='Midpage'>
        <img  id='Real_Deal_Desktop_Image' className='About_Page_Desktop' src={RealDealDesktop} alt=""/>
        <img className='About_Page_Tablet' src={RealDealTablet} alt=""/>
        <img className='About_Page_Mobile' id='Mobile-Real-Deal-Image' src={RealDealMobile} alt=""/>  
        </div>
    )
}

export default RealDeal
