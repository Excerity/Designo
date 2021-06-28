import React from 'react'
import Footer from '../components/Footer/Footer'
import LandmarkImages from '../components/About/LandmarkImages'
import ContactBody from '../components/Contact/ContactBody'
import AboveFooter from '../components/Footer/AboveFooter'
import NavMenu from '../components/Nav/NavMenu'
import '../components/About/LandmarkImages.css'

function Contact() {

    return (
        <div>
       <NavMenu />
       <ContactBody />
       <LandmarkImages className='Landmark-Grid'/>
       <AboveFooter/>
       <Footer />
        </div>
    )
}

export default Contact
