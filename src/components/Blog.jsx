import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const posts = [
    {
      title: 'Volunteering at TCS TechBytes 2026',
      date: 'May 5, 2026',
      readTime: 'Volunteering',
      excerpt: 'Served as an active volunteer for the TCS TechBytes inter-college IT quiz finals at Global Academy of Technology, organised by TCS and the Board for IT Education Standards (BITES), Government of Karnataka.',
      link: 'https://www.linkedin.com/in/bhuvan-a-r/',
      image: '/certificates/TCS-TechBytes-Volunteer.png'
    },
    {
      title: 'Completed the IAMPro’26 IEEE Internship',
      date: 'Apr-Sep 2026',
      readTime: 'IEEE CS Internship',
      excerpt: 'Completed the six-month IEEE Computer Society Bangalore Chapter Internship and Mentorship Program. Built NeuroSecureNet, combining CNN and Transformer architectures with DP-SGD and INT8 quantisation for privacy-preserving, low-power imagined-speech decoding.',
      link: 'https://www.linkedin.com/in/bhuvan-a-r/',
      image: '/certificates/IAMPro26-Internship.png'
    },
    {
      title: 'Teaching Cars to Talk',
      date: '2026',
      readTime: 'V2V Project',
      excerpt: 'Together with Vinayaka S, built a low-cost GPS-enhanced vehicle-to-vehicle communication system using Raspberry Pi 5, NMEA GPS data, UDP networking, real-time location sharing, and proximity alerts.',
      link: 'https://www.linkedin.com/pulse/teaching-cars-talk-building-low-cost-gps-enhanced-v2v-bhuvan-a-r-hdynf/',
      image: '/projects/TeachingCarsToTalk.png'
    },
    {
      title: 'NPTEL Elite: Cyber Security and Privacy',
      date: 'Jul-Oct 2026',
      readTime: 'Certification',
      excerpt: 'Completed the 12-week Cyber Security and Privacy course from IIT Madras through NPTEL/SWAYAM with an Elite certificate and a 70% consolidated score. Gained practical perspective on threats, defences, privacy, and consistent exam preparation.',
      link: 'https://www.linkedin.com/in/bhuvan-a-r/'
    },
    {
      title: 'Neuro-Secure Hearable Research',
      date: 'Apr-Sep 2026',
      readTime: 'IEEE CS Research',
      excerpt: 'Built NeuroSecureNet, a privacy-preserving CNN + Transformer system for imagined-speech decoding. Applied DP-SGD, tested model-inversion resistance, and quantised the model to INT8 for ARM Cortex-M7 and ESP32-S3 deployment.',
      link: 'https://linkedin.com/in/bhuvan-a-r'
    },
    {
      title: 'Chair, IEEE CS Student Chapter',
      date: '2026-Present',
      readTime: 'Leadership',
      excerpt: 'Serving as Chair of the IEEE Computer Society Student Chapter at GAT under the Department of AIML. Leading Ravi Kumar (Vice Chair), Niyathi Nagesh (Secretary), Laasya S D (Treasurer), and Yashaswi Pm (Webmaster) to strengthen technical learning and collaboration.',
      link: 'https://www.linkedin.com/company/ieeecsbc/',
      images: [
        '/activity/IEEE-CS-Office-Bearers.png',
        '/activity/IEEE-CS-Chapter-Team.png'
      ]
    },
    {
      title: 'Campus Ambassador Program Convenor',
      date: 'Oct 2025-Present',
      readTime: 'Leadership',
      excerpt: 'Serving as Convenor for the GAT Student Council Campus Ambassador Program within a 30-member council.',
      link: 'https://linkedin.com/in/bhuvan-a-r'
    },
    {
      title: 'NPTEL Elite Certification in Blockchain',
      date: 'Recent',
      readTime: 'Certification',
      excerpt: "Excited to share that I've successfully earned the NPTEL Elite Certification in Blockchain and its Applications from IIT Kharagpur — ranking in the Top 5% nationally! Deepened my understanding of smart contracts and decentralized tech.",
      link: 'https://www.linkedin.com/posts/bhuvan-a-r_blockchain-nptel-iitkharagpur-activity-7463222992685142017-K0NZ'
    },
    {
      title: 'Hackaphasia 2025: AI Virtual Health Assistant',
      date: '8 months ago',
      readTime: 'Project Showcase',
      excerpt: 'Developed an innovative project at Hackaphasia 2025 addressing real-world challenges faced by displaced communities through an AI-Enabled Virtual Health Assistant for Refugees. Aligned with UN SDGs.',
      link: 'https://www.linkedin.com/posts/bhuvan-a-r_hackaphasia-phaseshift2025-bmsce-activity-7384430414033141761-rVXe'
    },
    {
      title: 'NTT Data Center of Excellence',
      date: '8 months ago',
      readTime: 'Achievement',
      excerpt: 'Selected as a member of the NTT Data Center of Excellence (CoE) in Full Stack Computing at the Global Academy of Technology. Excited to gain hands-on industry exposure!',
      link: 'https://www.linkedin.com/posts/bhuvan-a-r_nttdata-centerofexcellence-fullstackdevelopment-activity-7383705647265038337-nWpG'
    },
    {
      title: 'AI Speaks: Text-to-Speech with VITS',
      date: '8 months ago',
      readTime: 'Event Organization',
      excerpt: 'Organized an insightful session on Text-to-Speech systems, their applications, and the underlying concepts of the VITS architecture with the DEEP Nexus Club.',
      link: 'https://www.linkedin.com/posts/bhuvan-a-r_artificialintelligence-machinelearning-texttospeech-activity-7383172518712487936-WFq5'
    },
    {
      title: '5-Day Workshop on MERN Mastery',
      date: '9 months ago',
      readTime: 'Skill Development',
      excerpt: 'Completed an intensive program equipping me with HTML, CSS, JavaScript fundamentals, building dynamic frontends with React, and deploying full-stack apps with MongoDB, Express, and Node.js.',
      link: 'https://www.linkedin.com/posts/bhuvan-a-r_empowering-future-full-stack-developers-activity-7370747925288775680-bElX'
    }
  ];

  return (
    <section id="blog">
      <h2 className="section-title">Recent Activity</h2>
      <div className="grid-bento">
        {posts.map((post, idx) => (
          <motion.div 
            key={idx} 
            className="bento-card activity-card flex flex-col"
            style={{ 
              backgroundColor: 'var(--color-bg-primary)', 
              border: '1px solid #93c5fd', /* Softer blue border */
              boxShadow: 'var(--shadow-sm)',
              padding: '1.5rem'
            }}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: idx * 0.1}}
          >
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
              <div className="activity-meta flex flex-wrap gap-2">
                <span style={{ padding: '0.1rem 0.5rem', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', borderRadius: '1rem', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                  {post.date}
                </span>
                <span style={{ padding: '0.15rem 0.5rem', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', color: 'var(--color-text-secondary)', borderRadius: '1rem', fontSize: '0.7rem', fontWeight: '500', letterSpacing: '0.02em' }}>
                  {post.readTime}
                </span>
              </div>
              {post.images && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
                  {post.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${post.title} activity`}
                      style={{ width: '100%', height: '130px', objectFit: 'cover', borderRadius: '0.75rem' }}
                    />
                  ))}
                </div>
              )}
              {post.image && !post.images && (
                <img
                  src={post.image}
                  alt={`${post.title} activity`}
                  style={{ width: '100%', height: '180px', flexShrink: 0, objectFit: 'contain', borderRadius: '0.75rem', marginBottom: '1rem', background: 'var(--color-bg-surface)' }}
                />
              )}
              <h3 className="h3 mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>{post.title}</h3>
              <p className="mb-8 text-secondary" style={{ lineHeight: '1.6' }}>{post.excerpt}</p>
            </div>
            
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline" 
              style={{ alignSelf: 'flex-start', padding: '0.6rem 1.2rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              View on LinkedIn <FiArrowRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
