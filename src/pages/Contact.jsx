import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/Abouthero'
import ContactSection from '../components/Contactsection'

// Import data
import { contactHeroData, contactSectionData } from '../data/contactData'
import { footerData } from '../data/homeData'
import MapSection from '../components/Mapsection'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <AboutHero {...contactHeroData} />
      <ContactSection {...contactSectionData} />
      <MapSection />
      <Footer {...footerData} />
    </div>
  )
}

export default Contact