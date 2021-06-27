import React from 'react'
import HomeBody from '../components/HomePage/HomeBody';
import MidPage from '../components/HomePage/MidPage';
import AboveFooter from '../components/Footer/AboveFooter';
import Footer from '../components/Footer/Footer';
import HomeDesignImageDesktop from '../components/HomePage/HomeDesignImageDesktop';
import '../index.css'
import NavMenu from '../components/Nav/NavMenu';
function HomePage() {
    
    return (
        <div>
         <NavMenu />
         <HomeBody />
         <HomeDesignImageDesktop/>
         <MidPage/>
         <AboveFooter />
         <Footer />   
        </div>
    )
}

export default HomePage
    