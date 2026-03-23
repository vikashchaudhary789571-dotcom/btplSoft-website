import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Smartphone, Code, Zap,
  Layers, RefreshCw, Globe, Shield, Users,
  Lock, TrendingUp, Clock, Monitor, Database, Cpu
} from 'lucide-react'
import '../services/ServicePage.css'
import './ReactNative.css'
import rnBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

const services = [
  {
    icon: <Smartphone size={24} />, num: '01', title: 'Custom React Native App Development',
    desc: 'We build polished iOS and Android applications from a single React Native codebase — sharing up to 90% of code across platforms while achieving truly native UI performance via Fabric renderer and JSI bridge.',
    tags: ['React Native 0.73', 'Fabric Renderer', 'JSI'],
  },
  {
    icon: <Layers size={24} />, num: '02', title: 'Expo & Bare Workflow Apps',
    desc: 'Expo\'s managed workflow dramatically accelerates development for most app types. When you need deep native access, we switch to the bare workflow — giving you full control over native modules while keeping OTA updates through Expo EAS.',
    tags: ['Expo SDK 50', 'EAS Build', 'OTA Updates'],
  },
  {
    icon: <Globe size={24} />, num: '03', title: 'React Native + Next.js Platforms',
    desc: 'React Native Web and Next.js combined into a single codebase — one team, one repository, and shared component library powering your iOS, Android, and web applications simultaneously.',
    tags: ['RN Web', 'Next.js', 'Monorepo'],
  },
  {
    icon: <Database size={24} />, num: '04', title: 'State Management & Offline Support',
    desc: 'Zustand, TanStack Query, and MMKV give React Native apps instant-feel responsiveness with proper offline-first data synchronisation. We design sync strategies that handle network interruptions gracefully and resolve conflicts deterministically.',
    tags: ['Zustand', 'TanStack Query', 'MMKV'],
  },
  {
    icon: <Zap size={24} />, num: '05', title: 'Performance Optimisation',
    desc: 'We profile React Native apps using Flashlight and React DevTools Profiler — identifying and eliminating render cycles, heavy JS thread work, and bridge serialisation bottlenecks. The result: 60fps scrolling and sub-100ms interaction latency.',
    tags: ['Flashlight', 'Hermes Engine', 'Reanimated 3'],
  },
  {
    icon: <RefreshCw size={24} />, num: '06', title: 'React Native Migration & Upgrade',
    desc: 'Migrate legacy React Native apps to the new architecture (Fabric + JSI + TurboModules), upgrade from class-based to functional components with hooks, and move third-party native bridge libraries to Expo Modules API for future-proof compatibility.',
    tags: ['New Architecture', 'TurboModules', 'Expo Modules'],
  },
]

const comparePoints = {
  rn: [
    'Single codebase for iOS, Android & Web',
    'Shared business logic, testing, and deployment',
    'Fastest cross-platform iteration cycle',
    'Access to 10,000+ npm packages',
    'Hot reloading for near-instant feedback',
  ],
  native: [
    'React Native with JSI achieves ~native perf',
    'Reanimated 3 & Skia for GPU-accelerated UI',
    'Hermes engine cuts startup time by 50%+',
    'Fabric renderer for synchronous UI updates',
    'Native modules via Expo Modules API',
  ],
}

const expChips = [
  'E-Commerce Shopping Apps', 'FinTech & Payments',
  'Healthcare Patient Apps', 'Food Delivery Platforms',
  'Real-Time Chat Apps', 'Fitness & Wellness Apps',
  'On-Demand Service Apps', 'Travel & Booking Apps',
  'EdTech Mobile Platforms', 'IoT Companion Apps',
  'Social Networking Apps', 'Enterprise Mobility',
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Dedicated RN Engineering Team', desc: 'Our React Native engineers have shipped apps to the App Store and Google Play with 4.8+ star ratings. Every project gets a dedicated team — not a shared resource pool.' },
  { icon: <Zap size={22} />, title: 'Performance-First Development', desc: 'We profile apps throughout development using Flashlight benchmarks — ensuring 60fps UI and startup times that pass Apple and Google\'s quality thresholds for feature placement.' },
  { icon: <Lock size={22} />, title: 'App Store Submission Support', desc: 'We handle the complete App Store and Google Play submission process — provisioning profiles, app signing, screenshots, compliance metadata, and responding to reviewer feedback.' },
  { icon: <Clock size={22} />, title: 'Post-Launch Support & Updates', desc: 'Every delivery includes 30 days of post-launch support, OTA update setup via EAS Update, and crash monitoring configured with Sentry so you\'re never flying blind after launch.' },
]

