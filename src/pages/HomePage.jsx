import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg hero-bg-1" />
        <div className="hero-bg hero-bg-2" />
        <div className="hero-content">
          <h1>Smart Baby Monitoring. Made for Peace of Mind.</h1>
          <p>Wearable, health tracking, safety alerts, AI predictions and real-time camera monitoring, all in one intelligent system.</p>
          <div className="hero-buttons">
            <Link to="/solution" className="btn btn-primary">Learn More</Link>
            <Link to="/contacts" className="btn btn-secondary">View Demo</Link>
          </div>
          <div className="hero-visual">
            <div className="shield-container">
              <div className="shield-3d" />
            </div>
            <div className="data-cards">
              <span className="data-card">26°C</span>
              <span className="data-card">02:30:34</span>
              <span className="data-card">Temp: Normal</span>
              <span className="data-card">Heart Rate: 90bpm</span>
              <span className="data-card">Blood Oxygen: Normal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-header">
        <h2>Our Features</h2>
        <p>From breathing and heartbeat monitoring to AI-driven sleep insights, BabyGuardian gives you real-time updates and peace of mind.</p>
      </section>

      <section className="features-grid section-padding">
        <div className="feature-card">
          <div className="feature-icon purple">💜</div>
          <h3>AI Sleep & Health Insights</h3>
          <p>Advanced AI analyzes sleep patterns and health metrics to provide actionable recommendations for your baby's wellbeing.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon orange">🔔</div>
          <h3>Real-time Alerts</h3>
          <p>Instant notifications for critical situations. Never miss an important moment with our smart alert system.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon blue">📱</div>
          <h3>Secure Device Monitoring</h3>
          <p>End-to-end encrypted monitoring with medical-grade security to keep your baby's data safe and private.</p>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Built with medical-grade principles and industry-leading AI to keep your baby safe, always.</p>
        </div>
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Products Done</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Collaborator Companies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Parent Purchases</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="hero-bg hero-bg-1" />
        <div className="hero-bg hero-bg-2" />
        <h2>Protect Your Baby with Smart AI Monitoring.</h2>
        <p>From breathing and heartbeat monitoring to AI-driven sleep insights, BabyGuardian gives you real-time updates and peace of mind.</p>
        <Link to="/contacts" className="btn btn-primary">Get Started</Link>
      </section>
    </>
  )
}
