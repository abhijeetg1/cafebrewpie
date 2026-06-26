import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-coffee-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
            style={{ y: imageY }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-coffee-dark/20 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="/assets/IMG_5977.JPG.jpeg" 
                alt="Cafebrewpie Interior" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000' }}
              />
            </div>
            {/* Decorative element */}
            <motion.div 
              style={{ y: blobY }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-coffee-terracotta rounded-full -z-10 blur-2xl opacity-60"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            style={{ y: textY }}
            className="w-full md:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-sm font-bold text-coffee-terracotta tracking-widest uppercase mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-6 leading-tight text-balance">
                Where Every Cup Tells a Story
              </h3>
              <p className="text-lg text-coffee-medium leading-relaxed mb-8">
                Born from a passion for the perfect brew and the art of pastry, Cafebrewpie is your neighborhood sanctuary. We source the finest artisanal beans and bake our treats fresh daily, creating a warm, cozy space where conversations flow as freely as our coffee.
              </p>
              <p className="text-lg text-coffee-medium leading-relaxed mb-8">
                Whether you're looking for a quiet morning moment or an afternoon catch-up, our doors are open and the aroma is always inviting.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 gap-6 mt-10 border-t border-coffee-light/30 pt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                <h4 className="text-3xl font-serif font-bold text-coffee-dark mb-1">100%</h4>
                <p className="text-sm text-coffee-medium">Ethically Sourced Beans</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                <h4 className="text-3xl font-serif font-bold text-coffee-dark mb-1">Daily</h4>
                <p className="text-sm text-coffee-medium">Fresh Baked Pastries</p>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
