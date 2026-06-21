import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const posts = [
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
            className="bento-card flex flex-col justify-between"
            style={{ 
              backgroundColor: 'var(--color-bg-primary)', 
              border: '1px solid #93c5fd', /* Softer blue border */
              boxShadow: 'var(--shadow-sm)',
              padding: '2.5rem'
            }}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: idx * 0.1}}
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span style={{ padding: '0.1rem 0.5rem', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', borderRadius: '1rem', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                  {post.date}
                </span>
                <span style={{ padding: '0.15rem 0.5rem', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', color: 'var(--color-text-secondary)', borderRadius: '1rem', fontSize: '0.7rem', fontWeight: '500', letterSpacing: '0.02em' }}>
                  {post.readTime}
                </span>
              </div>
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
