import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const coursesData = [
  { id: 1, icon: '🐍', title: 'Python Programming', semester: '1st Sem', category: 'Programming', desc: 'Master Python from scratch — syntax, OOP, file handling, and libraries essential for AI&DS.', topics: 8, difficulty: 'Beginner', color: '#00f5ff' },
  { id: 2, icon: '📊', title: 'Data Structures & Algorithms', semester: '2nd Sem', category: 'Core CS', desc: 'Arrays, Linked Lists, Trees, Graphs, Sorting & Searching — foundation for coding interviews.', topics: 12, difficulty: 'Intermediate', color: '#7b2ff7' },
  { id: 3, icon: '🗄️', title: 'Database Management System', semester: '3rd Sem', category: 'Core CS', desc: 'SQL, ER diagrams, normalization, transactions and everything you need for DBMS exams.', topics: 10, difficulty: 'Intermediate', color: '#ff6b35' },
  { id: 4, icon: '🤖', title: 'Machine Learning', semester: '4th Sem', category: 'AI/ML', desc: 'Supervised, Unsupervised learning, regression, classification, clustering with scikit-learn.', topics: 15, difficulty: 'Advanced', color: '#00f5ff' },
  { id: 5, icon: '🧠', title: 'Deep Learning & Neural Networks', semester: '5th Sem', category: 'AI/ML', desc: 'CNNs, RNNs, LSTMs, Transformers — build and train deep learning models from scratch.', topics: 14, difficulty: 'Advanced', color: '#7b2ff7' },
  { id: 6, icon: '📈', title: 'Data Analytics & Visualization', semester: '3rd Sem', category: 'Data Science', desc: 'Pandas, NumPy, Matplotlib, Seaborn — analyze and visualize data like a pro.', topics: 9, difficulty: 'Intermediate', color: '#ffd700' },
  { id: 7, icon: '🌐', title: 'Web Technologies', semester: '4th Sem', category: 'Web Dev', desc: 'HTML, CSS, JavaScript, React basics — build modern web applications from the ground up.', topics: 11, difficulty: 'Beginner', color: '#00f5ff' },
  { id: 8, icon: '🔒', title: 'Cyber Security', semester: '5th Sem', category: 'Security', desc: 'Network security, cryptography, ethical hacking basics and threat modeling.', topics: 8, difficulty: 'Intermediate', color: '#ff6b35' },
  { id: 9, icon: '☁️', title: 'Cloud Computing', semester: '6th Sem', category: 'Cloud', desc: 'AWS, Azure basics, cloud architecture, deployment, microservices and DevOps fundamentals.', topics: 10, difficulty: 'Advanced', color: '#7b2ff7' },
  { id: 10, icon: '🗣️', title: 'Natural Language Processing', semester: '5th Sem', category: 'AI/ML', desc: 'Text processing, sentiment analysis, transformers, BERT, GPT and modern NLP techniques.', topics: 12, difficulty: 'Advanced', color: '#00f5ff' },
  { id: 11, icon: '👁️', title: 'Computer Vision', semester: '6th Sem', category: 'AI/ML', desc: 'Image classification, object detection, face recognition with OpenCV and deep learning.', topics: 11, difficulty: 'Advanced', color: '#ffd700' },
  { id: 12, icon: '🔢', title: 'Statistics & Probability', semester: '2nd Sem', category: 'Mathematics', desc: 'Probability theory, distributions, hypothesis testing — the math backbone of AI.', topics: 9, difficulty: 'Intermediate', color: '#ff6b35' },
];

const categories = ['All', 'Programming', 'Core CS', 'AI/ML', 'Data Science', 'Web Dev', 'Security', 'Cloud', 'Mathematics'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Courses = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const filtered = coursesData.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || c.category === category;
    const matchDiff = difficulty === 'All' || c.difficulty === difficulty;
    return matchSearch && matchCat && matchDiff;
  });

  return (
    <div className="courses-page">
      <div className="home-bg">
        <div className="home-orb home-orb-1" />
        <div className="home-orb home-orb-2" />
        <div className="home-grid" />
      </div>

      <section className="courses-hero">
        <div className="section">
          <div className="section-eyebrow animate-fadeInDown">Course Library</div>
          <h1 className="courses-title animate-fadeInUp delay-1">
            Courses <span className="courses-accent">for</span><br />Learners
          </h1>
          <p className="courses-subtitle animate-fadeInUp delay-2">
            {coursesData.length} courses tailored for all the learners .
            Click any course to access detailed notes.
          </p>

          {/* Search */}
          <div className="courses-search animate-fadeInUp delay-3">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="filters-section">
        <div className="section">
          <div className="filters-row">
            <div className="filter-group">
              <span className="filter-label">Category:</span>
              <div className="filter-pills">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`filter-pill ${category === c ? 'active' : ''}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span className="filter-label">Level:</span>
              <div className="filter-pills">
                {difficulties.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`filter-pill ${difficulty === d ? 'active' : ''}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="results-count">{filtered.length} courses found</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid-section">
        <div className="section">
          {filtered.length === 0 ? (
            <div className="no-results">
              <span>🔍</span>
              <p>No courses found. Try different search terms.</p>
            </div>
          ) : (
            <div className="courses-grid">
              {filtered.map((course, i) => (
                <div
                  key={course.id}
                  className={`course-card glass-card animate-fadeInUp delay-${(i % 4) + 1}`}
                  onClick={() => navigate(`/courses/${course.id}`)}
                  style={{ '--course-color': course.color }}
                >
                  <div className="course-header">
                    <span className="course-icon">{course.icon}</span>
                    <span className={`difficulty-badge diff-${course.difficulty.toLowerCase()}`}>
                      {course.difficulty}
                    </span>
                  </div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc">{course.desc}</p>
                  <div className="course-meta">
                    <span className="course-meta-item">📅 {course.semester}</span>
                    <span className="course-meta-item">📖 {course.topics} Topics</span>
                  </div>
                  <div className="course-tag">{course.category}</div>
                  <button className="course-cta">View Notes →</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;