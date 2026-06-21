import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Certifications = () => {
  const { awards } = portfolioData;
  const [selectedAward, setSelectedAward] = useState(null);

  // Synchronize state with URL pathname on load and on popstate navigation (back/forward)
  useEffect(() => {
    const handleUrlChange = () => {
      const path = decodeURIComponent(window.location.pathname);
      const matched = awards.find(a => a.link === path);
      if (matched) {
        setSelectedAward(matched);
      } else {
        setSelectedAward(null);
      }
    };

    // Run once on mount
    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [awards]);

  const openAward = (award) => {
    setSelectedAward(award);
    window.history.pushState(null, '', award.link);
  };

  const closeAward = () => {
    setSelectedAward(null);
    window.history.pushState(null, '', '/');
  };

  return (
    <section id="certifications">
      <h2 className="section-title">Awards & Certifications</h2>
      <p className="subtitle" style={{ marginTop: '-1rem', marginBottom: '2rem' }}>
        Click on any card to view certification details and verify credentials inline.
      </p>
      
      <div className="grid-bento">
        {awards.map((award, idx) => {
          const hasRealImage = award.image && !award.image.includes('placehold.co') && award.image !== "";
          const isSelected = selectedAward?.title === award.title;
          
          return (
            <motion.div 
              onClick={() => openAward(award)}
              key={idx} 
              className={`bento-card flex flex-col bento-card-link`}
              style={{ 
                padding: hasRealImage ? 0 : '2.5rem', 
                overflow: 'hidden', 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '180px',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-primary) 100%)',
                border: isSelected ? '1px solid var(--color-primary)' : '1px solid rgba(0, 0, 0, 0.04)',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)'
              }}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: idx * 0.1}}
            >
              {hasRealImage ? (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block',
                        transition: 'transform 0.3s ease'
                      }} 
                      className="cert-img"
                    />
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                    <h3 className="h3" style={{ fontSize: '1.15rem', margin: '0 0 0.25rem 0', fontWeight: '700', color: 'var(--color-text-primary)', lineHeight: '1.4' }}>{award.title}</h3>
                    <p className="text-sm text-secondary" style={{ margin: 0 }}>{award.org}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <span style={{ 
                        fontSize: '1.5rem', 
                        color: 'var(--color-primary)', 
                        backgroundColor: 'var(--color-primary-light)', 
                        padding: '0.5rem', 
                        borderRadius: '0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <FiAward />
                      </span>
                    </div>
                    <h3 className="h3" style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', fontWeight: '700', color: 'var(--color-text-primary)', lineHeight: '1.4' }}>{award.title}</h3>
                    <p className="text-sm text-secondary" style={{ margin: 0 }}>{award.org}</p>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Dialog Box / Modal Overlay */}
      <AnimatePresence>
        {selectedAward && (
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
            onClick={closeAward} // Clicking backdrop closes the modal
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
                onClick={closeAward}
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
                    {selectedAward.org}
                  </span>
                  <h3 className="h3" style={{ margin: '0.25rem 0 0.5rem 0', fontSize: '1.75rem', fontWeight: '800', paddingRight: '2rem' }}>
                    {selectedAward.title}
                  </h3>
                </div>

                <div 
                  className="detail-grid-responsive"
                  style={{ alignItems: 'start' }}
                >
                  {/* Image or Graphic Display */}
                  {selectedAward.image && !selectedAward.image.includes('placehold.co') && selectedAward.image !== "" ? (
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
                        src={selectedAward.image} 
                        alt={selectedAward.title} 
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0.5rem' }} 
                      />
                    </div>
                  ) : (
                    <div style={{ 
                      width: '100%', 
                      borderRadius: '1rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.02) 100%)',
                      border: '1px solid var(--color-border)',
                      padding: '4rem 2rem',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <span style={{ 
                        fontSize: '4.5rem', 
                        color: 'var(--color-primary)', 
                        filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.25))',
                        display: 'inline-flex'
                      }}>
                        <FiAward />
                      </span>
                    </div>
                  )}

                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                      About this Certification
                    </h4>
                    <p style={{ 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: '1.75', 
                      fontSize: '1.05rem',
                      whiteSpace: 'pre-line',
                      margin: 0
                    }}>
                      {selectedAward.description || "No description provided."}
                    </p>
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

export default Certifications;
