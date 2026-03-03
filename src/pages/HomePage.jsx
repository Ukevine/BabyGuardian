import { Link } from 'react-router-dom'

// Simple line icons instead of emojis
const IconThermometer = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 14.76V5.5a2 2 0 0 0-4 0v9.26a3 3 0 1 0 4 0Z" />
  </svg>
)

const IconMoon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
  </svg>
)

const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const IconTrend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const IconHeart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const IconDevice = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg hero-bg-1" />
        <div className="hero-bg hero-bg-2" />
        <div className="hero-content">
          <h1>Smart Baby Monitoring. Made for Peace of Mind.</h1>
          <p>Wearable health tracking, safety alerts, AI predictions and real-time camera monitoring; all in one intelligent system.</p>
          <div className="hero-buttons">
            <Link to="/solution" className="btn btn-primary">Learn More</Link>
            <Link to="/contacts" className="btn btn-secondary">View Demo</Link>
          </div>
          <div className="hero-visual">
            <div className="shield-container">
              <img src="/images/check.png" alt="BabyGuard shield with checkmark" className="shield-3d" />
              <div className="data-cards-container">
                <div className="data-card top-left-card">
                  <div className="card-icon"><IconThermometer /></div>
                  <div className="card-label">Avg Temp</div>
                  <div className="card-value">36°C</div>
                </div>
                <div className="data-card sleep-card">
                  <div className="card-icon"><IconMoon /></div>
                  <div className="card-label">Sleep</div>
                  <div className="card-value">
                    71 <span style={{ fontSize: '0.7em', fontWeight: 500 }}>bpm</span>
                  </div>
                </div>
                <div className="data-card bottom-left-card">
                  <div className="card-icon"><IconSun /></div>
                  <div className="card-label">Temp status</div>
                  <div className="card-value">Normal</div>
                </div>
                <div className="data-card time-card">
                  <div className="card-icon"><IconClock /></div>
                  <div className="card-value">12:20:51</div>
                </div>
                <div className="data-card temp-status-card">
                  <div className="card-icon"><IconThermometer /></div>
                  <div className="card-label">Temperature</div>
                  <div className="card-value">27°C</div>
                </div>
                <div className="data-card trend-card">
                  <div className="card-icon"><IconTrend /></div>
                  <div className="card-label">Temp trend</div>
                  <div className="card-value">Rising</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-header">
          <h2>Our Features</h2>
          <p>From breathing and heartbeat monitoring to AI-driven sleep insights, BabyGuardian gives you real-time updates and peace of mind.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon purple">
              <IconHeart />
            </div>
            <h3>AI Sleep & Health Insights</h3>
            <p>Advanced AI analyzes sleep patterns and health metrics to provide actionable recommendations for your baby's wellbeing.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon orange">
              <IconBell />
            </div>
            <h3>Real-time Alerts</h3>
            <p>Instant notifications for critical situations. Never miss an important moment with our smart alert system.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon blue">
              <IconDevice />
            </div>
            <h3>Secure Device Monitoring</h3>
            <p>End-to-end encrypted monitoring with medical-grade security to keep your baby's data safe and private.</p>
          </div>
        </div>
      </section>

      {/* How it Works section removed from Home page */}

      <section className="why-choose-us">
        <div className="why-header">
          <h2>Why Choose Us</h2>
          <p>Built with medical-grade principles and industry-leading AI to keep your baby safe, always.</p>
        </div>
        <div className="why-content">
          <div className="why-image">
            <img src="/images/Group 97.png" alt="Woman holding baby with BabyGuard device" />
          </div>
          <div className="why-stats">
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
