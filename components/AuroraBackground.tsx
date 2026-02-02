import React from "react";
import { motion } from "framer-motion";

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#050505]">
      {/* Indigo Blur */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 120, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/20 blur-[120px]"
      />

      {/* Violet Blur */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 150, -60, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/20 blur-[120px]"
      />

      {/* Cyan Blur */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/15 blur-[120px]"
      />
    </div>
  );
};
