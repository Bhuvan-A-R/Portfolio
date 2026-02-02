import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

const Loader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  useEffect(() => {
    const t = setTimeout(() => {
      onFinish?.();
    }, 1000);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <motion.img
          layoutId="avatar"
          src={portfolioData.avatar}
          alt={portfolioData.name}
          className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border border-white/20"
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
