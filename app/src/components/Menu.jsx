import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = [
  {
    category: "Pizza",
    note: "Prices: Regular / Medium / Large",
    items: [
      { name: "Farmhouse Pizza", price: "₹190 / ₹230 / ₹340", image: "/assets/pizza1.jpeg" },
      { name: "Margherita Pizza", price: "₹170 / ₹210 / ₹320" },
      { name: "Tandoori Paneer Pizza", price: "₹230 / ₹290 / ₹360" },
      { name: "Pizza Trio Special (3 Flavours)", price: "- / ₹260 / ₹350" },
      { name: "Corn Pizza", price: "₹190 / ₹230 / ₹340" },
      { name: "Tandoori Chicken Magic", description: "Nonveg", price: "₹210 / ₹260 / ₹350" }
    ]
  },
  {
    category: "Pastries",
    note: "",
    items: [
      { name: "Biscoff cheesecake", price: "₹80" },
      { name: "Hazelnut pastry", price: "₹60" },
      { name: "Cake pastry", price: "₹50" },
      { name: "Creme brûlée", price: "₹100" },
      { name: "Brownie with Ice Cream", price: "₹80" },
      { name: "Tiramisu", description: "Contains Egg", price: "₹100" },
      { name: "Biscoff Pastry", price: "₹60" },
      { name: "Strawberry cheese cake", price: "₹80" },
      { name: "Baked cheesecake", description: "Contains egg", price: "₹70" }
    ]
  },
  {
    category: "Cakes",
    note: "Prices: 1 Pound / 2 Pound",
    items: [
      { name: "Chocolate Cake", price: "₹350 / ₹550", image: "/assets/cake1.jpeg" },
      { name: "Red Velvet Cake", price: "₹300 / ₹500", image: "/assets/cake2.jpeg" },
      { name: "Fruit Cake", price: "₹300 / ₹500", image: "/assets/cake3.jpeg" },
      { name: "Vanilla Cake", price: "₹300 / ₹500", image: "/assets/cake4.jpeg" },
      { name: "Cheesecake", price: "₹400 / ₹700" }
    ]
  },
  {
    category: "Coffee",
    note: "",
    items: [
      { name: "Cold Coffee", price: "₹90", image: "/assets/coldcoffee.jpeg" },
      { name: "Hot Chocolate", price: "₹90" },
      { name: "Cappuccino", price: "Launching Soon" },
      { name: "Americano", price: "Launching Soon" },
      { name: "Flat White", price: "Launching Soon" }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const activeData = menuData.find(c => c.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-coffee-terracotta tracking-widest uppercase mb-3">Our Menu</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
              Carefully Crafted
            </h3>
            <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
              From our signature pizzas to delicate, freshly baked pastries, everything we serve is made with love and precision. All prices are in INR (₹).
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-2 rounded-full font-serif font-bold text-lg transition-all duration-300 ${
                activeCategory === cat.category 
                  ? 'bg-coffee-terracotta text-coffee-cream shadow-md scale-105'
                  : 'bg-white text-coffee-dark hover:bg-coffee-light/20 border border-coffee-light/30'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-coffee-light/20 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full"
            >
              <div className="mb-8 text-center border-b border-coffee-light/20 pb-4">
                <h4 className="text-3xl font-serif font-bold text-coffee-dark mb-2 tracking-wide uppercase">{activeCategory}</h4>
                {activeData.note && (
                  <p className="text-coffee-terracotta font-medium italic">{activeData.note}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {activeData.items.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-coffee-light/10 pb-4 group gap-2 sm:gap-4">
                    <div className="flex items-center gap-4 w-full">
                      {item.image && (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="pr-4 flex-1">
                        <h5 className="text-lg sm:text-xl font-bold text-coffee-dark group-hover:text-coffee-terracotta transition-colors">{item.name}</h5>
                        {item.description && (
                          <p className="text-sm text-coffee-medium mt-1">{item.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-coffee-terracotta text-right sm:whitespace-nowrap self-end sm:self-auto mt-1 sm:mt-0">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="/assets/menucard.jpeg" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-coffee-dark text-coffee-cream rounded-full font-medium hover:bg-coffee-terracotta transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-300">
            View Original Menu Card
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
