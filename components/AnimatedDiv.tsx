"use client";

import { motion, Variants } from 'framer-motion';

interface AnimatedDivProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

export default function AnimatedDiv({ 
  children, 
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }, 
  className 
}: AnimatedDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}