import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/Abouthero'
import VideoSection from '../components/Videosection'

// Import data
import {
  aboutHeroData,
  aboutVideoSectionData,
  aboutSectionData
} from '../data/aboutData'
import { footerData } from '../data/homeData'
import AboutSection from '../components/About'
import Stats from '../components/AboutStats'
import BestChef from '../components/Bestchef'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero {...aboutHeroData} />
      <AboutSection {...aboutSectionData} />
      <Stats />
      <VideoSection {...aboutVideoSectionData} />
      <BestChef />
      <Footer {...footerData} />
    </div>
  )
}

export default About