import { Link } from 'react-router-dom'
import Code from 'lucide-react/dist/esm/icons/code'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Layers from 'lucide-react/dist/esm/icons/layers'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Database from 'lucide-react/dist/esm/icons/database'
import Globe from 'lucide-react/dist/esm/icons/globe'
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import Brain from 'lucide-react/dist/esm/icons/brain'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart'
import Users from 'lucide-react/dist/esm/icons/users'
import Layout from 'lucide-react/dist/esm/icons/layout'
import Settings from 'lucide-react/dist/esm/icons/settings'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import PenTool from 'lucide-react/dist/esm/icons/pen-tool'
import Search from 'lucide-react/dist/esm/icons/search'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import Share2 from 'lucide-react/dist/esm/icons/share-2'
import Instagram from 'lucide-react/dist/esm/icons/instagram'
import Facebook from 'lucide-react/dist/esm/icons/facebook'
import Target from 'lucide-react/dist/esm/icons/target'
import Camera from 'lucide-react/dist/esm/icons/camera'
import Apple from 'lucide-react/dist/esm/icons/apple'
import Play from 'lucide-react/dist/esm/icons/play'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import appDevBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

const services = [
  {
    "icon": <Smartphone size={28} />,
    "title": "iOS Native Development",
    "desc": "High-performance Swift applications completely integrated with Apple ecosystem features."
  },
  {
    "icon": <Layers size={28} />,
    "title": "Android Native Development",
    "desc": "Kotlin-based apps optimized to run across thousands of varied Android screen sizes."
  },
  {
    "icon": <Code size={28} />,
    "title": "Cross-Platform Dev",
    "desc": "React Native & Flutter solutions delivering near-native performance with 50% less code."
  },
  {
    "icon": <Zap size={28} />,
    "title": "IoT & Wearables",
    "desc": "Connecting apps via Bluetooth/Wi-Fi to smartwatches, medical devices, and smart home tech."
  },
  {
    "icon": <Layout size={28} />,
    "title": "Mobile UI/UX Design",
    "desc": "Gesture-driven interfaces rigorously following Apple HIG and Material guidelines."
  },
  {
    "icon": <Cloud size={28} />,
    "title": "API & Backend Dev",
    "desc": "Scalable server-side infrastructure and Firebase integration for real-time app data."
  }
]

const whyUs = [
  {
    "title": "User-Centric Design",
    "desc": "Every screen is crafted to delight users and maximise engagement and retention."
  },
  {
    "title": "Performance First",
    "desc": "Optimised animations, lazy loading, and efficient state management for buttery-smooth apps."
  },
  {
    "title": "Secure by Default",
    "desc": "Data encryption, secure authentication, and compliance with platform guidelines."
  },
  {
    "title": "Store Submission Support",
    "desc": "We handle App Store and Play Store submission, review responses, and approvals."
  }
]

const platforms = [
  {
    platform: "iOS Native",
    tech: ["Swift", "SwiftUI", "UIKit", "Core Data"],
    features: ["Face ID", "Apple Pay", "HealthKit", "ARKit"],
    color: "#2196F3"
  },
  {
    platform: "Android Native",
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "Material 3"],
    features: ["Biometric Auth", "Google Pay", "ML Kit", "Camera2 API"],
    color: "#4CAF50"
  },
  {
    platform: "Cross-Platform",
    tech: ["React Native", "Flutter", "Expo", "Firebase"],
    features: ["Single Codebase", "Hot Reload", "Native Modules", "Push Notifications"],
    color: "#9C27B0"
  }
]

const appFeatures = [
  { feature: "Push Notifications", desc: "Real-time engagement via FCM & APNs", icon: <TrendingUp size={20} /> },
  { feature: "Offline Mode", desc: "SQLite/Realm local data persistence", icon: <Database size={20} /> },
  { feature: "Payment Integration", desc: "Stripe, PayPal, Apple/Google Pay", icon: <ShoppingCart size={20} /> },
  { feature: "Social Login", desc: "OAuth with Google, Facebook, Apple", icon: <Users size={20} /> },
  { feature: "Analytics", desc: "Firebase, Mixpanel, Amplitude tracking", icon: <TrendingUp size={20} /> },
  { feature: "Geolocation", desc: "Maps, GPS tracking, location services", icon: <Globe size={20} /> }
]

