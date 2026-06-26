import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "/assets/IMG_7220.JPG.jpeg",
  "/assets/IMG_7221.JPG.jpeg",
  "/assets/IMG_7222.JPG.jpeg",
  "/assets/IMG_5977.JPG.jpeg",
  "/assets/IMG_5978.JPG.jpeg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-coffee-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-coffee-accent tracking-widest uppercase mb-3">Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-coffee-cream mb-4">
              Moments at Cafebrewpie
            </h3>
          </motion.div>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group"
          >
            <img 
              src={galleryImages[0]} 
              alt="Gallery 1" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              style={{ minHeight: '400px' }}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000' }}
            />
            <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>

          {/* Smaller Images */}
          {galleryImages.slice(1).map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden relative group"
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 2}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                style={{ aspectRatio: '1/1' }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800' }}
              />
              <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
