import React from 'react'
import HomeBody from '../components/HomePage/HomeBody';
import MidPage from '../components/HomePage/MidPage';
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import DesignImage from '../components/HomePage/DesignImage';
import DesignImageDesc from '../components/HomePage/DesignImageDesc';
import HomeDesignImageDesktop from '../components/HomePage/HomeDesignImageDesktop';
 import '../index.css'
import HomeDesignImageDesktopDescWeb from '../components/HomePage/HomeDesignImageDesktopDescWeb';
import HomeDesignImgDesktopDescApp from '../components/HomePage/HomeDesignImgDesktopDescApp';
import HomePageImgDesktopGraphicDesc from '../components/HomePage/HomePageImgDesktopGraphicDesc';
import NavMenu from '../components/Nav/NavMenu';
function HomePage() {
    
    return (
        <div>
         <NavMenu />
      <HomeBody />
         <DesignImage MobileType='web' TabletType='web' DesktopType='web' OpenTab='WebDesign#top' Background='/images/mobile-${MobileType}-design.jpg' />
         <DesignImageDesc  title='Web Design' OpenTab='WebDesign#top'/>
         <DesignImage MobileType='app' TabletType='app' DesktopType='app'  OpenTab='AppDesign#top'/>
         <DesignImageDesc  title='App Design'  OpenTab='AppDesign#top'/>
         <DesignImage  MobileType='graphic' TabletType='graphic' DesktopType='graphic'  OpenTab='GraphicDesign#top' /> 
         <DesignImageDesc  title='Graphic Design'  OpenTab='GraphicDesign#top'/> 
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

export default HomePage
    