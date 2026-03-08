import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Features from './components/Features';
import { motion, useScroll, useSpring } from 'framer-motion';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB] overflow-x-hidden selection:bg-[#800000]/10 selection:text-[#800000]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#800000] origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Courses />
        <Faculty />
      </main>

      <Footer />
    </div>
  );
}

export default App;
