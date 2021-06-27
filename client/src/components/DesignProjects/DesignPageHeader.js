import React from 'react'
import './DesignPageHeader.css'

function DesignPageHeader({ title, Para1, Para2 }) {
    return (
        <div className='Body_Below__Nav'>
          
            <h2 className='Body__Header'>
              <div>{title}</div> 
           
            </h2>

        <div className='Body__Paragraph'>
        <p>{Para1}</p>
        <p>{Para2}</p> 
      
        </div>

        </div>
    )
}

export default DesignPageHeader


 

