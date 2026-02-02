import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { WireframeShape } from "./WireframeShape";
import { portfolioData } from "../data";

const roles = [
  "FullStack Dev",
  "UI Architect",
  "AI Enthusiast",
  "Creative Coder",
  "IEEE Member",
];

// 1. Component for the floating gooey blobs
const GooeyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* The SVG Filter definition */}
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -10" />
        </filter>
      </svg>

      {/* The container applying the filter */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-color-dodge"
        style={{ filter: "url(#goo)" }}
      >
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] left-[20%] w-72 h-72 bg-indigo-600 rounded-full blur-xl"
        />
        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[40%] right-[20%] w-96 h-96 bg-purple-600 rounded-full blur-xl"
        />
        {/* Blob 3 */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[20%] left-[40%] w-64 h-64 bg-blue-600 rounded-full blur-xl"
        />
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smoother Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const shapeY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Slower interval for readability
    return () => clearInterval(timer);
  }, []);

  const namasteText = "NAMASTE();";
  const nameText = `I'M ${portfolioData.name.toUpperCase()}`;

  // Custom easing for ultra-smooth feeling
  // Cast to any to satisfy framer-motion easing typing in this project setup
  const smoothEase: any = [0.25, 0.1, 0.25, 1.0];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 md:px-24 overflow-hidden pt-20"
    >
      {/* Layer 0: Gooey Animations (NEW) */}
      {/* <GooeyBackground /> */}

      {/* Layer 1: Subtle Tech Image Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.02] grayscale mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/0 via-[#050505]/60 to-[#050505]" />
      </div>

      {/* Layer 2: Massive Decorative Background Text (Parallax) */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none overflow-hidden"
      >
        <span className="text-[28vw] font-black text-white/[0.03] whitespace-nowrap heading-font tracking-tighter leading-none blur-[2px]">
          {portfolioData.firstName.toUpperCase()}{" "}
          {portfolioData.lastName.toUpperCase()}
        </span>
      </motion.div>

      {/* Layer 3: 3D Shape (Parallax) */}
      <motion.div
        style={{ y: shapeY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 opacity-20 md:opacity-30 pointer-events-none scale-110"
      >
        <WireframeShape />
      </motion.div>

      {/* Layer 4: Main Content */}
      <div className="relative z-10 text-center w-full max-w-6xl mix-blend-screen">
        <div className="flex flex-col items-center">
          {/* Namaste Text */}
          <div className="flex flex-wrap justify-center overflow-hidden">
            {namasteText.split("").map((char, i) => (
              <motion.span
                key={`namaste-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: smoothEase,
                }}
                className="inline-block text-1xl sm:text-2xl md:text-4xl font-extrabold uppercase heading-font leading-tight px-1 py-1 text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Name Text */}
          <div className="flex flex-wrap justify-center overflow-hidden -mt-1 md:-mt-4">
            {nameText.split("").map((char, i) => (
              <motion.span
                key={`name-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.03,
                  ease: smoothEase,
                }}
                className="inline-block text-1xl sm:text-2xl md:text-4xl font-extrabold uppercase heading-font leading-tight px-1 text-white/90"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Role Switcher */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl md:text-3xl font-medium text-zinc-400">
          <span className="opacity-50 font-light text-xs sm:text-base uppercase tracking-widest font-mono">
            System_Role:
          </span>
          <div className="h-[1.4em] overflow-hidden relative min-w-[260px] sm:min-w-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex]}
                initial={{ y: "40%", opacity: 0, filter: "blur(4px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-40%", opacity: 0, filter: "blur(4px)" }}
                transition={{
                  duration: 0.5,
                  ease: "backOut", // Adds a nice 'snap' into place
                }}
                className="absolute inset-0 flex items-center justify-center font-bold text-white whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: smoothEase }}
          className="mt-8 md:mt-12 text-zinc-500 max-w-md md:max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg font-medium italic"
        >
          {portfolioData.tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />
      </motion.div>
    </section>
  );
};
