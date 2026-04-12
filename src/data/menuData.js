// Menu Page Data
import menuHeroBg from "../assets/images/about_bg.jpg";

// Beverages
import chai from "../assets/images/Chai.png";
import indianCoffee from "../assets/images/Indian Coffee.png";
import lemonSoda from "../assets/images/Lemon Soda.png";
import orangeJuice from "../assets/images/Orange Juice.png";
import cannedPop from "../assets/images/Canned Pop.png";
import bottledWater from "../assets/images/Bottled Water.png";
import mangoShake from "../assets/images/Mango Shake.png";
import milkshake from "../assets/images/Milkshake.png";
import lemonade from "../assets/images/Lemonade.png";
import mangoLassi from "../assets/images/Mango Lassi.png";
import carrotJuice from "../assets/images/Carrot Juice.png";
import lassi from "../assets/images/Lassi (Sweet or Salty).png";
import specialMixCarrotJuice from "../assets/images/Special Mix Carrot Juice.png";

// Desserts
import gulabJamun from "../assets/images/Hot Gulab Jamun.png";
import bebeChuri from "../assets/images/Be-be’s Churi Desi Ghee & Gur.png";
import momChuri from "../assets/images/Mom’s Churi Desi Ghee sugar.png";

// Extras
import extraBhature from "../assets/images/Extra Bhature.png";
import extraPoori from "../assets/images/Extra Poori .png";
import extraDahi from "../assets/images/Extra Dahi.png";
import extraRoti from "../assets/images/Extra Roti .png";
import extraPaneer from "../assets/images/Extra Paneer.png";
import extraButterCube from "../assets/images/Extra Butter Cube.png";
import extraPav from "../assets/images/Extra Pav.png";

// Main Courses
import chanaBhature from "../assets/images/Chana Bhature.png";
import chanaPoori from "../assets/images/Chana Poori.png";
import alooPoori from "../assets/images/Aloopoori.png";
import shahiPaneer from "../assets/images/Shahi Paneer.png";
import matarPaneer from "../assets/images/Matar Paneer.png";
import mixVegSabji from "../assets/images/Mix Veg Sabji.png";
import tadkaDal from "../assets/images/Tadka Dal.png";
import dalMakhani from "../assets/images/Dal Makhani.png";
import paneerBhurji from "../assets/images/Paneer Bhurji.png";
import rajmaSabji from "../assets/images/Rajma Sabji.png";
import chanaSabji from "../assets/images/Chana Sabji.png";
import kadhiPakora from "../assets/images/Kadhi Pakora.png";
import palakPaneer from "../assets/images/Palak Paneer.png";
import jeeraRice from "../assets/images/Jeera Rice.png";
import plainRice from "../assets/images/Plain Rice.png";
import riceVegBowl from "../assets/images/Rice Veg Bowl Rice Tadka Dal Rajma Kadhi Pakora.png";
import vegThali from "../assets/images/Veg Thali (Rice + 3 Roti + Any Two Sabji + Raita + Salad).png";

// Paranthas
import alooParantha from "../assets/images/Desi Ghee Aloo Parantha.png";
import mixParantha from "../assets/images/Mix Parantha.png";

// Pakoras & Chaat
import paneerPakora from "../assets/images/Paneer Pakora.png";
import mixPakora from "../assets/images/Mix Pakora.png";
import breadPakora from "../assets/images/Bread Pakora (1 pc).png";
import alooTikkiChaat from "../assets/images/alootikkichaat.png";
import alooTikkiChaatNoodle from "../assets/images/alootikkichaatnoodle.png";
import dahiVada from "../assets/images/Dahi Vada.png";
import methuVada from "../assets/images/Methu Vada.png";
import rasaVada from "../assets/images/Rasa Vada.png";
import papriChaat from "../assets/images/Papri Chaat.png";
import dahiBhalla from "../assets/images/Dahi Bhalla.png";
import alooDahiKachori from "../assets/images/Kachori.png";
import desiGheeAlooTikki from "../assets/images/Desi Ghee Aloo Tikki 2 pcs with Dahi & Chana.png";

// Dosas
import masalaDosa from "../assets/images/Masala Dosa.png";
import paneerTikkaDosa from "../assets/images/Paneer Tika Dosa.png";
import mysoreMasalaDosa from "../assets/images/Mysore Masala Dosa.png";
import suratiMasalaDosa from "../assets/images/SUrati Masala Dosa.png";
import gheeDosa from "../assets/images/Ghee Dhosa.png";

