import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Code, Zap, Users, Shield,
  Clock, Layers, Globe, Database, TrendingUp, Server,
  RefreshCw, GitBranch, Lock, Monitor, Terminal, Cpu
} from 'lucide-react'
import '../services/ServicePage.css'
import './Angular.css'
import angularBanner from '../../assets/services/istockphoto-2195043685-1024x1024.webp'

const services = [
  { icon: <Code size={28} />, title: 'Custom Angular App Development', desc: 'We architect enterprise Angular applications using standalone components, signals-based reactivity, and strictly typed dependency injection — resulting in apps that are robust, testable, and maintainable at scale.', tags: ['Standalone Components', 'Angular Signals', 'TypeScript Strict'] },
  { icon: <Server size={28} />, title: 'Angular Universal (SSR)', desc: 'Full server-side rendering with Angular Universal and hydration support dramatically improves SEO and perceived performance. We configure transfer state to prevent double data-fetching on the client.', tags: ['Angular Universal', 'Hydration', 'Transfer State'] },
  { icon: <Layers size={28} />, title: 'Micro-Frontend Architecture', desc: 'We break monolithic Angular apps into independently deployable micro-frontends using Module Federation and Native Federation — enabling teams to ship features independently without coordination overhead.', tags: ['Module Federation', 'Native Federation', 'Independent Deploy'] },
  { icon: <Database size={28} />, title: 'State Management with NgRx', desc: 'Complex enterprise state managed predictably with NgRx Store, Effects, and Component Store. We implement event-sourcing patterns and developer tools integration for complete state transparency and time-travel debugging.', tags: ['NgRx Store', 'Effects', 'DevTools'] },
  { icon: <Shield size={28} />, title: 'Angular Migration & Upgrades', desc: 'We handle migrations from AngularJS (Angular 1.x) to modern Angular, and upgrade projects across major versions — automating repetitive changes with schematics and ng-update for minimal risk.', tags: ['AngularJS → Angular', 'ng-update', 'Custom Schematics'] },
  { icon: <Users size={28} />, title: 'Enterprise UI Component Libraries', desc: 'Custom Angular component libraries built with Angular CDK, documented in Storybook, and publishable to your private npm registry — ensuring design consistency across all your enterprise applications.', tags: ['Angular CDK', 'Storybook', 'Private npm Publish'] },
]

const whyAngular = [
  { num: '01', icon: <Terminal size={26} />, title: 'Opinionated & Production-Ready', desc: 'Angular ships with a built-in HTTP client, router, forms module, i18n, animations, and testing utilities. There are no architectural decisions to make — the framework enforces best practices by default.' },
  { num: '02', icon: <Layers size={26} />, title: 'TypeScript Native', desc: 'Angular was built on TypeScript from day one — not retrofitted. Deep IDE integration, decorators, strict null checks, and compile-time error detection eliminate entire classes of runtime bugs before they reach production.' },
  { num: '03', icon: <Zap size={26} />, title: 'Signals-Based Reactivity', desc: 'Angular 17+ Signals replace Zone.js change detection with a fine-grained reactive system. Localised re-renders, computed values, and effects deliver React-like performance characteristics in a familiar Angular syntax.' },
  { num: '04', icon: <Globe size={26} />, title: 'Enterprise Ecosystem', desc: 'Angular Material, the Angular CLI with schematics, Nx monorepo tooling, and deep integration with Azure/GCP enterprise services make Angular the framework of choice for Fortune 500 engineering teams.' },
]

const experienceItems = [
  'Enterprise SPA Development',
  'Angular Universal SSR Apps',
  'B2B Customer Portals',
  'Real-Time Data Dashboards',
  'Multi-Language (i18n) Platforms',
  'Micro-Frontend Ecosystems',
  'AngularJS to Angular Migration',
  'ERP & CRM Frontend Modules',
  'Angular PWA Development',
  'Custom Angular CLI Schematics',
]

const archLayers = [
  { label: 'Components & Templates', color: '#0EA5E9' },
  { label: 'Directives & Pipes', color: '#0284C7' },
  { label: 'Services & DI Container', color: '#38BDF8' },
  { label: 'NgRx Store & Effects', color: '#0EA5E9' },
  { label: 'HTTP Client & Interceptors', color: '#0284C7' },
  { label: 'Angular Router & Guards', color: '#38BDF8' },
  { label: 'Angular Universal / SSR', color: '#0EA5E9' },
]

