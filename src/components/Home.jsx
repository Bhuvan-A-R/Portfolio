import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col gap-8 h-full justify-center">
        <motion.div 
          className="bento-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', color: 'white', position: 'relative', overflow: 'hidden', padding: 0 }}
        >
          <div className="hero-flex">
            <div className="hero-text">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                  Welcome
                </span>
              </div>
              <h1 className="h1" style={{ color: 'white' }}>
                Hello, I'm <br className="hidden md:block" /><span style={{ color: 'var(--color-accent)' }}>Bhuvan A R</span>
              </h1>
              <div className="subtitle" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', fontSize: '1.25rem', marginBottom: '2rem', marginLeft: 'auto', marginRight: 'auto' }}>
                <span style={{ marginRight: '8px' }}>A passionate</span>
                <TypeAnimation
                  sequence={[
                    'FullStack Developer',
                    2000,
                    'AI & ML Enthusiast',
                    2000,
                    'Unstop Campus Ambassador',
                    2000,
                    'Problem Solver',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontWeight: 'bold', color: 'white' }}
                  repeat={Infinity}
                />
                <br />
                focused on building beautiful, interactive digital experiences.
              </div>
              <div className="mt-8">
                <a href="#contact" className="btn btn-accent">
                  Let's Talk <FiArrowRight />
                </a>
              </div>
            </div>
            
            <div className="hero-image">
              <img src="/images/profile.png" alt="Bhuvan A R" className="hero-img-content" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
