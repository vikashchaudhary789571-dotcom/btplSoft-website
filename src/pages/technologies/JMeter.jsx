import { Link } from 'react-router-dom'
import {
  Activity, BarChart2, Cpu, Settings, GitBranch, RefreshCw,
  CheckCircle, Zap, Users, Clock, Award, Headphones,
  Shield, TrendingUp, Server, Database, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './JMeter.css'
import jmeterBanner from '../../assets/services/representation-user-experience-interface-design.webp'

const services = [
  {
    num: '01',
    icon: <Activity size={24} />,
    title: 'Load Testing & Stress Testing',
    desc: 'We design JMeter test plans that simulate thousands of concurrent users hitting your application simultaneously. Load tests validate behaviour under expected peak traffic, while stress tests push beyond limits to find breaking points. Every test run produces detailed throughput, latency, and error-rate metrics — giving you proof that your system handles the load before real users do.',
    tags: ['Concurrent Users', 'Throughput', 'Response Time', 'TPS'],
  },
  {
    num: '02',
    icon: <TrendingUp size={24} />,
    title: 'Performance Benchmarking',
    desc: 'Before major releases, our engineers run full baseline benchmarking suites that capture average response times, 95th percentile latency, requests per second, error rate, and resource utilisation across every critical user journey. Results are stored and compared across releases so regressions are caught before they reach production.',
    tags: ['P95 Latency', 'Baseline', 'Regression Detection', 'Benchmarks'],
  },
  {
    num: '03',
    icon: <RefreshCw size={24} />,
    title: 'Endurance & Soak Testing',
    desc: 'Short load tests miss problems that only appear after hours of sustained traffic — memory leaks, connection pool exhaustion, and gradual response time degradation. Our soak tests run 8–24 hour continuous load scenarios with JMeter distributed agents, monitoring for slow drifts in metrics that signal deeper architectural issues.',
    tags: ['Soak Testing', '24-Hour Runs', 'Memory Leaks', 'Connection Pools'],
  },
  {
    num: '04',
    icon: <GitBranch size={24} />,
    title: 'CI/CD Pipeline Performance Testing',
    desc: 'We integrate JMeter into your CI/CD pipeline using the JMeter Maven Plugin, Taurus framework, or direct CLI execution within GitHub Actions and Jenkins. Every build that touches performance-critical code paths automatically runs a targeted JMeter test — failing the pipeline if response times or error rates exceed defined thresholds.',
    tags: ['Maven Plugin', 'GitHub Actions', 'Jenkins', 'Taurus'],
  },
  {
    num: '05',
    icon: <BarChart2 size={24} />,
    title: 'Distributed Load Testing',
    desc: 'For applications requiring simulation of 10,000+ concurrent users, single-machine JMeter cannot generate sufficient load. We architect distributed JMeter setups using multiple cloud-based agents (EC2, GCP), with a central controller aggregating results. This lets us realistically simulate global user distributions with geographically spread load generators.',
    tags: ['Distributed Agents', 'Cloud Load Gen', 'AWS EC2', 'Remote Testing'],
  },
  {
    num: '06',
    icon: <Settings size={24} />,
    title: 'Test Plan Design & Consulting',
    desc: 'We audit your existing JMeter test plans for anti-patterns — embedded think times, wrong concurrency models, missing correlation, and poor assertion coverage. We then redesign plans using best practices: parameterised thread groups, realistic think time distributions, proper CSV data iteration, response correlation, and meaningful assertions.',
    tags: ['Test Plan Review', 'Correlation', 'Parameterisation', 'Consulting'],
  },
]

const whyJMeter = [
  {
    icon: <Zap size={24} />,
    title: 'Open Source with Enterprise Capabilities',
    desc: 'Apache JMeter is free, open-source, and backed by the Apache Software Foundation — but it delivers enterprise-grade load generation capabilities. No per-user licensing costs mean you can run tests as often as needed without budget constraints, making it the go-to tool for teams of all sizes.',
  },
  {
    icon: <Server size={24} />,
    title: 'Protocol-Agnostic Testing',
    desc: 'JMeter is not just an HTTP load tester. It natively supports HTTP/HTTPS, REST, SOAP/XML-RPC, FTP, LDAP, TCP sockets, JMS message queues, JDBC database connections, SMTP/IMAP email servers, and more. If your system has an API or network interface, JMeter can test it.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Rich Real-Time Metrics',
    desc: 'JMeter integrates natively with InfluxDB + Grafana and Prometheus to produce real-time performance dashboards. Stakeholders can watch live graphs of throughput, response times, error rates, and active threads during any test run — without waiting for the test to finish and post-process results.',
  },
  {
    icon: <Database size={24} />,
    title: 'Data-Driven Test Scenarios',
    desc: 'Using CSV Data Set Config elements, JMeter iterates through realistic datasets — unique user credentials, product IDs, search terms, or payment amounts — ensuring each virtual user follows a distinct path through the application. This prevents caching from masking real performance bottlenecks.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Realistic User Simulation',
    desc: 'Our JMeter test plans model real user behaviour precisely — with Gaussian random think times between actions, HTTP cookie and session management, automatic redirect handling, embedded resource loading, and browser cache simulation. This produces performance metrics that actually reflect what real users will experience.',
  },
  {
    icon: <GitBranch size={24} />,
    title: 'Extensible Plugin Ecosystem',
    desc: 'JMeter\'s plugin ecosystem (jmeter-plugins.org) extends the default capabilities with custom thread groups (Ultimate Thread Group, Concurrency Thread Group), additional samplers, response time graphs, WebSocket testing, and more. We select the right plugins for every engagement to maximise test accuracy.',
  },
]

const metrics = [
  { icon: <Activity size={22} />, val: '100K+', label: 'Virtual Users Simulated', desc: 'Maximum concurrent users per distributed test run' },
  { icon: <Zap size={22} />, val: '< 200ms', label: 'Target API Response Time', desc: 'P95 baseline we engineer your system to maintain' },
  { icon: <TrendingUp size={22} />, val: '99.9%', label: 'Uptime Under Load', desc: 'Availability target for applications we performance-test' },
]

const expItems = [
  'E-commerce peak-traffic load simulation',
  'Banking transaction throughput testing',
  'REST & GraphQL API load testing',
  'Database connection pool saturation tests',
  'Microservices cascade failure analysis',
  'CDN & caching effectiveness validation',
  'WebSocket & real-time app load tests',
  'Multi-region distributed load testing',
  'CI/CD performance regression gates',
  'JMeter to Grafana dashboard setup',
  'Taurus (BlazeMeter YAML) integration',
  'AWS & GCP cloud-based load generation',
]

const expTags = [
  'Apache JMeter 5.6', 'Taurus / bzz', 'JMeter Maven Plugin',
  'InfluxDB + Grafana', 'Prometheus', 'BlazeMeter Cloud',
  'AWS EC2 Load Agents', 'GitHub Actions', 'Jenkins',
  'JUnit XML Reports', 'HTML Reports', 'Distributed Testing',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: '200+ Performance Tests',
    desc: 'Load tests delivered across e-commerce, fintech, healthcare, and SaaS platforms — from 100 to 100,000 concurrent users.',
  },
  {
    icon: <Users size={24} />,
    title: 'Certified Performance Engineers',
    desc: 'Our JMeter specialists have ISTQB Performance Testing certifications and hands-on experience with BlazeMeter, Taurus, and distributed setups.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Rapid Report Delivery',
    desc: 'Full performance test execution and detailed report with bottleneck analysis delivered within 24–72 hours of test plan sign-off.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Results You Can Act On',
    desc: 'We don\'t just hand over a PDF. We walk through findings with your engineering team, recommend fixes, and retest to confirm improvements.',
  },
]

