import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const highlights = [
    { icon: '📘', label: 'Courses', count: '20+', desc: 'Curated for AI&DS' },
    { icon: '🗒️', label: 'Notes', count: '100+', desc: 'Detailed & structured' },
    { icon: '🤖', label: 'AI Topics', count: '15+', desc: 'Cutting-edge content' },
    { icon: '🧑‍💻', label: 'Projects', count: '50+', desc: 'Hands-on practice' },
  ];

  const quickLinks = [
    { path: '/courses', label: 'Explore Courses', icon: '📚', color: '#00f5ff' },
    { path: '/features', label: 'View Features', icon: '⚡', color: '#7b2ff7' },
    { path: '/about', label: 'About TechLearn', icon: '💡', color: '#ff6b35' },
    { path: '/reviews', label: 'Student Reviews', icon: '⭐', color: '#ffd700' },
  ];

  return (
    <div className={`home-page ${visible ? 'visible' : ''}`}>
      {/* Background */}
      <div className="home-bg">
        <div className="home-orb home-orb-1" />
        <div className="home-orb home-orb-2" />
        <div className="home-orb home-orb-3" />
        <div className="home-grid" />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge animate-fadeInDown">
            <span className="badge-dot" />
            Welcome back, {user?.name?.split(' ')[0]}! Ready to learn?
          </div>

          <h1 className="hero-title animate-fadeInUp delay-1">
            <span className="hero-logo-line">
              <span className="hero-bolt">⚡</span>
              <span className="hero-brand">Tech<span className="hero-accent">Learn</span></span>
            </span>
            <span className="hero-tagline">Learn. Build. <span className="hero-glow">Grow.</span></span>
          </h1>

          <p className="hero-quote animate-fadeInUp delay-2">
            "The best way to predict the future is to <strong>build it.</strong> TechLearn gives you
            the knowledge, tools, and structured curriculum to go from student to
            <span className="hero-highlight"> AI Engineer.</span>"
          </p>

          <div className="hero-sub animate-fadeInUp delay-3">
            Designed exclusively for <strong>learners </strong> 
              by <strong>Deepika Ratna</strong>, 3rd Year, BVCEC.
          </div>

          <div className="hero-actions animate-fadeInUp delay-4">
            <Link to="/courses" className="btn-primary">Explore Courses →</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual animate-fadeInRight delay-2">
          <div className="hero-card-main">
            <div className="hero-card-inner">
              <div className="hero-avatar">{user?.avatar}</div>
              <div className="hero-user-info">
                <h3>{user?.name}</h3>
                <p>{user?.branch}</p>
                <span className="hero-badge-role">🎓 {user?.year}</span>
              </div>
            </div>
            <div className="hero-progress-section">
              <p className="progress-label">Learning Progress</p>
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill" style={{ '--width': '68%' }} />
              </div>
              <p className="progress-val">68% complete this semester</p>
            </div>
            <div className="hero-quick-stats">
              <div className="qstat"><span>12</span><small>Courses</small></div>
              <div className="qstat"><span>47</span><small>Notes Read</small></div>
              <div className="qstat"><span>8</span><small>Completed</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="stats-section">
        <div className="section">
          <div className="stats-grid">
            {highlights.map((h, i) => (
              <div key={h.label} className={`stat-card glass-card animate-fadeInUp delay-${i + 1}`}>
                <span className="stat-icon">{h.icon}</span>
                <div className="stat-count">{h.count}</div>
                <div className="stat-label">{h.label}</div>
                <div className="stat-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="quick-nav-section">
        <div className="section">
          <h2 className="section-title">Quick Access</h2>
          <p className="section-subtitle">Jump right into what you need</p>
          <div className="quick-grid">
            {quickLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`quick-card glass-card animate-fadeInUp delay-${i + 1}`}
                style={{ '--card-color': link.color }}
              >
                <span className="quick-icon">{link.icon}</span>
                <span className="quick-label">{link.label}</span>
                <span className="quick-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="section">
          <div className="cta-banner glass-card">
            <div className="cta-orb" />
            <div className="cta-content">
              <h2 className="cta-title">Ready to dive into your courses?</h2>
              <p className="cta-text">
                From Python basics to cutting-edge Deep Learning — everything you need for your
                 journey is here.
              </p>
              <Link to="/courses" className="btn-primary">Browse All Courses →</Link>
            </div>
            <div className="cta-deco">
              <span>🤖</span>
              <span>📊</span>
              <span>🧠</span>
              <span>⚡</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;