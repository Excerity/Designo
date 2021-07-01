import React from 'react'
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import AboutUsHeader from '../components/About/AboutUsHeader';
import LandmarkImages from '../components/About/LandmarkImages';
import WorldClass from '../components/About/WorldClassImages';
import RealDeal from '../components/About/RealDealImages';
import NavMenu from '../components/Nav/NavMenu';
import '../components/About/LandmarkImages.css'


function About() {
    return (
        <div>
       <NavMenu />
       <AboutUsHeader />
       <WorldClass />
       <LandmarkImages/>
       <RealDeal />
       <AboveFooter />
       <Footer /> 
        </div>
    )
}

export default About
