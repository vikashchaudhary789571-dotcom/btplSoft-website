import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Code, Zap, Users, Shield,
  Clock, Layers, Globe, Database, TrendingUp, RefreshCw,
  Lock, Monitor, GitBranch, Cpu, Package, Settings
} from 'lucide-react'
import '../services/ServicePage.css'
import './VueJS.css'
import vueBanner from '../../assets/services/representation-user-experience-interface-design.webp'

const services = [
  { icon: <Monitor size={28} />, title: 'Custom Vue.js App Development', desc: 'We build modern Vue 3 applications using the Composition API, script setup syntax, and TypeScript — resulting in clean, predictable, and highly maintainable codebases your team will love working in.', tags: ['Vue 3', 'Composition API', 'TypeScript'] },
  { icon: <Package size={28} />, title: 'Nuxt.js Full-Stack Apps', desc: 'Nuxt 3 with Nitro server engine, universal rendering, and auto-imported composables let us ship SEO-perfect Vue apps with file-based routing, server API routes, and edge-deployable output in a single project.', tags: ['Nuxt 3', 'Nitro Engine', 'Universal Rendering'] },
  { icon: <Settings size={28} />, title: 'Pinia State Management', desc: 'We architect scalable application state with Pinia — Vue\'s official state library. Composable stores, TypeScript inference out of the box, and DevTools time-travel debugging come standard in every build.', tags: ['Pinia Stores', 'DevTools', 'Code-Splitting'] },
  { icon: <Globe size={28} />, title: 'Vue.js Component Libraries', desc: 'Custom design systems built on top of Headless UI, Radix Vue, or Vuetify 3 — documented in Histoire, exported as private npm packages, and compatible with both Vue 3 and Nuxt 3 consumers.', tags: ['Headless UI', 'Radix Vue', 'npm Package'] },
  { icon: <RefreshCw size={28} />, title: 'Vue 2 to Vue 3 Migration', desc: 'We migrate Vue 2 / Options API codebases to Vue 3 Composition API — progressively, with the Vue 2.7 bridge as an intermediate step — ensuring zero regressions and full feature parity on launch day.', tags: ['Options → Composition', 'Vue 2.7 Bridge', 'Zero Regression'] },
  { icon: <Shield size={28} />, title: 'Performance & Maintenance', desc: 'Production Vue apps need ongoing care. We handle vite build optimisation, dynamic import code-splitting, Vue DevTools profiling, security patching, and routine dependency upgrades on a defined maintenance schedule.', tags: ['Vite Optimisation', 'Code Splitting', 'Proactive Patching'] },
]

const whyVue = [
  { icon: <Zap size={28} />, title: 'Gentle Learning Curve', desc: 'Vue\'s Single-File Component format is intuitive from day one — HTML, CSS, and JavaScript co-located in one .vue file. New developers become productive in days, not weeks, cutting onboarding costs dramatically.' },
  { icon: <Layers size={28} />, title: 'Flexible & Progressive', desc: 'Vue scales from a script tag in a static HTML file all the way to a full Nuxt 3 universal application. Adopt as much or as little as you need — Vue never forces an all-or-nothing commitment.' },
  { icon: <Cpu size={28} />, title: 'Blazing Fast Rendering', desc: 'Vue 3\'s Proxy-based reactivity and compiler-optimised VDOM skip static nodes entirely. Combined with the Vite build tool, hot module replacement is instantaneous — even in large applications.' },
  { icon: <GitBranch size={28} />, title: 'Thriving Ecosystem', desc: 'Nuxt 3, Pinia, Vue Router, Vite, VueUse (200+ composables), and Vitest form a cohesive, first-party-quality ecosystem maintained by the Vue core team and a global community of 50k+ contributors.' },
  { icon: <Globe size={28} />, title: 'Excellent SSR Support', desc: 'Nuxt 3\'s Hybrid Rendering lets you choose SSR, SSG, ISR, or SPA mode per-route. The Nitro server engine deploys to Vercel, Netlify, Cloudflare Workers, and Node.js with the same codebase.' },
  { icon: <Code size={28} />, title: 'TypeScript by Default', desc: 'Vue 3 was rewritten in TypeScript. The Composition API provides full inference — component props, emits, and slots are all strongly typed without any extra boilerplate or configuration.' },
]

const experienceChips = [
  'Custom Web Applications',
  'Nuxt.js SSR / SSG Apps',
  'Vue Admin Dashboards',
  'Vue Component Libraries',
  'E-Commerce Storefronts',
  'Vue PWA Development',
  'Vue 2 → Vue 3 Migration',
  'Real-Time Vue Apps',
  'Headless CMS Frontends',
  'Multi-Language Vue Portals',
  'Vue Mobile (Ionic + Vue)',
  'Micro-Frontend with Vue',
]

