import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiUser, FiPhone, FiMapPin, FiMail, FiClock, FiCheck } from "react-icons/fi";
import { FaStore, FaTruck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { footerData } from "../data/homeData";

const orderTypes = [
  {
    id: 'dine-in',
    title: 'Dine In',
    description: 'Enjoy your meal at our restaurant',
    icon: FaStore,
  },
  {
    id: 'takeout',
    title: 'Takeout / Delivery',
    description: 'Get your food delivered to your doorstep',
    icon: FaTruck,
  },
];

const timeSlots = [
  'ASAP (15-20 min)',
  '30 Minutes',
  '45 Minutes',
  '1 Hour',
  '1.5 Hours',
  '2 Hours',
];

const paymentMethods = [
  { id: 'cash', title: 'Cash on Pickup/Delivery' },
  { id: 'card', title: 'Credit/Debit Card' },
];

export default function Checkout() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Order Type, 2: Customer Info, 3: Payment
  const [orderType, setOrderType] = useState(null);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = getCartTotal();
  const tax = total * 0.05; // 5% tax
  const deliveryFee = orderType === 'takeout' ? 3.99 : 0;
  const grandTotal = total + tax + deliveryFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (orderType === 'takeout') {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && !orderType) {
      setErrors({ orderType: 'Please select an order type' });
      return;
    }
    if (step === 2 && !validateStep2()) {
      return;
    }
    setErrors({});
    setStep(step + 1);
  };

  const handlePlaceOrder = () => {
    setIsSubmitting(true);
    // Simulate order submission
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
    }, 2000);
  };

  const handleNewOrder = () => {
    clearCart();
    navigate('/menu');
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <FiShoppingBag size={64} className="text-white/20 mx-auto mb-6" />
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-white/50 mb-8">Add some delicious items to your cart to checkout</p>
          <button
            onClick={() => navigate('/menu')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Browse Menu
          </button>
        </div>
        <Footer {...footerData} />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-[#1c1c1c] rounded-2xl p-8 sm:p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheck size={40} className="text-white" />
            </div>
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">Order Placed Successfully!</h1>
            <p className="text-white/70 mb-2">Thank you, {formData.name}!</p>
            <p className="text-white/70 mb-6">
              Your order has been received. {orderType === 'dine-in' ? 'Please arrive at the restaurant.' : 'We will deliver your food shortly.'}
            </p>
            {orderType === 'dine-in' && (
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
                <p className="text-yellow-500 font-semibold">Your Order Number</p>
                <p className="text-white text-4xl font-bold">#{Math.floor(Math.random() * 100) + 100}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleNewOrder}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Order Again
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-transparent border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <Footer {...footerData} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-white oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">
            Checkout
          </h1>
          <div className="w-24 h-[3px] bg-yellow-500 rounded-full mx-auto" />
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                step >= s ? 'bg-yellow-500 text-black' : 'bg-white/10 text-white/50'
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-8 sm:w-16 h-[2px] ${step > s ? 'bg-yellow-500' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-16 mb-8 md:mb-12">
          {['Order Type', 'Details', 'Payment'].map((label, index) => (
            <p key={label} className={`text-xs sm:text-sm ${step >= index + 1 ? 'text-white' : 'text-white/50'}`}>
              {label}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Order Type */}
            {step === 1 && (
              <div className="bg-[#1c1c1c] rounded-2xl p-4 sm:p-6 md:p-8">
                <h2 className="text-white oswald text-xl sm:text-2xl font-bold uppercase mb-6">
                  How would you like to order?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {orderTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setOrderType(type.id);
                        setErrors({});
                      }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                        orderType === type.id
                          ? 'border-yellow-500 bg-yellow-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <type.icon size={32} className={`mb-4 ${orderType === type.id ? 'text-yellow-500' : 'text-white/50'}`} />
                      <h3 className={`text-lg font-bold mb-2 ${orderType === type.id ? 'text-yellow-500' : 'text-white'}`}>
                        {type.title}
                      </h3>
                      <p className="text-white/50 text-sm">{type.description}</p>
                    </button>
                  ))}
                </div>

                {errors.orderType && (
                  <p className="text-red-500 text-sm mb-4">{errors.orderType}</p>
                )}

                {/* Time Selection */}
                <div className="mb-6">
                  <label className="text-white font-semibold mb-3 block flex items-center gap-2">
                    <FiClock className="text-yellow-500" />
                    Pickup/Delivery Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-3 rounded-lg text-sm transition-all ${
                          selectedTime === time
                            ? 'bg-yellow-500 text-black font-semibold'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  disabled={!orderType}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-white/10 disabled:text-white/50 text-black font-bold py-4 rounded-lg transition-colors"
                >
                  Continue to Details
                </button>
              </div>
            )}

            {/* Step 2: Customer Info */}
            {step === 2 && (
              <div className="bg-[#1c1c1c] rounded-2xl p-4 sm:p-6 md:p-8">
                <h2 className="text-white oswald text-xl sm:text-2xl font-bold uppercase mb-6">
                  Your Information
                </h2>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-white font-semibold mb-2 block flex items-center gap-2">
                      <FiUser className="text-yellow-500" size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className={`w-full bg-[#111111] text-white px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-yellow-500'
                      } outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-white font-semibold mb-2 block flex items-center gap-2">
                      <FiPhone className="text-yellow-500" size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(XXX) XXX-XXXX"
                      className={`w-full bg-[#111111] text-white px-4 py-3 rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-white/10 focus:border-yellow-500'
                      } outline-none transition-colors`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-white font-semibold mb-2 block flex items-center gap-2">
                      <FiMail className="text-yellow-500" size={16} />
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-yellow-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Address Fields (for takeout) */}
                  {orderType === 'takeout' && (
                    <>
                      <div>
                        <label className="text-white font-semibold mb-2 block flex items-center gap-2">
                          <FiMapPin className="text-yellow-500" size={16} />
                          Street Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter your address"
                          className={`w-full bg-[#111111] text-white px-4 py-3 rounded-lg border ${
                            errors.address ? 'border-red-500' : 'border-white/10 focus:border-yellow-500'
                          } outline-none transition-colors`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-white font-semibold mb-2 block">Apartment/Suite</label>
                          <input
                            type="text"
                            name="apartment"
                            value={formData.apartment}
                            onChange={handleInputChange}
                            placeholder="Apt #"
                            className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-yellow-500 outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-white font-semibold mb-2 block">City *</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Edmonton"
                            className={`w-full bg-[#111111] text-white px-4 py-3 rounded-lg border ${
                              errors.city ? 'border-red-500' : 'border-white/10 focus:border-yellow-500'
                            } outline-none transition-colors`}
                          />
                          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Special Notes */}
                  <div>
                    <label className="text-white font-semibold mb-2 block">Special Instructions</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special requests or dietary requirements?"
                      rows={3}
                      className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-yellow-500 outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-transparent border border-white/20 text-white font-semibold py-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-lg transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-[#1c1c1c] rounded-2xl p-4 sm:p-6 md:p-8">
                <h2 className="text-white oswald text-xl sm:text-2xl font-bold uppercase mb-6">
                  Payment Method
                </h2>

                <div className="space-y-3 mb-6">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        paymentMethod === method.id
                          ? 'border-yellow-500 bg-yellow-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span className={paymentMethod === method.id ? 'text-yellow-500' : 'text-white'}>
                        {method.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="bg-[#111111] rounded-xl p-4 sm:p-6 mb-6">
                  <h3 className="text-white font-bold mb-4">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Order Type</span>
                      <span className="text-white">{orderType === 'dine-in' ? 'Dine In' : 'Takeout / Delivery'}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Time</span>
                      <span className="text-white">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Name</span>
                      <span className="text-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Phone</span>
                      <span className="text-white">{formData.phone}</span>
                    </div>
                    {orderType === 'takeout' && formData.address && (
                      <div className="flex justify-between text-white/70">
                        <span>Address</span>
                        <span className="text-white text-right">{formData.address}{formData.apartment && `, ${formData.apartment}`}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-transparent border border-white/20 text-white font-semibold py-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isSubmitting}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500/50 text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Place Order - $${grandTotal.toFixed(2)}`
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1c1c1c] rounded-2xl p-4 sm:p-6 sticky top-24">
              <h3 className="text-white oswald text-lg font-bold uppercase mb-4 flex items-center gap-2">
                <FiShoppingBag className="text-yellow-500" />
                Your Order ({cartItems.length})
              </h3>

              {/* Cart Items Summary */}
              <div className="space-y-3 max-h-[300px] overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold line-clamp-1">{item.name}</p>
                      <p className="text-yellow-500 text-sm">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-yellow-500 hover:bg-yellow-600 text-black flex items-center justify-center"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {orderType === 'takeout' && (
                  <div className="flex justify-between text-white/70">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-yellow-500">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...footerData} />
    </div>
  );
}