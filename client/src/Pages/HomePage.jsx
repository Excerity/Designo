import React from 'react'
import HomeBody from '../components/MobileHomePage/HomeBody';
import MidPage from '../components/MobileHomePage/MidPage';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/Nav/Navbar';
import DesignImage from '../components/MobileHomePage/DesignImage';
import DesignImageDesc from '../components/MobileHomePage/DesignImageDesc';
import HomeDesignImageDesktop from '../components/MobileHomePage/HomeDesignImageDesktop';
 import '../index.css'
import HomeDesignImageDesktopDescWeb from '../components/MobileHomePage/HomeDesignImageDesktopDescWeb';
import HomeDesignImgDesktopDescApp from '../components/MobileHomePage/HomeDesignImgDesktopDescApp';
import HomePageImgDesktopGraphicDesc from '../components/MobileHomePage/HomePageImgDesktopGraphicDesc';
function MobileHomePage() {
    
    return (
        <div>
         <Navbar />
      <HomeBody />
         <DesignImage MobileType='web' TabletType='web' DesktopType='web' />
         <DesignImageDesc  title='WebDesign'/>
         <DesignImage MobileType='app' TabletType='app' DesktopType='app'/>
         <DesignImageDesc  title='AppDesign'/>
         <DesignImage  MobileType='graphic' TabletType='graphic' DesktopType='graphic' /> 
         <DesignImageDesc  title='GraphicDesign'/> 
         <HomeDesignImageDesktop />
          {/* <HomeDesignImageDesktopDescWeb title='Web Design'/>
         <HomeDesignImgDesktopDescApp title='App Design'/>
         <HomePageImgDesktopGraphicDesc title='Graphic Design'/>    */}
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
    