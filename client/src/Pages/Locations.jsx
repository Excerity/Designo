import React from 'react'

import AboveFooter from '../components/Footer/AboveFooter'
import Footer from '../components/Footer/Footer'
import MapImages from '../components/Locations/MapImages'
import NavMenu from '../components/Nav/NavMenu'

function Locations() {
    return (
        <div>
         <NavMenu />
         <MapImages />
         <AboveFooter   />
         <Footer /> 
        </div>
    )
}

export default Locations
