import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiCalendar, FiArrowLeft, FiArrowRight, FiUser } from 'react-icons/fi'
import { FaQuoteLeft, FaFacebookF, FaTwitter, FaPinterest, FaWhatsapp } from 'react-icons/fa'

// Import data
import { blogArticlesData, featuredBlogsData } from '../data/blogData'
import { footerData } from '../data/homeData'

const BlogDetail = () => {
  const { slug } = useParams()

  // Find the blog article by slug
  const blog = blogArticlesData.find(article => article.slug === slug)

  // If blog not found, show 404
  if (!blog) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link to="/blog" className="text-yellow-500 hover:underline text-sm md:text-base">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Get related blogs (exclude current)
  const relatedBlogs = featuredBlogsData.blogs.filter(b => b.id !== blog.id).slice(0, 3)

  // Split content into paragraphs
  const paragraphs = blog.content.split('\n\n').filter(p => p.trim())

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center bg-[#111111]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#111111]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 sm:gap-2 text-white/60 text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 flex-wrap justify-center">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-yellow-500 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-yellow-500">{blog.category}</span>
          </div>

          {/* Category Badge */}
          <span className="bg-yellow-500 text-black text-[10px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full uppercase mb-4 md:mb-6">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-white oswald text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight mb-4 md:mb-6">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm md:text-base flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <FiUser size={14} className="text-yellow-500" />
              <span>Sardarji Team</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar size={14} className="text-yellow-500" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-[#111111] py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Quote Box */}
            <div className="bg-[#1c1c1c] border-l-4 border-yellow-500 rounded-r-lg md:rounded-r-xl p-4 sm:p-5 md:p-6 my-6 md:my-10">
              <FaQuoteLeft size={24} className="text-yellow-500 mb-3 md:mb-4" />
              <p className="text-white text-base sm:text-lg md:text-xl italic leading-relaxed">
                "Authentic Indian flavors, freshly prepared with love and tradition."
              </p>
              <p className="text-yellow-500 font-semibold text-sm md:text-base mt-2 md:mt-3">— Sardarji Fastfood & Mudpot</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
              <span className="text-white font-semibold text-sm md:text-base">Tags:</span>
              {['Indian Food', blog.category, 'Edmonton', 'Authentic Cuisine'].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 text-white/80 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Section */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
              <span className="text-white font-semibold text-sm md:text-base">Share:</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/30">
                  <FaPinterest size={16} />
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30">
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
              <Link
                to="/blog"
                className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors text-sm md:text-base font-semibold order-2 sm:order-1"
              >
                <FiArrowLeft size={16} />
                Back to Blog
              </Link>
              <a
                href="/menu"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 text-sm md:text-base order-1 sm:order-2"
              >
                View Our Menu
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Posts */}
            <div className="bg-[#1c1c1c] rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 md:mb-8">
              <h3 className="text-white oswald text-lg md:text-xl font-bold uppercase mb-4 md:mb-6">
                Related Posts
              </h3>
              <div className="flex flex-col gap-4 md:gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.slug}`}
                    className="flex items-start gap-3 md:gap-4 group"
                  >
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm leading-snug group-hover:text-yellow-500 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      <span className="text-white/50 text-[10px] sm:text-xs">{relatedBlog.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-[#1c1c1c] rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 md:mb-8">
              <h3 className="text-white oswald text-lg md:text-xl font-bold uppercase mb-4 md:mb-6">
                Categories
              </h3>
              <div className="flex flex-col gap-2 md:gap-3">
                {['North Indian', 'South Indian', 'Beverages', 'Main Course', 'Street Food', 'Desserts'].map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="flex items-center justify-between text-white/70 hover:text-yellow-500 transition-all duration-300 py-2 border-b border-white/10 last:border-0 text-sm md:text-base group"
                  >
                    <span>{category}</span>
                    <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
              <h3 className="text-black oswald text-lg md:text-xl font-bold uppercase mb-2 md:mb-3">
                Hungry? Order Now!
              </h3>
              <p className="text-black/70 text-xs sm:text-sm mb-3 md:mb-4">
                Try our authentic Indian dishes today.
              </p>
              <a
                href="/menu"
                className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors w-full text-sm md:text-base"
              >
                View Menu
              </a>
              <a
                href="tel:+18259657973"
                className="inline-block mt-2 md:mt-3 text-black font-semibold hover:underline text-sm md:text-base"
              >
                📞 (825) 965-7973
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer {...footerData} />
    </div>
  )
}

export default BlogDetail