export default function ReactNative() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${rnBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>React Native</span> — One Codebase, Two Stores</h1>
          <p className="sp-hero-desc">
            BTPL Soft's React Native team builds high-performance iOS and Android apps from a
            single codebase — combining the speed of cross-platform development with the native
            feel your users expect, powered by the New Architecture (Fabric + JSI).
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Build Your Mobile App <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="rn-stats">
        <div className="sp-container">
          <div className="rn-stats-grid">
            <div className="rn-stat"><span className="rn-stat-num">250+</span><div className="rn-stat-label">Mobile Apps Shipped</div></div>
            <div className="rn-stat"><span className="rn-stat-num">10+</span><div className="rn-stat-label">Years Mobile Experience</div></div>
            <div className="rn-stat"><span className="rn-stat-num">4.8★</span><div className="rn-stat-label">Avg App Store Rating</div></div>
            <div className="rn-stat"><span className="rn-stat-num">98%</span><div className="rn-stat-label">On-Time App Delivery</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-light" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>What We Build</p>
            <h2 className="sp-heading">React Native Development Services</h2>
            <p className="sp-sub">From Expo MVP prototypes to enterprise React Native platforms with millions of users — our mobile engineers deliver beautiful, performant apps that pass App Store review on the first submission.</p>
          </div>
          <div className="rn-svc-grid">
            {services.map((s, i) => (
              <div className="rn-svc-card" key={i}>
                <div className="rn-svc-num">{s.num}</div>
                <div className="rn-svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="rn-tags">{s.tags.map(t => <span className="rn-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Technology</p>
            <h2 className="sp-heading sp-heading-white">Cross-Platform Speed + Native Performance</h2>
            <p className="sp-sub" style={{ color: 'var(--gray-300)' }}>React Native's New Architecture delivers the development velocity of cross-platform with the UI performance of fully native apps.</p>
          </div>
          <div className="rn-compare-grid">
            <div className="rn-compare-card">
              <span className="rn-compare-label rn-compare-label--react">Cross-Platform Advantages</span>
              <h3>One Codebase, Both Platforms</h3>
              <ul className="rn-compare-list">
                {comparePoints.rn.map((p, i) => (
                  <li className="rn-compare-item" key={i}><CheckCircle size={16} />{p}</li>
                ))}
              </ul>
            </div>
            <div className="rn-compare-card">
              <span className="rn-compare-label rn-compare-label--native">Native Performance</span>
              <h3>Performs Like Native Code</h3>
              <ul className="rn-compare-list">
                {comparePoints.native.map((p, i) => (
                  <li className="rn-compare-item" key={i}><CheckCircle size={16} />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>App Categories</p>
            <h2 className="sp-heading">React Native App Experience</h2>
            <div className="rn-exp-intro">
              <p>Our mobile engineers have delivered React Native apps across every major consumer and enterprise category — all published on the App Store and Google Play.</p>
            </div>
          </div>
          <div className="rn-chips-grid">
            {expChips.map((chip, i) => (
              <div className="rn-chip" key={i}><CheckCircle size={15} /> {chip}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL Soft for React Native?</h2>
          </div>
          <div className="rn-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="rn-btpl-card" key={i}>
                <div className="rn-btpl-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta" style={{ background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Ready to Launch Your React Native App?</h2>
          <p style={{ color: '#37474f' }}>Share your idea and our mobile architects will respond with a free technical proposal — including platform recommendations, tech stack, and delivery timeline — within 24 hours.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#1565C0', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
