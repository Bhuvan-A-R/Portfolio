import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center' }}>
        
        <motion.div style={{ textAlign: 'center' }} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, fontWeight: 900, marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
            Let's build <br/><span style={{ color: 'var(--color-primary)' }}>something amazing.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Currently seeking a SWE/ML Internship for 2026. My inbox is always open for new opportunities!
          </p>
        </motion.div>

        <motion.div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.2}}>
          <a href="mailto:bhuvanamaravathi@gmail.com" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Email Me
          </a>
          <a href="https://linkedin.com/in/bhuvan-a-r" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            LinkedIn
          </a>
          <a href="https://github.com/Bhuvan-A-R" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            GitHub
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
