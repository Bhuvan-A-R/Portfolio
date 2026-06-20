import React, { useState } from 'react';
import { FiHome, FiUser, FiBriefcase, FiMail, FiMenu, FiX, FiGithub, FiLinkedin, FiMoon, FiSun, FiAward, FiFileText } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 'home', icon: <FiHome />, label: 'Home' },
    { id: 'about', icon: <FiUser />, label: 'About' },
    { id: 'certifications', icon: <FiAward />, label: 'Awards' },
    { id: 'projects', icon: <FiBriefcase />, label: 'Projects' },
    { id: 'blog', icon: <FiFileText />, label: 'Blog' },
    { id: 'contact', icon: <FiMail />, label: 'Contact' },
  ];

  return (
    <>
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="avatar-placeholder" style={{ background: 'var(--color-bg-primary)', overflow: 'hidden' }}>
            <img src="/images/profile.png" alt="Bhuvan A R" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2 className="sidebar-name">Bhuvan A R</h2>
          <p className="sidebar-title">FullStack Developer</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setIsOpen(false)}>
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button onClick={toggleTheme} className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            {theme === 'light' ? <><FiMoon /> Dark Mode</> : <><FiSun /> Light Mode</>}
          </button>
          
          <div className="social-links">
            <a href="https://github.com/Bhuvan-A-R" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/bhuvan-a-r/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
          </div>
          <a href="/resume.pdf" target="_blank" className="btn btn-outline resume-btn" style={{ marginTop: '1rem' }}>
            Resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
