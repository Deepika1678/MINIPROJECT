import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">⚡</span>
            <span className="footer-logo-text">Tech<span className="footer-accent">Learn</span></span>
          </div>
          <p className="footer-tagline">
            Empowering the next generation engineers through structured,
            practical learning.
          </p>
          <div className="footer-badge">
            <span>🎓</span>
            <span>Built by Deepika Ratna · CSE (AI&DS)</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            {[['/', 'Home'], ['/about', 'About'], ['/features', 'Features'],
              ['/courses', 'Courses'], ['/reviews', 'Reviews']].map(([path, label]) => (
              <li key={path}><Link to={path} className="footer-link">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Top Courses */}
        <div className="footer-col">
          <h4 className="footer-col-title">Top Courses</h4>
          <ul className="footer-links">
            {['Python Programming', 'Machine Learning', 'Deep Learning', 'Data Structures', 'Database Management', 'Web Development'].map((c) => (
              <li key={c}><Link to="/courses" className="footer-link">{c}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-links">
            <li className="footer-contact-item"><span>✉</span> deepikaratna@techlearn.com</li>
            <li className="footer-contact-item"><span>🏫</span> BVCEC</li>
            <li className="footer-contact-item"><span>📍</span> Andhra Pradesh, India</li>
          </ul>
          {/* <div className="footer-socials">
            {['GitHub', 'LinkedIn', 'Twitter'].map((s) => (
              <span key={s} className="social-pill">{s}</span>
            ))}
          </div> */}
          <div className="footer-socials">
  <a
  href="https://github.com/Deepika1678"
    target="_blank"
    rel="noopener noreferrer"
    className="social-pill"
  >
    🐙 GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/guttula-deepika-ratna-1952223b8"
    target="_blank"
    rel="noopener noreferrer"
    className="social-pill"
  >
    💼 LinkedIn
  </a>
</div>
          
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider" />
        <div className="footer-bottom-inner">
          <p className="footer-copy">© 2024 TechLearn. Crafted with ❤ by <strong>Deepika Ratna</strong>, CSE (AI&DS)</p>
          <p className="footer-copy">All rights reserved · Built for Students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;