const whyBtpl = [
  { icon: <Users size={26} />, title: 'Certified Angular Engineers', desc: 'Our developers hold deep expertise across Angular versions 2–18, NgRx, Angular Universal, and testing with Jasmine, Karma, and Playwright. They follow the official Angular style guide on every commit.' },
  { icon: <Code size={26} />, title: 'Domain-Driven Design', desc: 'We model your business domain in Angular modules and features before writing UI code — ensuring the application architecture reflects your business processes, not just technical concerns.' },
  { icon: <Lock size={26} />, title: 'Security-Hardened Output', desc: 'Angular\'s built-in XSS sanitisation, strict CSP headers via Angular Helmet, HTTP interceptors for JWT refresh, and route guards for role-based access control are standard in every project we deliver.' },
  { icon: <Clock size={26} />, title: 'On-Time, On-Budget Delivery', desc: 'Angular\'s strong conventions and CLI code generation dramatically reduce boilerplate time. Our squads consistently deliver features 20% faster than industry averages without compromising code quality.' },
]

export default function Angular() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${angularBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">
            Enterprise-Grade <span>Angular</span> Development
          </h1>
          <p className="sp-hero-desc">
            BTPL Soft's Angular engineers deliver robust, opinionated, and highly scalable enterprise
            web applications. From complex SPAs to micro-frontend ecosystems — we leverage Angular's
            full power to build software that stands the test of time.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS BAR ══════════════════ */}
      <section className="ag-stats">
        <div className="sp-container">
          <div className="ag-stats-grid">
            <div className="ag-stat"><div className="ag-stat-num">1800+</div><div className="ag-stat-label">Projects Delivered</div></div>
            <div className="ag-stat"><div className="ag-stat-num">10+</div><div className="ag-stat-label">Years Experience</div></div>
            <div className="ag-stat"><div className="ag-stat-num">810+</div><div className="ag-stat-label">Global Clients</div></div>
            <div className="ag-stat"><div className="ag-stat-num">36</div><div className="ag-stat-label">Countries Served</div></div>
          </div>
        </div>
      </section>

      {/* ══════════════════ ANGULAR DEVELOPMENT SERVICES ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ justifyContent: 'center' }}>
              <span></span>What We Build
            </p>
            <h2 className="sp-heading">Angular Development Services</h2>
            <p className="sp-sub">Comprehensive Angular solutions — from greenfield enterprise apps to large-scale AngularJS migrations — all built with the strictness and reliability that enterprise teams demand.</p>
          </div>
          <div className="ag-svc-grid">
            {services.map((s, i) => (
              <div className="ag-svc-card" key={i}>
                <div className="ag-svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="ag-tags">{s.tags.map(t => <span className="ag-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE ANGULAR ══════════════════ */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">The Technology</p>
            <h2 className="sp-heading">Why Choose Angular?</h2>
            <p className="sp-sub">Angular is the framework enterprises choose when they need consistency, maintainability, and a clear upgrade path across large, multi-team engineering organisations.</p>
          </div>
          <div className="ag-why-grid">
            {whyAngular.map((w, i) => (
              <div className="ag-why-card" key={i}>
                <div className="ag-why-num">{w.num}</div>
                <div className="ag-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ANGULAR DEVELOPMENT EXPERIENCE ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="ag-exp-wrap">
            {/* Left checklist */}
            <div className="ag-exp-content">
              <p className="sp-label" style={{ justifyContent: 'center' }}>Our Track Record</p>
              <h3>Angular Development Experience</h3>
              <p>Over a decade building Angular applications across enterprise verticals — from financial services platforms to large-scale government portals serving millions of users.</p>
              <div className="ag-check-list">
                {experienceItems.map((item, i) => (
                  <div className="ag-check-item" key={i}>
                    <CheckCircle size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Angular architecture layers */}
            <div>
              <div className="ag-arch-card">
                <div className="ag-arch-title">Angular App Architecture</div>
                {archLayers.map((layer, i) => (
                  <div key={i}>
                    <div className="ag-arch-layer">
                      <div className="ag-arch-dot" style={{ background: layer.color }} />
                      <span>{layer.label}</span>
                    </div>
                    {i < archLayers.length - 1 && <div className="ag-arch-arrow">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE BTPL SOFT ══════════════════ */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">The Difference</p>
            <h2 className="sp-heading">Why Choose BTPL Soft for Angular Development?</h2>
          </div>
          <div className="ag-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="ag-btpl-card" key={i}>
                <div className="ag-btpl-icon">
                  <CheckCircle size={22} style={{ color: '#0EA5E9' }} />
                </div>
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
      <section className="sp-cta ag-cta" style={{ background: '#f1f5f9' }}>
        <div className="sp-container">
          <h2>Have an Angular Development Challenge to Address?</h2>
          <p>Let's discuss your enterprise requirements. Our Angular architects will send you a detailed technical proposal within 24 hours — completely free.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
