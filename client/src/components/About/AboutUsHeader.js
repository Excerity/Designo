import React from 'react'
import HeroMobile from "../../images/mobile-about-hero.jpg"
import HeroTablet from "../../images/tablet-about-hero.jpg"
import HeroDesktop from "../../images/desktop-image-about-hero.jpg"
import './AboutUsHeader.css'


function AboutUsHeader() {
    return (
        <div className='About-Container'>
            
        <div className='About-img-container'>
            <img className='About_Page_Desktop' src={HeroDesktop} alt=""/>
            <img className='About_Page_Tablet' src={HeroTablet} alt=""/>
            <img className='About_Page_Mobile' src={HeroMobile} alt=""/>
        </div>

        <div className='Body__About'>
        <div className="body__about__title">
        <h2>About Us</h2>
        </div>

        <div className='Body__Paragraph__About__Mobile'>
        <p>Founded in 2010, we are a creative agency that<br/>
        produces lasting results for our clients. We’ve <br/>
        partnered with many startups, corporations, and <br/>
        nonprofits alike to craft designs that make real<br/>
        impact. We’re always looking forward to creating <br/>
        brands, products, and digital experiences that <br/>
        connect with our client's audiences.</p>
        </div>

        <div className='Body__Paragraph__About__Tablet'>
        <p>Founded in 2010, we are a creative agency that produces lasting results for our<br/>
          clients. We’ve partnered with many startups, corporations, and nonprofits alike to<br/>
          craft designs that make real impact. We’re always looking forward to creating <br/>
          brands, products, and digital experiences that connect with our client's audiences.</p>
        </div>

        <div className='Body__Paragraph__About__Desktop'>
        <p>Founded in 2010, we are a creative agency that produces lasting <br/>
          results for our clients. We’ve partnered with many startups,<br/>
          corporations, and nonprofits alike to craft designs that make real<br/>
          impact. We’re always looking forward to creating brands, products,<br/>
          and digital experiences that connect with our client's audiences.</p>
        </div>
        </div>
        </div>

            )
        }

        export default AboutUsHeader
