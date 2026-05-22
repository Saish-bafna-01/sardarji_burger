import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { getCartCount, openCart } = useCart();
  const count = getCartCount();

  return (
    <button
      onClick={openCart}
      className="relative text-white hover:text-[#c0d4b2]-300 transition-colors duration-200"
      aria-label="Shopping cart"
    >
      <FiShoppingBag size={22} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#c0d4b2] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce-in">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}