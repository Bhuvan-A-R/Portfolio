import React from "react";
import { motion } from "framer-motion";
// import { portfolioData } from "../data";

// Fallback portfolio data to avoid "Cannot find name 'portfolioData'" errors.
// Replace or remove this when importing real data from your project.
const portfolioData: { avatar: string; name: string } = {
  avatar: "/avatar.png",
  name: "Bhuvan",
};

export const Navbar: React.FC<{ loading?: boolean }> = ({
  loading = false,
}) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 md:top-8 left-0 right-0 z-[100] px-4 md:px-12 flex justify-end pointer-events-none"
    >
      <div className="bg-black/40 backdrop-blur-2xl border border-white/10 px-4 py-2 md:py-3 rounded-full flex items-center gap-3 md:gap-4 pointer-events-auto">
        <span className="font-extrabold tracking-tighter text-sm md:text-base heading-font uppercase text-white/90">
          BHUVAN
        </span>

        <a href="#home" className="flex items-center group">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-indigo-500 transition-all duration-500">
            <motion.img
              layoutId="avatar"
              src={portfolioData.avatar}
              alt={portfolioData.name}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              animate={loading ? { opacity: 0, scale: 0.75 } : { opacity: 1, scale: 1 }}
              initial={false}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>
        </a>
      </div>
    </motion.nav>
  );
}