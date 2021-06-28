import React from 'react'
import { Fragment } from 'react'
import './BodyAbout.css'

function BodyAbout() {
    return (
        <div className='Body__About'>
            <div className="body__about__title">
            <h2>About Us</h2>
            </div>

        <div className='Body__Paragraph__About__Mobile'>
        <p>Founded in 2010, we are a creative agency that</p>
        <p>produces lasting results for our clients. We’ve</p>
        <p>partnered with many startups, corporations, and</p>
        <p>nonprofits alike to craft designs that make real</p>
        <p>impact. We’re always looking forward to creating</p>
        <p>brands, products, and digital experiences that</p>
        <p>connect with our client's audiences.</p>
        </div>

        <div className='Body__Paragraph__About__Tablet'>
        <p>Founded in 2010, we are a creative agency that produces lasting results for our</p>
        <p>clients. We’ve partnered with many startups, corporations, and nonprofits alike to</p>
        <p>craft designs that make real impact. We’re always looking forward to creating </p>
        <p>brands, products, and digital experiences that connect with our client's audiences.</p>
        </div>

        <div className='Body__Paragraph__About__Desktop'>
        <p>Founded in 2010, we are a creative agency that produces lasting</p>
        <p> results for our clients. We’ve partnered with many startups,  </p>
        <p>corporations, and nonprofits alike to craft designs that make real </p>
        <p>impact. We’re always looking forward to creating brands, products,</p>
        <p>and digital experiences that connect with our client's audiences.</p>
        </div>
         </div>
    
    )
}

export default BodyAbout


 

