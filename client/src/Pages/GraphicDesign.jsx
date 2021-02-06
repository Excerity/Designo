import React from 'react'
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import MidPageDesign from '../MidPageDesign';
import MidPageDescGraphicDesign from '../components/GraphicDesign/MidPageDescGraphicDesign';
import BelowNavDesign from '../components/MobileWebDesign/BelowNavDesign';
import DesignImage from '../components/MobileHomePage/DesignImage';
import DesignImageDesc from '../components/MobileHomePage/DesignImageDesc';

function GraphicDesign() {
    return (
        <div>
          <Navbar />
      <BelowNavDesign title='Graphic Design' Para1='We deliver eye-catching branding materials that' Para2='are tailored to meet your business objectives.'  />
      <MidPageDesign image='/images/image-change.jpg' />
      <MidPageDescGraphicDesign FirstH3='A book cover designed for' SecondH3='Tim Brown’s new release, ‘Change' Title='Tim Brown'/>
      
    <MidPageDesign image='/images/image-boxed-water.jpg' />
      <MidPageDescGraphicDesign FirstH3='A simple packaging concept made for' SecondH3='Boxed Water' Title='Boxed water'/>
  
    <MidPageDesign image='/images/image-science.jpg' />
      <MidPageDescGraphicDesign FirstH3='A poster made in collaboration with the' SecondH3='Federal Art Project' Title='Science!'/>
   
         <DesignImage MobileType='app' TabletType='app'/>
         <DesignImageDesc  title='App Design'/>
         <DesignImage MobileType='web' TabletType='web'/>
         <DesignImageDesc  title='Web Design'/>

      <AboveFooter />
      <Footer />   
        </div>
    )
}

export default GraphicDesign