import React from 'react';
import { motion } from 'framer-motion';

const Admin = () => {
  return (
    <section id="admin">
      <h2 className="section-title">Admin Access</h2>
      
      <div className="flex justify-center">
        <motion.div 
          className="bento-card" 
          style={{ width: '100%', maxWidth: '400px', backgroundColor: 'var(--color-bg-primary)', border: '1px solid rgba(0,0,0,0.1)' }}
          initial={{opacity:0, scale:0.95}} 
          whileInView={{opacity:1, scale:1}} 
          viewport={{once:true}}
        >
          <div className="text-center mb-6">
            <h3 className="h3 mb-2">Secure Login</h3>
            <p className="text-sm text-secondary">Authorized personnel only.</p>
          </div>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Username</label>
              <input type="text" id="username" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', width: '100%' }} placeholder="Enter username" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Password</label>
              <input type="password" id="password" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', width: '100%' }} placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-full">Login to Dashboard</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Admin;
