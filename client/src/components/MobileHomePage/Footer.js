import React from 'react'
import '../Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='Footer'>
            <div className='TabletFooterStart'>

            <img className='Logo' src="/images/logo-light.png" alt=""/>
            

            <div className='Footer__Links'>
        <Link to='/About' className='Footer__Begin'>Our company</Link>
        <Link to='/Location' className='Footer__Begin'>Locations</Link>
        <Link to='/Contact' className='Footer__Begin'>Contact</Link>
            </div>
            </div>

     <div className='Footer__Bottom__Container'>
     <div className='Footer__Middle__Para'>
        <p>Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
  </div>
       
  <div className='Footer__Middle__Para'>
  <p>Contact Us (Central Office)</p>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
  </div>


        <div className='Icons'>
        <img src="/images/icon-facebook.svg" alt=""/>
        <img src="/images/icon-youtube.svg" alt=""/>
        <img src="/images/icon-twitter.svg" alt=""/>
        <img src="/images/icon-pinterest.svg" alt=""/>
        <img src="/images/icon-instagram.svg" alt=""/>
        </div>
        </div>
  
        </div>
    )
}

export default Footer