const whyBtpl = [
  { icon: <Users size={24} />, title: 'Dedicated Vue.js Specialists', desc: 'Every developer on our Vue team has shipped production Nuxt applications with 99.9% uptime. They follow the official Vue style guide and contribute to open-source Vue libraries in their own time.' },
  { icon: <TrendingUp size={24} />, title: 'SEO & Speed Guaranteed', desc: 'Nuxt\'s universal rendering and Vue\'s compiler optimisations consistently produce 95+ Lighthouse scores. We include Core Web Vitals targets as measurable acceptance criteria in every project contract.' },
  { icon: <Lock size={24} />, title: 'Secure by Specification', desc: 'Vue\'s auto-escaping template compiler prevents XSS by default. We layer on HTTP security headers, CSRF tokens, secure cookie policies, and dependency vulnerability scanning to harden every application.' },
  { icon: <Clock size={24} />, title: 'Transparent, Predictable Delivery', desc: 'Weekly builds, shared Notion project wikis, and Loom video updates keep you informed without interrupting your schedule. You\'ll always know exactly where your project stands.' },
]

export default function VueJS() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${vueBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">
            <span>Vue.js</span> Development That Scales
          </h1>
          <p className="sp-hero-desc">
            BTPL Soft's Vue 3 engineers build progressive, high-performance web applications with
            Nuxt 3, Pinia, and the Composition API. From lightweight SPAs to universal full-stack
            platforms — Vue's flexibility means we always have the right tool for your use case.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS BAR ══════════════════ */}
      <section className="vj-stats">
        <div className="sp-container">
          <div className="vj-stats-grid">
            <div className="vj-stat"><div className="vj-stat-num">1500+</div><div className="vj-stat-label">Projects Delivered</div></div>
            <div className="vj-stat"><div className="vj-stat-num">10+</div><div className="vj-stat-label">Years Experience</div></div>
            <div className="vj-stat"><div className="vj-stat-num">500+</div><div className="vj-stat-label">Global Clients</div></div>
            <div className="vj-stat"><div className="vj-stat-num">25</div><div className="vj-stat-label">Countries Served</div></div>
          </div>
        </div>
      </section>

      {/* ══════════════════ VUE.JS DEVELOPMENT SERVICES ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: '#42b883' }}>What We Build</p>
            <h2 className="sp-heading">Vue.js Development Services</h2>
            <p className="sp-sub">From single-page apps to universal Nuxt platforms — our Vue engineers choose the right rendering strategy, state solution, and tooling for each project's unique requirements.</p>
          </div>
          <div className="vj-svc-grid">
            {services.map((s, i) => (
              <div className="vj-svc-card" key={i}>
                <div className="vj-svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="vj-tags">{s.tags.map(t => <span className="vj-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE VUE.JS ══════════════════ */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: '#42b883' }}>The Technology</p>
            <h2 className="sp-heading">Why Choose Vue.js?</h2>
            <p className="sp-sub">Vue 3 combines the best ideas from React and Angular into a progressive framework that is simultaneously approachable, versatile, and performant — with first-class TypeScript support.</p>
          </div>
          <div className="vj-why-grid">
            {whyVue.map((w, i) => (
              <div className="vj-why-card" key={i}>
                <div className="vj-why-icon-wrap">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ VUE.JS DEVELOPMENT EXPERIENCE ══════════════════ */}
      <section className="sp-section sp-overview">
        <div className="sp-container">
          <div className="vj-exp-wrap">
            <p className="sp-label" style={{ color: '#42b883', justifyContent: 'center' }}>Our Track Record</p>
            <h3>Vue.js Development Experience</h3>
            <p>Our Vue engineers have delivered projects across SaaS, e-commerce, media, and enterprise verticals — consistently earning 5-star reviews for code quality, communication, and on-time delivery.</p>
            <div className="vj-chips-grid">
              {experienceChips.map((chip, i) => (
                <div className="vj-chip" key={i}>
                  <CheckCircle size={16} /> {chip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE BTPL SOFT ══════════════════ */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Difference</p>
            <h2 className="sp-heading sp-heading-white">Why Choose BTPL Soft for Vue.js Development?</h2>
          </div>
          <div className="vj-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="vj-btpl-card" key={i}>
                <div className="vj-btpl-icon">{w.icon}</div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="sp-cta" style={{ background: '#42b883' }}>
        <div className="sp-container">
          <h2>Have a Vue.js Development Challenge to Address?</h2>
          <p>Tell us about your project and our Vue architects will reply with a comprehensive technical proposal — free of charge, within 24 hours.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
