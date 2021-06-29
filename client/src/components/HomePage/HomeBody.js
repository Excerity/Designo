import React from 'react'
import './HomeBody.css'
import { HashLink as Link} from 'react-router-hash-link';
import HomePhoneCircle from '../../images/bg-pattern-hero-home.svg'
import HomePhone from "../../images/image-hero-phone.png"

function HomeBody() {
    return (
        <div className='Body' style={{backgroundImage: `url(${HomePhoneCircle})`}}>
             <div className="HomePage__Container">
                 
            <h2 className='Body__Header'>
            <p className='First__Line__Header__HomeBody'>Award-winning custom </p> 
            <p className='Second__Line__Header__HomeBody'>designs and digital </p> 
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

        <div className="HomePage-Button-Container">
        <Link to='/About'>
        <button className='HomePage-Button'>
        <p className='HomePage-Button-Text'>Learn More</p>
        </button>
        </Link>
        </div>
         
         
        <figure className='Phone'>
        <img className='Home__Phone__Image' src={HomePhone} alt=""/>
        </figure>

        </div> 

        </div>

    )
}

export default HomeBody


 

