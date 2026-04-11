import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaPinterest, FaYoutube } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
  const [email, setEmail] = useState("");

  const socialLinks = [
    { icon: <FaTiktok size={18} />, href: "#" },
    { icon: <FaFacebookF size={18} />, href: "#" },
    { icon: <FaInstagram size={18} />, href: "#" },
    { icon: <FaPinterest size={18} />, href: "#" },
    { icon: <FaYoutube size={18} />, href: "#" },
  ];

  return (
    <footer className="w-full">
      {/* Newsletter Banner */}
      <div className="w-full bg-yellow-400 px-6 md:px-28 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-black oswald text-4xl md:text-5xl font-bold uppercase leading-tight">
              Get Exclusive Updates
            </h2>
            <p className="text-black/70 text-lg">
              Stay updated with our latest offers, new menu items, and promotions.
            </p>
          </div>

          {/* Email + Button */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="flex-1 md:w-[380px] bg-white text-gray-700 text-lg px-6 py-4 rounded-full outline-none placeholder-gray-400"
            />
            <button className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white text-lg font-semibold px-7 py-4 rounded-full transition-colors duration-200 whitespace-nowrap">
              <FiSend size={18} />
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Body */}
      <div className="w-full bg-black px-6 md:px-28 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-extrabold tracking-tight text-white">
              Sardarji Fastfood & Mudpot
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              Flavors That Feel Like Home
            </p>
            <p className="text-white/60 text-base leading-relaxed mt-2">
              Authentic North & South Indian cuisine served with love in Edmonton, Alberta.
            </p>
          </div>

          {/* Col 2 — Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white oswald text-xl font-bold uppercase tracking-wide">
              Support
            </h4>
            <ul className="flex flex-col gap-3">
              {["FAQ's", "Privacy Policy", "Terms & Conditions", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 text-base hover:text-yellow-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Phone & Email */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-white oswald text-xl font-bold uppercase tracking-wide">
                Contact
              </h4>
              <a href="tel:+18259657973" className="flex items-center gap-2 text-white/70 text-base hover:text-yellow-400 transition-colors">
                <MdOutlinePhoneInTalk className="text-yellow-400" size={20} />
                (825) 965-7973
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white oswald text-xl font-bold uppercase tracking-wide">
                Email
              </h4>
              <a href="mailto:info@sardarjifastfood.com" className="flex items-center gap-2 text-white/70 text-base hover:text-yellow-400 transition-colors">
                <MdOutlineEmail className="text-yellow-400" size={20} />
                info@sardarjifastfood.com
              </a>
            </div>
          </div>

          {/* Col 4 — Address & Social */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-white oswald text-xl font-bold uppercase tracking-wide">
                Address
              </h4>
              <div className="flex items-start gap-2 text-white/70 text-base">
                <MdOutlineLocationOn className="text-yellow-400 mt-0.5 flex-shrink-0" size={20} />
                Edmonton, Alberta, Canada
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white oswald text-xl font-bold uppercase tracking-wide">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-black border-t border-white/10 px-6 md:px-28 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-sm text-center md:text-left">
            © Copyright 2026. All Rights Reserved.
          </p>
          <p className="text-white/50 text-sm">
            Designed & Managed by ITBS.ca
          </p>
        </div>
      </div>
    </footer>
  );
}