// Burgers & Snacks
import alooTikkiBurger from "../assets/images/Alootikibarger.png";
import alooTikkiCheeseBurger from "../assets/images/alootikkicheeseburger.png";
import alooTikkiNoodleBurger from "../assets/images/alootikkinoodleburger.png";
import chanaKulcha from "../assets/images/Chana Kulcha.png";
import pavBhaji from "../assets/images/Pav Bhaji.png";
import samosa from "../assets/images/Samosa.png";

// Most Popular
import pavBhaji1 from "../assets/images/Pav Bhaji 1.png";

// Menu Hero Data
export const menuHeroData = {
  backgroundImage: menuHeroBg,
  heading: "Explore Our Delicious Menu",
  description: "From North Indian classics to South Indian delights and street food favorites — freshly prepared, full of flavor, and made with love.",
};

// Helper for items without images
const placeholderImg = chanaBhature; // fallback image

// Menu Data
export const menuPageData = {
  "Most Popular": [
    { id: 1, name: "Tea (Chai)", desc: "Traditional Indian spiced tea", price: "$0.99", img: chai },
    { id: 2, name: "Bread Pakora (1 pc)", desc: "Crispy bread fritter", price: "$1.50", img: breadPakora },
    { id: 3, name: "Desi Ghee Aloo Parantha", desc: "Stuffed potato flatbread with desi ghee", price: "$3.99", img: alooParantha },
    { id: 4, name: "Samosa Plate (2 pc)", desc: "2 pc Samosa with Chana & Sauce", price: "$7.99", img: samosa },
    { id: 5, name: "Desi Ghee Aloo Tikki (2 pcs)", desc: "With Dahi & Chana", price: "$7.99", img: desiGheeAlooTikki },
    { id: 6, name: "Chana Kulcha", desc: "Chickpea curry with soft kulcha bread", price: "$3.99", img: chanaKulcha },
    { id: 7, name: "Chana Bhature", desc: "Authentic Punjabi chickpea curry with fluffy bhature", price: "$9.99", img: chanaBhature },
    { id: 8, name: "Pav Bhaji", desc: "Spiced vegetable mash with buttery pav", price: "$7.99", img: pavBhaji },
    { id: 9, name: "Aloo Tikki Noodle Burger", desc: "Unique fusion burger", price: "$5.99", img: alooTikkiNoodleBurger },
    { id: 10, name: "Veg Thali", desc: "Rice + 3 Roti + Any Two Sabji + Raita + Salad", price: "$9.99", img: vegThali },
  ],
  "Beverages": [
    { id: 1, name: "Tea (Chai)", desc: "Traditional Indian spiced tea", price: "$0.99", img: chai },
    { id: 2, name: "Indian Coffee", desc: "Authentic Indian style coffee", price: "$2.50", img: indianCoffee },
    { id: 3, name: "Lemon Soda", desc: "Refreshing lemon soda", price: "$4.99", img: lemonSoda },
    { id: 4, name: "Orange Juice", desc: "Fresh orange juice", price: "$6.99", img: orangeJuice },
    { id: 5, name: "Canned Pop", desc: "Assorted canned beverages", price: "$1.75", img: cannedPop },
    { id: 6, name: "Bottled Water", desc: "Pure drinking water", price: "$2.25", img: bottledWater },
    { id: 7, name: "Mango Shake", desc: "Thick and creamy mango shake", price: "$4.99", img: mangoShake },
  ],
  "Cold Beverages": [
    { id: 1, name: "Milkshake", desc: "Creamy milkshake in various flavors", price: "$5.99", img: milkshake },
    { id: 2, name: "Lemonade", desc: "Refreshing fresh lemonade", price: "$4.99", img: lemonade },
    { id: 3, name: "Mango Lassi", desc: "Refreshing yogurt-based mango drink", price: "$5.99", img: mangoLassi },
    { id: 4, name: "Carrot Juice", desc: "Fresh carrot juice", price: "$5.99", img: carrotJuice },
    { id: 5, name: "Lassi (Sweet or Salty)", desc: "Traditional yogurt drink", price: "$3.99", img: lassi },
    { id: 6, name: "Special Mix Carrot Juice", desc: "Special blend of carrot juice", price: "$6.99", img: specialMixCarrotJuice },
  ],
  "Sweets & Desserts": [
    { id: 1, name: "Hot Gulab Jamun (2 pcs)", desc: "Deep-fried milk balls in sugar syrup", price: "$3.99", img: gulabJamun },
    { id: 2, name: "Be-be's Churi", desc: "Desi Ghee & Gur", price: "$3.99", img: bebeChuri },
    { id: 3, name: "Mom's Churi", desc: "Desi Ghee & Sugar", price: "$3.99", img: momChuri },
  ],
  "Extras": [
    { id: 1, name: "Extra Bhature", desc: "Additional bhature", price: "$2.99", img: extraBhature },
    { id: 2, name: "Extra Poori", desc: "Additional poori", price: "$1.99", img: extraPoori },
    { id: 3, name: "Extra Dahi", desc: "Additional yogurt", price: "$2.99", img: extraDahi },
    { id: 4, name: "Extra Roti", desc: "Additional roti", price: "$1.00", img: extraRoti },
    { id: 5, name: "Extra Paneer", desc: "Additional paneer", price: "$2.50", img: extraPaneer },
    { id: 6, name: "Extra Butter Cube", desc: "Additional butter", price: "$1.50", img: extraButterCube },
    { id: 7, name: "Extra Pav", desc: "Additional pav bread", price: "$1.50", img: extraPav },
  ],
  "Main Courses": [
    { id: 1, name: "Chana Bhature", desc: "Authentic Punjabi chickpea curry with fluffy bhature", price: "$9.99", img: chanaBhature },
    { id: 2, name: "Chana Poori", desc: "Chickpea curry with poori", price: "$8.99", img: chanaPoori },
    { id: 3, name: "Aloo Poori", desc: "Potato curry with poori", price: "$7.99", img: alooPoori },
    { id: 4, name: "Shahi Paneer", desc: "Creamy tomato-based paneer curry", price: "$7.99", img: shahiPaneer },
    { id: 5, name: "Matar Paneer", desc: "Peas and paneer in tomato gravy", price: "$7.99", img: matarPaneer },
    { id: 6, name: "Mix Veg Sabji", desc: "Mixed vegetable curry", price: "$6.99", img: mixVegSabji },
    { id: 7, name: "Tadka Dal", desc: "Spiced lentil curry", price: "$6.99", img: tadkaDal },
    { id: 8, name: "Dal Makhani", desc: "Creamy black lentil curry", price: "$6.99", img: dalMakhani },
    { id: 9, name: "Paneer Bhurji", desc: "Scrambled paneer with spices", price: "$10.99", img: paneerBhurji },
    { id: 10, name: "Rajma Sabji", desc: "Kidney bean curry", price: "$6.99", img: rajmaSabji },
    { id: 11, name: "Chana Sabji", desc: "Chickpea curry", price: "$7.99", img: chanaSabji },
    { id: 12, name: "Kadhi Pakora", desc: "Yogurt-based curry with pakoras", price: "$6.99", img: kadhiPakora },
    { id: 13, name: "Palak Paneer", desc: "Spinach and paneer curry", price: "$8.99", img: palakPaneer },
  ],
  "Rice & Rice Bowl": [
    { id: 1, name: "Jeera Rice", desc: "Cumin flavored rice", price: "$5.75", img: jeeraRice },
    { id: 2, name: "Plain Rice", desc: "Steamed white rice", price: "$5.50", img: plainRice },
    { id: 3, name: "Rice Veg Bowl", desc: "Rice + Tadka Dal / Rajma / Kadhi Pakora", price: "$6.99", img: riceVegBowl },
  ],
  "Paranthas": [
    { id: 1, name: "Desi Ghee Aloo Parantha", desc: "Stuffed potato flatbread with desi ghee", price: "$3.99", img: alooParantha },
    { id: 2, name: "Mix Parantha", desc: "Mixed stuffing flatbread", price: "$4.99", img: mixParantha },
  ],
  "Pakoras & Chaat": [
    { id: 1, name: "Paneer Pakora", desc: "Crispy fried paneer fritters", price: "$9.99", img: paneerPakora },
    { id: 2, name: "Mix Pakora", desc: "Assorted vegetable fritters", price: "$8.99", img: mixPakora },
    { id: 3, name: "Bread Pakora (1 pc)", desc: "Crispy bread fritter", price: "$1.50", img: breadPakora },
    { id: 4, name: "Aloo Tikki Chaat", desc: "Spiced potato patties with chutneys", price: "$6.99", img: alooTikkiChaat },
    { id: 5, name: "Aloo Tikki Chaat Noodle", desc: "Aloo tikki with noodles", price: "$7.99", img: alooTikkiChaatNoodle },
    { id: 6, name: "Dahi Vada", desc: "Lentil dumplings in spiced yogurt", price: "$12.99", img: dahiVada },
    { id: 7, name: "Methu Vada", desc: "Crispy lentil fritters", price: "$11.99", img: methuVada },
    { id: 8, name: "Rasa Vada", desc: "Vada in spiced gravy", price: "$12.99", img: rasaVada },
    { id: 9, name: "Papri Chaat", desc: "Crispy wafers with yogurt and chutneys", price: "$5.99", img: papriChaat },
    { id: 10, name: "Dahi Bhalla", desc: "Lentil dumplings in spiced yogurt", price: "$7.99", img: dahiBhalla },
    { id: 11, name: "Aloo Dahi Kachori", desc: "Crispy kachori with yogurt", price: "$8.99", img: alooDahiKachori },
    { id: 12, name: "Desi Ghee Aloo Tikki (2 pcs)", desc: "With Dahi & Chana", price: "$7.99", img: desiGheeAlooTikki },
  ],
  "Dosas & Idly": [
    { id: 1, name: "Masala Dosa", desc: "Crispy dosa with potato filling", price: "$12.99", img: masalaDosa },
    { id: 2, name: "Paneer Tikka Dosa", desc: "Dosa filled with spiced paneer", price: "$12.99", img: paneerTikkaDosa },
    { id: 3, name: "Mysore Masala Dosa", desc: "Spicy Mysore style dosa", price: "$12.99", img: mysoreMasalaDosa },
    { id: 4, name: "Surati Masala Dosa", desc: "Surati style dosa", price: "$12.99", img: suratiMasalaDosa },
    { id: 5, name: "Ghee Roast Dosa", desc: "Crispy dosa roasted in pure ghee", price: "$12.99", img: gheeDosa },
    { id: 6, name: "Plain Dosa", desc: "Crispy plain dosa", price: "$12.99", img: masalaDosa },
    { id: 7, name: "Cheese Dosa", desc: "Dosa with cheese filling", price: "$12.99", img: masalaDosa },
    { id: 8, name: "Onion Masala Dosa", desc: "Dosa with onion topping", price: "$12.99", img: masalaDosa },
    { id: 9, name: "Idly (4 pcs)", desc: "Steamed rice cakes with sambar & chutney", price: "$10.99", img: methuVada },
    { id: 10, name: "Sambar Idly", desc: "Idly served in sambar", price: "$10.99", img: methuVada },
  ],
  "Burgers & Snacks": [
    { id: 1, name: "Aloo Tikki Burger", desc: "Potato patty burger", price: "$4.99", img: alooTikkiBurger },
    { id: 2, name: "Aloo Tikki Cheese Burger", desc: "Potato patty with cheese", price: "$5.99", img: alooTikkiCheeseBurger },
    { id: 3, name: "Aloo Tikki Noodle Burger", desc: "Unique fusion burger", price: "$5.99", img: alooTikkiNoodleBurger },
    { id: 4, name: "Chana Kulcha", desc: "Chickpea curry with soft kulcha", price: "$3.99", img: chanaKulcha },
    { id: 5, name: "Pav Bhaji", desc: "Spiced vegetable mash with buttery pav", price: "$7.99", img: pavBhaji },
    { id: 6, name: "Veg Samosa (1 pc)", desc: "Crispy vegetable samosa", price: "$1.99", img: samosa },
    { id: 7, name: "Veg Samosa (10 pcs)", desc: "Crispy vegetable samosas", price: "$15.00", img: samosa },
  ],
};

export const menuPageTabs = [
  "Most Popular",
  "Beverages",
  "Cold Beverages",
  "Sweets & Desserts",
  "Extras",
  "Main Courses",
  "Rice & Rice Bowl",
  "Paranthas",
  "Pakoras & Chaat",
  "Dosas & Idly",
  "Burgers & Snacks",
];

// Menu Section Header
export const menuPageHeader = {
  title: "Our Complete Menu",
  subtitle: "Browse through our full selection of authentic Indian dishes, beverages, and desserts.",
};