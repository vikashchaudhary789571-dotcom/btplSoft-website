import { Link } from 'react-router-dom'
import {
  Send, FileCode, Shield, RefreshCw, GitBranch, BarChart2,
  CheckCircle, Zap, Users, Clock, Award, Headphones,
  Globe, Lock, Database, Settings, TestTube, Workflow, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './Postman.css'
import postmanBanner from '../../assets/services/dedicated-businessman-working-late-laptop-dark-office.webp'

const services = [
  {
    method: 'GET',
    url: '/api/postman/collection-design',
    icon: <FileCode size={24} />,
    title: 'API Collection Design & Management',
    desc: 'We design and organise comprehensive Postman collections that mirror your entire API surface — grouping endpoints by domain, resource, and workflow. Every request is documented with examples, descriptions, and expected responses so both developers and QA engineers have a single source of truth for the API contract.',
    tags: ['Collections', 'Environments', 'Variables', 'Folders'],
  },
  {
    method: 'POST',
    url: '/api/postman/automation',
    icon: <Send size={24} />,
    title: 'Automated API Test Suites',
    desc: 'Using Postman\'s built-in JavaScript test runner (pm.test), we write exhaustive assertion scripts that validate status codes, response schemas, header values, response times, and business-logic conditions. Tests are chained using pre-request and post-response scripts to simulate complete user workflows end-to-end.',
    tags: ['pm.test', 'Assertions', 'Pre-request Scripts', 'Chaining'],
  },
  {
    method: 'PUT',
    url: '/api/postman/environment-config',
    icon: <Settings size={24} />,
    title: 'Environment & Variable Management',
    desc: 'We configure multi-environment setups (Development, Staging, Production, QA) with scoped variables, secrets managed via Postman Vault, and dynamic data generation using Faker.js. Environment switching takes one click — zero manual URL or credential updates.',
    tags: ['Environments', 'Global Vars', 'Dynamic Data', 'Vault'],
  },
  {
    method: 'POST',
    url: '/api/postman/newman-ci',
    icon: <GitBranch size={24} />,
    title: 'Newman CLI & CI/CD Integration',
    desc: 'We integrate Postman collections into your CI/CD pipelines using Newman, Postman\'s command-line runner. Collections execute automatically on every push to GitHub Actions, GitLab CI, or Jenkins — generating JUnit/HTML reports and failing builds when API contracts break.',
    tags: ['Newman', 'GitHub Actions', 'JUnit Reports', 'Pipeline'],
  },
  {
    method: 'GET',
    url: '/api/postman/mock-servers',
    icon: <Database size={24} />,
    title: 'Mock Server Creation',
    desc: 'With Postman Mock Servers, frontend and mobile teams can develop against realistic API responses even before the backend is built. We set up mock endpoints with multiple response scenarios — success, validation errors, pagination, and edge cases — accelerating parallel development across teams.',
    tags: ['Mock Servers', 'Stubs', 'Frontend Unblocking', 'Examples'],
  },
  {
    method: 'POST',
    url: '/api/postman/monitoring',
    icon: <BarChart2 size={24} />,
    title: 'API Monitoring & Alerting',
    desc: 'We set up Postman Monitors to run your test collections on a scheduled cadence — every 5 minutes, hourly, or daily — against production and staging endpoints. Any failure immediately triggers Slack or email alerts so your team catches regressions before customers do.',
    tags: ['Monitors', 'Scheduling', 'Slack Alerts', 'Uptime'],
  },
]

const whyPostman = [
  {
    icon: <Zap size={24} />,
    title: 'Fastest API Development Workflow',
    desc: 'Postman\'s intuitive GUI eliminates the need for curl commands or writing test boilerplate code. Developers can design, test, document, and mock APIs in one tool — cutting the feedback loop from hours to minutes and dramatically accelerating integration cycles between backend and frontend teams.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Industry-Standard Collaboration',
    desc: 'Postman Workspaces allow your entire team — developers, QA engineers, product managers, and external partners — to share live collections, environments, and documentation. Changes sync in real time, so outdated API docs and "it works on my machine" integration issues become a thing of the past.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Comprehensive Security Testing',
    desc: 'Beyond functional testing, Postman enables thorough API security validation — testing authentication flows (OAuth 2.0, JWT, API keys), authorization boundaries, injection payloads, rate limiting, and CORS configurations. Our security-focused test suites align with OWASP API Security Top 10 guidelines.',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Seamless CI/CD Pipeline Integration',
    desc: 'Newman, Postman\'s CLI runner, executes collections in any environment — Docker containers, cloud runners, or bare-metal servers. Test results export as JUnit XML for test management tools (TestRail, Xray) and HTML for stakeholder visibility, making API quality a first-class citizen in your release pipeline.',
  },
  {
    icon: <FileCode size={24} />,
    title: 'Living API Documentation',
    desc: 'Postman automatically generates interactive API documentation directly from your collections. Developers can run live examples from the browser, download OpenAPI specification files, or sync collections to API gateways — ensuring your documentation is always accurate and up-to-date with zero manual effort.',
  },
  {
    icon: <TestTube size={24} />,
    title: 'Data-Driven Testing at Scale',
    desc: 'Using CSV or JSON data files with Newman\'s --data flag, we run the same collection across thousands of test cases — validating different user roles, payment amounts, search queries, or product SKUs in a single automated run. This coverage is impossible to achieve with manual testing.',
  },
]

const process = [
  { num: '01', title: 'API Audit & Planning', sub: 'Map all endpoints, auth flows, and edge cases' },
  { num: '02', title: 'Collection Architecture', sub: 'Organise by domain with environments & variables' },
  { num: '03', title: 'Test Script Writing', sub: 'Assertions, chaining, and data-driven scripts' },
  { num: '04', title: 'CI/CD Integration', sub: 'Newman pipeline setup with report generation' },
  { num: '05', title: 'Monitor & Iterate', sub: 'Scheduled monitors, alerts, and ongoing updates' },
]

const expItems = [
  'REST API full-suite test coverage',
  'GraphQL query & mutation testing',
  'OAuth 2.0 / JWT auth flow testing',
  'Webhook endpoint validation',
  'Microservices contract testing',
  'Third-party API integration tests',
  'Rate limiting & throttle tests',
  'Multi-environment data management',
  'OpenAPI / Swagger collection import',
  'Newman HTML/JUnit report generation',
]

const expTags = [
  'Postman v11', 'Newman CLI', 'GitHub Actions', 'GitLab CI', 'Jenkins',
  'OAuth 2.0', 'JWT Auth', 'GraphQL', 'REST', 'OpenAPI 3.0',
  'Faker.js', 'Mock Servers', 'Postman Monitors', 'Slack Webhooks',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: '300+ API Projects Tested',
    desc: 'From startup MVPs to enterprise microservice meshes — we\'ve tested APIs powering millions of daily transactions.',
  },
  {
    icon: <Users size={24} />,
    title: 'Dedicated QA Engineers',
    desc: 'Certified Postman API testers with deep knowledge of REST, GraphQL, gRPC, and WebSocket testing methodologies.',
  },
  {
    icon: <Clock size={24} />,
    title: '48-Hour Turnaround',
    desc: 'Full collection setup and CI integration delivered within 48 hours for standard API surfaces. No bottlenecks in your sprint cycle.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Ongoing Maintenance',
    desc: 'As your APIs evolve, we update collections, add new test cases, and ensure monitors stay green. Long-term QA partnership.',
  },
]

