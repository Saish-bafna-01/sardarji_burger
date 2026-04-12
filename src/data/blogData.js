// Blog Page Data
import blogHeroBg from "../assets/images/about_bg.jpg";
import masalaDosaImg from "../assets/images/Masala Dosa.png";
import alooParanthaImg from "../assets/images/Desi Ghee Aloo Parantha.png";
import mangoLassiImg from "../assets/images/Mango Lassi.png";
import vegThaliImg from "../assets/images/Veg Thali (Rice + 3 Roti + Any Two Sabji + Raita + Salad).png";

// Blog Hero Data
export const blogHeroData = {
  backgroundImage: blogHeroBg,
  heading: "Discover the Taste of Authentic Indian Food",
  description: "Explore delicious stories, food insights, and traditional recipes from North & South Indian cuisine — right here in Edmonton.",
};

// Featured Blogs Data
export const featuredBlogsData = {
  heading: "Blog Highlights",
  blogs: [
    {
      id: 1,
      title: "Why Masala Dosa is So Popular?",
      excerpt: "Discover why this crispy South Indian dish is loved worldwide for its taste and texture.",
      image: masalaDosaImg,
      category: "South Indian",
      slug: "why-masala-dosa-is-so-popular",
    },
    {
      id: 2,
      title: "Aloo Paratha – The Comfort Food of India",
      excerpt: "A buttery, flavorful flatbread that feels just like home in every bite.",
      image: alooParanthaImg,
      category: "North Indian",
      slug: "aloo-paratha-comfort-food",
    },
    {
      id: 3,
      title: "Lassi – The Perfect Refreshing Drink",
      excerpt: "A traditional yogurt-based drink that cools and refreshes instantly.",
      image: mangoLassiImg,
      category: "Beverages",
      slug: "lassi-perfect-refreshing-drink",
    },
    {
      id: 4,
      title: "Veg Thali – A Complete Indian Meal",
      excerpt: "A wholesome platter packed with flavors, variety, and nutrition.",
      image: vegThaliImg,
      category: "Main Course",
      slug: "veg-thali-complete-indian-meal",
    },
  ],
};

// Blog Articles Data (Full articles)
export const blogArticlesData = [
  {
    id: 1,
    category: "South Indian",
    title: "Why Masala Dosa is So Good?",
    excerpt: "Masala dosa is one of the most loved South Indian dishes, known for its crispy texture and delicious filling.",
    img: masalaDosaImg,
    date: "April 10, 2026",
    slug: "why-masala-dosa-is-so-popular",
    content: `Masala dosa is one of the most loved South Indian dishes, known for its crispy texture and delicious filling. Made from fermented rice and lentil batter, the dosa is cooked until golden and served with a flavorful potato masala inside.

What makes it special is the perfect balance of crunch and softness, combined with coconut chutney and sambar. It's light, healthy, and full of authentic South Indian flavors — making it a favorite choice for breakfast, lunch, or dinner.

At Sardarji Fastfood & Mudpot, we serve authentic masala dosa made fresh daily, bringing the true taste of South India to Edmonton.`,
  },
  {
    id: 2,
    category: "North Indian",
    title: "Aloo Paratha – A True Indian Classic",
    excerpt: "Aloo paratha is a traditional North Indian dish made with whole wheat dough stuffed with spiced mashed potatoes.",
    img: alooParanthaImg,
    date: "April 8, 2026",
    slug: "aloo-paratha-comfort-food",
    content: `Aloo paratha is a traditional North Indian dish made with whole wheat dough stuffed with spiced mashed potatoes. Cooked with butter or desi ghee, it delivers a rich and satisfying taste.

Served with yogurt, pickle, or butter, this dish is loved for its comforting and homemade flavor. Whether you enjoy it for breakfast or a full meal, aloo paratha always brings warmth and satisfaction.

Try our Desi Ghee Aloo Paratha at Sardarji Fastfood & Mudpot — made fresh with love and authentic Punjabi flavors.`,
  },
  {
    id: 3,
    category: "Beverages",
    title: "Lassi – The Ultimate Refreshment",
    excerpt: "Lassi is a refreshing yogurt-based drink that is both delicious and healthy. Available in sweet or salty variations.",
    img: mangoLassiImg,
    date: "April 5, 2026",
    slug: "lassi-perfect-refreshing-drink",
    content: `Lassi is a refreshing yogurt-based drink that is both delicious and healthy. Available in sweet or salty variations, it is a perfect companion to spicy Indian meals.

Mango lassi, one of the most popular types, blends fresh mango pulp with yogurt to create a creamy and cooling drink. It not only enhances your meal but also helps in digestion and keeps you refreshed.

Visit us to try our Mango Lassi, Sweet Lassi, or Salty Lassi — all made fresh with quality ingredients.`,
  },
  {
    id: 4,
    category: "Main Course",
    title: "Veg Thali – A Complete Meal Experience",
    excerpt: "Veg thali is a complete Indian meal that offers a variety of dishes on one plate.",
    img: vegThaliImg,
    date: "April 3, 2026",
    slug: "veg-thali-complete-indian-meal",
    content: `Veg thali is a complete Indian meal that offers a variety of dishes on one plate. It typically includes rice, roti, two sabjis, raita, and salad — giving a perfect balance of flavors and nutrition.

Each element in the thali complements the other, creating a rich and satisfying dining experience. It's ideal for those who want to enjoy multiple flavors in one wholesome meal.

Our Veg Thali at Sardarji Fastfood & Mudpot comes with Rice + 3 Roti + Any Two Sabji + Raita + Salad — a complete meal for just $9.99!`,
  },
];

// Newsletter Section Data
export const blogNewsletterData = {
  heading: "Get Exclusive Updates",
  description: "Stay updated with our latest offers, new menu items, and promotions.",
};