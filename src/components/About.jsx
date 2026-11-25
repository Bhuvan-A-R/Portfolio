import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiCalendar, FiMail, FiBook, FiMapPin } from "react-icons/fi";
import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const personalInfo = [
    { icon: <FiUser />, label: "Bhuvan A R" },
    { icon: <FiCalendar />, label: "AI & ML Graduate of 2027" },
    { icon: <FiMail />, label: "bhuvan.ar0101@gmail.com" },
    { icon: <FiBook />, label: "B.E. in AI & ML - CGPA 8.99/10" },
    { icon: <FiMapPin />, label: "Bengaluru, Karnataka" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About me</h2>

        <div className="about-wrapper flex flex-col xl:flex-row gap-8">
          {/* Left: Graphic */}
          <div className="about-graphic hidden xl:flex">
            <div className="shape-wrapper">
              <div className="shape-inner bg-primary"></div>
            </div>
          </div>

          {/* Right: Content & Tabs */}
          <div className="about-content flex-1">
            <div className="tabs-header glass">
              <button
                className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
                onClick={() => setActiveTab("personal")}
              >
                Personal Info
              </button>
              <button
                className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills & Tools
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "personal" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="personal-info"
                >
                  <h3 className="h3">Bringing ideas to life</h3>
                  <p className="subtitle">
                    A curious person, who wants to know how things work.
                  </p>

                  <div className="info-grid">
                    {personalInfo.map((info, idx) => (
                      <div key={idx} className="info-item">
                        <span className="icon">{info.icon}</span>
                        <span className="label">{info.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="languages">
                    <h4 className="text-primary font-bold mb-2">
                      Language Skills
                    </h4>
                    <div className="divider"></div>
                    <p>English, Kannada, Hindi</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="h3">My Journey</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <h4 className="font-bold">Chair, IEEE CS Student Chapter</h4>
                      <p className="text-sm text-secondary">GAT | 2026-Present</p>
                    </div>
                    <div className="timeline-item">
                      <h4 className="font-bold">Research Intern, IEEE CS Bangalore Chapter</h4>
                      <p className="text-sm text-secondary">Apr-Sep 2026</p>
                    </div>
                    <div className="timeline-item">
                      <h4 className="font-bold">GAT Student Council Convenor</h4>
                      <p className="text-sm text-secondary">Campus Ambassador Program | Oct 2025-Present</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="h3">Tools I Use</h3>
                  <div className="skills-grid">
                    <span className="skill-badge">React.js</span>
                    <span className="skill-badge">Vite</span>
                    <span className="skill-badge">JavaScript (ES6+)</span>
                    <span className="skill-badge">HTML/CSS</span>
                    <span className="skill-badge">TailwindCSS</span>
                    <span className="skill-badge">AI & ML Tools</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
