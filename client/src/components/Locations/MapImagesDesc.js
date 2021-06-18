import React from 'react'
import './MapImagesDesc.css'

function MapImagesDesc({ Country, Office, Address1, Address2, Phone, Mail  }) {
    return (
        <div className='Map__Images'>
            <div className="Map__Images__Container">

        <div className='Map_Images_Left'>
        <h1 className='Country'>{Country}</h1>
        <h3>{Office}</h3>
        <p>{Address1}</p>
        <p>{Address2}</p>
        </div>

        <div className='Map_Images_Right'>
        <h3 className='Contact-Desc'>Contact</h3>
        <p>{Phone}</p>
        <p>{Mail}</p>
        </div>
     
         </div>
       
        </div>
    )
}

export default MapImagesDesc
