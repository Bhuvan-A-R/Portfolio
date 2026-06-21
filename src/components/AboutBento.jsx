import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const AboutBento = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid-bento">
        
        {/* Personal Details */}
        <motion.div className="bento-card" initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}>
          <h3 className="h3 mb-4">The Basics</h3>
          <ul className="flex flex-col gap-4 text-secondary">
            <li className="flex justify-between border-b pb-2" style={{borderColor: 'rgba(0,0,0,0.05)'}}><strong>Age</strong> <span>21 years old</span></li>
            <li className="flex justify-between border-b pb-2" style={{borderColor: 'rgba(0,0,0,0.05)'}}><strong>Location</strong> <span>Bengaluru, Karnataka</span></li>
            <li className="flex justify-between pb-2"><strong>Languages</strong> <span>English, Kannada, Hindi</span></li>
          </ul>
        </motion.div>

        {/* Education & Experience */}
        <motion.div className="bento-card" initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay: 0.1}}>
          <h3 className="h3 mb-4">Journey</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-bold text-primary">B.E in AI & ML</h4>
              <p className="text-sm text-secondary">Current Education</p>
            </div>
            <div>
              <h4 className="font-bold">IEEE Member</h4>
              <p className="text-sm text-secondary">Jan 2025 - Present</p>
            </div>
            <div>
              <h4 className="font-bold">GCC Core Member</h4>
              <p className="text-sm text-secondary">Jan 2025 - Present</p>
            </div>
          </div>
          
        </motion.div>

        {/* GitHub Graph */}
        <motion.div className="bento-card" style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center' }} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.3}}>
          <h3 className="h3 mb-4 text-center">GitHub Contributions</h3>
          <div style={{ maxWidth: '100%', overflowX: 'auto', padding: '1rem' }}>
            <GitHubCalendar 
              username="Bhuvan-A-R" 
              colorScheme="light"
              theme={{
                light: ['#e2e8f0', '#93c5fd', '#3b82f6', '#2563eb', '#1d4ed8']
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutBento;
