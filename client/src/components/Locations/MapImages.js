import React from 'react'
import './MapImages.css'

function MapImages({ Canada, Australia, Uk }) {
    return (
        <div>
            <div id='MapImageCanada' >
            <img src={Canada} alt=""/>
            </div>

            <div id='MapImageAustralia' >
            <img   src={Australia} alt=""/>
            </div>
            
            <div  id='MapImageUK'>
            <img  src={Uk} alt=""/>
            </div>
        </div>
    )
}

export default MapImages
