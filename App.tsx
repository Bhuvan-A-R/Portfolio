import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { AuroraBackground } from "./components/AuroraBackground";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { MagneticButton } from "./components/MagneticButton";
import { portfolioData } from "./data";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#050505] min-h-screen selection:bg-indigo-500 overflow-x-hidden scroll-smooth"
    >
      <AuroraBackground />
      <div className="noise-overlay" />
      <Navbar loading={loading} />

      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero />
        <About />
        <BentoGrid />
        {/* <Projects /> */}
        <Blog />
        <Footer />
      </main>
    </div>
  );
};

export default App;
