import React from 'react'
import HeroMobile from "../../images/mobile-about-hero.jpg"
import HeroTablet from "../../images/tablet-about-hero.jpg"
import HeroDesktop from "../../images/desktop-image-about-hero.jpg"
import './AboutImages.css'

function AboutUsImage() {
    return (
        <div>
            <img className='About_Page_Desktop' src={HeroDesktop} alt=""/>
            <img className='About_Page_Tablet' src={HeroTablet} alt=""/>
            <img className='About_Page_Mobile' src={HeroMobile} alt=""/>
        </div>
    )
}

export default AboutUsImage
