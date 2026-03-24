import { Link } from 'react-router-dom'
import Code from 'lucide-react/dist/esm/icons/code'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Layers from 'lucide-react/dist/esm/icons/layers'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import Clock from 'lucide-react/dist/esm/icons/clock'
import Users from 'lucide-react/dist/esm/icons/users'
import DollarSign from 'lucide-react/dist/esm/icons/dollar-sign'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import csBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

const services = [
  { icon: <Layers size={28} />, title: "Enterprise Software", desc: "End-to-end enterprise platforms built for complex workflows, multi-department collaboration, and high-volume data processing." },
  { icon: <Cloud size={28} />, title: "Cloud-Native Apps", desc: "Azure and AWS hosted bespoke applications providing seamless global scalability and 99.9% uptime guarantees." },
  { icon: <Monitor size={28} />, title: "Legacy Modernization", desc: "Reverse engineering and rebuilding outdated systems into secure, fast, modern web platforms without data loss." },
  { icon: <Code size={28} />, title: "Internal Tools", desc: "Operations dashboards, admin panels, and workflow automation tools built exactly how your team works." },
  { icon: <Zap size={28} />, title: "API Development", desc: "RESTful and GraphQL APIs with comprehensive documentation, rate limiting, and enterprise-grade security." },
  { icon: <ShieldCheck size={28} />, title: "Compliance Software", desc: "GDPR, HIPAA, and SOC2 compliant systems with full audit trails, role-based access, and encrypted data at rest." }
]

const softwareTypes = [
  { type: "Enterprise Platforms", desc: "Large-scale systems for multi-department operations, reporting, and data management.", examples: "ERP, CRM, HRM", timeline: "4–8 months", color: "#2196F3" },
  { type: "SaaS Platforms", desc: "Multi-tenant cloud software with subscription billing, user management, and analytics.", examples: "B2B SaaS, Marketplaces", timeline: "3–6 months", color: "#4CAF50" },
  { type: "Internal Tools", desc: "Custom dashboards and automation tools that replace spreadsheets and manual processes.", examples: "Admin Panels, Dashboards", timeline: "1–3 months", color: "#FF9800" },
  { type: "Integration Platforms", desc: "Middleware connecting multiple systems and APIs into a single unified data layer.", examples: "ETL, API Gateways", timeline: "2–3 months", color: "#9C27B0" }
]

const pricingModels = [
  {
    model: "Fixed Price",
    best: "Well-defined scope with clear requirements",
    pros: ["Predictable budget", "Clear milestones", "No surprises"],
    color: "#2196F3"
  },
  {
    model: "Time & Material",
    best: "Evolving requirements and agile development",
    pros: ["Flexible scope", "Pay as you go", "Iterative delivery"],
    color: "#4CAF50"
  },
  {
    model: "Dedicated Team",
    best: "Long-term projects needing full ownership",
    pros: ["Full-time focus", "Deep domain knowledge", "Scalable team"],
    color: "#FF9800"
  }
]



const whyUs = [
  { title: "Clean Architecture", desc: "We follow SOLID principles and domain-driven design — every line of code is intentional." },
  { title: "Scalable by Design", desc: "Systems that scale horizontally as your user base grows, without expensive rewrites." },
  { title: "Security First", desc: "Penetration testing, OWASP compliance, and encrypted data pipelines in every system." },
  { title: "Full Ownership", desc: "Complete IP transfer, full source code, and documentation — you own everything." }
]

const process = [
  { num: "01", title: "Discovery & Spec", desc: "We map every business requirement into clear, testable technical specifications." },
  { num: "02", title: "Architecture Design", desc: "Choosing the right stack, database schema, and system design for long-term scalability." },
  { num: "03", title: "Agile Development", desc: "Two-week sprints with continuous integration, automated testing, and regular client demos." },
  { num: "04", title: "Deployment & Handover", desc: "CI/CD pipelines, documentation, and training so your team hits the ground running." }
]

