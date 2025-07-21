"use client"

import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white hover:border-green-100 h-full"
    >
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6">
        <button className="text-green-500 font-semibold flex items-center">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}