"use client";

import { motion } from 'framer-motion';
import AnimatedDiv from './AnimatedDiv';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Nutrition <span className="text-green-500">Personalized</span> For Your Body
            </h1>
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
          }}>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              DNA-based meal plans and AI-powered nutrition coaching for optimal health and performance.
            </p>
          </AnimatedDiv>
          
          <AnimatedDiv variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.6,
                delay: 0.6
              } 
            }
          }} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-green-200 transition-all"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors"
            >
              How It Works
            </motion.button>
          </AnimatedDiv>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
          
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4">
                <div className="h-4 w-32 bg-green-500 rounded mb-2"></div>
                <div className="h-3 w-24 bg-emerald-300 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}