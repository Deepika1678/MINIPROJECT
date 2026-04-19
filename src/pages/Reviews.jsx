import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Sujitha Subhu',
    branch: 'CSE (AI&DS)',
    year: '3rd Year',
    avatar: 'SS',
    rating: 5,
    review: 'TechLearn literally saved my semester! The Machine Learning notes are so well organized and easy to understand. I went from confused to confident in just 2 weeks. Deepika has done an amazing job structuring everything — this is exactly what we AI&DS students needed!',
    subject: 'Machine Learning',
    color: '#00f5ff',
  },
  {
    name: 'Meghana',
    branch: 'CSE (AI&DS)',
    year: '3rd Year',
    avatar: 'MG',
    rating: 5,
    review: 'Best study platform I have ever used! The Deep Learning course notes are incredibly detailed. The way topics are broken down from Neural Networks to Transformers makes it so easy to follow. The UI is also super clean and the dark theme is perfect for long study sessions.',
    subject: 'Deep Learning',
    color: '#7b2ff7',
  },
  {
    name: 'KavyaSri',
    branch: 'CSE (AI&DS)',
    year: '3rd Year',
    avatar: 'KS',
    rating: 5,
    review: 'I was struggling with Data Structures before TechLearn. The structured notes and clear topic-by-topic breakdown helped me score 89 in my internals! The platform works great on mobile too. I study during commutes now. Deepika this is incredible work — keep it up!',
    subject: 'Data Structures',
    color: '#ff6b35',
  },
];

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="home-bg">
        <div className="home-orb home-orb-1" />
        <div className="home-orb home-orb-2" />
        <div className="home-grid" />
      </div>

      <section className="reviews-hero">
        <div className="section">
          <div className="section-eyebrow animate-fadeInDown">Student Reviews</div>
          <h1 className="reviews-title animate-fadeInUp delay-1">
            What My Friends Say About<br />
            <span className="reviews-accent">TechLearn</span>
          </h1>
          <p className="reviews-subtitle animate-fadeInUp delay-2">
             Feedback from my fellow students who use TechLearn
          </p>
          <div className="reviews-rating-summary animate-fadeInUp delay-3">
            <span className="rating-big">5.0</span>
            <div className="rating-details">
              <div className="stars">{'★'.repeat(5)}</div>
              <span>from {reviews.length} student reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-grid-section">
        <div className="section">
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`review-card glass-card animate-fadeInUp delay-${i + 1}`}
                style={{ '--rc': review.color }}
              >
                <div className="review-top">
                  <div className="reviewer-avatar" style={{ background: `linear-gradient(135deg, ${review.color}, #030b1a)` }}>
                    {review.avatar}
                  </div>
                  <div className="reviewer-info">
                    <h3 className="reviewer-name">{review.name}</h3>
                    <p className="reviewer-branch">{review.branch}</p>
                    <p className="reviewer-year">{review.year}</p>
                  </div>
                  <div className="review-stars">{'★'.repeat(review.rating)}</div>
                </div>
                <div className="review-quote-icon">"</div>
                <p className="review-text">{review.review}</p>
                <div className="review-subject">
                  <span>📘</span> Reviewed: <strong>{review.subject}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Note */}
      <section className="creator-note-section">
        <div className="section">
          <div className="creator-note glass-card">
            <div className="creator-avatar">DR</div>
            <div className="creator-text">
              <h3 className="creator-name">A Note from Deepika Ratna</h3>
              <p className="creator-message">
                "These reviews mean the world to me. I built TechLearn because I believed in making
                quality education accessible for every student. Seeing my friends
                benefit from it is the greatest reward. Thank you Sujitha, Meghana, and Kavyasri
                for your support and honest feedback. This is just the beginning! 🚀"
              </p>
              <div className="creator-sig">— Deepika Ratna</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;