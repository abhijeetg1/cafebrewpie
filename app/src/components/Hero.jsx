import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full bg-coffee-dark overflow-hidden flex items-center">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/env1.jpg" 
          alt="Cafebrewpie Ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-dark/70 backdrop-blur-[2px]"></div>
      </div>



      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between pointer-events-none">
        <div className="md:w-1/2 mt-20 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-coffee-cream leading-tight mb-6 pointer-events-auto drop-shadow-2xl"
          >
            Cafebrewpie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-coffee-cream/90 font-light mb-10 max-w-lg pointer-events-auto drop-shadow-md"
          >
            A warm, cozy, artisanal coffee experience crafted for the soul.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pointer-events-auto flex gap-4"
          >
            <a href="#menu" className="px-8 py-4 bg-coffee-terracotta text-coffee-cream text-lg font-medium rounded-full shadow-lg hover:bg-coffee-accent hover:-translate-y-1 transition-all duration-300">
              View Menu
            </a>
            <a href="#location" className="px-8 py-4 bg-transparent border-2 border-coffee-cream text-coffee-cream text-lg font-medium rounded-full shadow-lg hover:bg-coffee-cream hover:text-coffee-dark transition-all duration-300 backdrop-blur-sm">
              Visit Us
            </a>
          </motion.div>
        </div>
        
        {/* Coffee Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end pointer-events-auto"
        >
          <div className="relative w-full max-w-lg aspect-square rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-coffee-cream/20">
            <img 
              src="/assets/coffee.jpg" 
              alt="Fresh Artisan Coffee" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 z-20"
      >
        <span className="text-coffee-cream/90 text-sm font-medium tracking-widest uppercase drop-shadow-md">Scroll</span>
        <div className="w-[1px] h-12 bg-coffee-cream/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-coffee-cream absolute top-0 shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
