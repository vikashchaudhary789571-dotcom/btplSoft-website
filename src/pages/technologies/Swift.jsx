import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Smartphone, Code, Zap,
  Layers, RefreshCw, Globe, Shield, Users,
  Lock, TrendingUp, Clock, Monitor, Cpu, Database
} from 'lucide-react'
import '../services/ServicePage.css'
import './Swift.css'
import swiftBanner from '../../assets/services/representation-user-experience-interface-design.webp'

const services = [
  {
    icon: <Smartphone size={24} />, title: 'Custom iOS App Development',
    desc: 'We build native iOS applications in Swift 5.9 with SwiftUI and UIKit — architected with MVVM-C or TCA (The Composable Architecture) for maximum testability, modularity, and long-term maintainability across major iOS version upgrades.',
    tags: ['Swift 5.9', 'SwiftUI', 'UIKit'],
  },
  {
    icon: <Monitor size={24} />, title: 'SwiftUI Interface Design',
    desc: 'SwiftUI\'s declarative syntax and live previews let our designers and engineers collaborate in real time — producing adaptive layouts that automatically handle Dynamic Type, Dark Mode, and all iPhone/iPad/Mac screen sizes without conditional branching.',
    tags: ['SwiftUI', 'Live Previews', 'Adaptive Layouts'],
  },
  {
    icon: <Layers size={24} />, title: 'SwiftData & Core Data',
    desc: 'We implement persistent local storage using SwiftData (iOS 17+) or Core Data for wider compatibility — with proper migration strategies, background context patterns, and CloudKit sync for seamless iCloud cross-device synchronisation.',
    tags: ['SwiftData', 'Core Data', 'CloudKit Sync'],
  },
  {
    icon: <Cpu size={24} />, title: 'On-Device AI with Core ML',
    desc: 'On-device machine learning with Core ML and Vision frameworks — real-time object detection, natural language processing, and image classification running entirely on the Neural Engine without network dependency or user data leaving the device.',
    tags: ['Core ML', 'Vision Framework', 'Neural Engine'],
  },
  {
    icon: <Globe size={24} />, title: 'Swift + REST / GraphQL APIs',
    desc: 'Type-safe networking with async/await, URLSession, and Alamofire. We model every API response as Codable structs, handle error states exhaustively with Swift\'s Result type, and write integration tests that mock the entire network layer deterministically.',
    tags: ['async/await', 'URLSession', 'Codable'],
  },
  {
    icon: <RefreshCw size={24} />, title: 'Objective-C to Swift Migration',
    desc: 'Modernise legacy Objective-C codebases by introducing Swift incrementally — one module at a time, without rewriting the whole app. We add Swift files alongside ObjC, bridge dependencies carefully, and progressively replace ObjC hot paths with Swift.',
    tags: ['ObjC→Swift', 'Bridging Header', 'Incremental'],
  },
]

const whySwift = [
  { icon: <Zap size={24} />, title: 'Apple Silicon Performance', desc: 'Swift compiles to native ARM64 code for Apple Silicon — achieving C++ level performance for compute-intensive workloads. Neural Engine inference, Metal GPU shaders, and SIMD arithmetic are all first-class Swift citizens.' },
  { icon: <Shield size={24} />, title: 'Safety by Design', desc: 'Swift\'s optionals, value types, and strict memory model eliminate entire classes of bugs — null pointer exceptions, buffer overflows, and data races — at compile time, before they can reach your users.' },
  { icon: <Globe size={24} />, title: 'Full Apple Ecosystem', desc: 'One Swift codebase targets iPhone, iPad, Apple Watch, Apple TV, Mac (Catalyst & native), and visionOS. SwiftUI\'s adaptive layouts mean genuine cross-Apple-platform coverage without separate projects.' },
  { icon: <Code size={24} />, title: 'Modern Concurrency', desc: 'Swift\'s actor model, async/await, and Sendable protocol make writing correct concurrent code dramatically simpler than GCD callbacks — and the compiler statically enforces data race freedom.' },
]

