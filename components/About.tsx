import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

export const About: React.FC = () => {
  const [bp, setBp] = useState<"sm" | "md" | "lg">("lg");

  useEffect(() => {
    const onResize = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 768) setBp("sm");
      else if (w < 1024) setBp("md");
      else setBp("lg");
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const imgInitialX = bp === "sm" ? 0 : -60;
  const textInitialX = bp === "sm" ? 0 : 60;

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image on the left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: imgInitialX }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          // Changed to 'once: false' so it animates every time it enters the viewport
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-square sm:aspect-[4/3] md:aspect-[4/5] rounded-[2rem] md:rounded-3xl overflow-hidden border border-white/10 group order-1"
        >
          <img
            src={portfolioData.avatar}
            alt={portfolioData.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Text on the right, centered */}
        <motion.div
          initial={{ opacity: 0, x: textInitialX }}
          whileInView={{ opacity: 1, x: 0 }}
          // Changed to 'once: false' to allow re-triggering on scroll up/down
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 order-2 text-center flex flex-col items-center"
        >
          <div className="relative w-full">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold heading-font uppercase text-white/5 select-none absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-full whitespace-nowrap text-center">
              /AboutMe
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold heading-font mb-6 text-indigo-400">
              BHUVAN A R
            </h3>
          </div>

          <div className="space-y-4 md:space-y-6 text-zinc-400 text-sm md:text-lg leading-relaxed max-w-xl">
            <p>{portfolioData.about.p1}</p>
            <p>{portfolioData.about.p2}</p>
            <p>{portfolioData.about.p3}</p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {portfolioData.about.highlights.map((h, i) => (
              <div
                key={i}
                className="px-3 md:px-4 py-1.5 md:py-2 border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-white/60 bg-white/5"
              >
                {h}
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={() => window.open(portfolioData.resumeUrl)}
              className="group relative w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold uppercase tracking-widest text-xs overflow-hidden transition-all active:scale-95"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-black font-bold uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Resume!
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};