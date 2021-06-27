import React from 'react'
import './DesignProjects.css'
// import expressImg from './image-express.jpg'

function DesignProjects({img, id, title, description}) {
    return (
        <div className='Project-Container'>
         <img src={img} alt={id} className='Project-Image'/>
         <div className='Project-text'>
             <h3 className='Project-title'>{title}</h3>
             <p>{description}</p>
         </div>
        </div>
    )
}

export default DesignProjects
