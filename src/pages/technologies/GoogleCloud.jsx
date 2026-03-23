import { Link } from 'react-router-dom'
import {
  Cloud, Server, Database, Shield, GitBranch, BarChart2,
  Zap, Globe, Lock, Layers, Settings,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Cpu, Activity, Package, Monitor, RefreshCw, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './GoogleCloud.css'
import gcpBanner from '../../assets/services/human-ai-touch-connection-technology-innovation.webp'

const services = [
  {
    icon: <Layers size={22} />,
    badge: 'Containers',
    title: 'Google Kubernetes Engine & Cloud Run',
    desc: 'We build and operate production Kubernetes infrastructure on Google Kubernetes Engine (GKE), the most battle-tested managed Kubernetes platform — developed by the inventors of Kubernetes. Our GKE configurations cover Autopilot and Standard modes, multi-region clusters, Workload Identity, Binary Authorization, and GKE Gateway API. For event-driven and containerised workloads that don\'t require Kubernetes complexity, Cloud Run provides fully managed auto-scaling containers billed per request — with zero infrastructure to manage.',
    chips: ['GKE Autopilot', 'GKE Standard', 'Cloud Run', 'Artifact Registry', 'Workload Identity'],
  },
  {
    icon: <BarChart2 size={22} />,
    badge: 'Analytics',
    title: 'BigQuery & Data Analytics Platform',
    desc: 'Google BigQuery is the world\'s most capable serverless data warehouse — capable of querying petabytes in seconds using standard SQL with no infrastructure provisioning. We architect end-to-end data platforms using BigQuery as the analytical core, Pub/Sub and Dataflow for real-time streaming ingestion, Cloud Composer (Airflow) for orchestration, and Looker / Looker Studio for business intelligence. Our Lakehouse architectures use BigLake tables to unify structured and unstructured data in Cloud Storage.',
    chips: ['BigQuery', 'Dataflow', 'Pub/Sub', 'Cloud Composer', 'Looker', 'BigLake'],
  },
  {
    icon: <Cpu size={22} />,
    badge: 'AI / ML',
    title: 'Vertex AI & Generative AI on GCP',
    desc: 'Google Cloud is at the forefront of AI — with Vertex AI as the unified MLOps platform covering dataset management, AutoML, custom training on TPUs and GPUs, model registry, experiment tracking, and managed endpoints. Vertex AI Search and Conversation provides enterprise-grade RAG architectures connecting your proprietary data to Gemini models. We build production AI applications using Gemini 1.5 Pro via Vertex AI, Document AI for intelligent document processing, and Cloud Vision / Speech APIs.',
    chips: ['Vertex AI', 'Gemini APIs', 'AutoML', 'Document AI', 'Cloud Vision', 'Vertex AI Search'],
  },
  {
    icon: <Database size={22} />,
    badge: 'Databases',
    title: 'Cloud Databases & Firebase',
    desc: 'We architect database strategies on GCP covering the full spectrum of data patterns: Cloud Spanner for globally distributed relational workloads with 99.999% SLA, Cloud SQL Managed (PostgreSQL and MySQL) for traditional relational needs, Cloud Bigtable for low-latency wide-column analytical workloads, Firestore for serverless document databases with real-time sync, and Firebase Realtime Database for mobile and web applications. Memorystore provides Redis and Memcached as managed in-memory caching layers.',
    chips: ['Cloud Spanner', 'Cloud SQL', 'Firestore', 'Firebase', 'Bigtable', 'Memorystore'],
  },
  {
    icon: <Shield size={22} />,
    badge: 'Security',
    title: 'GCP Security & Compliance',
    desc: 'We implement defence-in-depth on GCP using BeyondCorp Enterprise for zero-trust access, VPC Service Controls to create security perimeters around sensitive data, Cloud Armor WAF to protect internet-facing applications from DDoS and OWASP Top 10 attacks, and Security Command Center for centralised security posture management. Google Cloud\'s Confidential Computing (Confidential VMs, Confidential Space) lets you process encrypted data without ever exposing it to the infrastructure layer.',
    chips: ['BeyondCorp', 'VPC Service Controls', 'Cloud Armor', 'Security Command Center', 'IAM Conditions'],
  },
  {
    icon: <GitBranch size={22} />,
    badge: 'DevOps',
    title: 'GCP DevOps & Site Reliability',
    desc: 'We build fully automated Google Cloud deployment pipelines using Cloud Build, Cloud Deploy for progressive delivery to GKE and Cloud Run, and Artifact Registry for container and artefact management. Infrastructure is defined in Terraform with a GCS backend or Deployment Manager. We apply SRE practices — SLI/SLO/Error Budget definitions, alerting policies via Cloud Monitoring, distributed tracing with Cloud Trace, and structured logging via Cloud Logging with audit log exports to BigQuery.',
    chips: ['Cloud Build', 'Cloud Deploy', 'Terraform', 'Cloud Monitoring', 'Cloud Logging', 'Cloud Trace'],
  },
]

const whyGcp = [
  {
    icon: <BarChart2 size={22} />,
    title: 'Data & Analytics Leadership',
    desc: 'BigQuery processes over 110 petabytes of data daily for Google and customers worldwide. It pioneered the serverless analytics model that AWS and Azure are still catching up to. For data-intensive businesses, GCP\'s data stack — BigQuery, Dataflow, Pub/Sub, Looker, BigLake — represents the most capable, cohesive analytics platform in cloud computing.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Kubernetes at Its Origin',
    desc: 'Google invented Kubernetes and runs the world\'s largest Kubernetes deployments internally. GKE is continuously 12–18 months ahead of competitor managed Kubernetes offerings in features, stability, and security — with Autopilot mode eliminating node management entirely. No other cloud offers this depth of Kubernetes expertise embedded into their managed service.',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Most Advanced AI Platform',
    desc: 'Google Research invented Transformers, BERT, and the foundational architectures behind modern AI. Vertex AI integrates Gemini 1.5 Pro — Google\'s best model — with enterprise-grade data privacy, no training on your data, and TPU hardware delivering the best price-performance for large model training. For AI-first companies, GCP is the natural home.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Lowest-Latency Global Network',
    desc: 'Google operates one of the world\'s largest private global fibre networks — connecting all GCP regions via dedicated subsea cables without traversing the public internet. Cloud CDN operates from 200+ PoPs co-located with Google\'s edge infrastructure. For globally distributed applications, GCP delivers consistently lower inter-region and user-to-region latency than competitors.',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Open Source & Portability',
    desc: 'Google is the top open source contributor to Kubernetes, TensorFlow, Istio, Knative, gRPC, and many other foundational projects. GCP services are built on open standards — Cloud Spanner has an open-source compatible API (Spanner Emulator), BigQuery supports Delta Lake and Apache Iceberg via BigLake. No proprietary lock-in: your skills and architectures are portable.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Carbon-Neutral Since 2007',
    desc: 'Google has been carbon-neutral since 2007, purchases 100% renewable energy, and is targeting 24/7 carbon-free energy by 2030. GCP is the most sustainable major cloud provider — with detailed per-project carbon footprint reporting via Carbon Footprint in Cloud Console. For ESG-conscious organisations, choosing GCP is also choosing the most environmentally responsible cloud.',
  },
]

const gcpProducts = [
  { icon: <Layers size={20} />, name: 'Google Kubernetes Engine', desc: 'Managed Kubernetes by Kubernetes creators' },
  { icon: <BarChart2 size={20} />, name: 'BigQuery', desc: 'Serverless petabyte-scale analytics' },
  { icon: <Cloud size={20} />, name: 'Cloud Run', desc: 'Fully managed serverless containers' },
  { icon: <Cpu size={20} />, name: 'Vertex AI', desc: 'Unified MLOps & Gemini platform' },
  { icon: <Database size={20} />, name: 'Cloud Spanner', desc: 'Globally distributed SQL database' },
  { icon: <Activity size={20} />, name: 'Cloud Pub/Sub', desc: 'Global messaging & event ingestion' },
  { icon: <Shield size={20} />, name: 'Security Command Center', desc: 'Centralised security posture mgmt' },
  { icon: <Monitor size={20} />, name: 'Cloud Monitoring', desc: 'Full-stack observability & alerting' },
]

const expItems = [
  'GKE Autopilot production cluster deployments',
  'BigQuery data warehouse & Lakehouse architectures',
  'Vertex AI Gemini RAG application builds',
  'Cloud Spanner globally distributed OLTP',
  'Firebase + Firestore mobile & web backends',
  'Cloud Run serverless microservices',
  'Dataflow real-time streaming ETL pipelines',
  'BeyondCorp zero-trust access implementation',
  'Multi-region GCP Landing Zone setup',
  'Cloud Build + Cloud Deploy GitOps CI/CD',
  'Cloud Armor WAF protection for web apps',
  'GCP cost governance — 50%+ savings achieved',
]

const expTags = [
  'GKE', 'Cloud Run', 'BigQuery', 'Vertex AI', 'Cloud Spanner',
  'Firestore', 'Firebase', 'Dataflow', 'Pub/Sub', 'Cloud Composer',
  'Looker', 'Cloud Build', 'Cloud Deploy', 'Terraform', 'Bicep',
  'Cloud Armor', 'BeyondCorp', 'Gemini APIs', 'Cloud Monitoring',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'Google Cloud Certified Team',
    desc: 'Our engineers hold Google Cloud Professional certifications in Cloud Architecture, Data Engineering, ML Engineering, and Security — with verified delivery across 90+ GCP projects.',
  },
  {
    icon: <Users size={24} />,
    title: 'Data & AI Specialists',
    desc: 'We have dedicated GCP data engineers and ML engineers — not generalists. Specialists for BigQuery, Vertex AI, and Dataflow pipelines are available from day one.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Accelerator Templates',
    desc: 'Pre-built Terraform modules for GCP Landing Zones, GKE clusters, BigQuery data warehouses, and Cloud Run services cut your deployment time by weeks.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Managed GCP Operations',
    desc: 'Proactive GCP infrastructure management, cost rightsizing, security reviews, SLO monitoring, and incident response as a fully managed service — not break-fix support.',
  },
]

