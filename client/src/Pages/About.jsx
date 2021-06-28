import React from 'react'
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import MidPageDescAboutDesign from '../components/About/MidPageDescAboutDesign';
import AboutUsImage from '../components/About/AboutUsImage';
import LandmarkImages from '../components/About/LandmarkImages';
import WorldClassImg from '../components/About/WorldClassImages';
import RealDeal from '../components/About/RealDealImages';
import BodyAbout from '../components/About/BodyAbout'
import NavMenu from '../components/Nav/NavMenu';
import '../components/About/LandmarkImages.css'


function About() {
    return (
        <div>
      <NavMenu />
      <AboutUsImage />
      <BodyAbout/>
     <WorldClassImg />
      <MidPageDescAboutDesign Title='World-class talent' FirstH3='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
  crafted from concept to launch, ensuring success in its given market. We are constantly updating 
  our skills in a myriad of platforms.' SecondH3=' Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
  are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
  Clients have always been impressed with our high-quality outcomes that encapsulates their 
  brand’s story and mission.'/>
    {/* <LandmarkImages/> */}
    <RealDeal />
    <MidPageDescAboutDesign Title='The real deal' FirstH3='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
  Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
  opportunity. We make design and technology more accessible and give you tools to measure success.' SecondH3='We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
  we inspire audiences to take action and drive real results.' />
    <AboveFooter />
    <Footer /> 
        </div>
    )
}

export default About
