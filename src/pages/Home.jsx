import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Promos from '../components/Promo'
import About from '../components/About'
import Menu from '../components/Menu'
import VideoSection from '../components/Videosection'
import Testimonials from '../components/Testimonial'
import SpecialOffer from '../components/Specialoffer'
import NewsArticles from '../components/Newsarticles'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <Categories />
    <Promos />
    <About />
    <Menu />
    <VideoSection />
    <Testimonials />
    <SpecialOffer />
    <NewsArticles />
    <Footer />
   </>
  )
}

export default Home
