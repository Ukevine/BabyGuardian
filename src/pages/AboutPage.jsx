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
                <path
                  d="M12 20.25s-5.5-3.28-8.06-6.44C2.4 12.6 2 11.7 2 10.77 2 9 3.37 7.5 5.3 7.5c1.16 0 2.25.6 2.9 1.57.65-.97 1.74-1.57 2.9-1.57 1.93 0 3.3 1.5 3.3 3.27 0 .93-.4 1.83-1.94 3.04C17.5 16.97 12 20.25 12 20.25Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Smart health monitoring</div>
          </div>
          <div className="stat-box">
            <div className="icon icon-bell">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M12 3a4 4 0 0 0-4 4v1.1c0 .5-.18.98-.5 1.36L6 11.5v3h12v-3l-1.5-2.04a2.4 2.4 0 0 1-.5-1.36V7a4 4 0 0 0-4-4Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 18a2 2 0 0 0 4 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Real-time Alerts</div>
          </div>
          <div className="stat-box">
            <div className="icon icon-shield">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M12 3.25 6 5v6.8c0 3.26 2.36 6.18 6 6.95 3.64-.77 6-3.69 6-6.95V5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m9.5 11.75 1.7 1.7 3.3-3.3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-number">20+</div>
            <div className="stat-label">Real-time Solutions</div>
          </div>
          <div className="stat-box">
            <div className="icon icon-happy">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle
                  cx="12"
                  cy="12"
                  r="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M9 10.5h.01M15 10.5h.01"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M9 14.25c.6.71 1.5 1.15 3 1.15s2.4-.44 3-1.15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Happy families</div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-header">
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
            <p>We're building a community of parents who want to empower themselves through the insights and rewarding journey of raising children.</p>
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
