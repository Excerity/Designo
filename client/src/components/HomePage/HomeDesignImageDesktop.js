import React from 'react'
import './HomeDesignImageDesktop.css'
import { HashLink as Link} from 'react-router-hash-link';

function HomeDesignImageDesktop({title}) {
    return (
        <div className='Home__Design__Image__Desktop__Container'>
            
<div className='Home__Desktop__Images'>
        <div className='Desktop' id='Web'>
          <Link to='/WebDesign#top'>
          <div className='Desktop-image-desc-container'>
           <h1 className='Desktop-design-title Desktop-web-title'>Web Design</h1>
          <h3 className='Desktop-design-h3 Desktop-web-h3'>View Projects<svg className='Design__Image__Arrow' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/>
                  </svg>
                 </h3>
                </div>
                </Link>
               </div> 
    
       
            <div className='' id='App'>
              <Link to='AppDesign#top'>
              <div className='Desktop-image-desc-container'>
            <h1 className='Desktop-design-title'>App Design</h1>
            <h3 className='Desktop-design-h3 Desktop-app-h3'>View Projects<svg className='Design__Image__Arrow' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/>
                  </svg>
                </h3>
              </div>
            </Link>
            </div>

            <div className='Home__Desktop  Desktop__Graphic__Design' id='Graphic'>
              <Link to='GraphicDesign#top'>
            <div className='Desktop-image-desc-container'>
            <h1 className='Desktop-design-title'>graphic design</h1>
            <h3 className='Desktop-design-h3 Desktop-graphic-h3'>View Projects<svg className='Design__Image__Arrow' width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/>
                </svg>
              </h3>
             </div>
             </Link>
          </div>
        </div>
      </div>
    )
}

export default HomeDesignImageDesktop