export default function JMeter() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${jmeterBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Performance Testing with <span>Apache JMeter</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's performance engineers use Apache JMeter to simulate real-world traffic, identify bottlenecks, and
            validate that your application stays fast, stable, and available — even under peak load.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Get Performance Audit <Activity size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="jm-stats">
        <div className="jm-stats-grid sp-container">
          {[
            { num: '200+', label: 'Performance Projects' },
            { num: '100K+', label: 'Max Concurrent Users' },
            { num: '99.9%', label: 'Uptime Under Load' },
            { num: '12+', label: 'Years Experience' },
          ].map(s => (
            <div className="jm-stat" key={s.label}>
              <span className="jm-stat-num">{s.num}</span>
              <span className="jm-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">JMeter Performance Testing Services</h2>
            <p className="sp-subtext-large">
              From baseline benchmarking to massive distributed load tests — we cover every performance testing scenario
              your application needs to prove production-readiness.
            </p>
          </div>
          <div className="jm-svc-list">
            {services.map(svc => (
              <div className="jm-svc-row" key={svc.title}>
                <div className="jm-svc-num-col">
                  <span className="jm-svc-num">{svc.num}</span>
                  <span className="jm-svc-dot" />
                </div>
                <div className="jm-svc-content">
                  <div className="jm-svc-icon">{svc.icon}</div>
                  <div className="jm-svc-text">
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                    <div className="jm-svc-tags">
                      {svc.tags.map(t => <span className="jm-svc-tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JMETER */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why JMeter</p>
            <h2 className="sp-heading">Why Apache JMeter for Performance Testing?</h2>
            <p className="sp-subtext-large">
              The industry's most trusted open-source load testing tool — offering unmatched versatility, integration
              depth, and realistic user simulation capabilities.
            </p>
          </div>
          <div className="jm-why-grid">
            {whyJMeter.map(w => (
              <div className="jm-why-card" key={w.title}>
                <div className="jm-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="jm-metrics">
        <div className="sp-container">
          <div className="sp-overview-content" style={{ marginBottom: 0 }}>
            <p className="sp-label">Performance Targets</p>
            <h2 className="sp-heading" style={{ color: '#fff' }}>Performance Benchmarks We Deliver</h2>
            <p className="sp-subtext-large" style={{ color: 'rgba(255,255,255,0.6)' }}>
              The KPIs we engineer every application to meet under production traffic conditions.
            </p>
          </div>
          <div className="jm-metrics-grid">
            {metrics.map(m => (
              <div className="jm-metric-card" key={m.label}>
                <div className="jm-metric-icon">{m.icon}</div>
                <div className="jm-metric-val">{m.val}</div>
                <div className="jm-metric-label">{m.label}</div>
                <div className="jm-metric-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep Performance Testing Experience</h2>
            <p className="sp-subtext-large">
              A decade of load testing expertise across every industry, application type, and infrastructure stack.
            </p>
          </div>
          <div className="jm-exp-wrap">
            <ul className="jm-exp-list">
              {expItems.map(item => (
                <li className="jm-exp-item" key={item}>
                  <CheckCircle size={16} />{item}
                </li>
              ))}
            </ul>
            <div className="jm-exp-tags">
              {expTags.map(t => (
                <span className="jm-exp-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why Partner with BTPL for Performance Testing?</h2>
            <p className="sp-subtext-large">
              We treat performance as a product requirement — not an afterthought. Every engagement ends with
              actionable findings and measurable improvements.
            </p>
          </div>
          <div className="jm-btpl-grid">
            {btplCards.map(c => (
              <div className="jm-btpl-card" key={c.title}>
                <div className="jm-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #b71c1c, #0d1b2a)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Is Your Application Ready for Peak Traffic?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Let BTPL Soft run a comprehensive JMeter performance test and tell you exactly where your system will break —
            before your users find out.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
