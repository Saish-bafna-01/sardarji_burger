import { FiArrowRight } from "react-icons/fi";

import news1 from "../assets/images/news.jpg";
import news2 from "../assets/images/news2.jpg";
import news3 from "../assets/images/news3.jpg";

const articles = [
  {
    id: 1,
    category: "Food Trends",
    title: "Latest Food Trends in Indian Cuisine",
    desc: "Discover the newest trends in authentic Indian cooking and fusion dishes that are taking Edmonton by storm.",
    img: news1,
  },
  {
    id: 2,
    category: "Tips",
    title: "Indian Cuisine Tips & Cooking Secrets",
    desc: "Learn the secrets behind authentic Indian flavors and traditional cooking methods from our expert chefs.",
    img: news2,
  },
  {
    id: 3,
    category: "Offers",
    title: "Special Offers & Updates",
    desc: "Stay updated with our latest promotions, new menu items, and special discounts for our valued customers.",
    img: news3,
  },
];

export default function NewsArticles() {
  return (
    <section className="w-full bg-[#111111] py-16 px-6 md:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <h2 className="text-white oswald text-4xl md:text-5xl font-bold uppercase tracking-wide">
            Our Blog & News
          </h2>
          <div className="w-40 h-[3px] bg-yellow-500 rounded-full" />
          <p className="text-gray-400 text-xl text-center max-w-2xl mt-2 leading-relaxed">
            Stay updated with the latest food trends, cooking tips, and special offers from Sardarji Fastfood & Mudpot.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col group cursor-pointer">
              {/* Image with category badge */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge — bottom left */}
                <span className="absolute bottom-0 left-0 bg-yellow-500 text-black text-sm font-semibold px-4 py-1">
                  {article.category}
                </span>
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-3 pt-5">
                <h3 className="text-white oswald text-2xl font-bold uppercase leading-snug">
                  {article.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {article.desc}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-yellow-500 text-base font-semibold hover:gap-2 transition-all duration-200 mt-1 w-fit"
                >
                  Read More <FiArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}