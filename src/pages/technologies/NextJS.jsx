import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Users, Shield,
  Clock, TrendingUp, Lock
} from 'lucide-react'
import '../services/ServicePage.css'
import './NextJS.css'
import nextBanner from '../../assets/services/html-css-collage-concept.webp'
import imgCustomApp  from '../../assets/services/html-css-collage-concept.webp'
import imgSSR        from '../../assets/services/professional-programmer-working-late-dark-office.webp'
import imgSSG        from '../../assets/services/geralt-ai-generated-9094599_1920.webp'
import imgAPI        from '../../assets/services/dedicated-businessman-working-late-laptop-dark-office.webp'
import imgMigration  from '../../assets/services/human-ai-touch-connection-technology-innovation.webp'
import imgPerf       from '../../assets/services/representation-user-experience-interface-design.webp'

const services = [
  { img: imgCustomApp,  num: '01', title: 'Custom Next.js App Development', desc: 'We build full-stack Next.js applications leveraging the App Router, Server Components, and React 18 Streaming — delivering sub-second page loads and outstanding developer experience out of the box.', tags: ['App Router', 'React Server Components', 'Streaming'] },
  { img: imgSSR,        num: '02', title: 'Server-Side Rendering (SSR)', desc: 'Dynamic pages rendered on every request ensure your users always see fresh, personalised data. We architect SSR solutions with Redis caching and edge middleware for zero-latency responses globally.', tags: ['SSR', 'Edge Middleware', 'Redis Cache'] },
  { img: imgSSG,        num: '03', title: 'Static Site Generation (SSG)', desc: 'We pre-render thousands of pages at build time with Incremental Static Regeneration, giving you the best of both worlds — blazing CDN speed with dynamic content updates without full rebuilds.', tags: ['ISR', 'CDN Delivery', 'Build-time Pre-render'] },
  { img: imgAPI,        num: '04', title: 'API Routes & Full-Stack Development', desc: 'Next.js API Routes and Route Handlers let us ship backend logic inside the same codebase — REST endpoints, webhook receivers, and background jobs all co-located with your frontend for seamless full-stack flow.', tags: ['API Routes', 'Full-Stack', 'Edge Functions'] },
  { img: imgMigration,  num: '05', title: 'Next.js Migration & Upgrades', desc: 'We migrate existing React SPAs, CRA apps, or older Next.js versions to the latest App Router architecture — preserving all business logic while unlocking Parallel Routes, Intercepting Routes, and Server Actions.', tags: ['CRA Migration', 'Pages → App Router', 'Backwards Compat'] },
  { img: imgPerf,       num: '06', title: 'Performance & SEO Optimization', desc: 'Next.js Image Optimization, Automatic Font Optimization, metadata API, and structured data injection are table stakes for us. We target 98+ Lighthouse scores on every project we ship.', tags: ['Core Web Vitals', 'Metadata API', '98+ Lighthouse'] },
]

const renderStrategies = [
  { badge: 'SSR', color: '#0070f3', bg: 'rgba(0,112,243,0.1)', title: 'Server-Side Rendering', desc: 'HTML generated per-request on the server. Perfect for personalised dashboards, authenticated pages, and data that changes frequently. Combines with React Streaming for progressive hydration.' },
  { badge: 'SSG + ISR', color: '#7928CA', bg: 'rgba(121,40,202,0.1)', title: 'Static & Incremental', desc: 'Pages pre-built at compile time and served from a global CDN. ISR lets individual pages revalidate in the background — so a content change goes live in seconds without a full redeploy.' },
  { badge: 'RSC', color: '#FF4500', bg: 'rgba(255,69,0,0.1)', title: 'React Server Components', desc: 'Zero-JS components that fetch data server-side and stream rendered HTML directly to the client. Removes the data-fetching waterfall entirely and cuts JS bundle size by up to 40%.' },
]

const timeline = [
  { cat: 'Discovery', title: 'Architecture Planning', desc: 'We map each route\'s data requirements to the optimal rendering strategy — SSR, SSG, ISR, or RSC — and design the data-fetching layer before writing a single line of component code.' },
  { cat: 'Development', title: 'Component-Driven Build', desc: 'Features are built in isolation using Storybook, then composed into page-level layouts. Every component ships with TypeScript types, unit tests, and accessibility attributes.' },
  { cat: 'Optimisation', title: 'Performance Hardening', desc: 'Bundle analysis with @next/bundle-analyzer, route pre-fetching tuning, image CDN integration, and dynamic imports ensure every byte served is intentional.' },
  { cat: 'Deployment', title: 'CI/CD & Monitoring', desc: 'GitHub Actions pipelines run type-checks, tests, and Lighthouse audits on every PR. Vercel or AWS Amplify deployments with preview branches so stakeholders can review before merge.' },
]

