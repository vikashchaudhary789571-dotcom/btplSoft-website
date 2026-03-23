import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Smartphone, Code, Zap,
  Layers, RefreshCw, Globe, Shield, Users,
  Lock, TrendingUp, Clock, Monitor, Palette, Cpu
} from 'lucide-react'
import '../services/ServicePage.css'
import './Flutter.css'
import flutterBanner from '../../assets/services/html-css-collage-concept.webp'

const services = [
  {
    icon: <Smartphone size={28} />, title: 'Cross-Platform Flutter App Development',
    desc: 'Flutter\'s single Dart codebase deploys to iOS, Android, web, macOS, Windows, and Linux — with pixel-perfect UI that looks identical across all platforms. We build production Flutter apps using Clean Architecture, BLoC/Riverpod, and comprehensive widget test coverage.',
    tags: ['Flutter 3.x', 'Dart 3', 'Clean Architecture'],
  },
  {
    icon: <Palette size={28} />, title: 'Custom Flutter UI & Animation',
    desc: 'Flutter\'s Impeller rendering engine and rich animation APIs — AnimationController, TweenAnimation, Rive, and Lottie integrations — let us craft silky-smooth 120fps interfaces that genuinely delight users and set your app apart on the store.',
    tags: ['Impeller', 'Rive Animations', 'Lottie'],
  },
  {
    icon: <Globe size={28} />, title: 'Flutter Web & Desktop Apps',
    desc: 'Release your Flutter app as a Progressive Web App and native desktop binary simultaneously. One team, one sprint cadence, and one design system covering all form factors — from wrist-sized watches to ultrawide monitors.',
    tags: ['Flutter Web', 'Flutter Desktop', 'PWA'],
  },
  {
    icon: <Layers size={28} />, title: 'State Management with Riverpod & BLoC',
    desc: 'We architect Flutter applications with Riverpod 2 providers for reactive state or BLoC pattern for strict event-driven flows — ensuring predictable state transitions, easy unit-testability, and painless future feature additions.',
    tags: ['Riverpod 2', 'BLoC Pattern', 'flutter_hooks'],
  },
  {
    icon: <Code size={28} />, title: 'Firebase & Supabase Integration',
    desc: 'Firebase Auth, Firestore, Cloud Messaging, and Remote Config integrate seamlessly with Flutter. For teams preferring open-source backends, we deliver equivalent Supabase implementations with column-level security, real-time subscriptions, and edge functions.',
    tags: ['Firebase', 'Supabase', 'FCM Push'],
  },
  {
    icon: <RefreshCw size={28} />, title: 'Flutter Migration & Performance Tuning',
    desc: 'Migrate existing React Native or native iOS/Android apps to Flutter. We also profile established Flutter apps with DevTools timeline traces — eliminating janky frame drops, excessive rebuilds, and memory leaks before your next major app store release.',
    tags: ['DevTools Profiler', 'RN→Flutter', 'Jank Removal'],
  },
]

const whyFlutter = [
  { icon: <Zap size={24} />, title: 'True 60/120fps Rendering', desc: 'Flutter\'s Impeller engine bypasses the OS widget layer entirely — every pixel is drawn by Flutter\'s Skia-based compositor, achieving consistent high frame rates that native UIKit apps often struggle to match.' },
  { icon: <Globe size={24} />, title: '6 Platforms from One Codebase', desc: 'iOS, Android, Web, macOS, Windows, Linux — all from a single Dart codebase and a unified design system. Reduce your mobile, web and desktop engineering headcount by up to 60%.' },
  { icon: <Palette size={24} />, title: 'Material 3 & Custom Theming', desc: 'Flutter ships with a complete Material 3 design system out of the box — fully themeable with custom colours, typography, and shape tokens. Consistent branding across all platforms is trivially easy to maintain.' },
  { icon: <Cpu size={24} />, title: 'Dart\'s Ahead-of-Time Compilation', desc: 'Dart compiles to native ARM64 or JavaScript code — no interpreter, no bridge. AOT compilation produces startup times 40% faster than interpreted app runtimes and eliminates the JS bridge bottleneck of React Native.' },
  { icon: <Code size={24} />, title: 'Hot Reload in Under a Second', desc: 'Flutter\'s hot reload injects updated code into a running Dart VM in milliseconds — preserving app state. This development loop is measurably faster than native Xcode or Android Studio build cycles.' },
  { icon: <Shield size={24} />, title: 'Google-Backed LTS', desc: 'Google built Flutter for its own products — including Google Pay and Stadia. This level of first-party investment guarantees long-term API stability, security patching, and continued platform expansion.' },
]

