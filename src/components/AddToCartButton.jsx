import { useCart } from "../context/CartContext";
import { FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import SpiceLevelSelector from "./SpiceLevelSelector";

export default function AddToCartButton({ item }) {
  const { requestAddToCart, updateQuantity, cartItems, openCart, showSpiceModal, pendingItem, confirmAddWithSpice, cancelAdd } = useCart();

  // Get total quantity for this item across all spice levels
  const totalQuantity = cartItems
    .filter((i) => i.id === item.id && i.name === item.name)
    .reduce((total, i) => total + i.quantity, 0);

  const isInCart = totalQuantity > 0;

  // Get all cart items for this product (to show spice levels)
  const itemsForProduct = cartItems.filter((i) => i.id === item.id && i.name === item.name);

  // Check if this item is currently showing the spice selector
  const isShowingSpiceSelector = showSpiceModal && pendingItem?.id === item.id && pendingItem?.name === item.name;

  const handleAddClick = () => {
    requestAddToCart(item);
  };

  const handleDecrement = () => {
    if (itemsForProduct.length > 0) {
      // Remove from the last added item
      const lastItem = itemsForProduct[itemsForProduct.length - 1];
      updateQuantity(lastItem.cartId, lastItem.quantity - 1);
    }
  };

  return (
    <div className="w-full">
      {isInCart ? (
        // Show quantity controls when item is in cart
        <>
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
                {totalQuantity}
              </span>
              <button
                onClick={handleAddClick}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-all duration-300 flex items-center justify-center active:scale-95"
                title="Add more"
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

          {/* Show spice levels of items in cart */}
          {itemsForProduct.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {itemsForProduct.map((cartItem) => (
                <span
                  key={cartItem.cartId}
                  className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                    cartItem.spiceLevel === 'mild' ? 'bg-green-500/20 text-green-400' :
                    cartItem.spiceLevel === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    cartItem.spiceLevel === 'hot' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-red-500/20 text-red-400'
                  }`}
                >
                  {cartItem.spiceLevel} x{cartItem.quantity}
                </span>
              ))}
            </div>
          )}

          {/* Inline Spice Level Selector */}
          {isShowingSpiceSelector && (
            <SpiceLevelSelector
              itemName={item.name}
              onConfirm={confirmAddWithSpice}
              onCancel={cancelAdd}
            />
          )}
        </>
      ) : (
        // Show "Add to Cart" button when item is not in cart
        <>
          <div className="flex items-center gap-2 w-full">
            <button
              onClick={handleAddClick}
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

          {/* Inline Spice Level Selector */}
          {isShowingSpiceSelector && (
            <SpiceLevelSelector
              itemName={item.name}
              onConfirm={confirmAddWithSpice}
              onCancel={cancelAdd}
            />
          )}
        </>
      )}
    </div>
  );
}