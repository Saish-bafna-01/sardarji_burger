import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Promos from '../components/Promo'
import AboutSection from '../components/About'
import Menu from '../components/Menu'
import VideoSection from '../components/Videosection'
import Testimonials from '../components/Testimonial'
import SpecialOffer from '../components/Specialoffer'
import FeaturedBlogs from '../components/Featuredblogs'
import Footer from '../components/Footer'

// Import data
import {
  categoriesData,
  promosData,
  aboutSectionData,
  menuData,
  menuTabs,
  menuSectionHeader,
  videoSectionData,
  testimonialsData,
  specialOfferData,
  footerData,
} from '../data/homeData'
import { featuredBlogsData, blogArticlesData } from '../data/blogData'

const Home = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <Categories categories={categoriesData} />
    <Promos promos={promosData} />
    <AboutSection {...aboutSectionData} />
    <Menu menuData={menuData} tabs={menuTabs} header={menuSectionHeader} />
    <VideoSection {...videoSectionData} />
    <Testimonials {...testimonialsData} />
    <SpecialOffer {...specialOfferData} />
    <FeaturedBlogs
      heading={featuredBlogsData.heading}
      blogs={featuredBlogsData.blogs}
    />
    <Footer {...footerData} />
   </>
  )
}

export default Home