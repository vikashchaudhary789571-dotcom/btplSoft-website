import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Zap, Globe, Layers,
  GitBranch, Monitor, RefreshCw, Database, Code,
  Users, Lock, TrendingUp, Clock, Shield, Cpu
} from 'lucide-react'
import '../services/ServicePage.css'
import './NodeJS.css'
import nodeBanner from '../../assets/services/standard-quality-control-concept-m.webp'

const services = [
  {
    icon: <Zap size={24} />, title: 'Real-Time Application Development',
    desc: 'Node.js\'s event-driven, non-blocking I/O makes it the ideal platform for live dashboards, collaborative editing tools, live sports/finance feeds, and multi-player experiences. We build on Socket.IO or native WebSockets with Redis pub/sub for horizontal scaling.',
    tags: ['Socket.IO', 'WebSockets', 'Redis Pub/Sub'],
  },
  {
    icon: <Globe size={24} />, title: 'REST & GraphQL API Development',
    desc: 'We design and build production REST APIs with Express.js or Fastify, and GraphQL endpoints with Apollo Server — complete with DataLoader batching, persisted queries, rate limiting, JWT authentication, and auto-generated API documentation.',
    tags: ['Express.js', 'Fastify', 'Apollo GraphQL'],
  },
  {
    icon: <Layers size={24} />, title: 'Node.js Microservices & BFF',
    desc: 'Backend-for-frontend patterns and microservice gateways built on Node.js aggregate downstream services, handle protocol translation, and serve optimised payloads to mobile and web clients — reducing round trips and improving perceived performance dramatically.',
    tags: ['BFF Pattern', 'API Gateway', 'gRPC'],
  },
  {
    icon: <GitBranch size={24} />, title: 'Serverless Node.js Functions',
    desc: 'Event-driven serverless architectures on AWS Lambda, Google Cloud Functions, and Vercel Edge Runtime allow us to build infinitely scalable, pay-per-invocation backends. We handle cold-start optimisation, bundling with esbuild, and secrets management.',
    tags: ['AWS Lambda', 'Vercel Edge', 'esbuild'],
  },
  {
    icon: <Monitor size={24} />, title: 'Streaming & Media APIs',
    desc: 'High-throughput data streaming APIs for video processing, IoT telemetry ingestion, log aggregation, and real-time analytics — built using Node.js streams, Kafka consumers, and chunked-transfer endpoints that handle gigabytes of data without buffering.',
    tags: ['Node.js Streams', 'Kafka', 'FFmpeg'],
  },
  {
    icon: <RefreshCw size={24} />, title: 'Node.js Migration & Upgrade',
    desc: 'Upgrade legacy Express 4 or Hapi apps to current Fastify-based architectures. We also migrate callback-heavy codebases to modern async/await patterns, add TypeScript strict mode, and wire up comprehensive test suites before touching a line of production code.',
    tags: ['Express→Fastify', 'TypeScript', 'Jest+Supertest'],
  },
]

const whyNode = [
  { icon: <Zap size={24} />, title: 'Non-Blocking I/O = Massive Throughput', desc: 'Node.js handles tens of thousands of concurrent connections on a single thread through its event loop. This is why Netflix, LinkedIn, and Uber chose Node.js for their most traffic-heavy services.' },
  { icon: <Code size={24} />, title: 'Unified JavaScript Stack', desc: 'Sharing code, types, validation schemas, and even UI components between frontend and backend eliminates entire categories of bugs and dramatically accelerates full-stack feature development.' },
  { icon: <Layers size={24} />, title: 'World\'s Largest Package Ecosystem', desc: 'npm\'s 2.5 million packages mean there\'s a battle-tested library for almost every integration, utility, or protocol — significantly reducing the custom code that needs to be written and maintained.' },
  { icon: <Globe size={24} />, title: 'Edge & Serverless Native', desc: 'Node.js runtimes (V8-based) power Cloudflare Workers, Vercel Edge Functions, and Deno Deploy — making Node APIs deployable to 200+ global edge locations with sub-10ms cold starts.' },
  { icon: <Shield size={24} />, title: 'Thriving LTS Release Cadence', desc: 'Node.js\'s predictable even-year LTS releases and OpenJS Foundation governance ensure long-term security patches and API stability — crucial for enterprise and regulated-industry deployments.' },
  { icon: <TrendingUp size={24} />, title: 'Cost-Effective Scaling', desc: 'Node.js\'s concurrency model means you need fewer server instances to handle the same load compared to thread-per-request runtimes — translating directly to lower infrastructure bills at scale.' },
]

