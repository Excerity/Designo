import React from 'react'
import BodyWebDesign from '../components/About/BodyWebDesign';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import MidPageWebDesign from '../components/GraphicDesign/MidPageWebDesign';
import MidPageDescWebDesign from '../components/GraphicDesign/MidPageDescWebDesign';

function AboutUs() {
    return (
        <div>
      <Navbar />
      <BodyWebDesign />
      <AboveFooter />
      <Footer /> 
        </div>
    )
}

export default AboutUs
