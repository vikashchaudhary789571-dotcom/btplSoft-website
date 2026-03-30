import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, CheckCircle, Code, Zap, Users, Shield,
  Clock, Layers, Globe, Database, TrendingUp, GitBranch,
  RefreshCw, Cpu, Rocket, Lock, Settings, Monitor, Package
} from 'lucide-react'
import '../services/ServicePage.css'
import './ReactJS.css'
import reactBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

/* ─── Data ─── */
const services = [
  {
    icon: <Code size={28} />,
    num: '01',
    title: 'Custom React App Development',
    desc: 'We architect bespoke React applications from the ground up — leveraging hooks, context API, and functional components to deliver fast, maintainable, and production-grade web apps aligned to your business goals.',
    tags: ['Hooks & Context', 'Scalable', 'Production-Ready'],
  },
  {
    icon: <Database size={28} />,
    num: '02',
    title: 'API Development & Integration',
    desc: 'Our engineers build and integrate RESTful & GraphQL APIs into your React front-end with bulletproof error handling, caching strategies, and real-time data sync via WebSockets or Server-Sent Events.',
    tags: ['REST / GraphQL', 'Real-Time', 'Type-Safe'],
  },
  {
    icon: <Layers size={28} />,
    num: '03',
    title: 'Custom UI/UX using React',
    desc: 'We craft stunning, pixel-perfect component libraries — from design tokens to interactive micro-animations — using Tailwind CSS, Framer Motion, and Storybook-driven development workflows.',
    tags: ['Component Library', 'Animations', 'Accessible'],
  },
  {
    icon: <RefreshCw size={28} />,
    num: '04',
    title: 'Web App Modernization',
    desc: 'We migrate legacy jQuery, AngularJS, or vanilla JS codebases to modern React 18 & Next.js — preserving business logic while unlocking concurrent rendering, Suspense, and incremental static regeneration.',
    tags: ['React 18', 'Next.js', 'Zero Downtime'],
  },
  {
    icon: <Shield size={28} />,
    num: '05',
    title: 'Maintenance & Support',
    desc: 'Our dedicated support pods handle dependency upgrades, security patches, performance profiling with React DevTools, and proactive bug resolution — keeping your app secure and blazing fast at all times.',
    tags: ['24/7 Monitoring', 'Security Patches', 'Performance'],
  },
  {
    icon: <Users size={28} />,
    num: '06',
    title: 'Staff Augmentation',
    desc: 'Instantly expand your engineering bandwidth with our pre-vetted senior React engineers. They slot into your existing Agile sprint-cycles, tools (Jira, GitHub, Figma), and culture from day one.',
    tags: ['Senior Engineers', 'Sprint-Ready', 'Agile'],
  },
]

const whyReact = [
  {
    icon: <Zap size={26} />,
    title: 'Lightning-Fast Virtual DOM',
    desc: 'React\'s diffing algorithm surgically updates only the changed DOM nodes — delivering silky-smooth 60fps UI even for data-intensive dashboards handling thousands of real-time updates per second.',
  },
  {
    icon: <Layers size={26} />,
    title: 'Reusable Component Architecture',
    desc: 'Every UI element is an isolated, testable, and reusable component. This modularity slashes development time by up to 40%, eliminates code duplication, and makes onboarding new developers effortless.',
  },
  {
    icon: <Globe size={26} />,
    title: 'Unmatched Ecosystem & Community',
    desc: 'With 220,000+ npm packages, battle-tested state managers (Redux, Zustand, Jotai), and Meta engineering behind it — React is the most well-supported frontend library on the planet.',
  },
  {
    icon: <GitBranch size={26} />,
    title: 'Full-Stack Flexibility',
    desc: 'React pairs seamlessly with any backend — Node.js, Django, Laravel, or .NET. Use it as a pure client SPA, server-render via Next.js, or deploy to the edge with React Server Components.',
  },
]

const ecosystem = [
  { icon: <Package size={24} />, color: '#61dafb', bg: '#e3f8ff', name: 'React 18', desc: 'Concurrent rendering & Suspense' },
  { icon: <Monitor size={24} />, color: '#000', bg: '#f0f0f0', name: 'Next.js 14', desc: 'App Router & Server Components' },
  { icon: <RefreshCw size={24} />, color: '#764ABC', bg: '#f3eeff', name: 'Redux Toolkit', desc: 'Predictable state management' },
  { icon: <Zap size={24} />, color: '#06B6D4', bg: '#e0fffe', name: 'Tailwind CSS', desc: 'Utility-first styling' },
  { icon: <Settings size={24} />, color: '#E34F26', bg: '#fff4f0', name: 'React Query', desc: 'Server state & data fetching' },
  { icon: <Rocket size={24} />, color: '#FF6B6B', bg: '#fff0f0', name: 'Framer Motion', desc: 'Production animations' },
  { icon: <Lock size={24} />, color: '#10B981', bg: '#e8faf4', name: 'React Testing Library', desc: 'Component-level unit tests' },
  { icon: <Cpu size={24} />, color: '#8B5CF6', bg: '#f5f0ff', name: 'Vite / Webpack 5', desc: 'Sub-second hot module reload' },
]

