import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Layers, Database, Globe,
  Smartphone, Shield, RefreshCw, Code, Server,
  Users, Lock, TrendingUp, Clock, Zap, Package
} from 'lucide-react'
import '../services/ServicePage.css'
import './Java.css'
import javaBanner from '../../assets/services/geralt-ai-generated-9094599_1920.webp'

const services = [
  {
    icon: <Layers size={26} />, title: 'Enterprise Java Application Development',
    desc: 'We build large-scale enterprise applications using Spring Boot, Jakarta EE, and Quarkus — designed for high throughput, horizontal scalability, and graceful degradation. Every project follows Domain-Driven Design and hexagonal architecture principles.',
    tags: ['Spring Boot 3', 'Jakarta EE', 'Quarkus'],
  },
  {
    icon: <Globe size={26} />, title: 'Java Microservices Architecture',
    desc: 'We decompose monoliths into resilient microservice meshes using Spring Cloud, Netflix OSS, and service-mesh tooling. Circuit breakers, distributed tracing with Jaeger, and event-driven patterns via Kafka keep your services communicating reliably at scale.',
    tags: ['Spring Cloud', 'Kafka', 'Istio'],
  },
  {
    icon: <Database size={26} />, title: 'Java REST & gRPC API Development',
    desc: 'High-performance Java APIs built on Spring WebFlux (reactive) or standard Spring MVC — with OpenAPI documentation, field-level authorization via Spring Security, and comprehensive integration test suites guaranteeing contract compliance.',
    tags: ['Spring WebFlux', 'gRPC', 'OpenAPI 3'],
  },
  {
    icon: <Smartphone size={26} />, title: 'Android Native Development',
    desc: 'Our Android engineers build native apps with Kotlin and Java on Jetpack Compose UI — delivering performant, accessible applications that meet Google Play\'s latest quality guidelines and pass rigorous QA automation before every store submission.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android Jetpack'],
  },
  {
    icon: <Shield size={26} />, title: 'Java Security & Audit',
    desc: 'We conduct deep Java application security reviews — covering dependency CVEs, Spring Security misconfiguration, SQL injection via JPA queries, deserialization vulnerabilities, and HTTPS/TLS configuration hardening. Delivered as a detailed findings report.',
    tags: ['Spring Security', 'OWASP', 'CVE Patching'],
  },
  {
    icon: <RefreshCw size={26} />, title: 'Java Modernisation & Migration',
    desc: 'We migrate legacy Java EE applications to modern Spring Boot 3 / Java 21 — upgrading from JDK 8, resolving deprecated API usage, and containerising applications for Kubernetes. Phased approach with automated regression testing at every milestone.',
    tags: ['Java 8→21', 'Spring Boot 3', 'Containerisation'],
  },
]

const whyJava = [
  { icon: <Zap size={24} />, title: 'Extreme Performance & Scalability', desc: 'Java\'s JVM JIT compilation, virtual threads in Java 21 (Project Loom), and GraalVM native-image compilation produce applications that handle millions of concurrent requests with predictable latency.' },
  { icon: <Shield size={24} />, title: 'Enterprise Security Built-In', desc: 'Spring Security\'s OAuth 2.0, OIDC, and RBAC support, combined with Java\'s strong typing and memory safety, make it the default choice for banking, healthcare, and government systems worldwide.' },
  { icon: <Globe size={24} />, title: 'Proven at Internet Scale', desc: 'LinkedIn, Netflix, Airbnb, and Amazon all power critical services with Java. This battle-tested track record means confidence in choosing Java for high-stakes, high-availability systems.' },
  { icon: <Package size={24} />, title: 'Mature Ecosystem (Maven Central)', desc: 'With 500k+ artifacts on Maven Central and a vibrant open-source community spanning 30 years, Java developers have production-quality libraries for every technical challenge imaginable.' },
]