const processSteps = [
  { icon: <Monitor size={22} />, label: 'Discovery & UX Design', sub: 'Figma wireframes, user flows, design system tokens' },
  { icon: <Code size={22} />, label: 'Sprint Development', sub: 'BLoC/Riverpod, API integration, widget tests' },
  { icon: <Zap size={22} />, label: 'Performance Audit', sub: 'DevTools profiling, Impeller frame analysis' },
  { icon: <Shield size={22} />, label: 'QA & Security', sub: 'Integration tests, OWASP mobile, pen testing' },
  { icon: <Smartphone size={22} />, label: 'Store Submission', sub: 'App Store + Google Play release, ASO metadata' },
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Flutter GDE-Level Expertise', desc: 'Our senior Flutter engineers are active in the Flutter community — maintaining open-source packages, speaking at Flutter Engage events, and keeping our practices current with every stable SDK release.' },
  { icon: <TrendingUp size={22} />, title: 'Pixel-Perfect UI Delivery', desc: 'We use Figma Dev Mode and Golden Tests to verify every screen against designs at the pixel level before QA sign-off. UI regressions are caught in CI, not in user reviews.' },
  { icon: <Lock size={22} />, title: 'Secure App Architecture', desc: 'Flutter Secure Storage for credential management, certificate pinning, jailbreak/root detection, and obfuscated app binaries are standard security measures applied to every production Flutter app we build.' },
  { icon: <Clock size={22} />, title: 'Concurrent iOS & Android QA', desc: 'Our QA team tests simultaneously on real iOS and Android devices throughout development — not just at the end — catching platform-specific edge cases weeks before your launch date.' },
]

export default function Flutter() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${flutterBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>Flutter</span> — One Codebase, Every Platform</h1>
          <p className="sp-hero-desc">
            BTPL Soft's Flutter team builds beautiful, 60fps apps for iOS, Android, and the web
            from a single Dart codebase — delivering native-quality performance, pixel-perfect
            UI, and store-ready apps on time, every time.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Build with Flutter <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="fl-stats">
        <div className="sp-container">
          <div className="fl-stats-grid">
            <div className="fl-stat"><span className="fl-stat-num">200+</span><div className="fl-stat-label">Flutter Apps Delivered</div></div>
            <div className="fl-stat"><span className="fl-stat-num">6</span><div className="fl-stat-label">Platforms Supported</div></div>
            <div className="fl-stat"><span className="fl-stat-num">120fps</span><div className="fl-stat-label">Impeller Rendering</div></div>
            <div className="fl-stat"><span className="fl-stat-num">4.9★</span><div className="fl-stat-label">Avg App Store Rating</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: '#0097A7' }}>What We Build</p>
            <h2 className="sp-heading">Flutter Development Services</h2>
            <p className="sp-sub">From consumer mobile apps to multi-platform enterprise tools — our Flutter team brings design systems, clean architecture, and real device testing to every engagement.</p>
          </div>
          <div className="fl-svc-grid">
            {services.map((s, i) => (
              <div className="fl-svc-card" key={i}>
                <div className="fl-svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="fl-tags">{s.tags.map(t => <span className="fl-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FLUTTER */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Technology</p>
            <h2 className="sp-heading sp-heading-white">Why Flutter?</h2>
            <p className="sp-sub" style={{ color: 'var(--gray-300)' }}>Flutter is the only framework that renders identically on 6 platforms without native component wrappers — giving you pixel-level design control everywhere.</p>
          </div>
          <div className="fl-why-grid">
            {whyFlutter.map((w, i) => (
              <div className="fl-why-card" key={i}>
                <div className="fl-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: '#0097A7' }}>How We Work</p>
            <h2 className="sp-heading">Flutter Development Process</h2>
            <p className="sp-sub">Five structured stages — from Figma design system to store submission — executed in parallel across iOS and Android so nothing slips through the cracks.</p>
          </div>
          <div className="fl-process">
            {processSteps.map((p, i) => (
              <div className="fl-process-step" key={i}>
                <div className="fl-process-dot">{p.icon}</div>
                <div className="fl-process-label">{p.label}</div>
                <div className="fl-process-sub">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">Why Choose Us</p>
            <h2 className="sp-heading sp-heading-white">Why BTPL Soft for Flutter Development?</h2>
          </div>
          <div className="fl-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="fl-btpl-card" key={i}>
                <div className="fl-btpl-icon">{w.icon}</div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta" style={{ background: '#e0f7fa' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Ready to Ship on Every Platform with Flutter?</h2>
          <p style={{ color: '#37474f' }}>Tell us about your app idea and our Flutter architects will respond with a free platform strategy and technical proposal within 24 hours.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#0097A7', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