const whyBtpl = [
  {
    icon: <Users size={28} />,
    title: 'Battle-Tested React Engineers',
    desc: 'Every developer on our bench has shipped production React apps with 100k+ daily active users. They follow ECMAScript standards, write typed code with TypeScript, and review each other\'s PRs rigorously.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Performance-First Mindset',
    desc: 'We benchmark every release — targeting Core Web Vitals LCP under 2.5s and CLS below 0.1. Code-splitting, lazy loading, and memoization are non-negotiable parts of our delivery checklist.',
  },
  {
    icon: <Lock size={28} />,
    title: 'Security by Design',
    desc: 'We implement OWASP-aligned security from the first commit — XSS prevention via sanitization, CSRF tokens, secure JWT handling, and Content Security Policy headers — so vulnerabilities never reach production.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Rapid Delivery Cycles',
    desc: 'Two-week sprints with daily async stand-ups, shared Notion wikis, and CI/CD pipelines mean you get working software every fortnight — not a six-month waterfall surprise.',
  },
]

export default function ReactJS() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO SECTION ══════════════════ */}
      <section className="sp-hero" style={{
        backgroundImage: `url(${reactBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">
            Build <span>Exceptional</span> React.js Applications
          </h1>
          <p className="sp-hero-desc">
            BTPL Soft's React engineers combine deep technical expertise with product thinking to deliver
            blazing-fast, accessible, and maintainable web applications. From single-page apps to complex
            enterprise platforms — we architect React solutions that scale with your ambitions.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS BAR ══════════════════ */}
      <section className="rj-stats">
        <div className="sp-container">
          <div className="rj-stats-grid">
            <div className="rj-stat">
              <div className="rj-stat-num">1500+</div>
              <div className="rj-stat-label">Completed Projects</div>
            </div>
            <div className="rj-stat">
              <div className="rj-stat-num">10+</div>
              <div className="rj-stat-label">Years of Experience</div>
            </div>
            <div className="rj-stat">
              <div className="rj-stat-num">500+</div>
              <div className="rj-stat-label">Global Clients</div>
            </div>
            <div className="rj-stat">
              <div className="rj-stat-num">25</div>
              <div className="rj-stat-label">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ REACT DEVELOPMENT SERVICES ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Build</p>
            <h2 className="sp-heading">React Development Services</h2>
            <p className="sp-sub">
              End-to-end React development — from ideation and architecture to deployment and ongoing
              optimization — delivered by engineers who live and breathe the React ecosystem.
            </p>
          </div>
          <div className="rj-svc-grid">
            {services.map((s, i) => (
              <div className="rj-svc-card" key={i}>
                <div className="rj-svc-num">{s.num}</div>
                <div className="rj-svc-icon">{s.icon}</div>
                <h3 className="rj-svc-title">{s.title}</h3>
                <p className="rj-svc-desc">{s.desc}</p>
                <div className="rj-svc-tags">
                  {s.tags.map(t => <span className="rj-svc-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE REACT ══════════════════ */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">The Technology</p>
            <h2 className="sp-heading">Why Choose React?</h2>
            <p className="sp-sub">
              React isn't just a library — it's the industry standard for building high-performance,
              scalable front-ends trusted by Meta, Airbnb, Netflix, and thousands of startups.
            </p>
          </div>
          <div className="rj-why-grid">
            {whyReact.map((w, i) => (
              <div className="rj-why-card" key={i}>
                <div className="rj-why-icon">{w.icon}</div>
                <div className="rj-why-content">
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ REACT DEVELOPMENT EXPERIENCE ══════════════════ */}
      <section className="sp-section sp-overview">
        <div className="sp-container">
          <div className="rj-exp-wrap">
            {/* Left: content + checklist */}
            <div className="rj-exp-content">
              <p className="sp-label" style={{ justifyContent: 'center' }}>Our Track Record</p>
              <h2 className="sp-heading">React Development Experience</h2>
              <p>
                With over a decade crafting production React applications, our engineers have delivered
                solutions across fintech, healthtech, SaaS, and e-commerce — from MVPs to platforms
                handling millions of concurrent users.
              </p>
              <div className="rj-exp-list">
                {[
                  'Custom Web Applications',
                  'React Native Mobile Apps',
                  'Developer Portals & Dashboards',
                  'React Plugin Development',
                  'Enterprise-Grade SPAs',
                  'Third-Party API Integrations',
                  'Headless E-Commerce Storefronts',
                  'Real-Time Collaborative Tools',
                  'Progressive Web Apps (PWA)',
                  'Micro-Frontend Architectures',
                ].map((item, i) => (
                  <div className="rj-exp-item" key={i}>
                    <CheckCircle size={17} />{item}
                  </div>
                ))}
              </div>
            </div>
            {/* Right: code window */}
            <div className="rj-code-win">
              <div className="rj-code-titlebar">
                <div className="rj-dot rj-dot--r" />
                <div className="rj-dot rj-dot--y" />
                <div className="rj-dot rj-dot--g" />
                <span className="rj-code-fname">Dashboard.tsx</span>
              </div>
              <div className="rj-code-body">
                <div><span className="rm">{'// Real-time analytics dashboard'}</span></div>
                <div><span className="rk">import</span> <span className="rb">{'{'}</span> <span className="rc">useState</span>, <span className="rc">useEffect</span> <span className="rb">{'}'}</span></div>
                <div><span className="rk">from</span> <span className="rs">'react'</span><span className="rb">;</span></div>
                <div>&nbsp;</div>
                <div><span className="rk">const</span> <span className="rc">Dashboard</span> <span className="rb">=</span> <span className="rb">() =&gt; {'{'}</span></div>
                <div>&nbsp;&nbsp;<span className="rk">const</span> <span className="rb">[</span>metrics, setMetrics<span className="rb">]</span> <span className="rb">=</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="rc">useState</span><span className="rb">&lt;</span><span className="rc">Metric</span><span className="rb">[]&gt;(</span><span className="rb">[]);</span></div>
                <div>&nbsp;</div>
                <div>&nbsp;&nbsp;<span className="rc">useEffect</span><span className="rb">(() =&gt; {'{'}</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="rk">const</span> ws <span className="rb">=</span> <span className="rk">new</span> <span className="rc">WebSocket</span><span className="rb">(</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="rs">'wss://api.btplsoft.com'</span><span className="rb">);</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;ws.<span className="rp">onmessage</span> <span className="rb">=</span> <span className="rb">(</span>e<span className="rb">) =&gt;</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="rc">setMetrics</span><span className="rb">(</span><span className="rc">JSON.parse</span><span className="rb">(</span>e.<span className="rp">data</span><span className="rb">));</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="rk">return</span> <span className="rb">() =&gt;</span> ws.<span className="rp">close</span><span className="rb">();</span></div>
                <div>&nbsp;&nbsp;<span className="rb">{'}'}</span>, <span className="rb">[]);</span></div>
                <div>&nbsp;</div>
                <div>&nbsp;&nbsp;<span className="rk">return</span> <span className="rb">(</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="rt">&lt;MetricsGrid</span> <span className="rp">data</span><span className="rb">={'{'}metrics{'}'}</span> <span className="rt">/&gt;</span></div>
                <div>&nbsp;&nbsp;<span className="rb">);</span></div>
                <div><span className="rb">{'}'}</span><span className="rm">;</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ REACT TECH ECOSYSTEM (BONUS SECTION) ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Arsenal</p>
            <h2 className="sp-heading">React Ecosystem We <span style={{ color: '#2196F3' }}>Master</span></h2>
            <p className="sp-sub">
              We stay ahead of the curve — adopting battle-hardened libraries and the latest React
              primitives to deliver solutions that are built to last.
            </p>
          </div>
          <div className="rj-eco-grid">
            {ecosystem.map((e, i) => (
              <div className="rj-eco-card" key={i}>
                <div className="rj-eco-icon" style={{ background: e.bg, color: e.color }}>{e.icon}</div>
                <div className="rj-eco-name">{e.name}</div>
                <div className="rj-eco-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE BTPL SOFT ══════════════════ */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The BTPL Difference</p>
            <h2 className="sp-heading sp-heading-white">
              Why Choose BTPL Soft for React App Development?
            </h2>
          </div>
          <div className="rj-btpl-grid" style={{ '--card-bg': 'rgba(255,255,255,0.04)', '--card-border': 'rgba(255,255,255,0.08)' }}>
            {whyBtpl.map((w, i) => (
              <div className="sp-why-card" key={i}>
                <CheckCircle size={22} className="sp-why-check" />
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA SECTION ══════════════════ */}
      <section className="sp-cta">
        <div className="sp-container">
          <h2>Have a React Development Challenge to Address?</h2>
          <p>
            Share your vision with us — our architects will send you a detailed technical proposal
            and effort estimate within 24 hours. Completely free, no strings attached.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
