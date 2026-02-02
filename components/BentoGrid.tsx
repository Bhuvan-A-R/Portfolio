import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Cpu, Globe } from "lucide-react";
import { portfolioData } from "../data";

export const BentoGrid: React.FC = () => {
  const stack = portfolioData.skills;
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

  const initialXForIndex = (i: number) => {
    if (bp === "sm") return 0;
    // center marquee (index 1) should come from center/bottom or stay static if preferred, 
    // but here we keep it consistent with the grid flow
    if (i === 1) return 0; 
    if (bp === "md") return i % 2 === 0 ? -40 : 40;
    return i % 2 === 0 ? -80 : 80;
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        {/* Compact Location Node (1x1) */}
        <motion.div
          initial={{ opacity: 0, x: initialXForIndex(0) }}
          whileInView={{ opacity: 1, x: 0 }}
          // Changed to 'once: false' for re-triggering animations
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 0.98 }}
          className="rounded-[2rem] bg-zinc-900 border border-white/5 relative overflow-hidden h-[220px] md:h-auto group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-5 group-hover:opacity-15 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="flex items-center gap-2 text-indigo-400">
              <MapPin size={12} />
              <span className="font-bold tracking-widest uppercase text-[8px] font-mono">
                Location_Node
              </span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mt-2 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full">
            <h3 className="text-xl md:text-2xl font-extrabold heading-font uppercase text-white/90">
              BANGALORE
            </h3>
            <div className="flex flex-col mt-1">
              <span className="text-zinc-500 text-[9px] font-mono uppercase tracking-tighter">
                12.9716° N / 77.5946° E
              </span>
              <span className="text-indigo-500/60 text-[8px] font-mono uppercase tracking-widest mt-1">
                Status: Active Hub
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, x: initialXForIndex(1) }}
          whileInView={{ opacity: 1, x: 0 }}
          // Changed to 'once: false'
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-2 rounded-[2rem] bg-zinc-900 border border-white/5 p-6 md:p-8 flex flex-col justify-between overflow-hidden relative min-h-[220px] md:min-h-auto"
        >
          <div className="flex items-center justify-center gap-3 text-indigo-400 mb-6">
            <Cpu size={16} />
            <span className="font-bold tracking-widest uppercase text-[9px] md:text-xs font-mono">
              Core_System_Stack
            </span>
          </div>

          <div className="relative flex flex-col gap-3 md:gap-4 overflow-hidden">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {stack.concat(stack).map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 rounded-xl text-[9px] font-mono border border-white/10 uppercase text-white/60 hover:text-white hover:border-indigo-500/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-4 animate-marquee2 whitespace-nowrap">
              {stack
                .slice()
                .reverse()
                .concat(stack)
                .map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 rounded-xl text-[9px] font-mono border border-white/10 uppercase text-white/60 hover:text-white hover:border-indigo-500/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
            <span>Modules Loaded: {stack.length}</span>
            <span className="text-indigo-500/40">Efficiency: 99.8%</span>
          </div>

          <style>{`
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @keyframes marquee2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
            .animate-marquee { animation: marquee 25s linear infinite; }
            .animate-marquee2 { animation: marquee2 30s linear infinite; }
          `}</style>
        </motion.div>

        {/* Memberships Federation Card */}
        <motion.div
          initial={{ opacity: 0, x: initialXForIndex(2) }}
          whileInView={{ opacity: 1, x: 0 }}
          // Changed to 'once: false'
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="rounded-[2rem] bg-indigo-600 border border-white/10 p-6 md:p-8 flex flex-col items-center justify-center text-center relative group min-h-[220px] md:min-h-auto overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <ShieldCheck
            size={36}
            className="text-white mb-4 group-hover:scale-110 transition-transform duration-500"
          />
          <h4 className="text-base md:text-lg font-extrabold heading-font uppercase text-white">
            Membership
          </h4>
          <div className="mt-4 flex flex-col gap-2 w-full">
            <p className="text-indigo-100 text-[8px] uppercase tracking-[0.2em] font-bold bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
              GAT Student Council Member
            </p>
            <p className="text-indigo-100 text-[8px] uppercase tracking-[0.2em] font-bold bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
              IEEE Computer Society Member
            </p>
            <p className="text-indigo-100 text-[8px] uppercase tracking-[0.2em] font-bold bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
              GCC Core Member
            </p>
          </div>
        </motion.div>

        {/* Global Broadcast Cell (Commented out in original, maintained here) */}
        
        {/* Stats / Performance Cell */}
        <motion.div
          initial={{ opacity: 0, x: initialXForIndex(3) }}
          whileInView={{ opacity: 1, x: 0 }}
          // Changed to 'once: false'
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center gap-1 group hover:bg-white/[0.08] transition-all duration-500 cursor-default"
        >
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
            Performance
          </div>
          <span className="text-5xl font-extrabold heading-font text-indigo-500 group-hover:scale-110 transition-transform">
            02+
          </span>
          <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-zinc-500 mt-1">
            Years_of_Code
          </span>
        </motion.div>
      </div>
    </section>
  );
};