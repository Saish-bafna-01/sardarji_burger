// Home Page Data
import burgerImg from "../assets/images/burger.png";
import cheeseburgerImg from "../assets/images/cheeseburger.png";
import chipsImg from "../assets/images/chips.png";
import south_india from "../assets/images/south_india.png";
import juiceImg from "../assets/images/juice.png";
import beverages from "../assets/images/beverages.png";
import street_food from "../assets/images/street_food.png";
import north_india from "../assets/images/north_india.png";
import desserts from "../assets/images/desserts.png";
import drinkImg from "../assets/images/promo2.png";
import burger2Img from "../assets/images/promo.png";
import aboutImg from "../assets/images/about.png";
import testimonialImg from "../assets/images/testimonial.jpg";
import offerImg from "../assets/images/offer.jpg";
import news1Img from "../assets/images/news.jpg";
import news2Img from "../assets/images/news2.jpg";
import news3Img from "../assets/images/news3.jpg";

// North Indian images
import chanaBhature from "../assets/images/Chana Bhature.png";
import pavBhaji from "../assets/images/Pav Bhaji.png";
import vegThali from "../assets/images/Veg Thali (Rice + 3 Roti + Any Two Sabji + Raita + Salad).png";
import alooParantha from "../assets/images/Desi Ghee Aloo Parantha.png";
import shahiPaneer from "../assets/images/Shahi Paneer.png";
import matarPaneer from "../assets/images/Matar Paneer.png";

// South Indian images
import masalaDosa from "../assets/images/Masala Dosa.png";
import paneerDosa from "../assets/images/Paneer Tika Dosa.png";
import gheeDosa from "../assets/images/Ghee Dhosa.png";
import idly from "../assets/images/Methu Vada.png";

// Street Food images
import paneerPakora from "../assets/images/Paneer Pakora.png";
import alooTikkiChaat from "../assets/images/alootikkichaat.png";
import papriChaat from "../assets/images/Papri Chaat.png";
import dahiBhalla from "../assets/images/Dahi Bhalla.png";

// Beverages images
import mangoLassi from "../assets/images/Mango Lassi.png";
import chai from "../assets/images/Chai.png";
import lassi from "../assets/images/Lassi (Sweet or Salty).png";
import mangoShake from "../assets/images/Mango Shake.png";
import milkshake from "../assets/images/Milkshake.png";
import lemonade from "../assets/images/Lemonade.png";
import carrotJuice from "../assets/images/Carrot Juice.png";
import orangeJuice from "../assets/images/Orange Juice.png";
import lemonSoda from "../assets/images/Lemon Soda.png";
import cannedPop from "../assets/images/Canned Pop.png";
import bottledWater from "../assets/images/Bottled Water.png";

// Desserts images
import gulabJamun from "../assets/images/Hot Gulab Jamun.png";
import bebeChuri from "../assets/images/Be-be’s Churi Desi Ghee & Gur.png";
import momChuri from "../assets/images/Mom’s Churi Desi Ghee sugar.png";

// Categories Data
export const categoriesData = [
  {
    id: "north-indian",
    title: "North Indian",
    description: "Authentic Punjabi flavors",
    bg: "bg-[#d9e9cc]",
    textColor: "text-black",
    linkColor: "text-black",
    image: north_india,
    align: "top-3 -left-5",
  },
  {
    id: "south-indian",
    title: "South Indian",
    description: "Crispy dosas & more",
    bg: "bg-[#f7e1e1]",
    textColor: "text-black",
    linkColor: "text-[#c0d4b2]",
    image: south_india,
    align: "top-3 -left-8",
  },
  {
    id: "street-food",
    title: "Street Food",
    description: "Spicy Indian chaats",
    bg: "bg-[#c0d4b2]",
    textColor: "text-black",
    linkColor: "text-[#c0d4b2]",
    image: street_food,
    align: "top-8 -left-12",
  },
  {
    id: "beverages",
    title: "Beverages",
    description: "Refreshing drinks",
    bg: "bg-[#d6f2fe]",
    textColor: "text-black",
    linkColor: "text-[#c0d4b2]",
    image: beverages,
    align: "top-3 -left-5",
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet Indian treats",
    bg: "bg-[#e9dcf6]",
    textColor: "text-black",
    linkColor: "text-[#c0d4b2]",
    image: desserts,
    align: "top-3 -left-8",
  },
];

