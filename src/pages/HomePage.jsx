import { Link } from 'react-router-dom'

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
                  <div className="card-icon">🌡️</div>
                  <div className="card-label">Avg Temp</div>
                  <div className="card-value">36°C</div>
                </div>
                <div className="data-card sleep-card">
                  <div className="card-icon">🌙</div>
                  <div className="card-label">Sleep</div>
                  <div className="card-value">71 <span style={{ fontSize: '0.7em', fontWeight: 500 }}>bpm</span></div>
                </div>
                <div className="data-card bottom-left-card">
                  <div className="card-icon">☀️</div>
                  <div className="card-label">Temp status</div>
                  <div className="card-value">Normal</div>
                </div>
                <div className="data-card time-card">
                  <div className="card-icon">🕐</div>
                  <div className="card-value">12:20:51</div>
                </div>
                <div className="data-card temp-status-card">
                  <div className="card-icon">🌡️</div>
                  <div className="card-label">Temperature</div>
                  <div className="card-value">27°C</div>
                </div>
                <div className="data-card trend-card">
                  <div className="card-icon">📈</div>
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
        </div>
      </section>

      <section className="section-padding">
        <div className="section-header">
          <h2>How it Works</h2>
          <p>Get started in minutes with our simple setup process</p>
        </div>
        <div className="how-it-works">
          <div className="how-step">
            <div className="step-number blue">1</div>
            <h4>Setup Account</h4>
            <p>Download the app and create your secure account.</p>
          </div>
          <div className="how-step">
            <div className="step-number orange">2</div>
            <h4>Connect Devices</h4>
            <p>Connect wearable sensors, camera, and environmental monitors.</p>
          </div>
          <div className="how-step">
            <div className="step-number blue">3</div>
            <h4>Set Preferences</h4>
            <p>Set your preferences, thresholds, and emergency contacts.</p>
          </div>
          <div className="how-step">
            <div className="step-number orange">4</div>
            <h4>Enjoy Monitoring</h4>
            <p>Enjoy peace of mind with 24/7 comprehensive monitoring.</p>
          </div>
        </div>
      </section>

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
