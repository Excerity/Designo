import React from 'react'
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import MidPageDesign from '../MidPageDesign';
import MidPageDescWebDesign from '../components/WebDesign/MidPageDescWebDesign';
import BelowNavDesign from '../components/WebDesign/BelowNavDesign';
import '../DesktopGridLayout.css';
import DesignImage from '../components/HomePage/DesignImage';
import DesignImageDesc from '../components/HomePage/DesignImageDesc';
import DesignImageDesktop from '../DesignImageDesktop';
import DesignImageDesktopDesc from '../DesignImageDesktopDesc';
import '../DesignImageDesktop.css'
import NavMenu from '../components/Nav/NavMenu';


function WebDesign() {
    return (
        <div>
         <NavMenu />
      <BelowNavDesign title='Web Design' Para1='We build websites that serve as powerful marketing' Para2='tools and bring memorable brand experiences.' />
        <div className="WebDesign__MidPage__Container">
<div>
<MidPageDesign image='/images/image-express.jpg' />
<MidPageDescWebDesign   FirstH3='A multi-carrier shipping website for' SecondH3='ecommerce businesses' Title='Express'/>    
{/* id='First__Desc__WebDesign' */}
</div>
      
    <div>
    <MidPageDesign image='/images/image-transfer.jpg' />
   <MidPageDescWebDesign FirstH3='Site for low-cost money transfers and ' SecondH3='sending money within seconds' Title='Transfer'/>
    </div>
   
<div>
<MidPageDesign image='/images/image-Photon.jpg' />
  <MidPageDescWebDesign FirstH3=' A state-of-the-art music player with' SecondH3='high-resolution audio and DSP effects' Title='Photon'/>
    
</div>
  
  <div>
  <MidPageDesign image='/images/image-Builder.jpg' />
  <MidPageDescWebDesign  FirstH3='Connects users with local contractors' SecondH3='based on their location' Title='Builder'/>
  </div>
  

<div>
<MidPageDesign image='/images/image-Blogr.jpg' />
 <MidPageDescWebDesign   FirstH3='Blogr is a platform for creating an' SecondH3='online blog or publication' Title='Blogr'/>
</div>
 
 
<div>
<MidPageDesign image='/images/image-Camp.jpg' />
 <MidPageDescWebDesign  FirstH3='Get expert training in coding, data,' SecondH3='design, and digital marketing' Title='Camp'/>
</div>
        </div>
  
        <DesignImage MobileType='app' TabletType='app' DesktopType='app'/>
         <DesignImageDesc  title='App'/>
         <DesignImage  MobileType='graphic' TabletType='graphic' DesktopType='graphic' /> 
         <DesignImageDesc  title='Graphic Design'/> 


      <div className="Above__Footer__Desktop__Design__Images">
      <div className='Design__Image__Desktop__App'>
          <DesignImageDesktop type='app'/>  
          <DesignImageDesktopDesc title='App'/>
           </div>
     
     <div className='Design__Image__Desktop__Graphic  '>
     <DesignImageDesktop type='graphic'/>
      <DesignImageDesktopDesc title='Graphic'/>
     </div>

      </div>
      

      <AboveFooter />
      <Footer />  
        </div>
    )
}

export default WebDesign
