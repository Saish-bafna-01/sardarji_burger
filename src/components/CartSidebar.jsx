import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const spiceLevelColors = {
  mild: 'bg-green-500/20 text-green-400',
  medium: 'bg-[#c0d4b2]/20 text-[#c0d4b2]-300',
  hot: 'bg-orange-500/20 text-orange-400',
  'extra-hot': 'bg-red-500/20 text-red-400',
};

export default function CartSidebar() {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#1d384e] z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
          <h2 className="text-white oswald text-xl sm:text-2xl font-bold uppercase flex items-center gap-2">
            <FiShoppingBag className="text-[#c0d4b2]" />
            Your Cart
            <span className="text-[#c0d4b2] text-base">({cartItems.length})</span>
          </h2>
          <button
            onClick={closeCart}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FiShoppingBag size={48} className="text-white/20 mb-4" />
              <p className="text-white/50 text-lg mb-2">Your cart is empty</p>
              <p className="text-white/30 text-sm mb-6">Add some delicious items to get started!</p>
              <button
                onClick={closeCart}
                className="bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="bg-[#1c1c1c] rounded-xl p-3 sm:p-4 flex gap-3 sm:gap-4"
                >
                  {/* Item Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm sm:text-base line-clamp-1">
                      {item.name}
                    </h4>
                    {/* Spice Level Badge */}
                    {item.spiceLevel && (
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full capitalize mt-1 ${spiceLevelColors[item.spiceLevel] || 'bg-white/10 text-white'}`}>
                        {item.spiceLevel.replace('-', ' ')}
                      </span>
                    )}
                    <p className="text-[#c0d4b2] font-bold text-sm sm:text-base mt-1">
                      {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="text-white font-semibold text-sm sm:text-base w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black flex items-center justify-center transition-colors"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-white/50 hover:text-red-500 transition-colors p-1 self-start"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/10 p-4 sm:p-6">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/70">Subtotal</span>
              <span className="text-white font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-white/50 text-sm">Tax & fees calculated at checkout</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mt-4">
              <Link
                to="/checkout"
                onClick={closeCart}
                className="w-full bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black font-bold py-3 sm:py-4 rounded-lg transition-colors block text-center"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={clearCart}
                className="w-full bg-transparent border border-white/20 hover:border-red-500 hover:text-red-500 text-white/70 font-semibold py-3 rounded-lg transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}