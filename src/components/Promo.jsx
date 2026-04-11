import { BsCheckLg } from "react-icons/bs";
import burgerPromoImg from "../assets/images/burger2.png";
import cokeImg from "../assets/images/drink.png";

const promos = [
  {
    id: "taste-flavors",
    tag: "Taste the Real Flavors",
    title: "Taste the Real Flavors of India",
    description: "Experience authentic recipes made with fresh ingredients and traditional spices.",
    features: [
      "Freshly prepared meals daily",
      "Authentic Punjabi & South Indian taste",
      "Affordable pricing",
      "Fast service & takeaway options",
    ],
    image: burgerPromoImg,
    alt: "Indian food",
    cta: "About Us",
  },
  {
    id: "street-food",
    tag: "Street Food",
    title: "Street Food That Feels Like Home",
    description: "From crispy snacks to spicy delights, enjoy your favorite Indian street food in Edmonton.",
    features: [
      "Homemade-style flavors",
      "Perfect for quick bites",
      "Family-friendly meals",
      "Available for dine-in & delivery",
    ],
    image: cokeImg,
    alt: "Street food",
    cta: "Explore Menu",
  },
];

export default function Promos() {
  return (
    <section className="w-full bg-[#111111] py-12 px-6 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {promos.map(({ id, tag, title, description, features, image, alt, cta }) => (
          <div
            key={id}
            className="bg-[#1c1c1c] rounded-2xl flex items-center justify-between overflow-hidden px-8 py-8 gap-4 group min-h-[280px]"
          >
            {/* Left — Text */}
            <div className="flex flex-col gap-3 flex-1">
              <span className="text-yellow-500 text-lg font-semibold">{tag}</span>
              <h3 className="text-white oswald text-3xl font-bold uppercase leading-tight max-w-[360px]">
                {title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-[280px]">
                {description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-2 mt-2">
                {features.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <BsCheckLg className="text-yellow-400 flex-shrink-0" size={16} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-2 text-yellow-400 text-base font-semibold hover:underline transition-all duration-200 w-fit"
              >
                {cta}
              </a>
            </div>

            {/* Right — Image */}
            <div className="flex-shrink-0 w-[280px] h-[280px] flex items-center justify-center">
              <img
                src={image}
                alt={alt}
                className="burger-img w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}