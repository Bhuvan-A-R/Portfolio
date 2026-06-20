import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Certifications = () => {
  const { awards } = portfolioData;

  return (
    <section id="certifications">
      <h2 className="section-title">Awards & Certifications</h2>
      <div className="grid-bento">
        {awards.map((award, idx) => (
          <motion.div 
            key={idx} 
            className="bento-card flex flex-col"
            style={{ padding: 0, overflow: 'hidden' }}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: idx * 0.1}}
          >
            <div style={{ width: '100%', height: '150px', backgroundColor: 'var(--color-bg-primary)' }}>
              <img src={award.image} alt={award.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 className="font-bold mb-1">{award.title}</h4>
              <p className="text-sm text-secondary">{award.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