const process = [
  {
    "num": "01",
    "title": "Strategy & Discovery",
    "desc": "We analyze your target audience, competition, and business model to define the strategy."
  },
  {
    "num": "02",
    "title": "Prototype & Design",
    "desc": "Interactive prototypes and polished UI designs reviewed and approved."
  },
  {
    "num": "03",
    "title": "Agile Coding",
    "desc": "Development sprints with device-level testing and regular TestFlight distributions."
  },
  {
    "num": "04",
    "title": "Store Approvals",
    "desc": "We handle entire App Store and Play Store submission bureaucracy and metadata."
  }
]

export default function AppDevelopment({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${appDevBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Mobile App <span>Development</span></h1>
          <p className="sp-hero-desc">
            From concept to the App Store — we build powerful, beautiful, and performance-driven mobile applications for iOS and Android that users love and businesses rely on.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#7C4DFF', '--sp-accent-dark': '#5E35B1', '--sp-accent-rgb': '124,77,255' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Native & Hybrid Architectures</h2>
              <p className="sp-subtext-large">Whether you need ultra-performant Swift/Kotlin codebases or highly efficient cross-platform React Native and Flutter apps, we engineer mobile software that interacts flawlessly with hardware.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#7C4DFF" />
                  </div>
                  <div>
                    <h4>60fps UI Performance</h4>
                    <p>Optimizing rendering thread locks to ensure apps feel buttery smooth on all hardware.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#7C4DFF" />
                  </div>
                  <div>
                    <h4>Offline-First Syncing</h4>
                    <p>Implementing SQLite and Realm databases so users can work completely without internet.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Smartphone size={64} color="#2196F3" />
                  </div>
                  <div className="sp-illustration-circles">
                    <div className="sp-circle sp-circle-1"></div>
                    <div className="sp-circle sp-circle-2"></div>
                    <div className="sp-circle sp-circle-3"></div>
                  </div>
                  <div className="sp-illustration-dots">
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE: PLATFORM TECHNOLOGIES */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Platform Expertise</p>
            <h2 className="sp-heading">Native & Cross-Platform <span>Technologies</span></h2>
            <p className="sp-sub">We master the full spectrum of mobile development frameworks and native APIs.</p>
          </div>
          <div className="app-platforms-grid">
            {platforms.map((p, i) => (
              <div className="app-platform-card" key={i}>
                <div className="app-platform-header" style={{ background: `${p.color}12`, borderColor: p.color }}>
                  <h3 style={{ color: p.color }}>{p.platform}</h3>
                </div>
                <div className="app-platform-body">
                  <div className="app-platform-section">
                    <h4>Core Technologies</h4>
                    <div className="app-platform-tags">
                      {p.tech.map((t, j) => (
                        <span key={j} style={{ background: `${p.color}10`, color: p.color }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="app-platform-section">
                    <h4>Key Features</h4>
                    <ul>
                      {p.features.map((f, j) => (
                        <li key={j}><CheckCircle size={14} style={{ color: p.color }} /> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: APP FEATURES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Core Capabilities</p>
            <h2 className="sp-heading">Essential App <span>Features</span> We Integrate</h2>
            <p className="sp-sub">From payments to push notifications — we build feature-rich mobile experiences.</p>
          </div>
          <div className="app-features-grid">
            {appFeatures.map((f, i) => (
              <div className="app-feature-card" key={i}>
                <div className="app-feature-icon">{f.icon}</div>
                <h4>{f.feature}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Our App Development Services</h2>
            <p className="sp-sub">Complete mobile application development — from strategy and design to launch and beyond.</p>
          </div>
          <div className="sp-services-grid">
            {services.map((s, i) => (<div className="sp-service-card" key={i}><div className="sp-service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center"><p className="sp-label">How We Work</p><h2 className="sp-heading">Our Proven Process</h2></div>
          <div className="sp-process-grid">
            {process.map((p, i) => (<div className="sp-process-card" key={i}><div className="sp-process-num">{p.num}</div><h4>{p.title}</h4><p>{p.desc}</p></div>))}
          </div>
        </div>
      </section>

      <TechStack />
      <GlobalPresence />

      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center"><p className="sp-label sp-label-light">Why Choose Us</p><h2 className="sp-heading sp-heading-white">Why BTPL Soft?</h2></div>
          <div className="sp-why-grid">
            {whyUs.map((w, i) => (<div className="sp-why-card" key={i}><CheckCircle size={22} className="sp-why-check" /><div><h4>{w.title}</h4><p>{w.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-container">
          <h2>Have a Project Idea in Mind?</h2>
          <p>Talk to our experts and get a detailed proposal — absolutely free.</p>
          <Link to="/contact" className="sp-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
