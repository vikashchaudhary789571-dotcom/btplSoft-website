import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Globe, ShoppingCart, Layout,
  Database, Shield, RefreshCw, Zap, Layers, Lock,
  Clock, Users, TrendingUp, Code, Monitor, Settings
} from 'lucide-react'
import '../services/ServicePage.css'
import './PHP.css'
import phpBanner from '../../assets/services/dedicated-businessman-working-late-laptop-dark-office.webp'

const services = [
  {
    icon: <Globe size={26} />, title: 'Custom PHP Web Applications',
    desc: 'We architect and ship bespoke PHP web applications using clean MVC patterns, dependency injection, and PSR-compliant code. Every project starts with full requirements analysis and ends with documented, maintainable source code your team can own.',
    tags: ['PHP 8.3', 'MVC Architecture', 'PSR Standards'],
  },
  {
    icon: <Layout size={26} />, title: 'CMS Development (WordPress / Drupal)',
    desc: 'Custom WordPress themes, full-featured plugins, and headless CMS architectures let us turn WordPress into a powerful publishing and marketing platform. We also build enterprise Drupal 10 solutions for complex content structures.',
    tags: ['WordPress', 'Drupal 10', 'Headless CMS'],
  },
  {
    icon: <ShoppingCart size={26} />, title: 'Laravel & Symfony Platforms',
    desc: 'Laravel\'s expressive syntax and Symfony\'s battle-tested components power our enterprise-grade applications — from subscription SaaS platforms and booking systems to complex workflow orchestration engines.',
    tags: ['Laravel 11', 'Symfony 7', 'Eloquent ORM'],
  },
  {
    icon: <Database size={26} />, title: 'REST & GraphQL API Development',
    desc: 'We build robust PHP APIs consumed by mobile apps, SPA frontends, and third-party integrations. JSON API specification adherence, JWT authentication, rate limiting, and thorough OpenAPI documentation are standard on every delivery.',
    tags: ['REST APIs', 'GraphQL', 'JWT Auth'],
  },
  {
    icon: <Shield size={26} />, title: 'PHP Security & Performance Audits',
    desc: 'Our security engineers conduct comprehensive PHP application audits — reviewing for SQL injection, XSS, CSRF, file-upload vulnerabilities, and misconfigured HTTP headers. Paired with query optimisation and Redis caching for 10x speed gains.',
    tags: ['OWASP Audit', 'Redis Cache', 'Query Optimisation'],
  },
  {
    icon: <RefreshCw size={26} />, title: 'PHP Migration & Modernisation',
    desc: 'Still running PHP 5.x or legacy CodeIgniter apps? We migrate aging codebases to PHP 8.3, refactor procedural spaghetti into Laravel or Symfony structures, and add comprehensive test suites — with zero production downtime.',
    tags: ['PHP 5→8', 'Framework Migration', 'Zero-Downtime'],
  },
]

const whyPhp = [
  { num: '01', icon: <Zap size={24} />, title: 'Mature & Battle-Tested', desc: 'PHP runs over 77% of the web — including Facebook\'s origins, Slack\'s backend, and the world\'s top CMS platforms. Its ecosystem is unmatched in breadth, stability, and community support.' },
  { num: '02', icon: <Globe size={24} />, title: 'Unmatched Hosting Compatibility', desc: 'From shared cPanel hosting to Kubernetes clusters on AWS — PHP runs everywhere. This dramatically reduces infrastructure costs, especially for SMBs and growing startups.' },
  { num: '03', icon: <Layers size={24} />, title: 'Laravel\'s Developer Experience', desc: 'Laravel remains the world\'s most starred PHP framework on GitHub. Its expressive API, built-in queues, scheduled commands, and Livewire full-stack toolset rival frameworks from other ecosystems.' },
  { num: '04', icon: <Shield size={24} />, title: 'PHP 8.x Performance Gains', desc: 'PHP 8.3 with JIT compilation brings 3x the throughput of PHP 7.2 on CPU-intensive tasks. Paired with OPcache, Swoole async runtime, or FrankenPHP — PHP now competes with Node.js on raw performance benchmarks.' },
  { num: '05', icon: <Database size={24} />, title: 'Rich Data Ecosystem', desc: 'PHP\'s native support for MySQL, PostgreSQL, Redis, MongoDB, and Elasticsearch — combined with Laravel\'s Eloquent ORM and Doctrine — makes complex data modelling and querying genuinely enjoyable.' },
  { num: '06', icon: <TrendingUp size={24} />, title: 'Vast Talent Pool & Lower Cost', desc: 'PHP\'s 25-year head-start means the global talent pool is enormous. Hiring, scaling your team, and doing knowledge transfers are all easier and more cost-effective compared to newer backend stacks.' },
]

