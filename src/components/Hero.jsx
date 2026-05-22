import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeHeroImg from "../assets/images/home_hero.jpg";
import homeHero2 from "../assets/images/home_hero2.jpg";
import homeHero3 from "../assets/images/home_hero3.jpg";
import homeHero4 from "../assets/images/home_hero4.jpg";
import homeHero5 from "../assets/images/home_hero5.jpg";

const slides = [
  {
    image: homeHeroImg,
    heading: "Pure Desi Taste, Fresh Every Day in Edmonton",
    description: "Enjoy our delicious Veg Thali with flavorful rice, soft rotis, any three authentic sabji choices, fresh raita, and salad — a complete desi meal full of taste and satisfaction.",
    ctaText: "Order Now",
    ctaLink: "/menu",
    bgMobile: "#f0f7ed"
  },
  {
    image: homeHero2,
    heading: "Every Sip Feels Like Pure Home in Edmonton",
    description: "Experience the rich taste of traditional Indian cuisine with our carefully crafted recipes passed down through generations, bringing the true essence of India to your plate.",
    ctaText: "Explore Menu",
    ctaLink: "/menu",
    bgMobile: "#fdf6e3"
  },
  {
    image: homeHero3,
    heading: "Fresh Ingredients, Wholesome Meals Daily",
    description: "We source the freshest vegetables and finest spices to create dishes that are not just delicious but also nutritious, ensuring every bite is a celebration of health and taste.",
    ctaText: "View Specials",
    ctaLink: "/menu",
    bgMobile: "#f5f0e8"
  },
  {
    image: homeHero4,
    heading: "Your Favorite Desi Dishes, Now in Edmonton",
    description: "From crispy samosas to creamy curries, discover a wide variety of authentic dishes that bring the vibrant flavors of Indian street food and home cooking right to your doorstep.",
    ctaText: "Order Online",
    ctaLink: "/menu",
    bgMobile: "#fff8f0"
  },
  {
    image: homeHero5,
    heading: "Taste the Tradition, Feel at Home",
    description: "Every dish tells a story of tradition and love. Join us for a culinary journey that celebrates the warmth of Indian hospitality with every meal served fresh and flavorful.",
    ctaText: "Reserve Now",
    ctaLink: "/contact",
    bgMobile: "#e8f5e9"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="w-full flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-48 py-16 md:py-24 lg:py-32 overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[450px] transition-all duration-500"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Mobile background color overlay */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ backgroundColor: slide.bgMobile, opacity: 0.95 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left — Empty space for background image on desktop */}
        <div className="hidden md:block order-1"></div>

        {/* Right — Content */}
        <div
          key={currentSlide}
          className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-2 text-center md:text-left animate-fade-in-up"
        >
          {/* Heading */}
          <h1 className="text-[#254220] oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] font-bold leading-tight uppercase">
            {slide.heading.split('Edmonton')[0]}
            {slide.heading.includes('Edmonton') && <span className="text-[#57a440]">Edmonton</span>}
            {slide.heading.split('Edmonton')[1]}
          </h1>

          {/* Divider */}
          <div className="w-16 sm:w-20 md:w-24 h-[3px] bg-[#c0d4b2] rounded-full mx-auto md:mx-0" />

          {/* Description */}
          <p className="text-[#496242] text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-3xl mx-auto md:mx-0">
            {slide.description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mt-2">
            <Link
              to={slide.ctaLink}
              className="inline-block text-white text-sm md:text-base font-semibold px-6 sm:px-8 py-3 md:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
              style={{ backgroundColor: '#447241' }}
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}