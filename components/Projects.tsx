
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-20 md:py-32">
      <div className="flex flex-col md:flex-row justify-center items-center mb-12 md:mb-16 gap-4 text-center">
        <div className="relative">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold heading-font uppercase opacity-5 leading-none absolute -top-10 left-1/2 -translate-x-1/2 w-full whitespace-nowrap -z-10">
            /Projects
          </h2>
          <p className="text-indigo-400 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold">Latest Deployments</p>
          <h3 className="text-2xl md:text-4xl font-bold heading-font text-white mt-1 uppercase">Featured Work</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:gap-20">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-[2rem] p-4 md:p-10 hover:border-indigo-500/30 transition-all duration-500"
          >
            <div className="order-2 lg:order-2 space-y-4 md:space-y-6 text-center flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold heading-font uppercase text-white group-hover:text-indigo-400 transition-colors leading-tight">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-md">
                {project.description}
              </p>
              <div className="pt-2 md:pt-4">
                <a 
                  href={project.liveUrl} 
                  target="_blank"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3.5 bg-white text-black font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-indigo-600 hover:text-white transition-all rounded-full active:scale-95"
                >
                  Explore Live <ExternalLink size={14} />
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-1 relative rounded-2xl md:rounded-3xl overflow-hidden aspect-video border border-white/5 group-hover:scale-[1.01] transition-transform duration-700">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
