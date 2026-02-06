import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-intro">
          <p>Have questions or ideas? We're here to help you keep what matters most safe.</p>
          <div className="footer-contact">
            <span>📍 9 Bgrd, Indonesia</span>
            <span>📞 (+62) 500 064 000</span>
            <span>✉️ email@babyguard.com</span>
          </div>
        </div>
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#pages">Pages</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/solution">Services</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Link</h4>
          <ul>
            <li><Link to="/contacts">Contact Us</Link></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#pages">Pages</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="#404">404</a></li>
          </ul>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 BabyGuardian. All Rights Reserved.
      </div>
    </footer>
  )
}
