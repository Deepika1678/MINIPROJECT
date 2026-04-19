import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '',
    branch: 'CSE (AI & DS)', year: '1st Year', college: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.college) {
      setError('Please fill all required fields');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = signup(form);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="auth-orb auth-orb-1" />
        <div className="auth-orb auth-orb-2" />
        <div className="auth-orb auth-orb-3" />
        <div className="auth-grid" />
      </div>

      <div className="auth-container signup-container">
        {/* Left Panel */}
        <div className="auth-left">
          <div className="auth-brand">
            <span className="auth-brand-icon">⚡</span>
            <span className="auth-brand-text">Tech<span>Learn</span></span>
          </div>
          <h1 className="auth-headline">Start Your<br />Learning<br />Journey Today.</h1>
          <p className="auth-desc">
            Join hundreds of students who are leveling up their skills
            with TechLearn's structured, B.Tech focused curriculum.
          </p>
          <div className="auth-features-list">
            {[
              '📘 Structured course notes for every subject',
              '🤖 AI & ML focused curriculum',
              '🧑‍💻 Code examples and projects',
              '🏆 Track your learning progress',
            ].map((f) => (
              <div key={f} className="auth-feature-item">{f}</div>
            ))}
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="auth-right">
          <div className="auth-card">
            <div className="auth-card-header">
              <h2 className="auth-title">Create Account</h2>
              <p className="auth-subtitle">Join TechLearn for free</p>
            </div>

            {error && (
              <div className="auth-error">
                <span>⚠</span> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Deepika Ratna" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <div className="input-wrapper">
                    <span className="input-icon">✉</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Branch</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🎓</span>
                    <select name="branch" value={form.branch} onChange={handleChange} className="auth-select">
                      <option>CSE (AI & DS)</option>
                      <option>CSE (Core)</option>
                      <option>ECE</option>
                      <option>EEE</option>
                      <option>Mechanical</option>
                      <option>Civil</option>
                      <option>other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Year</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📅</span>
                    <select name="year" value={form.year} onChange={handleChange} className="auth-select">
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>College Name *</label>
                <div className="input-wrapper">
                  <span className="input-icon">🏫</span>
                  <input type="text" name="college" value={form.college} onChange={handleChange} placeholder="Your college name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Password *</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      type={showPass ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Min 6 characters"
                    />
                    <button type="button" className="show-pass" onClick={() => setShowPass(!showPass)}>
                      {showPass ? '🙈' : '👁'}
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Confirm Password *</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      type={showPass ? 'text' : 'password'}
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repeat password"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="auth-submit" disabled={loading}>
                {loading ? (
                  <span className="auth-spinner" />
                ) : (
                  <>Create My Account <span>→</span></>
                )}
              </button>
            </form>

            <p className="auth-switch">
              Already have an account?{' '}
              <Link to="/login" className="auth-switch-link">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;