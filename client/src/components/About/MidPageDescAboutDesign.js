import React from 'react'
import { Fragment } from 'react'
import './AboutPageDescWebDesign.css'

function MidPageDescWebDesign({ FirstH3, SecondH3, Title}) {
    return (
        <div className='About'>
            <div className='About__Text'>
            <div className='About__Title'>
               <h2>{Title}</h2> 
            </div>
            <h3 className='About__FirstHeader'>
            {FirstH3}
         
            </h3>
            <h3>{SecondH3}</h3>
            </div>
          
        </div>
    )
}

export default MidPageDescWebDesign