const timelineItems = [
  { icon: <Monitor size={20} />, title: 'Product & UX Discovery', desc: 'iOS HIG-compliant wireframes, user story mapping, and design token definition in Figma before a single line of Swift is written.' },
  { icon: <Code size={20} />, title: 'Sprint-Based Development', desc: 'Two-week sprints with TestFlight builds delivered at each sprint close for hands-on stakeholder testing on real devices.' },
  { icon: <Shield size={20} />, title: 'Security & Performance Review', desc: 'Instruments profiling, Xcode static analyser, dependency vulnerability audit, and OWASP Mobile review before QA sign-off.' },
  { icon: <Smartphone size={20} />, title: 'App Store Submission', desc: 'We prepare all metadata, screenshots, privacy manifests, and entitlements — and manage reviewer correspondence until the app is live.' },
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Apple Platform Specialists', desc: 'Our iOS team focuses exclusively on the Apple ecosystem — staying current with every WWDC announcement and integrating new APIs like SwiftData, Swift Macros, and visionOS frameworks in the same year they\'re released.' },
  { icon: <TrendingUp size={22} />, title: 'HIG-Compliant UI from Day One', desc: 'Apple rejects apps that violate its Human Interface Guidelines. Our designers study the HIG deeply — every gesture, navigation pattern, and accessibility requirement is validated before the first sprint review.' },
  { icon: <Lock size={22} />, title: 'Privacy-First Architecture', desc: 'App Tracking Transparency, Privacy Nutrition Labels, on-device processing with Core ML, and minimal permissions requests are default practices in every iOS project — reducing App Store rejection risk.' },
  { icon: <Clock size={22} />, title: 'TestFlight Builds Every Sprint', desc: 'You receive a TestFlight build at the end of every two-week sprint — letting you test features on your own iPhone as they\'re built, providing feedback when changes are still cheap to make.' },
]

export default function Swift() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${swiftBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>Swift</span> — Native iOS Apps That Apple Users Love</h1>
          <p className="sp-hero-desc">
            BTPL Soft's iOS engineers build beautifully crafted, SwiftUI-powered applications
            for iPhone, iPad, Apple Watch, and macOS — following Apple's Human Interface
            Guidelines and leveraging the full power of every new iOS SDK on launch day.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Build Your iOS App <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sw-stats">
        <div className="sp-container">
          <div className="sw-stats-grid">
            <div className="sw-stat"><span className="sw-stat-num">180+</span><div className="sw-stat-label">iOS Apps Published</div></div>
            <div className="sw-stat"><span className="sw-stat-num">10+</span><div className="sw-stat-label">Years iOS Experience</div></div>
            <div className="sw-stat"><span className="sw-stat-num">4.9★</span><div className="sw-stat-label">Avg App Store Rating</div></div>
            <div className="sw-stat"><span className="sw-stat-num">97%</span><div className="sw-stat-label">First-Attempt Approval</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-light" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>What We Build</p>
            <h2 className="sp-heading">Swift iOS Development Services</h2>
            <p className="sp-sub">From SwiftUI consumer apps to enterprise iOS platforms with Core ML on-device AI — our engineers have shipped every category of iOS application to the App Store.</p>
          </div>
          <div className="sw-svc-grid">
            {services.map((s, i) => (
              <div className="sw-svc-card" key={i}>
                <div className="sw-svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="sw-tags">{s.tags.map(t => <span className="sw-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SWIFT */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Technology</p>
            <h2 className="sp-heading sp-heading-white">Why Swift?</h2>
            <p className="sp-sub" style={{ color: 'var(--gray-300)' }}>Swift is the fastest, safest, and most expressive language for building Apple platform applications. It's not Apple's future — it's Apple's present.</p>
          </div>
          <div className="sw-why-grid">
            {whySwift.map((w, i) => (
              <div className="sw-why-card" key={i}>
                <div className="sw-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>Our Approach</p>
            <h2 className="sp-heading">iOS Development Journey</h2>
            <p className="sp-sub">A structured four-stage process — designed to ship a beautiful, App Store-approved iOS app without surprises.</p>
          </div>
          <div className="sw-timeline">
            {timelineItems.map((item, i) => (
              <div className="sw-tl-item" key={i}>
                <div className="sw-tl-dot">{item.icon}</div>
                <div className="sw-tl-body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL Soft for Swift iOS Development?</h2>
          </div>
          <div className="sw-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="sw-btpl-card" key={i}>
                <div className="sw-btpl-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta" style={{ background: '#fff3ee' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Have an iOS App Idea Ready to Build?</h2>
          <p style={{ color: '#37474f' }}>Our Swift engineers will review your requirements and deliver a free, detailed app development proposal — with architecture recommendations and an honest timeline — within 24 hours.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#FA7343', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
