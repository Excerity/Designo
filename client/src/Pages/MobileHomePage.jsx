import React from 'react'
import Body from '../components/MobileHomePage/Body';
import MidPage from '../components/MobileHomePage/MidPage';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';

function MobileHomePage() {
    return (
        <div>
         <Navbar />
      <Body />
      <MidPage 
  Passionate='./images/illustration-passionate.svg'
   Resourceful='./images/illustration-resourceful.svg'  
   Friendly='./images/illustration-friendly.svg'  
     Circle='/images/bg-pattern-small-circle.svg'
     />
      <AboveFooter />
      <Footer /> 
        </div>
    )
}

export default MobileHomePage
