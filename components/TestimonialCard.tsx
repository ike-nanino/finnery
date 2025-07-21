"use client"

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  delay?: number;
}

export default function TestimonialCard({ name, role, content, delay = 0  }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-50 h-full transition-transform"
    >
      <div className="flex items-center mb-6">
        {/* Placeholder avatar */}
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" aria-hidden="true" />
        <div className="ml-4">
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-emerald-600">{role}</p>
        </div>
      </div>

      <p className="text-gray-700 text-lg italic relative pl-6 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-6xl before:text-emerald-100 before:font-serif before:leading-none">
        {content}
      </p>

      <div className="flex mt-6 space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
}
