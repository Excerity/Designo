import React from 'react'
import BodyWebDesign from '../components/GraphicDesign/BodyWebDesign';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import MidPageDesign from '../MidPageDesign';
import MidPageDescWebDesign from '../components/GraphicDesign/MidPageDescWebDesign';

function GraphicDesign() {
    return (
        <div>
          <Navbar />
      <BodyWebDesign />
      <MidPageDesign image='/images/image-change.jpg' />
      <MidPageDescWebDesign FirstH3='A book cover designed for' SecondH3='Tim Brown’s new release, ‘Change' Title='Tim Brown'/>
      <MidPageDesign image='/images/image-boxed-water.jpg' />
      <MidPageDescWebDesign FirstH3='A simple packaging concept made for' SecondH3='Boxed Water' Title='Boxed water'/>
      <MidPageDesign image='/images/image-science.jpg' />
      <MidPageDescWebDesign FirstH3='A poster made in collaboration with the' SecondH3='Federal Art Project' Title='Science!'/>
      <AboveFooter />
      <Footer />   
        </div>
    )
}

export default GraphicDesign
