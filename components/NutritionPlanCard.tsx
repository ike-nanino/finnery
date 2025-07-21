"use client";


import { motion } from 'framer-motion';

interface NutritionPlanCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export default function NutritionPlanCard({ 
  title, 
  description, 
  icon,
  delay = 0
}: NutritionPlanCardProps) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-lg border border-emerald-100 h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)"
      }}
    >
      <div className="flex items-start">
        <div className="bg-emerald-100 text-emerald-600 text-2xl p-4 rounded-xl mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="text-emerald-500 font-semibold flex items-center">
          Explore plan
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}