import React from 'react';
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-cream/80 pt-20 pb-10 border-t-4 border-coffee-terracotta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <Coffee className="w-8 h-8 text-coffee-terracotta group-hover:text-coffee-accent transition-colors" />
              <span className="font-serif text-3xl font-bold text-coffee-cream">
                Cafebrewpie
              </span>
            </a>
            <p className="max-w-md text-coffee-cream/60 leading-relaxed">
              Pouring passion into every cup. Join us for a moment of peace, a burst of energy, or a warm conversation in the heart of the city.
            </p>
            
            {/* Socials */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-light/20 flex items-center justify-center hover:bg-coffee-terracotta hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-light/20 flex items-center justify-center hover:bg-coffee-terracotta hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-light/20 flex items-center justify-center hover:bg-coffee-terracotta hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="font-serif font-bold text-xl text-coffee-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-coffee-terracotta transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-coffee-terracotta transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-coffee-terracotta transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-coffee-terracotta transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="font-serif font-bold text-xl text-coffee-cream mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for updates on seasonal specials and events.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-coffee-light/10 border border-coffee-light/30 rounded-lg focus:outline-none focus:border-coffee-terracotta text-coffee-cream placeholder:text-coffee-cream/30"
              />
              <button 
                type="button" 
                className="w-full px-4 py-3 bg-coffee-terracotta text-coffee-cream rounded-lg font-medium hover:bg-coffee-accent transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-coffee-light/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-coffee-cream/40">
          <p>&copy; {new Date().getFullYear()} Cafebrewpie. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-coffee-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coffee-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