const metrics = [
  { icon: <Zap size={22} />, title: 'Real-Time Projects', sub: '80+ live dashboards & collaborative apps shipped' },
  { icon: <Globe size={22} />, title: 'API Projects', sub: '200+ REST & GraphQL backends in production' },
  { icon: <Layers size={22} />, title: 'Microservices', sub: '60+ event-driven microservice architectures' },
  { icon: <Monitor size={22} />, title: 'Serverless Functions', sub: '40+ Lambda & Edge deployments optimised' },
  { icon: <Database size={22} />, title: 'Database Integrations', sub: 'Mongo, Postgres, Redis, Elasticsearch, DynamoDB' },
  { icon: <Shield size={22} />, title: 'Security Audits', sub: '50+ Node.js apps hardened & pen-tested' },
  { icon: <TrendingUp size={22} />, title: 'Performance Gains', sub: 'Avg. 4x throughput improvement on legacy Node apps' },
  { icon: <RefreshCw size={22} />, title: 'Migration Projects', sub: '30+ Express→Fastify + TypeScript rewrites' },
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Full-Stack Node.js Team', desc: 'Our engineers cover the complete Node.js surface area — APIs, real-time, serverless, CLI tooling, and DevOps pipeline setup — so you get a complete solution from one team.' },
  { icon: <Cpu size={22} />, title: 'Performance as a First Principle', desc: 'We profile every Node.js application using Clinic.js and Node.js built-in performance hooks before delivery, ensuring zero N+1 database queries and optimal event-loop utilisation.' },
  { icon: <Lock size={22} />, title: 'Secure by Default', desc: 'Helmet.js security headers, input validation with Zod, parameterised queries, dependency auditing, and rate limiting are part of every Node.js project template we start from.' },
  { icon: <Clock size={22} />, title: 'Production Support Included', desc: 'Every Node.js delivery includes 30 days of post-launch production support — covering hotfixes, dependency security patches, and performance monitoring alert tuning.' },
]

export default function NodeJS() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${nodeBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>Node.js</span> Development for Real-Time, Scalable Platforms</h1>
          <p className="sp-hero-desc">
            BTPL Soft's Node.js engineers build high-throughput APIs, real-time applications,
            and serverless backends that handle millions of concurrent connections — using the
            non-blocking JavaScript runtime trusted by Netflix, LinkedIn, and Uber.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Build with Node.js <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="nd-stats">
        <div className="sp-container">
          <div className="nd-stats-grid">
            <div className="nd-stat"><span className="nd-stat-num"><span>350+</span></span><div className="nd-stat-label">Node.js Projects</div></div>
            <div className="nd-stat"><span className="nd-stat-num"><span>10+</span></span><div className="nd-stat-label">Years Experience</div></div>
            <div className="nd-stat"><span className="nd-stat-num"><span>50M+</span></span><div className="nd-stat-label">API Requests / Day</div></div>
            <div className="nd-stat"><span className="nd-stat-num"><span>99.95%</span></span><div className="nd-stat-label">Average Uptime</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-green)' }}>What We Build</p>
            <h2 className="sp-heading">Node.js Development Services</h2>
            <p className="sp-sub">From real-time WebSocket platforms to serverless edge functions — our Node.js team picks the right architecture pattern for your exact throughput, latency, and cost requirements.</p>
          </div>
          <div className="nd-svc-grid">
            {services.map((s, i) => (
              <div className="nd-svc-card" key={i}>
                <div className="nd-svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="nd-tags">{s.tags.map(t => <span className="nd-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NODE.JS */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">The Technology</p>
            <h2 className="sp-heading sp-heading-white">Why Node.js?</h2>
            <p className="sp-sub" style={{ color: 'var(--gray-300)' }}>No other runtime matches Node.js for I/O intensive workloads, unified JavaScript development, and ecosystem breadth. It's the backbone of the modern real-time web.</p>
          </div>
          <div className="nd-why-grid">
            {whyNode.map((w, i) => (
              <div className="nd-why-card" key={i}>
                <div className="nd-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE — METRICS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-green)' }}>Track Record</p>
            <h2 className="sp-heading">Node.js Development Experience</h2>
          </div>
          <div className="nd-metrics-grid">
            {metrics.map((m, i) => (
              <div className="nd-metric" key={i}>
                <div className="nd-metric-icon">{m.icon}</div>
                <div className="nd-metric-title">{m.title}</div>
                <div className="nd-metric-sub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-green)' }}>Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL Soft for Node.js Development?</h2>
          </div>
          <div className="nd-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="nd-btpl-card" key={i}>
                <div className="nd-btpl-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta" style={{ background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Ready to Build a High-Performance Node.js Platform?</h2>
          <p style={{ color: '#37474f' }}>Share your requirements and our Node.js architects will deliver a free, detailed technical proposal — within 24 hours, no strings attached.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#2E7D32', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
