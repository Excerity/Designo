import React from 'react'
import './MidPageWebDesign.css'

function MidPageWebDesign({ image }) {
    return (
        <div className='MidPage'>
            <div className="MidPage__Container">
            <img className='MidPage__Image' src={image} alt=""/>
            </div>
      
        </div>
    )
}

export default MidPageWebDesign
