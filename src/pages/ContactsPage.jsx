import { useState } from 'react'

const IconLocation = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>Have questions or ideas? We're here to help you keep what matters most safe.</p>
      </section>

      <section className="section-padding" style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.2fr', gap: '3rem', alignItems: 'stretch' }}>
          <div>
            <h2 style={{ marginBottom: '0.75rem' }}>Get in Touch</h2>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
              Share your questions, feedback or partnership ideas. We&apos;ll get back to you within one business day.
            </p>
            <div className="footer-contact contact-icons-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                <IconLocation /> Kigali, Rwanda
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                <IconPhone /> (+250) 788 384 990
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                <IconMail /> mhs@babyguard.com
              </span>
            </div>
          </div>

          <form
            action="https://formsubmit.co/yoursshayla@gmail.com"
            method="POST"
            style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}
          >
            <input type="hidden" name="_subject" value="New message from BabyGuard website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="from" value="mhs@babyguard.com" />

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius)' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius)' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius)' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: 'var(--radius)',
                  resize: 'vertical',
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
            {submitted && (
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                Thanks for reaching out! We&apos;ll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
