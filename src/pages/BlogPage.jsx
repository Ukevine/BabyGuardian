import { useState } from 'react'

const categories = ['All', 'Health', 'Safety', 'Sleep Health', 'Technology']

const articles = [
  {
    id: 1,
    image: '/images/baby.png',
    tag: 'BABY CARE',
    title: "Understanding Your Baby's Sleep Patterns",
    desc: 'Learn about the different sleep cycles and how to establish healthy sleep routines for your newborn.',
    author: 'Sarah Smith',
    date: 'Feb 15, 2024',
    readTime: '5 MIN READ',
    featured: true,
  },
  ...Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i + 2,
      image: '/images/baby.png',
      tag: 'BABY CARE',
      title: "Understanding Your Baby's Sleep Patterns",
      desc: 'Learn about the different sleep cycles and how to establish healthy sleep routines for your newborn.',
      author: 'Sarah Smith',
      date: 'Feb 15, 2024',
      readTime: '5 MIN READ',
      featured: false,
    })),
]

const IconUser = () => (
  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const IconCalendar = () => (
  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const IconClock = () => (
  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

function MetaRow({ author, date, readTime }) {
  return (
    <div className="article-meta">
      <span>
        <IconUser /> BY {author.toUpperCase()}
      </span>
      <span>
        <IconCalendar /> {date.toUpperCase()}
      </span>
      <span>
        <IconClock /> {readTime}
      </span>
    </div>
  )
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const featured = articles.find((a) => a.featured)
  const gridArticles = articles.filter((a) => !a.featured).slice(0, 6)

  return (
    <>
      <section className="blog-hero">
        <div className="blog-logo-row">
          <span className="logo-baby">Baby</span>
          <span className="logo-guardian">Guardian</span> <span>Blog</span>
        </div>
        <h1 className="blog-hero-title">BabyGuardian Blog</h1>
        <p className="blog-hero-desc">
          A comprehensive space dedicated to helping parents understand and care for their babies&apos; sleep, health and
          wellbeing.
        </p>

        <div className="blog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="blog-articles-section section-padding">
        {featured && (
          <article className="featured-article blog-featured">
            <div className="featured-article-image">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="featured-content">
              <span className="tag">{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.desc}</p>
              <MetaRow author={featured.author} date={featured.date} readTime={featured.readTime} />
              <a href="#" className="read-more">
                READ MORE
              </a>
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
                <MetaRow author={article.author} date={article.date} readTime={article.readTime} />
                <a href="#" className="read-more">
                  READ MORE
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-section newsletter-dark">
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