// Promos Data
export const promosData = [
  {
    id: "taste-flavors",
    tag: "Taste the Real Flavors",
    title: "Taste the Real Flavors of India",
    description:
      "Experience authentic recipes made with fresh ingredients and traditional spices.",
    features: [
      "Freshly prepared meals daily",
      "Authentic Punjabi & South Indian taste",
      "Affordable pricing",
      "Fast service & takeaway options",
    ],
    image: burger2Img,
    alt: "Indian food",
    cta: "About Us",
  },
  {
    id: "street-food",
    tag: "Street Food",
    title: "Street Food That Feels Like Home",
    description:
      "From crispy snacks to spicy delights, enjoy your favorite Indian street food in Edmonton.",
    features: [
      "Homemade-style flavors",
      "Perfect for quick bites",
      "Family-friendly meals",
      "Available for dine-in & delivery",
    ],
    image: drinkImg,
    alt: "Street food",
    cta: "Explore Menu",
  },
];

// About Section Data
export const aboutSectionData = {
  image: aboutImg,
  title: "Taste the Real Flavors of India",
  description:
    "Experience authentic recipes made with fresh ingredients and traditional spices. We bring the taste of Punjab and South India to Edmonton with love and passion.",
  features: [
    "Freshly prepared meals daily",
    "Authentic Punjabi & South Indian taste",
    "Affordable pricing",
    "Fast service & takeaway options",
  ],
  ctaText: "About Us",
  ctaLink: "/about",
};

