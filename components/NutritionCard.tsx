"use client";


import { motion } from 'framer-motion';

interface NutritionCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

export default function NutritionCard({ 
  title, 
  description, 
  icon, 
  color,
  delay = 0 
}: NutritionCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className={`${color} text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-emerald-500 font-medium flex items-center">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}