import React from 'react'
import './MidPageWebDesign.css'

function MidPageWebDesign({ image }) {
    return (
        <div className='MidPage'>
            <img className='MidPage__Image' src={image} alt=""/>
        </div>
    )
}

export default MidPageWebDesign