// Menu Data
export const menuData = {
  "North Indian": [
    {
      id: 1,
      name: "Chana Bhature",
      desc: "Authentic Punjabi chickpea curry with fluffy bhature",
      price: "$9.99",
      img: chanaBhature,
    },
    {
      id: 2,
      name: "Pav Bhaji",
      desc: "Spiced vegetable mash with buttery pav",
      price: "$7.99",
      img: pavBhaji,
    },
    {
      id: 3,
      name: "Veg Thali",
      desc: "Complete Indian meal with rice, roti, sabji, raita & salad",
      price: "$9.99",
      img: vegThali,
    },
    {
      id: 4,
      name: "Aloo Parantha",
      desc: "Stuffed potato flatbread with desi ghee",
      price: "$3.99",
      img: alooParantha,
    },
    {
      id: 5,
      name: "Shahi Paneer",
      desc: "Creamy tomato-based paneer curry",
      price: "$7.99",
      img: shahiPaneer,
    },
    {
      id: 6,
      name: "Matar Paneer",
      desc: "Peas and paneer in tomato gravy",
      price: "$7.99",
      img: matarPaneer,
    },
  ],
  "South Indian": [
    {
      id: 1,
      name: "Masala Dosa",
      desc: "Crispy South Indian dosa with chutney & sambar",
      price: "$12.99",
      img: masalaDosa,
    },
    {
      id: 2,
      name: "Paneer Dosa",
      desc: "Dosa filled with spiced paneer",
      price: "$12.99",
      img: paneerDosa,
    },
    {
      id: 3,
      name: "Ghee Roast Dosa",
      desc: "Crispy dosa roasted in pure ghee",
      price: "$12.99",
      img: gheeDosa,
    },
    {
      id: 4,
      name: "Idly",
      desc: "Steamed rice cakes with sambar & chutney",
      price: "$10.99",
      img: idly,
    },
  ],
  "Street Food": [
    {
      id: 1,
      name: "Paneer Pakora",
      desc: "Crispy fried paneer fritters",
      price: "$9.99",
      img: paneerPakora,
    },
    {
      id: 2,
      name: "Aloo Tikki Chaat",
      desc: "Spiced potato patties with chutneys",
      price: "$6.99",
      img: alooTikkiChaat,
    },
    {
      id: 3,
      name: "Papri Chaat",
      desc: "Crispy wafers with yogurt and chutneys",
      price: "$5.99",
      img: papriChaat,
    },
    {
      id: 4,
      name: "Dahi Bhalla",
      desc: "Lentil dumplings in spiced yogurt",
      price: "$7.99",
      img: dahiBhalla,
    },
  ],
  Beverages: [
    {
      id: 1,
      name: "Mango Lassi",
      desc: "Refreshing yogurt-based mango drink",
      price: "$5.99",
      img: mangoLassi,
    },
    {
      id: 2,
      name: "Tea (Chai)",
      desc: "Traditional Indian spiced tea",
      price: "$0.99",
      img: chai,
    },
    {
      id: 3,
      name: "Lassi (Sweet/Salty)",
      desc: "Traditional yogurt drink",
      price: "$3.99",
      img: lassi,
    },
    {
      id: 4,
      name: "Mango Shake",
      desc: "Thick and creamy mango shake",
      price: "$4.99",
      img: mangoShake,
    },
    {
      id: 5,
      name: "Milkshake",
      desc: "Creamy milkshake in various flavors",
      price: "$5.99",
      img: milkshake,
    },
    {
      id: 6,
      name: "Lemonade",
      desc: "Refreshing fresh lemonade",
      price: "$4.99",
      img: lemonade,
    },
    {
      id: 7,
      name: "Carrot Juice",
      desc: "Fresh carrot juice",
      price: "$5.99",
      img: carrotJuice,
    },
    {
      id: 8,
      name: "Lemon Soda",
      desc: "Refreshing lemon soda",
      price: "$4.99",
      img: lemonSoda,
    },
    {
      id: 9,
      name: "Canned Pop",
      desc: "Assorted canned beverages",
      price: "$1.75",
      img: cannedPop,
    },
    {
      id: 10,
      name: "Bottled Water",
      desc: "Pure drinking water",
      price: "$2.25",
      img: bottledWater,
    },
  ],
  Desserts: [
    {
      id: 1,
      name: "Hot Gulab Jamun",
      desc: "Deep-fried milk balls in sugar syrup (2 pcs)",
      price: "$3.99",
      img: gulabJamun,
    },
    {
      id: 2,
      name: "Be-be's Churi",
      desc: "Traditional sweet treat with desi ghee & gur",
      price: "$3.99",
      img: bebeChuri,
    },
    {
      id: 3,
      name: "Mom's Churi",
      desc: "Homestyle sweet dessert with desi ghee & sugar",
      price: "$3.99",
      img: momChuri,
    },
  ],
};

export const menuTabs = [
  "North Indian",
  "South Indian",
  "Street Food",
  "Beverages",
  "Desserts",
];

// Menu Section Header
export const menuSectionHeader = {
  title: "Our Best Menu",
  subtitle:
    "Authentic North & South Indian cuisine, street food, beverages, and desserts.",
};

// Video Section Data
export const videoSectionData = {
  heading: "Don't worry! You can order your food just by phone",
  description:
    "Enjoy your favorite meals anytime, anywhere with quick and easy ordering.",
  highlights: ["Free Delivery", "Quick Service", "Fresh Food", "Easy Ordering"],
  videoUrl: "https://www.youtube.com/embed/HS24PywYlxg",
  phone: "(825) 965-7973",
};