export default function GoogleCloud() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${gcpBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Cloud Solutions on <span>Google Cloud</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's Google Cloud certified engineers build data-intensive, AI-first, and Kubernetes-native
            architectures on GCP — the cloud platform invented by Google for the problems Google solved first at planet scale.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your GCP Project <Cloud size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="gc-stats">
        <div className="gc-stats-grid sp-container">
          {[
            { num: '90+', label: 'GCP Projects Delivered' },
            { num: 'PB-scale', label: 'Data Processed on BigQuery' },
            { num: '99.999%', label: 'Spanner SLA Maintained' },
            { num: '8+', label: 'Years Google Cloud Experience' },
          ].map(s => (
            <div className="gc-stat" key={s.label}>
              <span className="gc-stat-num">{s.num}</span>
              <span className="gc-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">Google Cloud Services</h2>
            <p className="sp-sub">
              From Kubernetes-native applications and petabyte analytics to generative AI and zero-trust security —
              our GCP expertise spans the full platform.
            </p>
          </div>
          <div className="gc-svc-grid">
            {services.map(svc => (
              <div className="gc-svc-card" key={svc.title}>
                <div className="gc-svc-top">
                  <div className="gc-svc-icon">{svc.icon}</div>
                  <span className="gc-svc-badge">{svc.badge}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="gc-svc-chips">
                  {svc.chips.map(c => <span className="gc-svc-chip" key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GCP */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Google Cloud</p>
            <h2 className="sp-heading">Why Choose Google Cloud Platform?</h2>
            <p className="sp-sub">
              GCP consistently leads industry benchmarks in data analytics performance, Kubernetes capabilities, and AI platform depth.
              Here's what makes GCP the right choice for forward-thinking companies.
            </p>
          </div>
          <div className="gc-why-grid">
            {whyGcp.map(w => (
              <div className="gc-why-card" key={w.title}>
                <div className="gc-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GCP PRODUCTS */}
      <section className="sp-section gc-products-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Core Services</p>
            <h2 className="sp-heading">Key GCP Services We Work With</h2>
            <p className="sp-sub">
              The foundation of every GCP architecture we build — compute, data, AI, messaging, and operations.
            </p>
          </div>
          <div className="gc-products-grid">
            {gcpProducts.map(p => (
              <div className="gc-product-card" key={p.name}>
                <div className="gc-product-icon">{p.icon}</div>
                <div className="gc-product-name">{p.name}</div>
                <div className="gc-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep Google Cloud Engineering Experience</h2>
            <p className="sp-sub">
              Our GCP engineers have built everything from real-time streaming data pipelines and multi-region
              Kubernetes platforms to production Vertex AI RAG applications and BigQuery data warehouses.
            </p>
          </div>
          <div className="gc-exp-wrap">
            <ul className="gc-exp-list">
              {expItems.map(item => (
                <li className="gc-exp-item" key={item}>
                  <CheckCircle size={16} />{item}
                </li>
              ))}
            </ul>
            <div className="gc-exp-tags">
              {expTags.map(t => <span className="gc-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for Google Cloud?</h2>
            <p className="sp-sub">
              Certified engineers, domain-specialist teams, and proven accelerators — delivering GCP excellence
              from the first architecture review through to long-term operations.
            </p>
          </div>
          <div className="gc-btpl-grid">
            {btplCards.map(c => (
              <div className="gc-btpl-card" key={c.title}>
                <div className="gc-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #1a73e8, #0d2b6e)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Build on Google Cloud?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're migrating workloads to GCP, building a BigQuery data platform, running AI on Vertex AI,
            or scaling Kubernetes on GKE — BTPL Soft brings the expertise to accelerate your journey.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
