import React from 'react'
import './HomeBody.css'
import Button from '@material-ui/core/Button';


function HomeBody() {
    return (
        <div className='Body'>
             <div className="HomePage__Container">

            <h2 className='Body__Header'>
            <p className='First__Line__Header__HomeBody'>Award-winning custom </p> 
            <p className='Second__Line__Header__HomeBody' >designs and digital </p> 
            <p className='Third__Line__Header__HomeBody'>branding solutions</p>
            </h2>

            <div className='Body__Paragraph__Mobile'>
        <p>With over 10 years in the industry, we are </p>
        <p>experienced in creating fully responsive websites,</p>
        <p>app design, and engaging brand experiences.</p>
        <p>Find out more about our services.</p>
        </div>

        <div className='Body__Paragraph__Tablet'>
        <p>With over 10 years in the industry, we are experienced in </p>
        <p>creating fully responsive websites, app design, and engaging brand </p>
        <p>experiences. Find out more about our services.</p>
        </div>

        <div className='Body__Paragraph__Desktop'>
        <p className='First__Line__HomeBody__Desktop'>With over 10 years in the industry, we are experienced in </p>
        <p className='Second__Line__HomeBody__Desktop'>creating fully responsive websites, app design, and engaging </p>
        <p className='Third__Line__HomeBody__Desktop'>brand experiences. Find out more about our services.</p>
        </div>

        <div className="Home__Page__Button__Container">
        <button className='HomePage__Button'>
        Learn More
    </button>
        </div>
         
         
        <div className="Phone__Image__Container">
        <figure className='Phone'>
        <img className='Home__Phone__Image' src="/images/image-hero-phone.png" alt=""/>
        </figure>
        </div>
      
        {/* <figure className='HomePage__Phone__Desktop'> 
          <img src="image-hero-phone-Desktop.jpg" alt=""/>
        </figure> */}
        </div> 

        </div>

    )
}

export default HomeBody


 

