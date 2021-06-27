import React from 'react'
import './indivDesignImage.css'
import { HashLink as Link} from 'react-router-hash-link';

function IndivDesignImage({title, id, link,}) {
    return (
        <div className='Home__Design__Image__Desktop__Container'>
            
<div className='Design_Project_Images'>
        <div className='Desktop' id={id}>
          <Link to={link}>
          <div className='Desktop-image-desc-container'>
           <h1 className='Desktop-design-title '>{title}</h1>
          <h3 className='Desktop-design-h3'>View Projects<svg className='Design__Image__Arrow' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/>
                  </svg>
                 </h3>
                </div>
                </Link>
               </div> 
               </div>
      </div>
    )
}

export default IndivDesignImage
