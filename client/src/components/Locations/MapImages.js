import React from 'react'
import './MapImages.css'

function MapImages({ Canada, Australia, UK }) {
    return (
        <div>
            <img id='MapImageCanada' src={Canada} alt=""/>
            <img src={Australia} alt=""/>
            <img src={UK} alt=""/>
        </div>
    )
}

export default MapImages
