import React from 'react'
import BodyWebDesign from '../components/MobileWebDesign/BelowNavDesign';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
// import MidPageWebDesign from '../components/MobileWebDesign/MidPageDesign';
import MidPageDescWebDesign from '../components/MobileWebDesign/MidPageDescWebDesign';
import AppDesignImages from '../components/MobileAppDesign/AppDesignImages';
import'../TabletDesc.css'
import BelowNavDesign from '../components/MobileWebDesign/BelowNavDesign';
import DesignImage from '../components/MobileHomePage/DesignImage';
import DesignImageDesc from '../components/MobileHomePage/DesignImageDesc';

function MobileAppDesign() {
    return (
        <div>
     <Navbar />
      <BelowNavDesign title='App Design' Para1='Our mobile designs bring intuitive digital solutions' Para2='to your customers right at their fingertips.' />

      <AppDesignImages image='/images/image-airfilter.jpg' />
      <MidPageDescWebDesign FirstH3='Solving the problem of poor indoor air' SecondH3='quality by filtering the air' Title='Airfilter'/>
      
      <AppDesignImages image='/images/image-eyecam.jpg' />
      <MidPageDescWebDesign FirstH3='Product that lets you edit your favorite' SecondH3='photos and videos at any time' Title='Eyecam'/>
   

      <AppDesignImages image='/images/image-faceit.jpg' />
      <MidPageDescWebDesign FirstH3='Get to meet your favorite internet' SecondH3='superstar with the faceit app' Title='Faceit'/>
     
    <AppDesignImages image='/images/image-todo.jpg' />
    <MidPageDescWebDesign FirstH3='A todo app that features cloud sync' SecondH3='with light and dark mode' Title='Todo'/>
    
        <AppDesignImages image='/images/image-blogr.jpg' />
        <MidPageDescWebDesign FirstH3='A VR experience app made for' SecondH3='Loopstudios' Title='Loopstudios'/>
     
         <DesignImage MobileType='web' TabletType='web'/>
         <DesignImageDesc  title='Web Design'/>
         <DesignImage MobileType='graphic' TabletType='graphic'/>
         <DesignImageDesc  title='Graphic Design'/>

      <AboveFooter />
      <Footer /> 
        </div>
    )
}

export default MobileAppDesign
    