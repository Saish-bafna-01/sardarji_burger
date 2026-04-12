import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function FloatingCartIcon() {
  const { getCartCount, openCart, isCartOpen } = useCart();
  const count = getCartCount();

  // Don't show if cart is empty or cart sidebar is open
  if (count === 0 || isCartOpen) return null;

  return (
    <button
      onClick={openCart}
      className="fixed bottom-6 right-6 z-40 bg-yellow-500 hover:bg-yellow-600 text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce-in"
      aria-label="Open cart"
    >
      <FiShoppingBag size={24} className="sm:w-7 sm:h-7" />
      {/* Badge */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
        {count > 99 ? '99+' : count}
      </span>
    </button>
  );
}