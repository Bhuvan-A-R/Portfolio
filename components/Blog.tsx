import React from "react";
import { motion } from "framer-motion";
// Fix: Removed the incorrectly named and unused 'activity' import from lucide-react to resolve the compilation error.
import { ExternalLink, Terminal, Share2 } from "lucide-react";
import { portfolioData } from "../data";

export const Blog: React.FC = () => {
  const posts = portfolioData.blogPosts;

  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="flex items-center gap-2 text-indigo-500 font-mono text-[10px] uppercase tracking-[0.4em]">
          {/* <Terminal size={14} /> */}
          {/* <span>LinkedIn_Activity_Sync</span> */}
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold heading-font uppercase">
          LATEST<span className="text-indigo-500">_BLOGS</span>
        </h2>
        <p className="text-zinc-500 text-sm md:text-base font-medium max-w-xl mx-auto italic">
          Broadcasts from the recent professional feed. Real-time updates on
          leadership and technology.
        </p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-zinc-500 text-xl md:text-base font-medium max-w-xl mx-auto italic"
        >
          Coming Soon....
        </motion.p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-zinc-900/50 border border-white/5 p-8 hover:border-indigo-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <Share2 size={16} className="text-indigo-500" />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] font-mono text-indigo-500 border border-indigo-500/20 px-2 py-0.5 rounded-full uppercase">
                  {post.id}
                </span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase">
                  {post.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold heading-font text-white group-hover:text-indigo-400 transition-colors mb-4 uppercase leading-tight">
                {post.title}
              </h3>
              
              <div className="w-8 h-[1px] bg-indigo-500/30 mb-4 group-hover:w-full transition-all duration-700" />
              
              <p className="text-zinc-500 text-xs leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">{post.tag}</span>
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-indigo-400 transition-colors group/link"
              >
                Full Protocol 
                <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            // Scanline Effect 
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-1/2 w-full -translate-y-full group-hover:translate-y-[200%] transition-transform duration-[1500ms] pointer-events-none" />
            
            // Holographic background glow
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/5 blur-[50px] group-hover:bg-indigo-500/10 transition-colors" />
          </motion.div>
        ))}
      </div> */}

      {/* <div className="mt-16 text-center">
        <motion.a 
          whileHover={{ x: 5 }}
          href="https://www.linkedin.com/in/bhuvan-a-r/recent-activity/all/"
          target="_blank"
          className="inline-flex items-center gap-3 text-[10px] font-mono text-zinc-600 hover:text-white transition-colors uppercase tracking-[0.2em] group"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          View Continuous Stream on LinkedIn
          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>
      </div> */}
    </section>
  );
};
