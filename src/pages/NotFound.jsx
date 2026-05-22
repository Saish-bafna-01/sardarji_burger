import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { footerData } from '../data/homeData'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />

      {/* 404 Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#c0d4b2] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#c0d4b2]-300 rounded-full blur-3xl animate-pulse animation-delay-500" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-4 sm:mb-6">
            <span className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[280px] font-black text-[#c0d4b2]/20 oswald leading-none select-none">
              404
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white oswald text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 sm:mb-6 -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
            Page Not Found
          </h1>

          {/* Yellow Divider */}
          <div className="w-20 sm:w-24 h-1 bg-[#c0d4b2] rounded-full mx-auto mb-4 sm:mb-6" />

          {/* Description */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-md sm:max-w-lg mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c0d4b2]/30 text-sm sm:text-base"
            >
              Go to Homepage
            </Link>
            <Link
              to="/menu"
              className="bg-transparent border-2 border-[#c0d4b2] text-[#c0d4b2] hover:bg-[#c0d4b2] hover:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              View Our Menu
            </Link>
          </div>

          {/* Additional Links */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/60 text-sm sm:text-base">
            <Link to="/about" className="hover:text-[#c0d4b2] transition-colors">
              About Us
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/blog" className="hover:text-[#c0d4b2] transition-colors">
              Blog
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/contact" className="hover:text-[#c0d4b2] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-[#1c1c1c] py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white oswald text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-4 sm:mb-6">
            Need Help? Contact Us
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            If you believe this is an error, please reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="tel:+18259657973"
              className="flex items-center gap-2 text-[#c0d4b2] hover:text-[#c0d4b2]-300 transition-colors text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (825) 965-7973
            </a>
            <a
              href="mailto:info@sardarjifastfood.com"
              className="flex items-center gap-2 text-[#c0d4b2] hover:text-[#c0d4b2]-300 transition-colors text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@sardarjifastfood.com
            </a>
          </div>
        </div>
      </section>

      <Footer {...footerData} />
    </div>
  )
}

export default NotFound