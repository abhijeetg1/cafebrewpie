import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    id: 1,
    name: "Classic Espresso",
    description: "Rich, full-bodied espresso with notes of dark chocolate.",
    price: "$3.50",
    image: "/assets/IMG_5978.JPG.jpeg",
    category: "Coffee"
  },
  {
    id: 2,
    name: "Pour Over",
    description: "Single-origin beans hand-poured for a clean, bright cup.",
    price: "$4.50",
    image: "/assets/IMG_6059.JPG.jpeg",
    category: "Coffee"
  },
  {
    id: 3,
    name: "Vanilla Latte",
    description: "Espresso and steamed milk with house-made vanilla bean syrup.",
    price: "$5.00",
    image: "/assets/IMG_6396.JPG.jpeg",
    category: "Coffee"
  },
  {
    id: 4,
    name: "Almond Croissant",
    description: "Flaky, buttery pastry filled with sweet almond frangipane.",
    price: "$4.25",
    image: "/assets/IMG_6397.JPG.jpeg",
    category: "Pastry"
  },
  {
    id: 5,
    name: "Berry Tart",
    description: "Seasonal berries on a bed of vanilla custard in a crisp shell.",
    price: "$5.50",
    image: "/assets/IMG_6629.JPG.jpeg",
    category: "Pastry"
  },
  {
    id: 6,
    name: "Avocado Toast",
    description: "Smashed avocado, chili flakes, and microgreens on sourdough.",
    price: "$9.00",
    image: "/assets/IMG_7164.JPG.jpeg",
    category: "Specials"
  }
];

const Menu = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="menu" className="py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
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
              From our signature roasts to delicate, freshly baked pastries, everything we serve is made with love and precision.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-coffee-cream"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1495474472201-35011d08d1f7?auto=format&fit=crop&q=80&w=800' }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-coffee-dark uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-serif font-bold text-coffee-dark">{item.name}</h4>
                  <span className="text-lg font-bold text-coffee-terracotta">{item.price}</span>
                </div>
                <p className="text-coffee-medium text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-coffee-dark text-coffee-cream rounded-full font-medium hover:bg-coffee-terracotta transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-300">
            Download Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
