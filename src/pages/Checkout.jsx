import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiShoppingBag, FiUser, FiPhone, FiMapPin, FiMail, FiClock, FiCheck, FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStore, FaTruck, FaShoppingBag } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { footerData } from "../data/homeData";

const orderTypes = [
  {
    id: 'takeout',
    title: 'Takeout',
    description: 'Pick up your order at our restaurant',
    icon: FaShoppingBag,
    fee: 0,
  },
  {
    id: 'delivery',
    title: 'Delivery',
    description: 'Get your food delivered to your doorstep',
    icon: FaTruck,
    fee: 4.99,
  },
  {
    id: 'dine-in',
    title: 'Dine In',
    description: 'Enjoy your meal at our restaurant',
    icon: FaStore,
    fee: 0,
  },
];

const paymentMethods = [
  { id: 'cash', title: 'Cash on Pickup/Delivery' },
  { id: 'card', title: 'Credit/Debit Card' },
];

// Generate time slots from 10 AM to 10 PM
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 10; hour <= 22; hour++) {
    const hourStr = hour > 12 ? hour - 12 : hour;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    slots.push(`${hourStr}:00 ${ampm}`);
    if (hour < 22) {
      slots.push(`${hourStr}:30 ${ampm}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export default function Checkout() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Order Type, 2: Customer Info, 3: Payment
  const [orderType, setOrderType] = useState(null);
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

  // Calendar and Time state
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const total = getCartTotal();
  const tax = total * 0.05; // 5% tax
  const selectedOrderTypeData = orderTypes.find(t => t.id === orderType);
  const deliveryFee = selectedOrderTypeData?.fee || 0;
  const grandTotal = total + tax + deliveryFee;

  // Calendar functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  };

  const isToday = (date) => {
    return isSameDay(date, new Date());
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (!isPastDate(newDate)) {
      setSelectedDate(newDate);
      setShowCalendar(false);
    }
  };

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
    if (orderType === 'delivery') {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
    }
    if (!selectedTime) newErrors.time = 'Please select a time';
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
      clearCart(); // Clear cart after successful order
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
        <div className="max-w-4xl mx-auto px-4 pt-28 pb-20 text-center">
          <FiShoppingBag size={64} className="text-white/20 mx-auto mb-6" />
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-white/50 mb-8">Add some delicious items to your cart to checkout</p>
          <button
            onClick={() => navigate('/menu')}
            className="bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black font-bold px-8 py-4 rounded-lg transition-colors"
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
        <div className="max-w-4xl mx-auto px-4 pt-28 pb-20 text-center">
          <div className="bg-[#1c1c1c] rounded-2xl p-8 sm:p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheck size={40} className="text-white" />
            </div>
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">Order Placed Successfully!</h1>
            <p className="text-white/70 mb-2">Thank you, {formData.name}!</p>
            <p className="text-white/70 mb-4">
              Your order has been received and scheduled for:
            </p>
            <div className="bg-[#c0d4b2]/20 border border-[#c0d4b2]/30 rounded-lg p-4 mb-6 inline-block">
              <p className="text-[#c0d4b2] font-semibold">
                {formatDate(selectedDate)} at {selectedTime}
              </p>
              <p className="text-white/70 text-sm mt-1">
                {orderType === 'dine-in' ? 'Dine In' : orderType === 'delivery' ? 'Delivery' : 'Takeout'}
              </p>
            </div>
            <div className="bg-[#c0d4b2]/20 border border-[#c0d4b2]/30 rounded-lg p-4 mb-6">
              <p className="text-[#c0d4b2] font-semibold">Your Order Number</p>
              <p className="text-white text-4xl font-bold">#{Math.floor(Math.random() * 100) + 100}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleNewOrder}
                className="bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black font-bold px-8 py-4 rounded-lg transition-colors"
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

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 pb-8 md:pb-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-white oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">
            Checkout
          </h1>
          <div className="w-24 h-[3px] bg-[#c0d4b2] rounded-full mx-auto" />
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                step >= s ? 'bg-[#c0d4b2] text-black' : 'bg-white/10 text-white/50'
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-8 sm:w-16 h-[2px] ${step > s ? 'bg-[#c0d4b2]' : 'bg-white/10'}`} />
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {orderTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setOrderType(type.id);
                        setErrors({});
                      }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                        orderType === type.id
                          ? 'border-[#c0d4b2] bg-[#c0d4b2]/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <type.icon size={32} className={`mb-4 ${orderType === type.id ? 'text-[#c0d4b2]' : 'text-white/50'}`} />
                      <h3 className={`text-lg font-bold mb-2 ${orderType === type.id ? 'text-[#c0d4b2]' : 'text-white'}`}>
                        {type.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-2">{type.description}</p>
                      {type.fee > 0 && (
                        <p className="text-[#c0d4b2]/70 text-xs">+${type.fee.toFixed(2)} delivery fee</p>
                      )}
                    </button>
                  ))}
                </div>

                {errors.orderType && (
                  <p className="text-red-500 text-sm mb-4">{errors.orderType}</p>
                )}

                <button
                  onClick={handleNextStep}
                  disabled={!orderType}
                  className="w-full bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 disabled:bg-white/10 disabled:text-white/50 text-black font-bold py-4 rounded-lg transition-colors"
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
                      <FiUser className="text-[#c0d4b2]" size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className={`w-full bg-[#111111] text-white px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#c0d4b2]'
                      } outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-white font-semibold mb-2 block flex items-center gap-2">
                      <FiPhone className="text-[#c0d4b2]" size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(XXX) XXX-XXXX"
                      className={`w-full bg-[#111111] text-white px-4 py-3 rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#c0d4b2]'
                      } outline-none transition-colors`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-white font-semibold mb-2 block flex items-center gap-2">
                      <FiMail className="text-[#c0d4b2]" size={16} />
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-[#c0d4b2] outline-none transition-colors"
                    />
                  </div>

                  {/* Address Fields (for delivery only) */}
                  {orderType === 'delivery' && (
                    <>
                      <div>
                        <label className="text-white font-semibold mb-2 block flex items-center gap-2">
                          <FiMapPin className="text-[#c0d4b2]" size={16} />
                          Street Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter your address"
                          className={`w-full bg-[#111111] text-white px-4 py-3 rounded-lg border ${
                            errors.address ? 'border-red-500' : 'border-white/10 focus:border-[#c0d4b2]'
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
                            className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-[#c0d4b2] outline-none transition-colors"
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
                              errors.city ? 'border-red-500' : 'border-white/10 focus:border-[#c0d4b2]'
                            } outline-none transition-colors`}
                          />
                          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Schedule Section */}
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <FiClock className="text-[#c0d4b2]" />
                      Schedule Your Order
                    </h3>

                    {/* Date Picker */}
                    <div className="mb-4">
                      <label className="text-white/70 text-sm mb-2 block">Select Date</label>
                      <div className="relative">
                        <button
                          onClick={() => setShowCalendar(!showCalendar)}
                          className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-[#c0d4b2] outline-none transition-colors text-left flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <FiCalendar className="text-[#c0d4b2]" />
                            {formatDate(selectedDate)}
                          </span>
                          <span className="text-[#c0d4b2]">Change</span>
                        </button>

                        {showCalendar && (
                          <div className="absolute z-20 top-full left-0 mt-2 bg-[#1c1c1c] rounded-xl border border-white/10 p-4 w-full sm:w-80 shadow-xl">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-4">
                              <button
                                onClick={handlePrevMonth}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                              >
                                <FiChevronLeft className="text-white" />
                              </button>
                              <span className="text-white font-semibold">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                              </span>
                              <button
                                onClick={handleNextMonth}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                              >
                                <FiChevronRight className="text-white" />
                              </button>
                            </div>

                            {/* Day Names */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                              {dayNames.map((day) => (
                                <div key={day} className="text-white/50 text-xs text-center py-2">
                                  {day}
                                </div>
                              ))}
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-1">
                              {/* Empty cells for days before the first day of month */}
                              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                                <div key={`empty-${index}`} className="h-10" />
                              ))}
                              {/* Days of the month */}
                              {Array.from({ length: daysInMonth }).map((_, index) => {
                                const day = index + 1;
                                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                const isSelected = isSameDay(date, selectedDate);
                                const isTodayDate = isToday(date);
                                const isPast = isPastDate(date);

                                return (
                                  <button
                                    key={day}
                                    onClick={() => handleDateSelect(day)}
                                    disabled={isPast}
                                    className={`h-10 rounded-lg text-sm font-medium transition-all ${
                                      isSelected
                                        ? 'bg-[#c0d4b2] text-black'
                                        : isPast
                                        ? 'text-white/20 cursor-not-allowed'
                                        : isTodayDate
                                        ? 'text-[#c0d4b2] hover:bg-[#c0d4b2]/20'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Time Picker */}
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Select Time</label>
                      <div className="relative">
                        <button
                          onClick={() => setShowTimePicker(!showTimePicker)}
                          className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-[#c0d4b2] outline-none transition-colors text-left flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <FiClock className="text-[#c0d4b2]" />
                            {selectedTime || 'Select a time'}
                          </span>
                          <span className="text-[#c0d4b2]">Choose</span>
                        </button>

                        {showTimePicker && (
                          <div className="absolute z-20 top-full left-0 mt-2 bg-[#1c1c1c] rounded-xl border border-white/10 p-3 w-full max-h-64 overflow-y-auto shadow-xl">
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => {
                                    setSelectedTime(time);
                                    setShowTimePicker(false);
                                  }}
                                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                                    selectedTime === time
                                      ? 'bg-[#c0d4b2] text-black font-semibold'
                                      : 'bg-white/10 text-white hover:bg-white/20'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="text-white font-semibold mb-2 block">Special Instructions</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special requests or dietary requirements?"
                      rows={3}
                      className="w-full bg-[#111111] text-white px-4 py-3 rounded-lg border border-white/10 focus:border-[#c0d4b2] outline-none transition-colors resize-none"
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
                    className="flex-1 bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black font-bold py-4 rounded-lg transition-colors"
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
                          ? 'border-[#c0d4b2] bg-[#c0d4b2]/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span className={paymentMethod === method.id ? 'text-[#c0d4b2]' : 'text-white'}>
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
                      <span className="text-white capitalize">{orderType}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Schedule</span>
                      <span className="text-white">{formatDate(selectedDate)} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Name</span>
                      <span className="text-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Phone</span>
                      <span className="text-white">{formData.phone}</span>
                    </div>
                    {orderType === 'delivery' && formData.address && (
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
                    className="flex-1 bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 disabled:bg-[#c0d4b2]/50 text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
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
                <FiShoppingBag className="text-[#c0d4b2]" />
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
                      <div className="flex items-center gap-2">
                        <p className="text-[#c0d4b2] text-sm">{item.price}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded capitalize ${
                          item.spiceLevel === 'mild' ? 'bg-green-500/20 text-green-400' :
                          item.spiceLevel === 'medium' ? 'bg-[#c0d4b2]/20 text-[#c0d4b2]-300' :
                          item.spiceLevel === 'hot' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {item.spiceLevel}
                        </span>
                      </div>
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
                        className="w-6 h-6 rounded bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black flex items-center justify-center"
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
                {deliveryFee > 0 && (
                  <div className="flex justify-between text-white/70">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-[#c0d4b2]">${grandTotal.toFixed(2)}</span>
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