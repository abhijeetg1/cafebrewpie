import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import CoffeeCup3D from './CoffeeCup3D';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full bg-coffee-dark overflow-hidden flex items-center">
      {/* 3D Background / Centerpiece */}
      <div className="absolute inset-0 z-0 opacity-80 md:opacity-100">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-coffee-dark">
            <div className="w-16 h-16 border-4 border-coffee-cream border-t-coffee-terracotta rounded-full animate-spin"></div>
          </div>
        }>
          <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Environment preset="city" />
            <CoffeeCup3D />
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.1} minPolarAngle={Math.PI / 2 - 0.5} />
          </Canvas>
        </Suspense>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between pointer-events-none">
        <div className="md:w-1/2 mt-20 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-coffee-cream leading-tight mb-6 pointer-events-auto drop-shadow-lg"
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
            <a href="#location" className="px-8 py-4 bg-transparent border-2 border-coffee-cream text-coffee-cream text-lg font-medium rounded-full shadow-lg hover:bg-coffee-cream hover:text-coffee-dark transition-all duration-300">
              Visit Us
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2"
      >
        <span className="text-coffee-cream/70 text-sm font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-coffee-cream/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-coffee-cream absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
