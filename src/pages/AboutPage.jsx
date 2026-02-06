export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <h1>About Us</h1>
        <p>Viewable health tracking, safety alerts, AI predictions and real-time camera monitoring. All in one intelligent system.</p>
      </section>

      <section className="about-split section-padding">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600" alt="Mother with baby" />
          <div className="exp-badge">
            5+
            <span>years of experience</span>
          </div>
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
            <div className="icon">❤️</div>
            <div className="stat-number">5+</div>
            <div className="stat-label">smart health monitoring</div>
          </div>
          <div className="stat-box">
            <div className="icon">⏰</div>
            <div className="stat-number">10+</div>
            <div className="stat-label">smart health monitoring</div>
          </div>
          <div className="stat-box">
            <div className="icon">⏱️</div>
            <div className="stat-number">20+</div>
            <div className="stat-label">real-time solutions monitoring</div>
          </div>
          <div className="stat-box">
            <div className="icon">💡</div>
            <div className="stat-number">10+</div>
            <div className="stat-label">happy babies</div>
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
          <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600" alt="Peaceful baby" />
        </div>
      </section>
    </>
  )
}
