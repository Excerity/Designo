import React from 'react'
import './MidPageWebDesign.css'

function MidPageWebDesign({ image }) {
    return (
        <div className='MidPage'>
            <img className='Desktop' src='./images/image-world-class-talent.jpg' alt=""/>
            <img className='Tablet' src='./images/image-world-class-talent.jpg' alt=""/>
            <img className='Mobile' src='./images/tablet-world-class-talent.jpg' alt=""/>

        </div>
    )
}

export default MidPageWebDesign