const timelinePillars = [
  { icon: <Code size={28} />, label: 'Architecture & Design', desc: 'DDD, hexagonal, event-driven boundaries, API contracts defined first' },
  { icon: <Database size={28} />, label: 'Agile Development', desc: 'Two-week sprints, CI/CD pipeline, automated unit & integration tests' },
  { icon: <Shield size={28} />, label: 'Security & QA', desc: 'OWASP audit, load testing, chaos engineering on every release candidate' },
  { icon: <Zap size={28} />, label: 'Deploy & Optimise', desc: 'Kubernetes deployment, APM monitoring, post-launch performance tuning' },
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Java Engineers with Enterprise DNA', desc: 'Our Java team has delivered mission-critical applications for financial institutions, logistics companies, and government bodies — environments where correctness and uptime are everything.' },
  { icon: <TrendingUp size={22} />, title: 'Performance SLAs in Every Contract', desc: 'We define response-time, throughput, and availability SLAs before we write a line of code — and we\'ve met or exceeded every SLA across our last 200+ Java engagements.' },
  { icon: <Lock size={22} />, title: 'HIPAA & PCI-DSS Compliant Builds', desc: 'For regulated industries, our Java applications are architected and audited to meet HIPAA, PCI-DSS, SOC 2, and ISO 27001 requirements, with all relevant documentation provided.' },
  { icon: <Clock size={22} />, title: 'Milestone-Based Transparency', desc: 'Clear milestone plans, shared code repositories, and weekly stakeholder demos mean you\'re never in the dark about project progress or technical decisions.' },
]

export default function Java() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${javaBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>Java</span> Development — Enterprise Grade, Internet Scale</h1>
          <p className="sp-hero-desc">
            BTPL Soft's Java engineers build enterprise applications, high-performance microservices,
            and Android apps that run reliably under extreme load — using Spring Boot 3, Java 21,
            and cloud-native deployment patterns refined across 300+ projects.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Java Project <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="jv-stats">
        <div className="sp-container">
          <div className="jv-stats-grid">
            <div className="jv-stat"><span className="jv-stat-num">300+</span><div className="jv-stat-label">Java Projects Delivered</div></div>
            <div className="jv-stat"><span className="jv-stat-num">12+</span><div className="jv-stat-label">Years Java Experience</div></div>
            <div className="jv-stat"><span className="jv-stat-num">150+</span><div className="jv-stat-label">Enterprise Clients Served</div></div>
            <div className="jv-stat"><span className="jv-stat-num">99.9%</span><div className="jv-stat-label">Average Uptime SLA</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-light" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>What We Build</p>
            <h2 className="sp-heading">Java Development Services</h2>
            <p className="sp-sub">From cloud-native microservices to legacy Java EE migrations — our engineers bring deep JVM expertise and enterprise architecture know-how to every engagement.</p>
          </div>
          <div className="jv-svc-grid">
            {services.map((s, i) => (
              <div className="jv-svc-card" key={i}>
                <div className="jv-svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="jv-tags">{s.tags.map(t => <span className="jv-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JAVA */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Technology</p>
            <h2 className="sp-heading sp-heading-white">Why Java in 2025?</h2>
            <p className="sp-sub" style={{ color: 'var(--gray-300)' }}>Java 21 with virtual threads, pattern matching, and record types represents the most significant language evolution in decades — combining familiar syntax with modern concurrency and performance.</p>
          </div>
          <div className="jv-why-grid">
            {whyJava.map((w, i) => (
              <div className="jv-why-card" key={i}>
                <div className="jv-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS — TIMELINE */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-blue)' }}>How We Work</p>
            <h2 className="sp-heading">Java Development Process</h2>
            <p className="sp-sub">Four structured pillars that take your Java project from whiteboard to production without surprises.</p>
          </div>
          <div className="jv-timeline">
            {timelinePillars.map((p, i) => (
              <div className="jv-tl-item" key={i}>
                <div className="jv-tl-dot" />
                <div className="jv-tl-icon">{p.icon}</div>
                <div className="jv-tl-label">{p.label}</div>
                <div className="jv-tl-desc">{p.desc}</div>
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
            <h2 className="sp-heading sp-heading-white">Why BTPL Soft for Java Development?</h2>
          </div>
          <div className="jv-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="jv-btpl-card" key={i}>
                <div className="jv-btpl-icon">{w.icon}</div>
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
      <section className="sp-cta" style={{ background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Have a Java Development Challenge to Solve?</h2>
          <p style={{ color: '#37474f' }}>Our Java architects are ready to review your requirements and deliver a comprehensive technical proposal — no commitment, no cost, within 24 hours.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#1565C0', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
