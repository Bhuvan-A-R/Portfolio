import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Synchronize state with URL pathname on load and on popstate navigation (back/forward)
  useEffect(() => {
    const handleUrlChange = () => {
      const path = decodeURIComponent(window.location.pathname);
      if (path.startsWith('/project/')) {
        const projectSlug = path.replace('/project/', '');
        const matched = projects.find(
          p => p.title.toLowerCase().replace(/\s+/g, '-') === projectSlug
        );
        if (matched) {
          setSelectedProject(matched);
        } else {
          setSelectedProject(null);
        }
      } else {
        setSelectedProject(null);
      }
    };

    // Run once on mount
    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [projects]);

  const openProject = (project) => {
    setSelectedProject(project);
    const slug = project.title.toLowerCase().replace(/\s+/g, '-');
    window.history.pushState(null, '', `/project/${slug}`);
  };

  const closeProject = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '/');
  };

  return (
    <section id="projects">
      <h2 className="section-title">Selected Projects</h2>
      
      <div className="grid-bento">
        {projects.map((project, idx) => {
          const isSelected = selectedProject?.title === project.title;
          return (
            <motion.div 
              key={idx} 
              className="bento-card flex flex-col justify-between bento-card-link"
              style={{ 
                padding: 0, 
                overflow: 'hidden',
                cursor: 'pointer',
                border: isSelected ? '1px solid var(--color-primary)' : '1px solid rgba(0, 0, 0, 0.04)',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)'
              }}
              onClick={() => openProject(project)}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: idx * 0.1}}
            >
              <div style={{ width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-bg-primary)' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }} 
                  className="cert-img"
                />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 className="h3" style={{ 
                  color: 'var(--color-primary)', 
                  marginBottom: '1.5rem',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}>
                  {project.title}
                </h3>
                
                <div style={{ marginTop: 'auto' }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project);
                    }}
                    className="btn btn-outline" 
                    style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem', cursor: 'pointer' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Project Dialog Box / Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={closeProject} // Clicking backdrop closes the modal
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ 
                backgroundColor: 'var(--color-bg-surface)', 
                border: '1px solid var(--color-border)', 
                borderRadius: '2rem', 
                width: '100%', 
                maxWidth: '900px', 
                maxHeight: '85vh', 
                overflowY: 'auto', 
                padding: '2.5rem', 
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
            >
              {/* Close Button */}
              <button 
                onClick={closeProject}
                style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  right: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  color: 'var(--color-text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.25rem',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s, color 0.2s',
                  zIndex: 10
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary-light)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
              >
                <FiX />
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Project Details
                  </span>
                  <h3 className="h3" style={{ margin: '0.25rem 0 0.5rem 0', fontSize: '1.75rem', fontWeight: '800', paddingRight: '2rem' }}>
                    {selectedProject.title}
                  </h3>
                </div>

                <div 
                  className="detail-grid-responsive"
                  style={{ alignItems: 'start' }}
                >
                  {/* Image Display */}
                  <div style={{ 
                    width: '100%', 
                    borderRadius: '1rem', 
                    overflow: 'hidden', 
                    border: '1px solid rgba(0,0,0,0.06)',
                    background: '#ffffff',
                    padding: '0.5rem',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0.5rem' }} 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                        About the Project
                      </h4>
                      <p style={{ 
                        color: 'var(--color-text-secondary)', 
                        lineHeight: '1.75', 
                        fontSize: '1.05rem',
                        whiteSpace: 'pre-line',
                        margin: 0
                      }}>
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                        Technologies Used
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {selectedProject.tech.map(t => (
                          <span key={t} style={{ 
                            fontSize: '0.85rem', 
                            padding: '0.4rem 1rem', 
                            backgroundColor: 'var(--color-primary-light)', 
                            color: 'var(--color-primary-dark)', 
                            borderRadius: '2rem', 
                            fontWeight: '500'
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.link && selectedProject.link !== "#" && (
                      <div style={{ marginTop: '1rem' }}>
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline" 
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem'
                          }}
                        >
                          Visit Live Project <FiExternalLink />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
