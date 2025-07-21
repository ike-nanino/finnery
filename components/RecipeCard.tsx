"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface RecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  difficulty: string;
  category: string;
  delay?: number;
}

export default function RecipeCard({ 
  title, 
  description, 
  prepTime, 
  difficulty, 
  category,
  delay = 0 
}: RecipeCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-green-100">
        <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-600 ml-1">4.8</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-600">{prepTime}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
            difficulty === 'Medium' ? 'bg-amber-100 text-amber-800' :
            'bg-rose-100 text-rose-800'
          }`}>
            {difficulty}
          </span>
        </div>
      </div>
    </motion.div>
  );
}