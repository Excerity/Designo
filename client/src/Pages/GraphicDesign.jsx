import React from 'react'
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Nav/Navbar';
import MidPageDesign from '../MidPageDesign';
import MidPageDescGraphicDesign from '../components/GraphicDesign/MidPageDescGraphicDesign';
import BelowNavDesign from '../components/WebDesign/BelowNavDesign';
import DesignImage from '../components/HomePage/DesignImage';
import DesignImageDesc from '../components/HomePage/DesignImageDesc';
import DesignImageDesktopDesc from '../DesignImageDesktopDesc';
import DesignImageDesktop from '../DesignImageDesktop';


function GraphicDesign() {
    return (
        <div>
          <Navbar />
      <BelowNavDesign title='Graphic Design' Para1='We deliver eye-catching branding materials that' Para2='are tailored to meet your business objectives.'  />
      <div className="WebDesign__MidPage__Container">
      <div>
      <MidPageDesign image='/images/image-change.jpg' />
      <MidPageDescGraphicDesign FirstH3='A book cover designed for' SecondH3='Tim Brown’s new release, ‘Change' Title='Tim Brown'/>
      </div>
      
        <div>
        <MidPageDesign image='/images/image-boxed-water.jpg' />
      <MidPageDescGraphicDesign FirstH3='A simple packaging concept made for' SecondH3='Boxed Water' Title='Boxed water'/>
        </div>
        
        <div>
        <MidPageDesign image='/images/image-science.jpg' />
      <MidPageDescGraphicDesign FirstH3='A poster made in collaboration with the' SecondH3='Federal Art Project' Title='Science!'/>
        </div>
      </div>
   
         <DesignImage MobileType='app' TabletType='app'/>
         <DesignImageDesc  title='App Design'/>
         <DesignImage MobileType='web' TabletType='web'/>
         <DesignImageDesc  title='Web Design'/>

         <div className="Above__Footer__Desktop__Design__Images">
      <div className='Design__Image__Desktop__App'>
          <DesignImageDesktop type='app'/>  
          <DesignImageDesktopDesc title='app'/>
           </div>
     
     <div className='Design__Image__Desktop__Graphic  '>
     <DesignImageDesktop type='web'/>
      <DesignImageDesktopDesc title='web' />
     </div>

      </div>


      <AboveFooter />
      <Footer />   
        </div>
    )
}

export default GraphicDesign