export default function CustomSoftware({ onOpenConsult }) {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{
        backgroundImage: `url(${csBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-hero-icon"><Code size={36} /></div>
          <h1 className="sp-hero-title">Custom Software <span>Development</span></h1>
          <p className="sp-hero-desc">
            We build tailored software that fits your exact business logic. From enterprise platforms to internal dashboards, we deliver quality at every layer.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>



      {/* TECHNICAL OVERVIEW */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#00BCD4', '--sp-accent-dark': '#00838F', '--sp-accent-rgb': '0,188,212' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Built for Scale & Longevity</h2>
              <p className="sp-subtext-large">We architect highly maintainable systems using clean code principles, microservices where appropriate, and battle-tested databases.</p>
              <div className="sp-overview-tech-points">
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper"><CheckCircle size={24} color="#00BCD4" /></div>
                  <div>
                    <h4>Microservices Architecture</h4>
                    <p>Independently deployable services that scale without affecting the whole system.</p>
                  </div>
                </div>
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper"><CheckCircle size={24} color="#00BCD4" /></div>
                  <div>
                    <h4>Zero-Trust Security Model</h4>
                    <p>Every request authenticated and authorized — no implicit trust, no data leaks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sp-overview-image">
              <div className="sp-tech-illustration">
                <div className="sp-illustration-icon"><Code size={64} color="#2196F3" /></div>
                <div className="sp-illustration-circles">
                  <div className="sp-circle sp-circle-1"></div>
                  <div className="sp-circle sp-circle-2"></div>
                  <div className="sp-circle sp-circle-3"></div>
                </div>
                <div className="sp-illustration-dots">
                  <div className="sp-dot"></div><div className="sp-dot"></div>
                  <div className="sp-dot"></div><div className="sp-dot"></div>
                  <div className="sp-dot"></div><div className="sp-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE: SOFTWARE TYPES */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Build</p>
            <h2 className="sp-heading">Software Types We <span>Specialize In</span></h2>
            <p className="sp-sub">From MVPs to enterprise-grade platforms, we cover the full spectrum of custom development.</p>
          </div>
          <div className="cs-types-grid">
            {softwareTypes.map((t, i) => (
              <div className="cs-type-card" key={i}>
                <div className="cs-type-header" style={{ borderColor: t.color }}>
                  <span className="cs-type-name" style={{ color: t.color }}>{t.type}</span>
                  <span className="cs-type-timeline"><Clock size={14} /> {t.timeline}</span>
                </div>
                <div className="cs-type-body">
                  <p className="cs-type-desc">{t.desc}</p>
                  <div className="cs-type-examples">
                    <span>e.g. {t.examples}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Our Custom Software Services</h2>
            <p className="sp-sub">Every solution we build aligns with your unique operations and long-term vision.</p>
          </div>
          <div className="sp-services-grid">
            {services.map((s, i) => (
              <div className="sp-service-card" key={i}>
                <div className="sp-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: PRICING MODELS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Engagement Options</p>
            <h2 className="sp-heading">Flexible <span>Pricing Models</span></h2>
            <p className="sp-sub">We adapt to your project scope, timeline, and budget.</p>
          </div>
          <div className="cs-pricing-grid">
            {pricingModels.map((p, i) => (
              <div className="cs-pricing-card" key={i}>
                <div className="cs-pricing-icon" style={{ background: `${p.color}15`, color: p.color }}>
                  <DollarSign size={28} />
                </div>
                <h3 className="cs-pricing-title">{p.model}</h3>
                <p className="cs-pricing-best">Best for: {p.best}</p>
                <ul className="cs-pricing-pros">
                  {p.pros.map((pro, j) => (
                    <li key={j}><CheckCircle size={15} style={{ color: p.color }} /> {pro}</li>
                  ))}
                </ul>
                <Link to="/contact" className="cs-pricing-btn" style={{ borderColor: p.color, color: p.color }}>
                  Get Quote <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">How We Work</p>
            <h2 className="sp-heading">Our Development Process</h2>
          </div>
          <div className="sp-process-grid">
            {process.map((p, i) => (
              <div className="sp-process-card" key={i}>
                <div className="sp-process-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />
      <GlobalPresence />

      {/* WHY US */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">Why Choose Us</p>
            <h2 className="sp-heading sp-heading-white">Why BTPL Soft?</h2>
          </div>
          <div className="sp-why-grid">
            {whyUs.map((w, i) => (
              <div className="sp-why-card" key={i}>
                <CheckCircle size={22} className="sp-why-check" />
                <div><h4>{w.title}</h4><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="sp-container">
          <h2>Ready to Build Your Custom Solution?</h2>
          <p>Share your requirements and get a detailed proposal — absolutely free.</p>
          <Link to="/contact" className="sp-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>

    </div>
  )
}
