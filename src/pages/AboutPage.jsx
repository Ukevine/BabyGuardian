export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <h1>About Us</h1>
        <p>Wearable health tracking, safety alerts, AI predictions and real-time camera monitoring; all in one intelligent system.</p>
      </section>

      <section className="about-split section-padding">
        <div className="about-image">
          <img src="/images/Group 110.png" alt="Mother with baby and experience badge" />
        </div>
        <div className="about-content">
          <h2>Why BabyGuardian?</h2>
          <p>Modern parenting deserves smarter support. BabyGuardian combines health tracking, safety monitoring and AI-powered insights to help parents stay connected, informed and confident - wherever they are.</p>
          <ul className="check-list">
            <li>Real-time health & safety monitoring</li>
            <li>Smart alerts for critical situations</li>
            <li>Designed with care, privacy and trust</li>
          </ul>
        </div>
      </section>

      <section className="stats-banner">
        <div className="stats-banner-inner">
          <div className="stat-box">
            <div className="icon icon-heart">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Health metrics tracked</div>
          </div>
          <div className="stat-box">
            <div className="icon icon-alert">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 8v4M12 16h.01" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Smart alerts monitored</div>
          </div>
          <div className="stat-box">
            <div className="icon icon-clock">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <polyline points="12 6 12 12 16 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="stat-number">20+</div>
            <div className="stat-label">Hours of continuous monitoring</div>
          </div>
          <div className="stat-box">
            <div className="icon icon-brain">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v2a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 0-2.5 2.5v1.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 9.5 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v2a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 1 2.5 2.5v1.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 14.5 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Safety & AI features</div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-header values-header">
          <h2>Our Values</h2>
        </div>
        <div className="values-grid">
          <div className="value-card blue">
            <div className="number">01</div>
            <h3>Safety First</h3>
            <p>Your baby's safety is our top priority. We use medical-grade sensors and follow the highest safety and privacy standards.</p>
          </div>
          <div className="value-card white">
            <div className="number">02</div>
            <h3>Community</h3>
            <p>We're building a community of parents who support each other through the challenging and rewarding journey of raising children.</p>
          </div>
          <div className="value-card blue">
            <div className="number">03</div>
            <h3>Innovation</h3>
            <p>We leverage cutting-edge AI and IoT technology to provide parents with the most advanced monitoring solution available.</p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-cards">
          <div className="mission-card">
            <h3>Mission</h3>
            <p>To protect every baby through intelligent monitoring, real-time insights, and compassionate technology that gives parents peace of mind.</p>
          </div>
          <div className="mission-card">
            <h3>Vision</h3>
            <p>To become a trusted global standard in smart infant care by combining AI, innovation, and human-centered design to support healthier beginnings for every child.</p>
          </div>
        </div>
        <div className="mission-image">
          <img src="/images/Group 114.png" alt="Peaceful sleeping baby" />
        </div>
      </section>
    </>
  )
}