const whyBtpl = [
  { icon: <Users size={24} />, title: 'Certified Next.js Architects', desc: 'Our engineers have shipped production Next.js apps with 500k+ monthly visitors — from marketing portals to real-time SaaS dashboards handling millions of API calls daily.' },
  { icon: <TrendingUp size={24} />, title: 'SEO & Performance First', desc: 'We treat Core Web Vitals as a deliverable, not an afterthought. Every project launches with 95+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.' },
  { icon: <Lock size={24} />, title: 'Enterprise Security Posture', desc: 'Next.js middleware for auth, CSRF protection, rate limiting, Content Security Policy headers, and dependency auditing on every build — security baked in, not bolted on.' },
  { icon: <Clock size={24} />, title: 'Rapid Turnaround', desc: 'Two-week sprints with working software at every demo. Our pre-configured Next.js starter kit shaves 2 weeks off typical project kick-offs right from day one.' },
]

export default function NextJS() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${nextBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">
            Production-Grade <span>Next.js</span> Development
          </h1>
          <p className="sp-hero-desc">
            We build blazing-fast, SEO-perfect full-stack web applications with Next.js 14 &amp; the
            App Router. From static marketing sites to complex real-time dashboards — our engineers
            choose the right rendering strategy for every route, every time.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS BAR ══════════════════ */}
      <section className="nj-stats">
        <div className="sp-container">
          <div className="nj-stats-grid">
            <div className="nj-stat"><div className="nj-stat-num">1500<span>+</span></div><div className="nj-stat-label">Completed Projects</div></div>
            <div className="nj-stat"><div className="nj-stat-num">10<span>+</span></div><div className="nj-stat-label">Years Experience</div></div>
            <div className="nj-stat"><div className="nj-stat-num">500<span>+</span></div><div className="nj-stat-label">Global Clients</div></div>
            <div className="nj-stat"><div className="nj-stat-num">25</div><div className="nj-stat-label">Countries Served</div></div>
          </div>
        </div>
      </section>

      {/* ══════════════════ NEXT.JS DEVELOPMENT SERVICES ══════════════════ */}
      <section className="sp-section sp-bg-light" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Build</p>
            <h2 className="sp-heading">Next.js Development Services</h2>
            <p className="sp-sub">Full-spectrum Next.js delivery — from greenfield builds to large-scale migration of legacy React apps to the modern App Router architecture.</p>
          </div>
          <div className="nj-svc-list">
            {services.map((s, i) => (
              <div className="nj-svc-row" key={i}>
                <div className="nj-svc-row-text">
                  <div className="nj-svc-row-num">Service {s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="nj-tags">{s.tags.map(t => <span className="nj-tag" key={t}>{t}</span>)}</div>
                </div>
                <div className="nj-svc-row-visual">
                  <div className="nj-svc-img-wrap">
                    <img src={s.img} alt={s.title} className="nj-svc-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE NEXT.JS ══════════════════ */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Technology</p>
            <h2 className="sp-heading sp-heading-white">Why Choose Next.js?</h2>
            <p className="sp-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>Next.js is the only framework that gives you SSR, SSG, ISR, and React Server Components under one roof — with Vercel's global edge network as a first-class deployment target.</p>
          </div>
          <div className="nj-render-grid" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {renderStrategies.map((r, i) => (
              <div className="nj-render-card" key={i} style={{ background: '#111827' }}>
                <div className="nj-render-badge" style={{ background: r.bg, color: r.color }}>{r.badge}</div>
                <h3 style={{ color: '#fff' }}>{r.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ NEXT.JS DEVELOPMENT EXPERIENCE ══════════════════ */}
      <section className="sp-section sp-overview">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">How We Work</p>
            <h2 className="sp-heading">Next.js Development Experience</h2>
            <p className="sp-sub">A battle-tested four-phase delivery process that consistently produces high-quality, maintainable Next.js applications on time and on budget.</p>
          </div>
          <div className="nj-timeline">
            {timeline.map((t, i) => (
              <div className="nj-tl-item" key={i}>
                <div className="nj-tl-cat">{t.cat}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE BTPL SOFT ══════════════════ */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">The Difference</p>
            <h2 className="sp-heading">Why Choose BTPL Soft for Next.js Development?</h2>
          </div>
          <div className="nj-btpl-grid" style={{ '--n': 4 }}>
            {whyBtpl.map((w, i) => (
              <div className="sp-why-card" key={i} style={{ background: '#fff', border: '2px solid #e8edf5' }}>
                <CheckCircle size={22} style={{ color: '#0070f3', flexShrink: 0, marginTop: 2 }} />
                <div><h4 style={{ color: '#0d1b2a' }}>{w.title}</h4><p style={{ color: '#64748b' }}>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="sp-cta" style={{ background: '#0070f3' }}>
        <div className="sp-container">
          <h2>Have a Next.js Development Challenge to Address?</h2>
          <p>Share your requirements and our architects will respond with a detailed technical proposal within 24 hours — free of charge.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
