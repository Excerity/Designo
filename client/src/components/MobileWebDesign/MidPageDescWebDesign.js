import React from 'react'
import './MidPageDescWebDesign.css'
import './MidPageWebDesign.css'


function MidPageDescWebDesign({ FirstH3, SecondH3, Title }) {
    return (
        <div className='Desc'>


            <div className='Desc__Text'>
            <div className='Desc__Title'>
               <h2 className='title' >{Title}</h2> 
            </div>
            <h3>
            {FirstH3}
            </h3>
            <h3 >{SecondH3}</h3>
            </div>
        </div>
    )
}

export default MidPageDescWebDesign
