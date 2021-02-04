import React from 'react'
import BodyWebDesign from '../components/About/BodyWebDesign';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import MidPageWebDesign from '../components/GraphicDesign/MidPageWebDesign';
import MidPageDescWebDesign from '../components/About/MidPageDescWebDesign';
import AboutUsImage from '../components/About/AboutUsImage';
import LandmarkImages from '../components/About/LandmarkImages';
import SmallCircle from '../components/SmallCircle';
import WorldClassImg from '../components/About/WorldClassImg';
import RealDeal from '../components/About/RealDeal';

function About() {
    return (
        <div>
      <Navbar />
      <AboutUsImage />
      <BodyWebDesign />
     <WorldClassImg />
      <MidPageDescWebDesign Title='World-class talent'/>
   <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
      <RealDeal />
      <MidPageDescWebDesign Title='The real deal'/>
      <AboveFooter />
      <Footer /> 
        </div>
    )
}

export default About
