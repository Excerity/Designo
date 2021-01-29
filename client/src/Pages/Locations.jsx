import React from 'react'
import AboutUsImage from '../components/About/AboutUsImage'
import BodyWebDesign from '../components/About/BodyWebDesign'
import LandmarkImages from '../components/About/LandmarkImages'
import AboveFooter from '../components/MobileHomePage/AboveFooter'
import Footer from '../components/MobileHomePage/Footer'
import Navbar from '../components/MobileHomePage/Navbar'
import MapImages from '../components/Locations/MapImages'

function Locations() {
    return (
        <div>
         <Navbar />
         <MapImages  Canada='/images/image-map-canada.png'/>
         <MapImages  Australia='/images/image-map-australia.png'/>
         <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
      <Footer /> 
        </div>
    )
}

export default Locations
