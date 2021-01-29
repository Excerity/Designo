import React from 'react'
import './MapImagesDesc.css'

function MapImagesDesc({ Country, Office, Address1, Address2, Phone, Mail  }) {
    return (
        <div className='Desc'>
            <div className="Desc__Container">
            <h1 className='Country'>{Country}</h1>

        <h3>{Office}</h3>
        <p>{Address1}</p>
        <p>{Address2}</p>

        <h3 className='Contact'>Contact</h3>
        <p>{Phone}</p>
        <p>{Mail}</p>
         </div>
       
        </div>
    )
}

export default MapImagesDesc
