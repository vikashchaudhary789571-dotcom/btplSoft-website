import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Layers, Database, Globe,
  Cloud, Shield, RefreshCw, Monitor, Code,
  Users, Lock, TrendingUp, Clock, Zap, Cpu
} from 'lucide-react'
import '../services/ServicePage.css'
import './DotNET.css'
import dotnetBanner from '../../assets/services/geralt-ai-generated-9094599_1920 (1).webp'

const services = [
  {
    icon: <Layers size={28} />, title: 'Enterprise .NET Application Development',
    desc: 'We build mission-critical .NET 8 applications using Clean Architecture, CQRS with MediatR, and Domain-Driven Design — delivering codebases that are readable, testable, and safe to evolve over years, not just months.',
    tags: ['.NET 8', 'Clean Architecture', 'CQRS/MediatR'],
  },
  {
    icon: <Cloud size={28} />, title: 'Azure Cloud-Native Development',
    desc: 'As Microsoft stack specialists, we design Azure-native solutions using Azure App Service, Azure Functions, Service Bus, and Cosmos DB — leveraging managed services to eliminate operational overhead while improving reliability and global reach.',
    tags: ['Azure Functions', 'Service Bus', 'Cosmos DB'],
  },
  {
    icon: <Globe size={28} />, title: 'ASP.NET Core Web APIs',
    desc: 'High-performance RESTful and minimal API services built on ASP.NET Core 8 — with OpenAPI (Swagger) documentation, OAuth 2.0 / OIDC via IdentityServer or Azure AD, response caching, and comprehensive integration tests using WebApplicationFactory.',
    tags: ['ASP.NET Core 8', 'Minimal APIs', 'IdentityServer'],
  },
  {
    icon: <Monitor size={28} />, title: 'Blazor & Razor Web Applications',
    desc: 'Blazor WebAssembly and Server-Side Rendering let us build rich, interactive web UIs entirely in C# — perfect for internal line-of-business tools, admin portals, and SaaS dashboards where a homogeneous .NET stack reduces context switching.',
    tags: ['Blazor WASM', 'Blazor SSR', 'Razor Pages'],
  },
  {
    icon: <Shield size={28} />, title: '.NET Security & Compliance',
    desc: 'Comprehensive .NET security reviews covering dependency vulnerabilities, SQL injection via EF Core raw queries, SSRF, broken authentication, and insecure direct object references. Deliverables include a CVSS-scored findings report and a hardening roadmap.',
    tags: ['EF Core Security', 'OWASP .NET', 'CVSS Report'],
  },
  {
    icon: <RefreshCw size={28} />, title: '.NET Framework to .NET 8 Migration',
    desc: 'We migrate .NET Framework 4.x applications to .NET 8 — resolving compatibility issues, replacing deprecated APIs with modern equivalents, adopting Dependency Injection and middleware pipelines, and containerising applications for Kubernetes.',
    tags: ['.NET FX→.NET 8', 'Containerisation', 'Kestrel'],
  },
]

const whyDotnet = [
  { icon: <Zap size={24} />, title: 'Best-in-Class Performance', desc: '.NET 8 consistently tops TechEmpower benchmarks — outperforming Node.js, Go, and Java frameworks on JSON serialisation, plaintext, and database query benchmarks. The AOT compilation option brings startup times under 50ms.' },
  { icon: <Cloud size={24} />, title: 'First-Party Azure Integration', desc: 'When your cloud is Azure, .NET is the first-class citizen. Managed Identity, Azure SDKs, and Visual Studio tooling create an unmatched developer experience for building cloud-native Microsoft-stack applications.' },
  { icon: <Shield size={24} />, title: 'Enterprise Security Heritage', desc: '.NET\'s long history in banking, government, and healthcare means its security primitives are battle-hardened. ASP.NET Core\'s built-in data protection, anti-forgery, and HTTPS enforcement reduce the attack surface significantly.' },
  { icon: <Layers size={24} />, title: 'Unified Multi-Platform Runtime', desc: 'One codebase targets Windows, Linux, macOS, Blazor WASM, Android, iOS (via .NET MAUI), and cloud — eliminating platform-specific code, reducing maintenance burden, and enabling true full-stack C# development.' },
  { icon: <Code size={24} />, title: 'C# 12 Language Excellence', desc: 'Primary constructors, collection expressions, inline arrays, and interceptors in C# 12 continue making .NET the language with the best blend of expressiveness, safety, and raw performance in enterprise software.' },
  { icon: <TrendingUp size={24} />, title: 'Long-Term Microsoft Support', desc: '.NET LTS releases receive 3 years of security support from Microsoft. For large organisations, this predictability is essential for planning upgrade cycles and maintaining compliance certifications without scrambling.' },
]

const expItems = [
  'ASP.NET Core REST & Minimal APIs', '.NET 8 Microservices on AKS',
  'Azure Functions Event Processing', 'Blazor Enterprise Portals',
  '.NET Framework Legacy Migration', 'IdentityServer 6 / Azure AD Integration',
  'Entity Framework Core Optimisation', 'SignalR Real-Time Features',
  'gRPC Services with .NET', '.NET MAUI Cross-Platform Apps',
]

