import { useEffect, useRef, useState } from "react";
import { FaAward } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";

const stats = [
  { id: 1, icon: <FaAward size={52} className="text-yellow-500" />, value: 15, label: "Year Experience" },
  { id: 2, icon: <GiHamburger size={52} className="text-yellow-500" />, value: 90, label: "Menu Variant" },
  { id: 3, icon: <IoStorefrontOutline size={52} className="text-yellow-500" />, value: 24, label: "Restaurant Branch" },
];

function CountUp({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [start, target]);

  return <span>{count}</span>;
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#111111] py-16 px-6 md:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ id, icon, value, label }) => (
          <div
            key={id}
            className="bg-[#1c1c1c] rounded-2xl flex flex-col items-center justify-center gap-4 py-12 px-8"
          >
            {/* Icon */}
            {icon}

            {/* Number + plus */}
            <div className="flex items-end gap-1">
              <span className="text-white oswald text-6xl font-bold leading-none">
                <CountUp target={value} start={started} />
              </span>
              <span className="text-yellow-500 text-4xl font-bold leading-none mb-1">+</span>
            </div>

            {/* Label */}
            <p className="text-white/60 text-lg">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}