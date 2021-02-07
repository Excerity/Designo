import React from 'react'
import './HomeBody.css'

function HomeBody() {
    return (
        <div className='Body'>
            <h2 className='Body__Header'>
           <div>Award-winning custom </div> 
            <div>designs and digital </div> 
            <div>branding solutions</div>
            
            </h2>

        <p className='Body__Paragraph'>
        <p> With over 10 years in the industry,</p>
        <p>we are experienced in creating fully responsive websites,</p>
        <p>app design, and engaging brand experiences. </p>
        <p>Find out more about our services.</p>
      
        </p>

        <button className='Body__Button'>Learn More</button>
        <figure className='Phone'>
        <img className='' src="/images/image-hero-phone.png" alt=""/>
        </figure>
        </div>
    )
}

export default HomeBody


 

