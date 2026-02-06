import { useState } from 'react'

const categories = ['All', 'Health', 'Safety', 'Sleep Health', 'Technology']
const categoryIcons = { All: '📄', Health: '❤️', Safety: '🛡️', 'Sleep Health': '🛏️', Technology: '⚙️' }

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
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
    tag: 'Nature',
    title: "Understanding Your Baby's Sleep Patterns",
    desc: "Learn about the different sleep cycles and how to establish healthy sleep routines for your newborn.",
    author: 'Sarah Crow',
    date: 'January 15, 2026',
    featured: false,
  }).map((a, i) => ({ ...a, id: i + 2 })),
]

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('Sleep Health')

  const featured = articles.find((a) => a.featured)
  const gridArticles = articles.filter((a) => !a.featured).slice(0, 6)

  return (
    <>
      <section className="blog-hero">
        <div className="logo">
          <span className="logo-baby">Baby</span><span className="logo-guardian">Guardian</span> Blog
        </div>
        <h1>BabyGuardian Blog</h1>
        <p>A comprehensive system combining live monitoring, health tracking, and AI-powered safety features to give parents complete peace of mind.</p>

        <div className="blog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ maxWidth: 1200, margin: '0 auto' }}>
        {featured && (
          <article className="featured-article">
            <img src={featured.image} alt={featured.title} />
            <div className="featured-content">
              <span className="tag">{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.desc}</p>
              <div className="meta">
                <span>👤 By {featured.author}</span>
                <span>📅 {featured.date}</span>
              </div>
              <a href="#" className="read-more">Read Now →</a>
            </div>
          </article>
        )}

        <div className="section-header" style={{ marginTop: '3rem' }}>
          <h2>Articles</h2>
        </div>
        <div className="articles-grid">
          {gridArticles.map((article) => (
            <article key={article.id} className="article-card">
              <img src={article.image} alt={article.title} />
              <div className="article-card-content">
                <span className="tag">{article.tag}</span>
                <h3>{article.title}</h3>
                <p>{article.desc}</p>
                <div className="meta">
                  <span>👤 By {article.author}</span>
                  <span>📅 {article.date}</span>
                </div>
                <a href="#" className="read-more">Read Now →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
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
