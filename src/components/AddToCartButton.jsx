import { useCart } from "../context/CartContext";
import { FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";

export default function AddToCartButton({ item }) {
  const { addToCart, updateQuantity, cartItems, openCart } = useCart();

  // Generate unique cart ID
  const cartId = `${item.id}-${item.name}`.replace(/\s+/g, '-');

  // Find item in cart
  const cartItem = cartItems.find((i) => i.cartId === cartId);
  const quantity = cartItem ? cartItem.quantity : 0;
  const isInCart = quantity > 0;

  const handleIncrement = () => {
    addToCart(item);
  };

  const handleDecrement = () => {
    if (cartItem) {
      updateQuantity(cartId, quantity - 1);
    }
  };

  if (isInCart) {
    // Show quantity controls when item is in cart
    return (
      <div className="flex items-center gap-1.5 sm:gap-2 w-full">
        {/* Quantity Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-1">
          <button
            onClick={handleDecrement}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center justify-center active:scale-95"
            title="Decrease quantity"
          >
            <FiMinus size={16} />
          </button>
          <span className="min-w-[40px] sm:min-w-[48px] text-white font-bold text-center py-2 bg-white/5 rounded-lg text-sm sm:text-base">
            {quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-all duration-300 flex items-center justify-center active:scale-95"
            title="Increase quantity"
          >
            <FiPlus size={16} />
          </button>
        </div>

        {/* Cart Button */}
        <button
          onClick={openCart}
          className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/50 text-yellow-500 rounded-lg transition-all duration-300 flex items-center justify-center active:scale-95"
          title="View Cart"
        >
          <FiShoppingBag size={16} />
        </button>
      </div>
    );
  }

  // Show "Add to Cart" button when item is not in cart
  return (
    <div className="flex items-center gap-2 w-full">
      <button
        onClick={handleIncrement}
        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
      >
        Add to Cart
      </button>
      <button
        onClick={openCart}
        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
        title="View Cart"
      >
        <FiShoppingBag size={18} />
      </button>
    </div>
  );
}