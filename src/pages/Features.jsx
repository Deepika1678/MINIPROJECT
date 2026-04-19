import React from 'react';
import './Features.css';

const Features = () => {
  const mainFeatures = [
    {
      icon: '📚',
      title: 'Structured Course Library',
      desc: 'All courses are carefully curated and organized by semester and relevance to the student curriculum. No more hunting for notes across the internet.',
      tags: ['Organized', 'Semester-wise', 'AI&DS Focused'],
    },
    {
      icon: '📝',
      title: 'Detailed Course Notes',
      desc: 'Every course comes with comprehensive notes covering theory, formulas, examples, and exam tips — all in one click.',
      tags: ['Exam Ready', 'Detailed', 'Easy to Understand'],
    },
    {
      icon: '🔐',
      title: 'Secure Authentication',
      desc: 'Sign up and login securely. Your profile stores your branch, year, and college — creating a personalized experience.',
      tags: ['Secure', 'Personalized', 'Student Profiles'],
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      desc: 'TechLearn works perfectly on your phone, tablet, and desktop. Study anywhere, anytime — no compromise.',
      tags: ['Mobile Friendly', 'All Devices', 'Smooth UI'],
    },
    {
      icon: '⚡',
      title: 'Fast & Modern UI',
      desc: 'Built with React.js, smooth animations, and a futuristic dark theme that\'s easy on the eyes for long study sessions.',
      tags: ['React.js', 'Animated', 'Dark Theme'],
    },
    {
      icon: '🤖',
      title: 'AI & ML Content',
      desc: 'Dedicated courses on Machine Learning, Deep Learning, NLP, Computer Vision — the most relevant skills for your career.',
      tags: ['AI/ML', 'Deep Learning', 'NLP'],
    },
  ];

  const techStack = [
    { name: 'React.js', icon: '⚛️', desc: 'Frontend Framework' },
    { name: 'React Router', icon: '🔀', desc: 'Navigation' },
    { name: 'Context API', icon: '🔗', desc: 'State Management' },
    { name: 'CSS3', icon: '🎨', desc: 'Animations & Styling' },
    { name: 'HTML5', icon: '🌐', desc: 'Markup Structure' },
    { name: 'JavaScript', icon: '💛', desc: 'Core Logic' },
  ];

  return (
    <div className="features-page">
      <div className="home-bg">
        <div className="home-orb home-orb-1" />
        <div className="home-orb home-orb-2" />
        <div className="home-grid" />
      </div>

      {/* Hero */}
      <section className="features-hero">
        <div className="section">
          <div className="section-eyebrow animate-fadeInDown">Platform Features</div>
          <h1 className="features-title animate-fadeInUp delay-1">
            Everything You Need to<br />
            <span className="features-accent">Succeed in Learning</span>
          </h1>
          <p className="features-subtitle animate-fadeInUp delay-2">
            TechLearn is packed with features designed to make your B.Tech learning journey
            structured, efficient, and enjoyable.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="main-features">
        <div className="section">
          <div className="features-grid">
            {mainFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`feature-card glass-card animate-fadeInUp delay-${(i % 3) + 1}`}
              >
                <div className="feature-icon-wrap">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <div className="feature-tags">
                  {feature.tags.map((tag) => (
                    <span key={tag} className="feature-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <div className="section">
          <h2 className="section-title">Built With</h2>
          <p className="section-subtitle">Modern technologies for a seamless experience</p>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <div key={tech.name} className={`tech-card glass-card animate-fadeInUp delay-${i + 1}`}>
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-desc">{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="section">
          <div className="stats-banner-card glass-card">
            {[
              ['20+', 'Courses Available'],
              ['100+', 'Detailed Notes'],
              ['6', 'Semester Coverage'],
              ['1', 'Passionate Creator'],
            ].map(([num, label]) => (
              <div key={label} className="banner-stat">
                <span className="banner-num">{num}</span>
                <span className="banner-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;