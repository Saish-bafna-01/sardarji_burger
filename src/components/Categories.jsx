import burgerImg from "../assets/images/cheeseburger.png";
import snackImg from "../assets/images/chips.png";
import beverageImg from "../assets/images/juice.png";
import drinkImg from "../assets/images/drink.png";
import burger2Img from "../assets/images/burger2.png";

const categories = [
  {
    id: "north-indian",
    title: "North Indian",
    description: "Authentic Punjabi flavors",
    bg: "bg-yellow-400",
    textColor: "text-white",
    linkColor: "text-black",
    image: burgerImg,
    align: "top-3 -left-5",
  },
  {
    id: "south-indian",
    title: "South Indian",
    description: "Crispy dosas & more",
    bg: "bg-[#1E6B2E]",
    textColor: "text-white",
    linkColor: "text-yellow-400",
    image: snackImg,
    align: "top-3 -left-8",
  },
  {
    id: "street-food",
    title: "Street Food",
    description: "Spicy Indian chaats",
    bg: "bg-[#C0392B]",
    textColor: "text-white",
    linkColor: "text-yellow-400",
    image: beverageImg,
    align: "top-8 -left-12",
  },
  {
    id: "beverages",
    title: "Beverages",
    description: "Refreshing drinks",
    bg: "bg-[#2980B9]",
    textColor: "text-white",
    linkColor: "text-yellow-400",
    image: drinkImg,
    align: "top-3 -left-5",
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet Indian treats",
    bg: "bg-[#8E44AD]",
    textColor: "text-white",
    linkColor: "text-yellow-400",
    image: burger2Img,
    align: "top-3 -left-8",
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-[#111111] py-16 px-6 md:px-16">
      <div className="max-w-full mx-auto">
        {/* Grid - 3 columns on desktop, auto on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(({ id, title, description, bg, textColor, linkColor, image, align }) => (
            <div
              key={id}
              className={`${bg} rounded-2xl flex items-center overflow-hidden relative min-h-[100px] group cursor-pointer transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* Food Image — left side */}
              <div className="w-[100px] h-[100px] flex-shrink-0 relative">
                <img
                  src={image}
                  alt={title}
                  className={`w-full h-full object-cover object-center absolute ${align} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>

              {/* Text Content */}
              <div className={`flex flex-col gap-1 px-4 py-4 ${textColor}`}>
                <h3 className="text-xl oswald font-extrabold tracking-wide">{title}</h3>
                <p className="text-sm opacity-80">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}