// Testimonials Data
export const testimonialsData = {
  heading: "What Our Customers Say",
  subtitle:
    "Hear from our valued customers about their experience at Sardarji Fastfood & Mudpot.",
  reviews: [
    {
      id: 1,
      name: "Michelle B.",
      rating: 5,
      text:
        "The flavours remind me of Carla's cooking at Mudpot years ago. Delicious as usual.",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 2,
      name: "Mohini T.",
      rating: 5,
      text:
        "They were very accommodating with my dietary restrictions. Great quality, great taste - I'd definitely recommend this place.",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 3,
      name: "Sasi K.",
      rating: 5,
      text:
        "Chicken65 and egg kothu parotta… Tasty is amazing and it's very delicious. ⭐️10/10",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 4,
      name: "Sunil J.",
      rating: 5,
      text: "Real taste of Kerala food.",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 5,
      name: "Syed J.",
      rating: 5,
      text: "Excellent food and best quality keep it up thanks.",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 6,
      name: "Soby S.",
      rating: 5,
      text: "Authentic South Indian food!!!",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 7,
      name: "Maulik D.",
      rating: 5,
      text: "EXTRAORDINARY AND VERY DELICIOUS PEPPER CHICKEN",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 8,
      name: "Matbarsingh N.",
      rating: 5,
      text:
        "Tasty south Indian food. First time we ordered from here and loved it. Will order again for sure.",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 9,
      name: "Ankita K.",
      rating: 5,
      text:
        "I ordered mysore masala dosa, it's tasty and full flavour of South India.",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 10,
      name: "Pavan M.",
      rating: 5,
      text: "I have really liked the food, it's so tasty!",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 11,
      name: "Komal N.",
      rating: 5,
      text: "Nice food and nice packaging.",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
    {
      id: 12,
      name: "Nav K.",
      rating: 5,
      text: "Dosa was good!",
      designation: "Happy Customer",
      avatar: testimonialImg,
    },
  ],
};

// Special Offer Data
export const specialOfferData = {
  backgroundImage: offerImg,
  heading: "Get A Special Offer For Your Special Occasion",
  description:
    "Celebrate your events with authentic Indian flavors and customized food options. Whether it's a birthday, anniversary, or corporate event, we've got you covered.",
  ctaText: "Book a Reservation",
  ctaLink: "/contact",
};

// News Articles Data
export const newsArticlesData = {
  heading: "Our Blog & News",
  subtitle:
    "Stay updated with the latest food trends, cooking tips, and special offers from Sardarji Fastfood & Mudpot.",
  articles: [
    {
      id: 1,
      category: "Food Trends",
      title: "Latest Food Trends in Indian Cuisine",
      desc: "Discover the newest trends in authentic Indian cooking and fusion dishes that are taking Edmonton by storm.",
      img: news1Img,
    },
    {
      id: 2,
      category: "Tips",
      title: "Indian Cuisine Tips & Cooking Secrets",
      desc: "Learn the secrets behind authentic Indian flavors and traditional cooking methods from our expert chefs.",
      img: news2Img,
    },
    {
      id: 3,
      category: "Offers",
      title: "Special Offers & Updates",
      desc: "Stay updated with our latest promotions, new menu items, and special discounts for our valued customers.",
      img: news3Img,
    },
  ],
};

// Footer Data
export const footerData = {
  newsletter: {
    heading: "Get Exclusive Updates",
    description:
      "Stay updated with our latest offers, new menu items, and promotions.",
  },
  brand: {
    name: "Sardarji Fastfood & Mudpot",
    // tagline: "Flavors That Feel Like Home",
    description:
      "Flavors that feel like home, crafted with tradition and care. We bring you the rich essence of North and South Indian cuisine, prepared with authentic spices and heartfelt passion. Experience the warmth of Indian hospitality right here in Edmonton, Alberta.",
  },
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  supportLinks: ["FAQ's", "Privacy Policy", "Terms & Conditions", "Contact Us"],
  contact: {
    phone: "(825) 965-7973",
    email: "info@sardarjifastfood.com",
  },
  address: "2382 23 Ave NW, Edmonton, AB T6T 0R1",
  socialLinks: [
    { name: "TikTok", href: "https://www.tiktok.com/@sardarji.fast.food" },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Sardar-Ji-Fast-Food/61583740583407",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sardarji_fastfood_mudpot/",
    },
    { name: "Pinterest", href: "https://ca.pinterest.com/sardarjifastfood/" },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@SardarJiFastFoodMudpot",
    },
  ],
  copyright: "© Copyright 2026. All Rights Reserved.",
  credits: "Designed & Managed by ITBS.ca",
};
