import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { MagneticButton } from "./MagneticButton";

export const Footer: React.FC = () => {
  return (
    <>
      <section className="py-40 flex flex-col items-center text-center px-6 md:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // Allows animation to trigger every time it enters viewport
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-extrabold heading-font mb-12 uppercase leading-none"
        >
          LET'S SYNC
          <br />
          <span className="text-indigo-500">REALITIES.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <MagneticButton
            onClick={() => window.open(portfolioData.socials.gmail)}
            className="mx-auto"
          >
            Launch Transmission
          </MagneticButton>
        </motion.div>
      </section>

      <footer
        id="footer"
        className="py-20 border-t border-white/5 px-8 flex flex-col items-center text-center gap-8 relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-3xl italic heading-font opacity-60 max-w-2xl mx-auto"
        >
          "{portfolioData.quote}"
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl text-[10px] font-mono text-zinc-600 gap-6 mt-16 pt-10 border-t border-white/5"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-indigo-500/60">BHUVAN A R </span>
            <span className="opacity-40 uppercase">
              Copyright © 2026 All Rights Reserved
            </span>
          </div>

          <div className="flex gap-8 order-first md:order-none mb-4 md:mb-0">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={portfolioData.socials.gmail}
              className="hover:text-white transition-colors"
            >
              G-MAIL
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <span>LOC: BENGALURU, IN</span>
            <span className="opacity-40">LAST_UPDATE: FEB_2025</span>
          </div>
        </motion.div>

        {/* Background Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10vw] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none heading-font"
        >
          BHUVAN AR
        </motion.div>
      </footer>
    </>
  );
};