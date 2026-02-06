import { useState } from 'react'

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', form)
    alert('Thank you! We will get back to you soon.')
  }

  return (
    <>
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>Have questions or ideas? We're here to help you keep what matters most safe.</p>
      </section>

      <section className="section-padding" style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Get in Touch</h2>
            <div className="footer-contact" style={{ marginBottom: '2rem' }}>
              <span>📍 9 Bgrd, Indonesia</span>
              <span>📞 (+62) 500 064 000</span>
              <span>✉️ email@babyguard.com</span>
            </div>
            <p style={{ color: 'var(--color-text-light)' }}>
              We typically respond within 24 hours. For urgent matters, please call us directly.
            </p>
          </div>
          <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius)' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius)' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius)', resize: 'vertical' }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}
