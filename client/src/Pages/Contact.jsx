import React from 'react'
import Footer from '../components/MobileHomePage/Footer'
import Navbar from '../components/MobileHomePage/Navbar'
import LandmarkImages from '../components/About/LandmarkImages'
import Body from '../components/Contact/Body'

function Contact() {


    return (
        <div>
        <Navbar />
        <Body />
      <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
      <Footer />
        </div>
    )
}

export default Contact
