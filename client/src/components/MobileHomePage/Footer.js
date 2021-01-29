import React from 'react'
import '../Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <img src="/images/darkLogo.png" alt=""/>
            

            <div className='Footer__Links'>
        <p className='Footer__Begin'>Our company</p>
        <p className='Footer__Begin'>Locations</p>
        <p className='Footer__Begin'>Contact</p>
            </div>
     
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
    )
}

export default Footer
