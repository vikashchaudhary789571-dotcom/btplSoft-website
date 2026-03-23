import { Link } from 'react-router-dom'
import {
  Code, ArrowRight, CheckCircle, Layers, ShieldCheck,
  Zap, Database, Globe, ChevronRight, Cloud, Brain, Monitor, ShoppingCart, Users, Layout, Settings, Smartphone, PenTool, Search, TrendingUp, Share2, Instagram, Facebook, Target, Camera
} from 'lucide-react'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import saasBanner from '../../assets/services/geralt-ai-generated-9094599_1920.webp'

const services = [
  {
    "icon": <Cloud size={28} />,
    "title": "Multi-Tenant Architecture",
    "desc": "Design scalable, secure, and isolated database architectures for shared or dedicated tenancy."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "MVP Development",
    "desc": "Rapidly launch a Minimum Viable Product to test the market, gather feedback, and secure funding."
  },
  {
    "icon": <Zap size={28} />,
    "title": "Subscription & Billing Integration",
    "desc": "Implement robust Stripe, Paddle, or PayPal integration for seamless recurring payments."
  },
  {
    "icon": <Code size={28} />,
    "title": "API Development",
    "desc": "Build comprehensive, secure REST/GraphQL APIs for your platform to allow third-party integrations."
  },
  {
    "icon": <Layout size={28} />,
    "title": "SaaS Dashboard Design",
    "desc": "Create powerful, intuitive admin panels and user dashboards with real-time analytics."
  },
  {
    "icon": <ShieldCheck size={28} />,
    "title": "Security & Compliance",
    "desc": "Ensure your SaaS meets GDPR, HIPAA, or SOC2 standards with end-to-end encryption."
  }
]

const whyUs = [
  {
    "title": "Cloud-Native Experts",
    "desc": "Deep expertise in AWS, Azure, and Google Cloud, utilizing severless and microservices."
  },
  {
    "title": "Cost-Optimized Architecture",
    "desc": "We design SaaS infrastructure that scales efficiently, keeping your cloud costs under control."
  },
  {
    "title": "High Availability (99.9%)",
    "desc": "Fault-tolerant systems engineered to prevent downtime and data loss."
  },
  {
    "title": "End-to-End Partnership",
    "desc": "We don`t just code; we advise on product strategy, pricing models, and tech scaling."
  }
]

const saasFeatures = [
  {
    feature: "Multi-Tenancy",
    tech: ["Database Isolation", "Tenant Routing", "Data Segregation", "Shared Resources"],
    icon: <Users size={24} />,
    color: "#2196F3"
  },
  {
    feature: "Subscription Billing",
    tech: ["Stripe", "Paddle", "Recurring Payments", "Invoice Management"],
    icon: <ShoppingCart size={24} />,
    color: "#4CAF50"
  },
  {
    feature: "API & Integrations",
    tech: ["REST API", "GraphQL", "Webhooks", "OAuth 2.0"],
    icon: <Code size={24} />,
    color: "#FF9800"
  },
  {
    feature: "Analytics Dashboard",
    tech: ["Real-time Metrics", "User Insights", "Revenue Tracking", "Custom Reports"],
    icon: <TrendingUp size={24} />,
    color: "#9C27B0"
  }
]

const saasStack = [
  { layer: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind"], color: "#2196F3" },
  { layer: "Backend", tech: ["Node.js", "Python", "PostgreSQL", "Redis"], color: "#4CAF50" },
  { layer: "Infrastructure", tech: ["AWS", "Docker", "Kubernetes", "CI/CD"], color: "#FF9800" },
  { layer: "Monitoring", tech: ["Datadog", "Sentry", "CloudWatch", "Grafana"], color: "#9C27B0" }
]

const process = [
  {
    "num": "01",
    "title": "Discovery & Blueprinting",
    "desc": "Defining user personas, feature sets, and the tech stack for maximum scalability."
  },
  {
    "num": "02",
    "title": "Prototyping",
    "desc": "Clickable high-fidelity wireframes mapping out the entire user journey."
  },
  {
    "num": "03",
    "title": "Agile Build",
    "desc": "Iterative development focusing on core features and multi-tenant security layers."
  },
  {
    "num": "04",
    "title": "Launch & Iterate",
    "desc": "Cloud deployment, performance tuning, and continuous feature updates based on user data."
  }
]

export default function SaaSSolution({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${saasBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-hero-icon"><Cloud size={36} /></div>
          <h1 className="sp-hero-title">SaaS Product <span>Development</span></h1>
          <p className="sp-hero-desc">
            Transform your vision into a scalable Software-as-a-Service platform. From multitenant architecture and subscription billing to secure cloud deployment, we cover the entire SaaS lifecycle.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#3F51B5', '--sp-accent-dark': '#283593', '--sp-accent-rgb': '63,81,181' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Multi-Tenant Cloud Architectures</h2>
              <p className="sp-subtext-large">We engineer SaaS platforms with strong data isolation, scalable microservices, and high-availability clustered databases capable of handling thousands of concurrent enterprise tenants.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#3F51B5" />
                  </div>
                  <div>
                    <h4>Serverless & Microservices</h4>
                    <p>Utilizing Docker and Kubernetes to ensure granular auto-scaling.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#3F51B5" />
                  </div>
                  <div>
                    <h4>Subscription & Billing APIs</h4>
                    <p>Robust integration with Stripe, Paddle, and Braintree for recurring revenue.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Cloud size={64} color="#2196F3" />
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

      {/* UNIQUE: SAAS FEATURES */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Core Capabilities</p>
            <h2 className="sp-heading">Essential SaaS <span>Features</span></h2>
            <p className="sp-sub">Building blocks for a successful, scalable SaaS platform.</p>
          </div>
          <div className="saas-features-grid">
            {saasFeatures.map((f, i) => (
              <div className="saas-feature-card" key={i}>
                <div className="saas-feature-icon" style={{ background: `${f.color}15`, color: f.color }}>
                  {f.icon}
                </div>
                <h3>{f.feature}</h3>
                <div className="saas-feature-tech">
                  {f.tech.map((t, j) => (
                    <span key={j} style={{ background: `${f.color}10`, color: f.color }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: SAAS TECH STACK */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Technology Stack</p>
            <h2 className="sp-heading">SaaS Development <span>Stack</span></h2>
            <p className="sp-sub">Modern, scalable technologies for building enterprise-grade SaaS platforms.</p>
          </div>
          <div className="saas-stack-grid">
            {saasStack.map((s, i) => (
              <div className="saas-stack-card" key={i}>
                <div className="saas-stack-layer" style={{ color: s.color, borderColor: `${s.color}30` }}>
                  {s.layer}
                </div>
                <div className="saas-stack-tech">
                  {s.tech.map((t, j) => (
                    <span key={j} style={{ background: `${s.color}12`, color: s.color }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Comprehensive SaaS Services</h2>
            <p className="sp-sub">We build robust, multi-tenant cloud products that delight users and generate recurring revenue.</p>
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
