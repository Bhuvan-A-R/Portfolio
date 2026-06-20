import React from 'react';
import { FiSend, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container flex flex-col xl:flex-row items-center justify-between">
        
        {/* Left Side: Content */}
        <motion.div 
          className="hero-content flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-wrapper">
            <span className="badge">Unstop Campus Ambassador</span>
          </div>
          
          <h1 className="h1">
            Hello, I'm <span className="highlight-blue">Bhuvan</span>
          </h1>
          <p className="subtitle">
            A passionate FullStack Developer and AI & ML Enthusiast. Nice to meet you.
          </p>
          
          <div className="hero-actions flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn btn-primary">
              Contact Me <FiSend />
            </a>
            <a href="/resume.pdf" target="_blank" className="btn btn-outline">
              My Resume <FiDownload />
            </a>
          </div>

          <div className="socials flex gap-4">
            <a href="https://github.com/Bhuvan-A-R" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/bhuvan-a-r/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Graphic/Image */}
        <motion.div 
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="image-wrapper">
             {/* Dynamic gradient blob instead of image if no image available */}
             <div className="gradient-blob"></div>
             <div className="stats-badge glass">
                <span className="text-primary font-bold text-2xl">4+</span>
                <span className="text-sm font-medium">Finished Projects</span>
             </div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="mouse"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
