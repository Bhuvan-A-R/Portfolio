
import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic radius is roughly width/height. 
    // If within 20px of the button boundary, pull it.
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    mouseX.set(distanceX * 0.4);
    mouseY.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-4" // Padding increases the trigger area
    >
      <motion.button
        onClick={onClick}
        style={{ x, y }}
        className={`relative z-10 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs transition-colors hover:bg-indigo-600 hover:text-white ${className}`}
      >
        {children}
      </motion.button>
    </div>
  );
};