const expCounters = [
  { num: '500+', label: 'PHP Projects Delivered' },
  { num: '12+', label: 'Years PHP Experience' },
  { num: '200+', label: 'Laravel Applications' },
  { num: '98%', label: 'Client Satisfaction Rate' },
]

const expItems = [
  'Custom Laravel SaaS Platforms',
  'WordPress Enterprise Multisite',
  'High-Traffic REST APIs (50M+ req/day)',
  'PHP Microservices on Kubernetes',
  'WooCommerce B2B Storefronts',
  'Legacy PHP 5 to Laravel 11 Migration',
  'Headless WordPress + Next.js',
  'Real-Time Chat with Reverb + Laravel',
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Certified PHP Engineering Team', desc: 'Our senior Laravel developers hold industry certifications and have shipped PHP applications serving millions of daily active users across SaaS, fintech, and media verticals.' },
  { icon: <Lock size={22} />, title: 'Security-First PHP Development', desc: 'Every PHP application we build undergoes automated SAST scanning, manual OWASP Top 10 review, and dependency vulnerability auditing before a single line reaches production.' },
  { icon: <TrendingUp size={22} />, title: 'Performance-Tuned Delivery', desc: 'We profile every application with Blackfire.io and Telescope, ensuring queries are indexed, N+1 issues are eliminated, and response times meet agreed SLAs from launch day.' },
  { icon: <Clock size={22} />, title: 'On-Schedule, Every Sprint', desc: 'Two-week sprints, daily standups, and transparent Jira boards mean you\'ll never be surprised by a deadline. Our on-time delivery rate across 500+ PHP projects is 96%.' },
]

export default function PHP() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${phpBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>PHP</span> Development Built for Scale</h1>
          <p className="sp-hero-desc">
            BTPL Soft's PHP team builds Laravel, Symfony, and WordPress solutions that are
            performant, maintainable, and cloud-ready — from rapid MVPs to enterprise platforms
            serving millions of users worldwide.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your PHP Project <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ph-stats">
        <div className="sp-container">
          <div className="ph-stats-grid">
            {expCounters.map((c, i) => (
              <div className="ph-stat" key={i}>
                <span className="ph-stat-num"><span>{c.num}</span></span>
                <div className="ph-stat-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-light" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>What We Build</p>
            <h2 className="sp-heading">PHP Development Services</h2>
            <p className="sp-sub">From WordPress sites to large-scale Laravel SaaS platforms — our PHP engineers choose the right tools for every problem and deliver code that's clean, tested, and built to last.</p>
          </div>
          <div className="ph-svc-grid">
            {services.map((s, i) => (
              <div className="ph-svc-card" key={i}>
                <div className="ph-svc-icon-wrap">{s.icon}</div>
                <div className="ph-svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="ph-tags">{s.tags.map(t => <span className="ph-tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PHP */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Technology</p>
            <h2 className="sp-heading sp-heading-white">Why PHP in 2026?</h2>
            <p className="sp-sub" style={{ color: 'var(--gray-300)' }}>PHP is no longer just "the web's glue language." With PHP 8.3, Laravel 11, and modern tooling, it's a first-class platform for building any web application — fast.</p>
          </div>
          <div className="ph-why-grid">
            {whyPhp.map((w, i) => (
              <div className="ph-why-card" key={i}>
                <div className="ph-why-num">{w.num}</div>
                <div className="ph-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>Track Record</p>
            <h2 className="sp-heading">PHP Development Experience</h2>
          </div>
          <div className="ph-exp-wrap">
            <div className="ph-exp-counters">
              {expCounters.map((c, i) => (
                <div className="ph-exp-counter" key={i}>
                  <span className="ph-exp-counter-num">{c.num}</span>
                  <span className="ph-exp-counter-label">{c.label}</span>
                </div>
              ))}
            </div>
            <ul className="ph-exp-list">
              {expItems.map((item, i) => (
                <li className="ph-exp-item" key={i}>
                  <CheckCircle size={16} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL Soft for PHP Development?</h2>
          </div>
          <div className="ph-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="ph-btpl-card" key={i}>
                <div className="ph-btpl-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta" style={{ background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Ready to Build Something Great with PHP?</h2>
          <p style={{ color: '#37474f' }}>Share your project requirements and our PHP architects will respond with a detailed technical proposal within 24 hours — completely free.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#1565C0', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
