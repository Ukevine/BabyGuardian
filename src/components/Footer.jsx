import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-branding">
          <div className="footer-logo">
            <img
              src="/images/whitelogo.png"
              alt="BabyGuard"
              className="footer-logo-img"
            />
          </div>
          <h3>BabyGuard</h3>
          <p>Have questions or ideas? We're here to help you keep what matters most safe.</p>
        </div>

        <div className="footer-links">
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
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-middle">
        <div className="footer-contact-info">
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Kigali, Rwanda</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>(+250)788 384 990</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>mhs@babyguard.com</span>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="X">𝕏</a>
          <a href="#" aria-label="Instagram">📷</a>
        </div>
      </div>

      <div className="footer-copyright">
        © 2026 BabyGuard • All Rights Reserved
      </div>
    </footer>
  )
}
