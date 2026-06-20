import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects">
      <h2 className="section-title">Selected Projects</h2>
      
      <div className="grid-bento">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="bento-card flex flex-col justify-between"
            style={{ padding: 0, overflow: 'hidden' }}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: idx * 0.1}}
          >
            <div style={{ width: '100%', height: '200px', backgroundColor: 'var(--color-bg-primary)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 className="h3" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', marginTop: 'auto' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.4rem 1rem', 
                    backgroundColor: 'var(--color-primary-light)', 
                    color: 'var(--color-primary-dark)', 
                    borderRadius: '2rem', 
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    display: 'inline-block'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem' }}>View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
