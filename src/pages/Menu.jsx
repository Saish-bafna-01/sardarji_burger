import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/Abouthero'
import Menu from '../components/Menu'

// Import data
import {
  menuHeroData,
  menuPageData,
  menuPageTabs,
  menuPageHeader,
} from '../data/menuData'
import { footerData, promosData } from '../data/homeData'
import VideoSection from '../components/Videosection'
import Promos from '../components/Promo'

const MenuPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHero {...menuHeroData} />
      <Menu menuData={menuPageData} tabs={menuPageTabs} header={menuPageHeader} />
      <Promos promos={promosData} />
      <VideoSection {...menuHeroData} />
      <Footer {...footerData} />
    </div>
  )
}

export default MenuPage