import React from 'react'
import Footer from '../components/Footer/Footer'
import LandmarkImages from '../components/About/LandmarkImages'
import ContactBody from '../components/Contact/ContactBody'
import AboveFooter from '../components/Footer/AboveFooter'
import NavMenu from '../components/Nav/NavMenu'

function Contact() {

    return (
        <div>
       <NavMenu />
       <ContactBody />
       <LandmarkImages  Circle='/images/bg-pattern-small-circle.svg'/>
       <AboveFooter/>
       <Footer />
        </div>
    )
}

export default Contact
