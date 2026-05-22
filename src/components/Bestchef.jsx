import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

import chef1 from "../assets/images/chef.jpg"; // replace with your images
import chef2 from "../assets/images/chef.jpg";
import chef3 from "../assets/images/chef.jpg";

const chefs = [
  { id: 1, name: "James Miller", designation: "Head Chef", img: chef1 },
  { id: 2, name: "Callum Rose", designation: "Food Chef", img: chef2 },
  { id: 3, name: "Ryan Anderson", designation: "Grill Chef", img: chef3 },
];

export default function BestChef() {
  return (
    <section className="w-full bg-[#1d384e] py-16 px-6 md:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <h2 className="text-white oswald text-4xl md:text-5xl font-bold uppercase tracking-wide">
            Our Best Chef
          </h2>
          <div className="w-20 h-[3px] bg-[#c0d4b2] rounded-full" />
          <p className="text-white/60 text-xl text-center max-w-2xl mt-2 leading-relaxed">
            Our chefs bring years of experience and a deep love for Indian
            cuisine. Their dedication to authentic cooking techniques and bold
            flavors ensures every dish meets the highest standards.
          </p>
        </div>

        {/* Chef Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chefs.map(({ id, name, designation, img }) => (
            <div
              key={id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[3/4]"
            >
              {/* Chef Image */}
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Default state — designation vertical text on right */}
              <div className="absolute top-0 right-0 h-full flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span
                  className="text-white text-sm font-semibold tracking-widest uppercase bg-black/30 px-2 py-4"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  {designation}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Hover content — name bottom left + social icons right */}
              <div className="absolute inset-0 flex items-end justify-between px-5 pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Name + designation */}
                <div>
                  <h3 className="text-white oswald text-2xl font-bold uppercase">
                    {name}
                  </h3>
                  <p className="text-[#c0d4b2] text-sm font-medium">
                    {designation}
                  </p>
                </div>

                {/* Social icons stacked */}
                <div className="flex flex-col gap-2">
                  {[
                    { icon: <FaFacebookF size={14} />, href: "#" },
                    { icon: <FaTwitter size={14} />, href: "#" },
                    { icon: <FaPinterestP size={14} />, href: "#" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="w-8 h-8 rounded-full bg-[#c0d4b2] hover:bg-[#c0d4b2]-300 flex items-center justify-center text-black transition-colors duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
