import { Link } from 'react-router-dom'

const coreFeatures = [
  {
    icon: 'orange',
    title: 'Live Video Monitoring',
    desc: 'Secure HD video streaming with ultra-low latency. Two-way audio for communication, night vision and automatic light adjustment. Save and share video clips instantly.',
  },
  {
    icon: 'blue',
    title: 'Vital Signs Tracking',
    desc: 'Real-time heart rate monitoring with essential sensors. Temperature tracking with fever alarms, SpO2 (blood oxygen) continuous monitoring. Breathing pattern analysis.',
  },
  {
    icon: 'orange',
    title: 'Intelligent Alert System',
    desc: 'Instant notifications with high-priority alerts (fever, rapid heart rate) with push notifications. Cry-detection with intensity levels. Customizable alert thresholds.',
  },
  {
    icon: 'blue',
    title: 'Sleep & Activity Monitoring',
    desc: 'Detailed sleep pattern tracking and analysis. Movement detection and activity logs. Sleep quality scores with recommendations. Nap and night sleep differentiation.',
  },
  {
    icon: 'orange',
    title: 'Advanced Safety Features',
    desc: 'Enhanced fall detection with instant alerts, cry analysis (hunger, discomfort, pain detection), safe sleep posture monitoring, automatic emergency contact notification.',
  },
  {
    icon: 'blue',
    title: 'Environment Monitoring',
    desc: 'Room temperature and humidity tracking, air quality monitoring (CO2, VOCs), dangerous gas and smoke detection. Automatic ventilation recommendations.',
  },
]

const steps = [
  { num: 1, color: 'blue', title: 'Setup Account', desc: 'Download the app and create your secure account.' },
  { num: 2, color: 'orange', title: 'Connect Devices', desc: 'Connect wearable sensors, camera, and environmental monitors.' },
  { num: 3, color: 'blue', title: 'Set Preferences', desc: 'Set your preferences, thresholds, and emergency contacts.' },
  { num: 4, color: 'orange', title: 'Enjoy Monitoring', desc: 'Enjoy peace of mind with 24/7 comprehensive monitoring.' },
]

export default function SolutionPage() {
  return (
    <>
      <section className="page-hero solution-hero">
        <h1>Complete Baby Monitoring <span className="text-primary">Solution</span></h1>
        <p>A comprehensive system combining live monitoring, health tracking, and integrated safety features to give parents complete peace of mind.</p>
      </section>

      <section className="section-padding">
        <div className="section-header">
          <h2>Core Features</h2>
          <p>Everything you need to monitor and protect your baby, all in one place</p>
        </div>
        <div className="core-features">
          {coreFeatures.map((f) => (
            <div key={f.title} className="core-feature-card">
              <div className={`icon-box ${f.icon}`}>📋</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Get started in minutes with our simple setup process</p>
        </div>
        <div className="how-it-works">
          {steps.map((s) => (
            <div key={s.num} className="how-step">
              <div className={`step-number ${s.color}`}>{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-dark">
        <div className="cta-dark-inner">
          <h2>Ready To Get Started?</h2>
          <p>Join thousands of parents who trust BabyGuardian for their baby's safety and health</p>
          <Link to="/contacts" className="btn btn-primary">Pre-order now</Link>
        </div>
      </section>
    </>
  )
}
