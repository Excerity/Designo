import React from 'react'
import './AboutPageDescWebDesign.css'

function MidPageDescWebDesign({ FirstH3, SecondH3, Title}) {
    return (
        <div className='About'>
            <div className='About__Text'>
            <div className='About__Title'>
               <h2>{Title}</h2> 
            </div>
            <p className='About__Para'>
            {FirstH3}
         
            </p>
            <p className='About__Para'>{SecondH3}</p>
            </div>
          
        </div>
    )
}

export default MidPageDescWebDesign
