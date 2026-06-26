import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-cream/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <Coffee className={`w-8 h-8 ${isScrolled ? 'text-coffee-terracotta' : 'text-coffee-cream'}`} />
              <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-coffee-dark' : 'text-coffee-cream'}`}>
                Cafebrewpie
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-coffee-terracotta ${
                  isScrolled ? 'text-coffee-dark' : 'text-coffee-cream/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#menu"
              className={`px-5 py-2.5 rounded-full font-medium transition-transform hover:scale-105 ${
                isScrolled
                  ? 'bg-coffee-dark text-coffee-cream hover:bg-coffee-terracotta'
                  : 'bg-coffee-cream text-coffee-dark hover:bg-coffee-cream/90'
              }`}
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-coffee-dark' : 'text-coffee-cream'} hover:text-coffee-terracotta focus:outline-none`}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-coffee-cream shadow-xl border-t border-coffee-light/20">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-coffee-dark hover:text-coffee-terracotta hover:bg-coffee-light/10 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center px-4 py-3 bg-coffee-dark text-coffee-cream font-medium rounded-md hover:bg-coffee-terracotta transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
