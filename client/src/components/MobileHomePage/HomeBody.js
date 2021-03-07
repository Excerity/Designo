import React from 'react'
import './HomeBody.css'
import Button from '@material-ui/core/Button';


function HomeBody() {
    return (
        <div className='Body'>
            <h2 className='Body__Header'>
           <div>Award-winning custom </div> 
            <div>designs and digital </div> 
            <div>branding solutions</div>
            </h2>

            <div className='Body__Paragraph__Mobile'>
        <p> With over 10 years in the industry, we are </p>
        <p>experienced in creating fully responsive websites,</p>
        <p>app design, and engaging brand experiences.</p>
        <p>Find out more about our services.</p>
        </div>

        <div className='Body__Paragraph__Tablet'>
        <p> With over 10 years in the industry, we are experienced in </p>
        <p> creating fully responsive websites, app design, and engaging brand </p>
        <p>experiences. Find out more about our services.</p>
        </div>

        <div className='Body__Paragraph__Desktop'>
        <p> With over 10 years in the industry, we are experienced in </p>
        <p> creating fully responsive websites, app design, and engaging </p>
        <p>brand experiences. Find out more about our services.</p>
        </div>

        <div className="Home__Page__Button__Container">
        <button className='HomePage__Button'>
        Learn More
    </button>
        </div>
   
    {/* <div className="Material__Ui__Button__HomePage">
    <Button className='Body__Button' size="medium" variant="contained" >
            Learn More
            </Button>
        </div> */}
         

        <figure className='Phone'>
        {/* <img className='Home__Phone__Image' src="/images/image-hero-phone.png" alt=""/> */}
        </figure>
        </div>
    )
}

export default HomeBody


 

