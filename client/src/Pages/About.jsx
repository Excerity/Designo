import React from 'react'
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import MidPageDescAboutDesign from '../components/About/MidPageDescAboutDesign';
import AboutUsImage from '../components/About/AboutUsImage';
import LandmarkImages from '../components/About/LandmarkImages';
import SmallCircle from '../components/SmallCircle';
import WorldClassImg from '../components/About/WorldClassImg';
import RealDeal from '../components/About/RealDeal';
import BodyAbout from '../components/About/BodyAbout'

function About() {
    return (
        <div>
      <Navbar />
      <AboutUsImage />
      <BodyAbout/>
     <WorldClassImg />
      <MidPageDescAboutDesign Title='World-class talent'/>
   <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
      <RealDeal />
      <MidPageDescAboutDesign Title='The real deal'/>
      <AboveFooter />
      <Footer /> 
        </div>
    )
}

export default About
