import React from 'react'
import '../Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='Footer'>
            <div className='TabletFooterStart'>

            <img className='Footer__Logo' src="/images/logo-light.png" alt=""/>
            
            <div className='Footer__Links'>
                <div className='Footer__Link__About'>
                <Link to='/About' className='Footer__Link'>Our company</Link>
                </div>

                <div className='Footer__Link__Location'>
                <Link to='/Location' className='Footer__Link'>Locations</Link>
                </div>

                <div className='Footer__Link__Contact'>
                <Link to='/Contact' className='Footer__Link'>Contact</Link> 
                </div>
            </div>
            </div>
          

     <div className='Footer__Bottom__Container'>
     <div className='Footer__Middle__Para '>
        <p>Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
  </div>
       
  <div className='Footer__Middle__Para Footer__Para__Number__Two'>
  <p>Contact Us (Central Office)</p>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
  </div>

  </div>
        <div className='Icons'>
        <img src="/images/icon-facebook.svg" alt=""/>
        <img src="/images/icon-youtube.svg" alt=""/>
        <img src="/images/icon-twitter.svg" alt=""/>
        <img src="/images/icon-pinterest.svg" alt=""/>
        <img src="/images/icon-instagram.svg" alt=""/>
        </div>
     
  
        </div>
    )
}

export default Footer
