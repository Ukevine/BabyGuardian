import { useState } from 'react'

// Icon components - Professional SVG icons
const AllIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h6v6H4z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6H4z" /><path d="M14 14h6v6h-6z" />
  </svg>
)

const HealthIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const SafetyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
)

const SleepIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const TechIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1" /><path d="M12 1v6m0 6v6" /><path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24" /><path d="M1 12h6m6 0h6" /><path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
  </svg>
)

const categoryIcons = { 
  All: <AllIcon />, 
  Health: <HealthIcon />, 
  Safety: <SafetyIcon />, 
  'Sleep Health': <SleepIcon />, 
  Technology: <TechIcon /> 
}

const categories = ['All', 'Health', 'Safety', 'Sleep Health', 'Technology']

const articles = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600',
    tag: 'Featured',
    title: "Understanding Your Baby's Sleep Patterns",
    desc: "Learn about the different sleep cycles and how to establish healthy sleep routines for your newborn.",
    author: 'Sarah Crow',
    date: 'January 15, 2026',
    featured: true,
  },
  ...Array(5).fill({
    id: 2,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400',
    tag: 'Sleep Health',
    title: "Understanding Your Baby's Sleep Patterns",
    desc: "Learn about the different sleep cycles and how to establish healthy sleep routines for your newborn.",
    author: 'Sarah Crow',
    date: 'January 15, 2026',
    featured: false,
  }).map((a, i) => ({ ...a, id: i + 2 })),
]

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const featured = articles.find((a) => a.featured)
  const gridArticles = articles.filter((a) => !a.featured).slice(0, 6)

  return (
    <>
      <section className="blog-hero">
        <div className="blog-logo">
          <span className="logo-baby">Baby</span><span className="logo-guardian">Guardian</span> Blog
        </div>
        <h1>BabyGuardian Blog</h1>
        <p>A comprehensive system combining live monitoring, health tracking, and AI-powered safety features to give parents complete peace of mind.</p>

        <div className="blog-divider"></div>

        <div className="blog-filters-label">EXPLORE TRENDING IDEAS</div>
        <div className="blog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              <span className="filter-icon">{categoryIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ maxWidth: 1200, margin: '0 auto' }}>
        {featured && (
          <article className="featured-article">
            <div className="featured-image-wrapper">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="featured-content">
              <span className="tag">{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.desc}</p>
              <div className="meta">
                <span className="meta-author">By {featured.author}</span>
                <span className="meta-date">{featured.date}</span>
              </div>
              <a href="#" className="read-more">Read More <span>→</span></a>
            </div>
          </article>
        )}

        <div className="section-header" style={{ marginTop: '3rem' }}>
          <h2>Articles</h2>
        </div>
        <div className="articles-grid">
          {gridArticles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-image-wrapper">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-card-content">
                <span className="tag">{article.tag}</span>
                <h3>{article.title}</h3>
                <p>{article.desc}</p>
                <div className="meta">
                  <span className="meta-author">By {article.author}</span>
                  <span className="meta-date">{article.date}</span>
                </div>
                <a href="#" className="read-more">Read More <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-bg"></div>
        <div className="newsletter-inner">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest parenting tips, health insights, and product updates delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}
