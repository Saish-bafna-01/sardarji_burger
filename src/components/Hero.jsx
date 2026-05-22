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
    heading: "Pure Desi Taste at Sardar Ji Fastfood",
    description:
      "Enjoy our delicious Veg Thali with flavorful rice, soft rotis, any three authentic sabji choices, fresh raita, and salad — a complete desi meal full of taste and satisfaction.",
    ctaText: "Order Now",
    ctaLink: "/menu",
    bgMobile: "#d9e9ce",
    textColor: {
      heading: "#254220",
      highlight: "#57a440",
      description: "#496242",
      divider: "#c0d4b2",
      button: "#447241",
    },
  },
  {
    image: homeHero2,
    heading: "Every Sip Feels Like Home at Sardar Ji Fastfood",
    description:
      "Experience the rich taste of traditional Indian cuisine with our carefully crafted recipes passed down through generations, bringing the true essence of India to your plate.",
    ctaText: "Explore Menu",
    ctaLink: "/menu",
    bgMobile: "#d6f1ff",
    textColor: {
      heading: "#0c3162",
      highlight: "#027dc0",
      description: "#204471",
      divider: "#8cc1e4",
      button: "#0c3061",
    },
  },
  {
    image: homeHero3,
    heading: "Taste Tradition at Sardar Ji Fastfood",
    description:
      "Freshly prepared idli, crispy vada, masala dosa, sambhar, coconut chutney, and uttapam served with authentic South Indian flavor and aroma.",
    ctaText: "View Specials",
    ctaLink: "/menu",
    bgMobile: "#fee8e8",
    textColor: {
      heading: "#770a0b",
      highlight: "#bf1010",
      description: "#832627",
      divider: "#e39696",
      button: "#780c0b",
    },
  },
  {
    image: homeHero4,
    heading: "Fresh Meals Daily at Sardar Ji Fastfood",
    description:
      "Enjoy Aloo Tikki Noodle Burger, crispy fries, fresh veg samosas, desi ghee aloo parantha, and hot bread pakora full of authentic Indian street food flavor.",
    ctaText: "Order Online",
    ctaLink: "/menu",
    bgMobile: "#e9e0d1",
    textColor: {
      heading: "#533d0f",
      highlight: "#af7a08",
      description: "#655026",
      divider: "#d1b991",
      button: "#533d0f",
    },
  },
  {
    image: homeHero5,
    heading: "Desi Flavours at Sardar Ji Fastfood",
    description:
      "From chilled drinks to warm gulab jamun, enjoy refreshing flavors and traditional Indian sweetness in every sip and bite with rich taste and pure satisfaction.",
    ctaText: "Reserve Now",
    ctaLink: "/contact",
    bgMobile: "#e9dcf7",
    textColor: {
      heading: "#450a6e",
      highlight: "#6f00bc",
      description: "#57227c",
      divider: "#c39fe2",
      button: "#45096e",
    },
  },
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
      className={`w-full flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-48 py-16 md:py-24 lg:py-32 overflow-hidden min-h-[400px] md:min-h-[700px] lg:min-h-[680px] transition-all duration-500`}
      style={{
        backgroundImage: window.innerWidth >= 1024 ? `url(${slide.image})` : "none",
        backgroundColor: window.innerWidth < 1024 ? slide.bgMobile : "transparent",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left — Empty space for background image on desktop */}
        <div className="hidden md:block order-1"></div>

        {/* Right — Content */}
        <div
          key={currentSlide}
          className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-2 text-center md:text-left animate-fade-in-up md:ml-10"
        >
          {/* Heading */}
          <h1
            className="oswald text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[38px] font-bold leading-tight uppercase transition-colors duration-500"
            style={{ color: slide.textColor.heading }}
          >
            {slide.heading.split("Sardar Ji Fastfood")[0]}
            {slide.heading.includes("Sardar Ji Fastfood") && (
              <span style={{ color: slide.textColor.highlight }}>
                Sardar Ji Fastfood
              </span>
            )}
            {slide.heading.split("Sardar Ji Fastfood")[1]}
          </h1>

          {/* Divider */}
          <div
            className="w-16 sm:w-20 md:w-24 h-[3px] rounded-full mx-auto md:mx-0 transition-colors duration-500"
            style={{ backgroundColor: slide.textColor.divider }}
          />

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed max-w-xl lg:max-w-3xl mx-auto md:mx-0 transition-colors duration-500"
            style={{ color: slide.textColor.description }}
          >
            {slide.description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mt-2">
            <Link
              to={slide.ctaLink}
              className="inline-block text-white text-sm md:text-base font-semibold px-6 sm:px-8 py-3 md:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
              style={{ backgroundColor: slide.textColor.button }}
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:flex hidden md:block items-center justify-center group transition-all duration-300"
        aria-label="Previous slide"
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: slide.textColor.divider }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:stroke-white"
          style={{ stroke: slide.textColor.button }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:flex items-center justify-center group transition-all duration-300 hidden md:block"
        aria-label="Next slide"
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: slide.textColor.divider }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:stroke-white"
          style={{ stroke: slide.textColor.button }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
}
