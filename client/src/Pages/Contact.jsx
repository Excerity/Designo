import React from 'react'
import Footer from '../components/MobileHomePage/Footer'
import Navbar from '../components/Nav/Navbar'
import LandmarkImages from '../components/About/LandmarkImages'
import ContactBody from '../components/Contact/ContactBody'
import AboveFooter from '../components/MobileHomePage/AboveFooter'

function Contact() {

    return (
        <div>
        <Navbar />
        <ContactBody />
      <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
      <AboveFooter/>
      <Footer />
        </div>
    )
}

export default Contact