export default function Postman() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${postmanBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">API Testing with <span>Postman</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's QA engineers build comprehensive Postman collections, automated test suites, and CI/CD-integrated
            pipelines that ensure every API endpoint behaves exactly as designed — every single deployment.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Get API Testing Quote <Send size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="pm-stats">
        <div className="pm-stats-grid sp-container">
          {[
            { num: '300+', label: 'API Projects Tested' },
            { num: '50K+', label: 'Test Cases Written' },
            { num: '99.2%', label: 'Bug Detection Rate' },
            { num: '10+', label: 'Years QA Experience' },
          ].map(s => (
            <div className="pm-stat" key={s.label}>
              <span className="pm-stat-num">{s.num}</span>
              <span className="pm-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">Postman API Testing Services</h2>
            <p className="sp-sub">
              End-to-end API quality assurance — from collection design and automated assertions to
              CI/CD pipeline integration and production monitoring.
            </p>
          </div>
          <div className="pm-svc-grid">
            {services.map(svc => (
              <div className="pm-svc-card" key={svc.title}>
                <div className="pm-svc-url-bar">
                  <span className="pm-svc-method">{svc.method}</span>
                  <span className="pm-svc-url">{svc.url}</span>
                </div>
                <div className="pm-svc-body">
                  <div className="pm-svc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="pm-svc-tags">
                    {svc.tags.map(t => <span className="pm-svc-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY POSTMAN */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Postman</p>
            <h2 className="sp-heading">Why We Use Postman for API Testing</h2>
            <p className="sp-sub">
              Postman is the world's leading API platform with 30 million developers. Here's why it's
              our default choice for every API testing engagement.
            </p>
          </div>
          <div className="pm-why-grid">
            {whyPostman.map(w => (
              <div className="pm-why-card" key={w.title}>
                <div className="pm-why-icon">{w.icon}</div>
                <div className="pm-why-body">
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Approach</p>
            <h2 className="sp-heading">Our Postman Testing Process</h2>
            <p className="sp-sub">
              A clear 5-step process that takes your APIs from untested to fully automated, monitored, and documented.
            </p>
          </div>
          <div className="pm-process">
            {process.map(p => (
              <div className="pm-step" key={p.num}>
                <div className="pm-step-dot">{p.num}</div>
                <div className="pm-step-title">{p.title}</div>
                <div className="pm-step-sub">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep API Testing Experience</h2>
            <p className="sp-sub">
              Years of hands-on experience across every type of API, authentication pattern, and testing scenario.
            </p>
          </div>
          <div className="pm-exp-wrap">
            <ul className="pm-exp-list">
              {expItems.map(item => (
                <li className="pm-exp-item" key={item}>
                  <CheckCircle size={16} />{item}
                </li>
              ))}
            </ul>
            <div className="pm-exp-tags">
              {expTags.map(t => (
                <span className="pm-exp-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why Partner with BTPL for Postman Testing?</h2>
            <p className="sp-sub">
              We don't just write tests — we build quality systems that give your team confidence in every release.
            </p>
          </div>
          <div className="pm-btpl-grid">
            {btplCards.map(c => (
              <div className="pm-btpl-card" key={c.title}>
                <div className="pm-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a1a2e)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Automate Your API Testing?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Let BTPL Soft build a Postman testing system that catches bugs before they reach production — and keeps
            your APIs reliable as they evolve.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
