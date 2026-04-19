import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/courses', label: 'Courses' },
    { path: '/reviews', label: 'Reviews' },
  ];

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate('/login');
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Tech<span className="logo-accent">Learn</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && <span className="active-bar" />}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Profile */}
        <div className="nav-right">
          <div className="profile-wrapper" ref={profileRef}>
            <button
              className="profile-btn"
              onClick={() => setProfileOpen(!profileOpen)}
              aria-label="User profile"
            >
              <span className="profile-avatar">{user?.avatar}</span>
              <span className="profile-name">{user?.name?.split(' ')[0]}</span>
              <span className={`profile-chevron ${profileOpen ? 'open' : ''}`}>▾</span>
            </button>

            {profileOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <div className="dropdown-avatar">{user?.avatar}</div>
                  <div className="dropdown-info">
                    <p className="dropdown-name">{user?.name}</p>
                    <p className="dropdown-email">{user?.email}</p>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-details">
                  <div className="detail-row">
                    <span className="detail-icon">🎓</span>
                    <span>{user?.branch}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-icon">📅</span>
                    <span>{user?.year}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-icon">🏫</span>
                    <span>{user?.college}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-icon">📌</span>
                    <span>Joined {user?.joinDate}</span>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <button className="logout-btn" onClick={handleLogout}>
                  <span>⏻</span> Logout
                </button>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;