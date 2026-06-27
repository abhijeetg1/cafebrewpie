import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="location" className="py-24 bg-coffee-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Info Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="w-full lg:w-1/3"
          >
            <motion.h2 variants={itemVariants} className="text-sm font-bold text-coffee-terracotta tracking-widest uppercase mb-3">Visit Us</motion.h2>
            <motion.h3 variants={itemVariants} className="text-4xl font-serif font-bold text-coffee-dark mb-10">
              Come say hi.
            </motion.h3>
            
            <div className="space-y-8">
              
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="mt-1 bg-coffee-light/20 p-3 rounded-full text-coffee-terracotta">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-coffee-dark mb-2">Location</h4>
                  <p className="text-coffee-medium leading-relaxed">
                    Dhirajganj, Gamharia<br />
                    Jamshedpur, Jharkhand<br />
                    832108
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="mt-1 bg-coffee-light/20 p-3 rounded-full text-coffee-terracotta">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-coffee-dark mb-2">Hours</h4>
                  <p className="text-coffee-medium leading-relaxed">
                    Mon - Fri: 7:00 AM - 6:00 PM<br />
                    Sat - Sun: 8:00 AM - 7:00 PM
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="mt-1 bg-coffee-light/20 p-3 rounded-full text-coffee-terracotta">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-coffee-dark mb-2">Contact</h4>
                  <p className="text-coffee-medium leading-relaxed">
                    +1 (555) 123-4567<br />
                    hello@cafebrewpie.com
                  </p>
                </div>
              </motion.div>

            </div>

            <motion.div variants={itemVariants} className="mt-10">
              <a 
                href="https://maps.app.goo.gl/eyWFd6E4kLQRceMX6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 w-full sm:w-auto bg-coffee-terracotta text-coffee-cream rounded-full font-medium hover:bg-coffee-accent hover:-translate-y-1 transition-all duration-300 shadow-md flex items-center justify-center gap-2 inline-flex"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </motion.div>
          </motion.div>

          {/* Map Side (Placeholder) */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15, perspective: 1000 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-2/3"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group"
            >
              <iframe 
                src="https://maps.google.com/maps?q=CAFE+BREWPIE,+Dhirajganj,+Gamharia,+Jamshedpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: "none" }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0 z-20"
                title="Cafe Brewpie Location"
              ></iframe>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
