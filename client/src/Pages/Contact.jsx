import React from 'react'
import Footer from '../components/MobileHomePage/Footer'
import Navbar from '../components/MobileHomePage/Navbar'
import LandmarkImages from '../components/About/LandmarkImages'
import ContactBody from '../components/Contact/ContactBody'

function Contact() {

    return (
        <div>
        <Navbar />
        <ContactBody />
      <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
      <Footer />
        </div>
    )
}

export default Contact
