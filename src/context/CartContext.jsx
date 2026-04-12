import { createContext, useContext, useState, useEffect } from 'react';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState(null); // 'dine-in' or 'takeout'

  // Generate unique cart ID for each item
  const getCartItemId = (item) => {
    return `${item.id}-${item.name}`.replace(/\s+/g, '-');
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('sardarji_cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sardarji_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    const cartId = getCartItemId(item);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.cartId === cartId);
      if (existingItem) {
        return prevItems.map((i) =>
          i.cartId === cartId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, cartId, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (cartId) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.cartId !== cartId));
  };

  // Update item quantity
  const updateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.cartId === cartId ? { ...i, quantity } : i
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setOrderType(null);
  };

  // Get cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0);
  };

  // Get cart count
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Get item quantity in cart
  const getItemQuantity = (item) => {
    const cartId = getCartItemId(item);
    const cartItem = cartItems.find((i) => i.cartId === cartId);
    return cartItem ? cartItem.quantity : 0;
  };

  // Open cart
  const openCart = () => setIsCartOpen(true);

  // Close cart
  const closeCart = () => setIsCartOpen(false);

  // Toggle cart
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const value = {
    cartItems,
    isCartOpen,
    orderType,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    getItemQuantity,
    openCart,
    closeCart,
    toggleCart,
    setOrderType,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;