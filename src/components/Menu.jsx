import { useState } from "react";

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

const menuData = {
  "North Indian": [
    { id: 1, name: "Chana Bhature", desc: "Authentic Punjabi chickpea curry with fluffy bhature", price: "$9.99", img: chanaBhature },
    { id: 2, name: "Pav Bhaji", desc: "Spiced vegetable mash with buttery pav", price: "$7.99", img: pavBhaji },
    { id: 3, name: "Veg Thali", desc: "Complete Indian meal with rice, roti, sabji, raita & salad", price: "$9.99", img: vegThali },
    { id: 4, name: "Aloo Parantha", desc: "Stuffed potato flatbread with desi ghee", price: "$3.99", img: alooParantha },
    { id: 5, name: "Shahi Paneer", desc: "Creamy tomato-based paneer curry", price: "$7.99", img: shahiPaneer },
    { id: 6, name: "Matar Paneer", desc: "Peas and paneer in tomato gravy", price: "$7.99", img: matarPaneer },
  ],
  "South Indian": [
    { id: 1, name: "Masala Dosa", desc: "Crispy South Indian dosa with chutney & sambar", price: "$12.99", img: masalaDosa },
    { id: 2, name: "Paneer Dosa", desc: "Dosa filled with spiced paneer", price: "$12.99", img: paneerDosa },
    { id: 3, name: "Ghee Roast Dosa", desc: "Crispy dosa roasted in pure ghee", price: "$12.99", img: gheeDosa },
    { id: 4, name: "Idly", desc: "Steamed rice cakes with sambar & chutney", price: "$10.99", img: idly },
  ],
  "Street Food": [
    { id: 1, name: "Paneer Pakora", desc: "Crispy fried paneer fritters", price: "$9.99", img: paneerPakora },
    { id: 2, name: "Aloo Tikki Chaat", desc: "Spiced potato patties with chutneys", price: "$6.99", img: alooTikkiChaat },
    { id: 3, name: "Papri Chaat", desc: "Crispy wafers with yogurt and chutneys", price: "$5.99", img: papriChaat },
    { id: 4, name: "Dahi Bhalla", desc: "Lentil dumplings in spiced yogurt", price: "$7.99", img: dahiBhalla },
  ],
  "Beverages": [
    { id: 1, name: "Mango Lassi", desc: "Refreshing yogurt-based mango drink", price: "$5.99", img: mangoLassi },
    { id: 2, name: "Tea (Chai)", desc: "Traditional Indian spiced tea", price: "$0.99", img: chai },
    { id: 3, name: "Lassi (Sweet/Salty)", desc: "Traditional yogurt drink", price: "$3.99", img: lassi },
    { id: 4, name: "Mango Shake", desc: "Thick and creamy mango shake", price: "$4.99", img: mangoShake },
    { id: 5, name: "Milkshake", desc: "Creamy milkshake in various flavors", price: "$5.99", img: milkshake },
    { id: 6, name: "Lemonade", desc: "Refreshing fresh lemonade", price: "$4.99", img: lemonade },
    { id: 7, name: "Carrot Juice", desc: "Fresh carrot juice", price: "$5.99", img: carrotJuice },
    { id: 8, name: "Orange Juice", desc: "Fresh orange juice", price: "$6.99", img: orangeJuice },
    { id: 9, name: "Lemon Soda", desc: "Refreshing lemon soda", price: "$4.99", img: lemonSoda },
    { id: 10, name: "Canned Pop", desc: "Assorted canned beverages", price: "$1.75", img: cannedPop },
    { id: 11, name: "Bottled Water", desc: "Pure drinking water", price: "$2.25", img: bottledWater },
  ],
  "Desserts": [
    { id: 1, name: "Hot Gulab Jamun", desc: "Deep-fried milk balls in sugar syrup (2 pcs)", price: "$3.99", img: gulabJamun },
    { id: 2, name: "Be-be's Churi", desc: "Traditional sweet treat with desi ghee & gur", price: "$3.99", img: bebeChuri },
    { id: 3, name: "Mom's Churi", desc: "Homestyle sweet dessert with desi ghee & sugar", price: "$3.99", img: momChuri },
  ],
};

const tabs = ["North Indian", "South Indian", "Street Food", "Beverages", "Desserts"];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("North Indian");

  return (
    <section className="w-full bg-[#111111] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-7 mb-4">
          <h2 className="text-white text-3xl md:text-5xl oswald font-extrabold uppercase tracking-wide">
            Our Best Menu
          </h2>
          <div className="w-40 h-[3px] bg-yellow-400 rounded-full" />
          <p className="text-white/80 text-xl text-center max-w-2xl">
            Authentic North & South Indian cuisine, street food, beverages, and desserts.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-lg font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-yellow-500 text-black"
                  : "bg-transparent text-white border border-white/20 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {menuData[activeTab].map((item) => (
            <div key={item.id} className="flex flex-col gap-4 group cursor-pointer">
              {/* Image Box */}
              <div className="bg-[#1c1c1c] rounded-2xl aspect-square flex items-center justify-center overflow-hidden p-4 group-hover:bg-[#252525] transition-colors duration-200">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h4 className="text-white oswald text-xl md:text-2xl font-bold uppercase tracking-wide">
                  {item.name}
                </h4>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{item.desc}</p>
                <span className="text-yellow-400 oswald text-xl md:text-2xl font-bold mt-2">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Online Note */}
        <p className="text-center text-white/60 mt-8 text-sm">
          Click any item to order online
        </p>
      </div>
    </section>
  );
}