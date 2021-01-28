import React from 'react'
import BodyWebDesign from '../components/GraphicDesign/BodyWebDesign';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import MidPageWebDesign from '../components/GraphicDesign/MidPageWebDesign';
import MidPageDescWebDesign from '../components/GraphicDesign/MidPageDescWebDesign';

function GraphicDesign() {
    return (
        <div>
          <Navbar />
      <BodyWebDesign />
      <MidPageWebDesign image='/images/image-change.jpg' />
      <MidPageDescWebDesign FirstH3='A book cover designed for' SecondH3='Tim Brown’s new release, ‘Change' Title='Tim Brown'/>
      <MidPageWebDesign image='/images/image-boxed-water.jpg' />
      <MidPageDescWebDesign FirstH3='A simple packaging concept made for' SecondH3='Boxed Water' Title='Boxed water'/>
      <MidPageWebDesign image='/images/image-science.jpg' />
      <MidPageDescWebDesign FirstH3='A poster made in collaboration with the' SecondH3='Federal Art Project' Title='Science!'/>
      <AboveFooter />
      <Footer />   
        </div>
    )
}

export default GraphicDesign
