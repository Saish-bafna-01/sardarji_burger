import { useState, useEffect, useRef } from "react";
import { FiUsers, FiAward, FiClock, FiHeart } from "react-icons/fi";

const stats = [
  {
    id: 1,
    icon: <FiUsers size={32} className="text-yellow-500" />,
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: <FiAward size={32} className="text-yellow-500" />,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: 3,
    icon: <FiClock size={32} className="text-yellow-500" />,
    value: 50,
    suffix: "+",
    label: "Menu Items",
  },
  {
    id: 4,
    icon: <FiHeart size={32} className="text-yellow-500" />,
    value: 100,
    suffix: "%",
    label: "Customer Satisfaction",
  },
];

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      }
    };
    countRef.current = requestAnimationFrame(animate);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [end, duration]);

  return count;
}

function StatCard({ icon, value, suffix, label }) {
  const count = useCountUp(value);

  return (
    <div className="bg-[#1c1c1c] rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col items-center text-center group transition-all duration-300 hover:bg-[#252525] hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/10">
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="text-white oswald text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        {count}
        <span className="text-yellow-500">{suffix}</span>
      </div>
      <p className="text-white/60 text-sm md:text-base font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="w-full bg-[#111111] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
