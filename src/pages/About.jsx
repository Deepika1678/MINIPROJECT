import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="home-bg">
        <div className="home-orb home-orb-1" />
        <div className="home-orb home-orb-2" />
        <div className="home-grid" />
      </div>
      <section className="about-hero">
        <div className="section">
          <div className="about-hero-inner">
            <div className="about-hero-text">
              <div className="section-eyebrow animate-fadeInDown">About TechLearn</div>
              <h1 className="about-title animate-fadeInUp delay-1">
                Why I Built<br />
                <span className="about-brand">TechLearn</span>
              </h1>
              <p className="about-intro animate-fadeInUp delay-2">
                Hi, I'm <strong>Deepika Ratna</strong>, a 3rd-year B.Tech student pursuing
                CSE (AI & Data Science) at BVCEC .
              </p>
              <p className="about-intro animate-fadeInUp delay-3">
                When I started my B.Tech journey, I found resources scattered and never tailored
                for students. So I decided to build the platform I always wished existed.
              </p>
            </div>
            <div className="about-profile-card animate-fadeInRight delay-2">
              <div className="profile-avatar-big">DR</div>
              <h3 className="profile-name">Deepika Ratna</h3>
              <p className="profile-branch">CSE (AI & Data Science)</p>
              <div className="profile-tags">
                <span className="profile-tag">🏫 BVCEC </span>
                <span className="profile-tag">📅 3rd Year</span>
                <span className="profile-tag">💡 Project Creator</span>
                <span className="profile-tag">🎓 AI Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="section">
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-subtitle">Core principles behind TechLearn</p>
          <div className="grid-2">
            {[
              { icon: '🎯', title: 'Focused Learning', desc: 'Every course is handpicked for B.Tech students.' },
              { icon: '📖', title: 'Quality Notes', desc: 'Exam-ready notes, detailed explanations, and clear examples.' },
              { icon: '🚀', title: 'Career Ready', desc: 'Topics aligned with industry requirements and placements.' },
              { icon: '💙', title: 'Built with Passion', desc: 'Built by a student, for students, with genuine love for learning.' },
            ].map((v) => (
              <div key={v.title} className="value-card glass-card">
                <span className="value-icon">{v.icon}</span>
                <div className="value-text">
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;