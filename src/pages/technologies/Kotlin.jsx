import { Link } from 'react-router-dom'
import {
  Smartphone, Layers, Zap, Server, Database, RefreshCw, Code, Lock,
  ShieldCheck, GitBranch, Globe, Star, Clock, CheckCircle, Award, UserCheck, Headphones, BarChart2, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './Kotlin.css'
import kotlinBanner from '../../assets/services/standard-quality-control-concept-m.webp'

const services = [
  {
    icon: <Smartphone size={36} />,
    title: 'Native Android App Development',
    desc: 'Build high-performance native Android apps using Jetpack Compose, Kotlin Coroutines, and Material 3. We deliver polished, fast, and battery-efficient apps for every screen size.',
    tags: ['Jetpack Compose', 'Material 3', 'Coroutines', 'ViewModel'],
  },
  {
    icon: <Layers size={36} />,
    title: 'Kotlin Multiplatform (KMP)',
    desc: 'Share business logic across iOS and Android using Kotlin Multiplatform. Write once, deploy everywhere — while keeping platform-native UI for the best user experience.',
    tags: ['KMP', 'Shared Logic', 'iOS & Android', 'Ktor'],
  },
  {
    icon: <Zap size={36} />,
    title: 'Coroutines & Flow Architecture',
    desc: 'Design robust reactive apps powered by Kotlin Coroutines, StateFlow, and SharedFlow. We architect clean, non-blocking async pipelines that are easy to test and maintain.',
    tags: ['StateFlow', 'SharedFlow', 'Suspend Functions', 'Channels'],
  },
  {
    icon: <Server size={36} />,
    title: 'Kotlin REST APIs with Ktor',
    desc: "Build lightweight, scalable server-side APIs using Ktor and Exposed ORM. Kotlin's type-safety and extension functions make backend logic concise and bulletproof.",
    tags: ['Ktor', 'Exposed ORM', 'REST', 'JWT Auth'],
  },
  {
    icon: <Database size={36} />,
    title: 'Android Jetpack Integration',
    desc: 'Integrate the full Android Jetpack ecosystem — Room database, DataStore, WorkManager, Navigation, and Paging 3 — into a cohesive and maintainable architecture.',
    tags: ['Room', 'DataStore', 'WorkManager', 'Navigation'],
  },
  {
    icon: <RefreshCw size={36} />,
    title: 'Java → Kotlin Migration',
    desc: 'Modernise your existing Android codebase by migrating from Java to idiomatic Kotlin 1.9+. We handle incremental migration with zero regression and full test coverage.',
    tags: ['Kotlin 1.9+', 'Incremental', 'Null Safety', 'Test Coverage'],
  },
]

const whyKotlin = [
  {
    icon: <ShieldCheck size={26} />,
    title: 'Null Safety by Design',
    desc: 'Kotlin eliminates NullPointerException at compile time. The type system distinguishes nullable from non-nullable types, making crashes a thing of the past.',
  },
  {
    icon: <Zap size={26} />,
    title: 'Coroutines = Simple Concurrency',
    desc: 'Replace callback hell and RxJava chains with clean, sequential-looking coroutines. Structured concurrency ensures resources are never leaked.',
  },
  {
    icon: <Globe size={26} />,
    title: 'Kotlin Multiplatform Mobile',
    desc: 'One shared codebase for Android and iOS business logic dramatically reduces development time while keeping native UI performance on both platforms.',
  },
  {
    icon: <GitBranch size={26} />,
    title: 'Jetpack First-Class Support',
    desc: "Google built Android Jetpack with Kotlin in mind. Compose, DataStore and every modern Jetpack library works best with Kotlin's language features.",
  },
]

const expPoints = [
  { icon: <Layers size={20} />, text: 'MVVM / Clean Architecture' },
  { icon: <Code size={20} />, text: 'Hilt & Koin Dependency Injection' },
  { icon: <Globe size={20} />, text: 'Retrofit + OkHttp Networking' },
  { icon: <ShieldCheck size={20} />, text: 'Firebase Analytics, Crash & Auth' },
  { icon: <BarChart2 size={20} />, text: 'In-App Purchases & Google Pay' },
  { icon: <Smartphone size={20} />, text: 'Play Store Launch & Optimisation' },
  { icon: <Lock size={20} />, text: 'ProGuard / R8 Code Shrinking' },
  { icon: <GitBranch size={20} />, text: 'CI/CD with GitHub Actions & Fastlane' },
]

const bubbles = [
  'Custom Android Apps', 'Kotlin Multiplatform', 'Jetpack Compose UI',
  'Coroutines / Flow', 'Room Database', 'Ktor API Server',
  'Android Widgets', 'WorkManager', 'Kotlin DSL Builds',
  'Java→Kotlin Migration', 'Wearable Apps', 'Android TV Apps',
]

const btplCards = [
  {
    icon: <Star size={24} />,
    title: '300+ Android Apps',
    desc: 'From startup MVPs to complex enterprise Android suites across 15+ industries.',
  },
  {
    icon: <Award size={24} />,
    title: 'Kotlin-First Since 2017',
    desc: 'Early adopters of Kotlin — we know every evolution from 1.0 to Multiplatform.',
  },
  {
    icon: <UserCheck size={24} />,
    title: 'Dedicated Mobile Team',
    desc: 'Senior Kotlin & Android engineers with 8+ years of hands-on platform experience.',
  },
  {
    icon: <Headphones size={24} />,
    title: '24/7 Post-Launch Support',
    desc: 'Round-the-clock monitoring, crash triage, and rapid Play Store hot-fixes.',
  },
]

export default function Kotlin() {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="sp-hero"
        style={{
          backgroundImage: `url(${kotlinBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content sp-container">
          <p className="sp-hero-eyebrow">Mobile Technology</p>
          <h1 className="sp-hero-title">Kotlin Development Services</h1>
          <p className="sp-hero-sub">
            Native-speed Android apps, Kotlin Multiplatform solutions, and server-side APIs — built
            by Kotlin-first engineers who live inside the JetBrains ecosystem.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn sp-btn--primary">Start Your Project</Link>
            <Link to="/case-studies" className="sp-btn sp-btn--outline">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="kt-stats">
        <div className="kt-stats-grid sp-container">
          {[
            { num: '300+', label: 'Android Apps Delivered' },
            { num: '10+', label: 'Years of Experience' },
            { num: '4.8★', label: 'Average Play Store Rating' },
            { num: '99%', label: 'Play Store Approval Rate' },
          ].map(s => (
            <div className="kt-stat" key={s.label}>
              <span className="kt-stat-num">{s.num}</span>
              <span className="kt-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sp-section sp-section--light">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">What We Build</span>
            <h2 className="sp-section-title">Kotlin Development Services</h2>
            <p className="sp-section-sub">
              End-to-end Android and Kotlin solutions — from greenfield apps to large-scale migrations.
            </p>
          </div>
          <div className="kt-svc-grid">
            {services.map(svc => (
              <div className="kt-svc-card" key={svc.title}>
                <div className="kt-svc-header">{svc.icon}</div>
                <div className="kt-svc-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="kt-tags">
                    {svc.tags.map(t => <span className="kt-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KOTLIN ── */}
      <section className="sp-section" style={{ background: '#f8f9ff' }}>
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Language Advantages</span>
            <h2 className="sp-section-title">Why Kotlin?</h2>
            <p className="sp-section-sub">
              Google's preferred language for Android — safer, more concise, and perfectly designed
              for modern multiplatform development.
            </p>
          </div>
          <ul className="kt-why-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {whyKotlin.map((w) => (
              <li className="kt-why-row" key={w.title}>
                <div className="kt-why-icon">{w.icon}</div>
                <span className="kt-why-title">{w.title}</span>
                <span className="kt-why-desc">{w.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="sp-section sp-section--light">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Our Expertise</span>
            <h2 className="sp-section-title">Deep Android & Kotlin Experience</h2>
            <p className="sp-section-sub">
              A decade of hands-on experience across the full Android & Kotlin ecosystem.
            </p>
          </div>

          <div className="kt-exp-grid">
            {expPoints.map(ep => (
              <div className="kt-exp-card" key={ep.text}>
                <div className="kt-exp-icon">{ep.icon}</div>
                <span className="kt-exp-text">{ep.text}</span>
              </div>
            ))}
          </div>

          <div className="kt-tech-strip">
            {bubbles.map(b => (
              <span className="kt-bubble" key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BTPL ── */}
      <section className="sp-section" style={{ background: '#f8f9ff' }}>
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Why Choose Us</span>
            <h2 className="sp-section-title">Why Build with BTPL?</h2>
            <p className="sp-section-sub">
              We bring Kotlin-first thinking, enterprise-grade architecture, and a passion for
              pixel-perfect Android experiences to every engagement.
            </p>
          </div>
          <div className="kt-btpl-grid">
            {btplCards.map(c => (
              <div className="kt-btpl-card" key={c.title}>
                <div className="kt-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="sp-cta"
        style={{ background: '#f3e8ff' }}
      >
        <div className="sp-container sp-cta-inner">
          <div className="sp-cta-text">
            <h2 className="sp-cta-title" style={{ color: '#0d1b2a' }}>Ready to Build Your Android App with Kotlin?</h2>
            <p className="sp-cta-sub" style={{ color: '#37474f' }}>
              Let's create a fast, reliable, and beautiful Android experience that users love — powered
              by modern Kotlin architecture.
            </p>
          </div>
          <div className="sp-cta-actions">
            <button
              className="sp-btn sp-btn--white"
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#7F52FF', color: '#fff' }}
              onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))}
            >
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
