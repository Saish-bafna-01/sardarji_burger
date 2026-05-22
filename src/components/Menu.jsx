import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

export default function Menu({ menuData = {}, tabs = [], header = {} }) {
  const [activeTab, setActiveTab] = useState(tabs[0] || "");
  const currentMenuItems = menuData[activeTab] || [];

  return (
    <section className="w-full bg-[#1d384e] py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="flex flex-col items-center gap-7 mb-4">
        <h2 className="text-white text-3xl md:text-5xl oswald font-bold text-center uppercase tracking-wide">
          {header.title}
        </h2>
        <div className="w-40 h-[3px] bg-[#c0d4b2] rounded-full" />
        <p className="text-white/80 text-xl text-center max-w-2xl">
          {header.subtitle}
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        {tabs.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-10">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 animate-fade-in-up ${
                  activeTab === tab
                    ? "bg-[#c0d4b2] text-black shadow-lg shadow-[#c0d4b2]/30 scale-105"
                    : "bg-transparent text-white border border-white/20 hover:border-[#c0d4b2] hover:text-[#c0d4b2] hover:scale-105"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {currentMenuItems.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 sm:gap-3 md:gap-4 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Box */}
              <div className="bg-white/5 rounded-xl md:rounded-2xl aspect-square flex items-center justify-center overflow-hidden p-2 sm:p-3 md:p-4 transition-all duration-500 group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-[#c0d4b2]/10 group-hover:-translate-y-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#c0d4b2]/0 to-[#c0d4b2]/0 group-hover:from-[#c0d4b2]/10 transition-all duration-500 pointer-events-none" />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-0.5 sm:gap-1 flex-1">
                <h4 className="text-white oswald text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide line-clamp-1 transition-colors duration-300 group-hover:text-[#c0d4b2]">
                  {item.name}
                </h4>
                <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 transition-colors duration-300 group-hover:text-white/90">
                  {item.desc}
                </p>
                <span className="text-[#c0d4b2] oswald text-base sm:text-lg md:text-xl font-bold mt-1 transition-all duration-300 group-hover:text-[#c0d4b2]-300 group-hover:scale-105">
                  {item.price}
                </span>
              </div>

              {/* Add to Cart Button */}
              <AddToCartButton item={item} />
            </div>
          ))}
        </div>

        {/* Order Online Note */}
        <p className="text-center text-white/60 mt-6 md:mt-8 text-xs sm:text-sm animate-pulse">
          Add items to your cart and proceed to checkout
        </p>
      </div>
    </section>
  );
}
