import React from 'react'
import AboutUsImage from '../components/About/AboutUsImage'
import LandmarkImages from '../components/About/LandmarkImages'
import AboveFooter from '../components/Footer/AboveFooter'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Nav/Navbar'
import MapImages from '../components/Locations/MapImages'
import MapImagesDesc from '../components/Locations/MapImagesDesc'
import '../components/Locations/Location__Desktop__Layout.css'

function Locations() {


    return (
        <div>
         <Navbar />
         <MapImages />
         <AboveFooter   />
         <Footer /> 
        </div>
    )
}

export default Locations
