"use client";


import { motion } from 'framer-motion';
import AnimatedDiv from './AnimatedDiv';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  bgColor?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  bgColor = 'bg-emerald-50' 
}: PageHeaderProps) {
  return (
    <section className={`py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto text-center">
        <AnimatedDiv>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
        </AnimatedDiv>
        <AnimatedDiv>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedDiv>
        <AnimatedDiv >
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </AnimatedDiv>
      </div>
    </section>
  );
}