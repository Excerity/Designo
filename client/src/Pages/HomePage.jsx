import React from 'react'
import Body from '../components/MobileHomePage/Body';
import MidPage from '../components/MobileHomePage/MidPage';
import AboveFooter from '../components/MobileHomePage/AboveFooter';
import Footer from '../components/MobileHomePage/Footer';
import Navbar from '../components/MobileHomePage/Navbar';
import DesignImage from '../components/MobileHomePage/DesignImage';
import DesignImageDesc from '../components/MobileHomePage/DesignImageDesc';

function MobileHomePage() {
    return (
        <div>
         <Navbar />
      <Body />
      <DesignImage MobileType='web' TabletType='web'/>
         <DesignImageDesc  title='Web Design'/>
         <DesignImage MobileType='app' TabletType='app' />
         <DesignImageDesc  title='App'/>
         <DesignImage MobileType='graphic' TabletType='graphic' /> 
         <DesignImageDesc  title='Graphic Design'/> 
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
