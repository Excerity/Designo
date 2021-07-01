import React from 'react'
import WorldClassMobile from '../../images/mobile-world-class-talent.jpg'
import WorldClassTablet from '../../images/tablet-world-class-talent.jpg'
import WorldClassDesktop from '../../images/image-world-class-talent.jpg'
import MidPageDescAboutDesign from '../About/MidPageDescAboutDesign';
import './AboutImages.css'

function WorldClassImg() {
    return (
        <div className='WorldClass-Container'>
      <div className='MidPage-image'>
            <img className='About-Images-Desktop' id='World__Class__About__Page__Desktop__Image' src={WorldClassDesktop} alt=""/>
            <img className='About-Images-Tablet' src={WorldClassTablet} alt=""/>
            <img className='About-Images-Mobile' id='Mobile-World-Class-Image' src={WorldClassMobile} alt=""/>
        </div>

        <div className='About-Image-Desc'>
        <MidPageDescAboutDesign Title='World-class talent' FirstH3='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
  crafted from concept to launch, ensuring success in its given market. We are constantly updating 
  our skills in a myriad of platforms.' SecondH3=' Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
  are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
  Clients have always been impressed with our high-quality outcomes that encapsulates their 
  brand’s story and mission.'/>
                    </div>
        </div>
    )
}

export default WorldClassImg
