import React from 'react'
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import MidPageDesign from '../MidPageDesign';
import MidPageDescWebDesign from '../components/MobileWebDesign/MidPageDescWebDesign';
import BodyWebDesign from '../components/About/BodyWebDesign'
import'../TabletDesc.css'

function MobileWebDesign() {
    return (
        <div>
         <Navbar />
      <BodyWebDesign />
=      <MidPageDesign image='/images/image-express.jpg' />

    <MidPageDescWebDesign  FirstH3='A multi-carrier shipping website for' SecondH3='ecommerce businesses' Title='Express'/>    

      <div className='Tablet'>
     
             <MidPageDesign image='/images/image-transfer.jpg' />
       <MidPageDescWebDesign FirstH3='Site for low-cost money transfers and ' SecondH3='sending money within seconds' Title='Transfer'/>
     </div>
        <div className='Tablet'>
        <MidPageDesign image='/images/image-Photon.jpg' />
      <MidPageDescWebDesign FirstH3=' A state-of-the-art music player with' SecondH3='high-resolution audio and DSP effects' Title='Photon'/>
        </div>
      
      <div className='Tablet'>
      <MidPageDesign image='/images/image-Builder.jpg' />
      <MidPageDescWebDesign  FirstH3='Connects users with local contractors' SecondH3='based on their location' Title='Builder'/>
      </div>
     
     <div className='Tablet'>
     <MidPageDesign image='/images/image-Blogr.jpg' />
      <MidPageDescWebDesign   FirstH3='Blogr is a platform for creating an' SecondH3='online blog or publication' Title='Blogr'/>
     </div>

     <div className='Tablet'>
     <MidPageDesign image='/images/image-Camp.jpg' />
      <MidPageDescWebDesign  FirstH3='Get expert training in coding, data,' SecondH3='design, and digital marketing' Title='Camp'/>
     </div>
     
      <AboveFooter />
      <Footer />  
        </div>
    )
}

export default MobileWebDesign