import React from 'react'
import AboutUsImage from '../components/About/AboutUsImage'
import BodyWebDesign from '../components/About/BodyWebDesign'
import LandmarkImages from '../components/About/LandmarkImages'
import AboveFooter from '../components/MobileHomePage/AboveFooter'
import Footer from '../components/MobileHomePage/Footer'
import Navbar from '../components/MobileHomePage/Navbar'
import MapImages from '../components/Locations/MapImages'
import MapImagesDesc from '../components/Locations/MapImagesDesc'

function Locations() {
    return (
        <div>
         <Navbar />
         <MapImages 
          Canada='/images/image-map-canada.png'/>
         <MapImagesDesc
          Country='Canada' 
         Office='Designo Central Office' 
         Address1='3886 Wellington Street' 
         Address2=' Toronto, Ontario M9C 3J5' 
         Phone= 'P : +1 253-863-8967'
          Mail='M : contact@designo.co' />
         <MapImages 
          Australia='/images/image-map-australia.png'/>
         <MapImagesDesc 
         Country='Australia' 
         Office='Designo AU Office' 
         Address1=' 19 Balonne Street' 
         Address2=' New South Wales 2443' 
         Phone= 'P : (02) 6720 9092'
          Mail='M : contact@designo.au' />
           <MapImages  
           Australia='/images/image-map-uk.png'/>
         <MapImagesDesc 
         Country='United Kingdom' 
         Office='Designo UK Office' 
         Address1='13 Colorado Way' 
         Address2='Rhyd-y-fro SA8 9GA' 
         Phone= 'P : 078 3115 1400'
          Mail='M : contact@designo.uk' />
         <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
         <AboveFooter />
      <Footer /> 
        </div>
    )
}

export default Locations