const featBoxes = [
  { icon: <Layers size={22} />, title: 'Microservices' },
  { icon: <Cloud size={22} />, title: 'Azure Native' },
  { icon: <Shield size={22} />, title: 'Enterprise Security' },
  { icon: <Cpu size={22} />, title: 'AOT Performance' },
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Microsoft-Certified .NET Team', desc: 'Our senior engineers hold Microsoft certifications in Azure and .NET development. They contribute to open-source .NET libraries and stay current with every LTS release and ASP.NET roadmap announcement.' },
  { icon: <TrendingUp size={22} />, title: 'Measured Performance Outcomes', desc: 'We benchmark .NET APIs before and after every engagement — reporting on request throughput, 95th-percentile latency, and memory allocation. Performance improvements are measurable, documented, and guaranteed.' },
  { icon: <Lock size={22} />, title: 'SOC 2 & ISO 27001-Ready Builds', desc: 'Compliance-ready .NET architectures with audit logging, field-level encryption, role-based access control, and full data lineage baked in — dramatically reducing the cost of your next compliance certification.' },
  { icon: <Clock size={22} />, title: 'Phased Delivery with Sign-Off Gates', desc: 'Each development phase ends with a formal demo, stakeholder sign-off, and written test results. Nothing moves to the next phase until you\'ve reviewed and approved the deliverable.' },
]

export default function DotNET() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${dotnetBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>.NET</span> Development — Powerful, Scalable, Cloud-Ready</h1>
          <p className="sp-hero-desc">
            BTPL Soft's .NET engineers build enterprise applications, Azure cloud-native services,
            and high-performance ASP.NET Core APIs that are secure, maintainable, and built to
            meet the demands of regulated industries and global scale.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start .NET Project <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="dn-stats">
        <div className="sp-container">
          <div className="dn-stats-grid">
            <div className="dn-stat"><span className="dn-stat-num">280+</span><div className="dn-stat-label">.NET Projects Delivered</div></div>
            <div className="dn-stat"><span className="dn-stat-num">12+</span><div className="dn-stat-label">Years .NET Experience</div></div>
            <div className="dn-stat"><span className="dn-stat-num">120+</span><div className="dn-stat-label">Azure Deployments</div></div>
            <div className="dn-stat"><span className="dn-stat-num">99.9%</span><div className="dn-stat-label">Uptime SLA Achieved</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: '#00897B' }}>What We Build</p>
            <h2 className="sp-heading">.NET Development Services</h2>
            <p className="sp-sub">From Clean Architecture enterprise applications to Azure cloud-native services — our .NET engineers deliver production-ready solutions with the performance, security, and maintainability your business demands.</p>
          </div>
          <div className="dn-svc-grid">
            {services.map((s, i) => (
              <div className="dn-svc-card" key={i}>
                <div className="dn-svc-icon">{s.icon}</div>
                <div className="dn-svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="dn-tags">{s.tags.map(t => <span className="dn-tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY .NET */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: '#00897B' }}>The Technology</p>
            <h2 className="sp-heading">Why .NET in 2025?</h2>
            <p className="sp-sub">.NET 8 is the fastest general-purpose web framework on the planet. Combined with C# 12, Blazor, and first-class Azure integration, it's the definitive choice for enterprise-grade software.</p>
          </div>
          <div className="dn-why-grid">
            {whyDotnet.map((w, i) => (
              <div className="dn-why-card" key={i}>
                <div className="dn-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#00897B', '--sp-accent-dark': '#00695C', '--sp-accent-rgb': '0,137,123' }}>
        <div className="sp-container">
          <div className="sp-section-head center" style={{ marginBottom: 40 }}>
            <p className="sp-label" style={{ color: '#00897B', justifyContent: 'center' }}>Track Record</p>
            <h2 className="sp-heading">.NET Development Experience</h2>
          </div>
          <div className="dn-exp-wrap">
            <ul className="dn-exp-list">
              {expItems.map((item, i) => (
                <li className="dn-exp-item" key={i}>
                  <CheckCircle size={16} /> {item}
                </li>
              ))}
            </ul>
            <div className="dn-feat-grid">
              {featBoxes.map((f, i) => (
                <div className="dn-feat" key={i}>
                  <div className="dn-feat-icon">{f.icon}</div>
                  <div className="dn-feat-title">{f.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">Why Choose Us</p>
            <h2 className="sp-heading sp-heading-white">Why BTPL Soft for .NET Development?</h2>
          </div>
          <div className="dn-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="dn-btpl-card" key={i}>
                <div className="dn-btpl-icon">{w.icon}</div>
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
      <section className="sp-cta" style={{ background: 'linear-gradient(135deg, #e0f2f1, #b2dfdb)' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Ready to Build Something Exceptional with .NET?</h2>
          <p style={{ color: '#37474f' }}>Describe your project and our .NET architects will respond with a free, detailed technical proposal — complete with architecture recommendations and a delivery estimate — within 24 hours.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#00897B', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
