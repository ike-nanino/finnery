"use client";

import { motion } from 'framer-motion';
import AnimatedDiv from './AnimatedDiv';

export default function Newsletter() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 text-center">
        <AnimatedDiv>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Nutrition Journey
          </h2>
        </AnimatedDiv>
        
        <AnimatedDiv variants={{ 
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.6, 
              delay: 0.2 
            } 
          }
        }}>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
            Join 50,000+ subscribers receiving weekly science-backed nutrition tips
          </p>
        </AnimatedDiv>
        
        <AnimatedDiv variants={{ 
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.6, 
              delay: 0.4 
            } 
          }
        }} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-full whitespace-nowrap"
          >
            Subscribe Now
          </motion.button>
        </AnimatedDiv>
      </div>
    </section>
  );
}