import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/Abouthero'
import FeaturedBlogs from '../components/Featuredblogs'
import BlogArticles from '../components/Blogarticles'

// Import data
import {
  blogHeroData,
  featuredBlogsData,
  blogArticlesData,
} from '../data/blogData'
import { footerData } from '../data/homeData'
import ContactHero from '../components/Contacthero'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <ContactHero {...blogHeroData} />
      <FeaturedBlogs
        heading={featuredBlogsData.heading}
        blogs={featuredBlogsData.blogs}
      />
      <BlogArticles
        heading="Articles"
        articles={blogArticlesData}
      />
      <Footer {...footerData} />
    </div>
  )
}

export default Blog