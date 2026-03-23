import { Link } from 'react-router-dom'
import {
  Database, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './MongoDB.css'
import mongoBanner from '../../assets/services/geralt-ai-generated-9094599_1920.webp'

const services = [
  {
    icon: <Globe size={22} />,
    badge: 'Cloud DB',
    title: 'MongoDB Atlas & Cloud Database',
    snippet: ['{ "cluster": ', '"M10"', ', "provider": ', '"AWS"', ' }'],
    desc: 'MongoDB Atlas is the world\'s leading multi-cloud database service — running on AWS, Azure, and GCP simultaneously with automated failover and global distribution. We architect Atlas deployments from small serverless clusters for early-stage startups to multi-region sharded clusters processing millions of operations per second for enterprise applications. Atlas handles automated backups, server patching, scaling, and security so your engineering team focuses entirely on building product features instead of managing database infrastructure.',
    chips: ['Atlas Serverless', 'Atlas Dedicated', 'Multi-Cloud Clusters', 'Global Writes', 'Atlas Backups'],
  },
  {
    icon: <Layers size={22} />,
    badge: 'Modelling',
    title: 'Schema Design & Data Modelling',
    snippet: ['{ "pattern": ', '"embedded"', ', "refs": ', '[ ... ]', ' }'],
    desc: 'The document model is MongoDB\'s greatest strength — and its most nuanced design challenge. Our architects conduct deep data modelling workshops to determine the optimal embedding vs referencing strategy for every entity relationship in your application. We apply proven schema design patterns: Attribute Pattern for irregular attributes, Outlier Pattern for unbounded arrays, Computed Pattern for read-heavy aggregations, and Schema Versioning for zero-downtime migrations. Well-designed schemas eliminate N+1 problems, reduce round trips, and yield 10x read performance improvements over naively migrated relational schemas.',
    chips: ['Embedding Patterns', 'Schema Versioning', 'Attribute Pattern', 'Computed Pattern', 'Schema Validation'],
  },
  {
    icon: <Zap size={22} />,
    badge: 'Performance',
    title: 'Performance Tuning & Indexing',
    snippet: ['{ "$explain": ', 'true', ', "index": ', '"compound"', ' }'],
    desc: 'Slow MongoDB queries are almost always an indexing problem. Our performance engineers use MongoDB Compass, the Atlas Performance Advisor, and manual explain plan analysis to identify missing indexes, inefficient query shapes, and collection scan hot spots. We design compound indexes with the ESR (Equality–Sort–Range) rule, implement partial indexes for sparse data, build multikey indexes for array fields, and use Atlas Search\'s Lucene-based full-text indexes for application search features — reducing query latency from seconds to milliseconds.',
    chips: ['Compound Indexes', 'Explain Plans', 'Atlas Advisor', 'Aggregation Pipeline', 'Index Intersection'],
  },
  {
    icon: <RefreshCw size={22} />,
    badge: 'High Availability',
    title: 'Replication & High Availability',
    snippet: ['{ "replicaSet": ', '"rs0"', ', "members": ', '3', ' }'],
    desc: 'MongoDB Replica Sets provide automatic failover in under 12 seconds with zero data loss for all acknowledged writes. We configure priority-weighted election systems so primary promotion happens deterministically, deploy hidden secondaries for backup workloads, configure read preferences for geographic read distribution, and implement oplog sizing to accommodate maintenance windows. For Atlas, we configure multi-region clusters with electable nodes in each region ensuring your application survives complete regional availability zone failures without manual intervention.',
    chips: ['Replica Sets', 'Automatic Failover', 'Read Preferences', 'Oplog Sizing', 'Priority Voting'],
  },
  {
    icon: <Database size={22} />,
    badge: 'Scaling',
    title: 'Sharding & Horizontal Scaling',
    snippet: ['{ "shardKey": ', '"user_id"', ', "chunks": ', '256', ' }'],
    desc: 'When a single MongoDB replica set reaches storage or throughput limits, sharding distributes data across multiple replica sets (shards) — enabling theoretically unlimited horizontal scale. Shard key selection is the most critical architectural decision: a poorly chosen key causes uneven chunk distribution (jumbo chunks) and hot mongers that degrade performance. We conduct cardinality, frequency, and monotonicity analysis to select optimal shard keys, design zone sharding for geographic data locality, and manage chunk migration to maintain balanced distribution during rapid data growth.',
    chips: ['Shard Key Design', 'Zone Sharding', 'Config Servers', 'Mongos Routing', 'Chunk Balancing'],
  },
  {
    icon: <Shield size={22} />,
    badge: 'Security',
    title: 'MongoDB Security & Compliance',
    snippet: ['{ "role": ', '"readWrite"', ', "encrypt": ', 'true', ' }'],
    desc: 'We implement defence-in-depth MongoDB security: network isolation via VPC Peering and Private Endpoints, database-level RBAC with the principle of least privilege, TLS encryption in transit, and MongoDB Client-Side Field Level Encryption (CSFLE) to encrypt sensitive fields before they reach the server — ensuring even DBA staff cannot read PII in plaintext. For compliance workloads, Atlas Advanced Auditing logs every CRUD operation with user context, and we configure Atlas alerts for anomalous access patterns. We have delivered HIPAA, GDPR, SOC 2, and PCI-DSS compliant MongoDB deployments.',
    chips: ['Client-Side FLE', 'VPC Peering', 'Atlas Auditing', 'RBAC', 'Encryption at Rest'],
  },
]

const whyMongo = [
  {
    icon: <Layers size={22} />,
    title: 'Flexible Document Model',
    desc: 'The BSON document model stores data as it exists in application code — no ORM mapping, no JOIN complexity, no schema migration downtime for adding new fields. Documents in the same collection can have different shapes, enabling iterative product development without database migration sprints. For content management, user profiles, product catalogues, and event logs, the document model is significantly more natural than normalised relational tables.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Horizontal Scale at Any Point',
    desc: 'MongoDB\'s sharding architecture allows you to start with a single 512MB serverless instance and scale to petabytes across dozens of shards — on the same API, same driver, same query language. Scale-out happens without application code changes because the mongos router abstracts the shard topology entirely from your application. MongoDB\'s Realm Sync and Atlas Device SDK extend this scalability to the network edge and mobile devices.',
  },
  {
    icon: <Globe size={22} />,
    title: 'True Multi-Cloud & Multi-Region',
    desc: 'Atlas Global Clusters distribute your data across multiple cloud providers and regions simultaneously, with zone sharding pinning specific documents to geographic regions for data residency compliance. Read your nearest replica from any region for low-latency reads, while writes are globally replicated. No other managed database service offers true active-active multi-cloud distribution as a configuration checkbox.',
  },
  {
    icon: <Shield size={22} />,
    title: 'ACID Multi-Document Transactions',
    desc: 'MongoDB 4.x introduced full ACID multi-document, multi-collection transactions — eliminating the last architectural objection to MongoDB for financial and e-commerce workloads. Combined with the document model, you can handle most transaction scenarios with atomic single-document operations (no transactions needed), falling back to multi-document transactions only for genuinely distributed business operations.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Rich Query & Aggregation',
    desc: 'MongoDB\'s aggregation pipeline is a full in-database data processing engine — supporting $lookup (JOIN), $unwind, $group, $facet, $bucket, $graphLookup, geospatial operators, $text search, and now Atlas Vector Search for AI/ML workloads. The Aggregation Pipeline Optimizer automatically rewrites queries for maximum index usage, and Atlas brings the query results to a configurable compute tier so heavy analytics don\'t compete with OLTP operations.',
  },
  {
    icon: <Activity size={22} />,
    title: 'Change Streams & Real-Time Reactivity',
    desc: 'MongoDB Change Streams provide a subscribable cursor to a real-time stream of all database changes — perfect for event-sourcing architectures, cache invalidation, audit trails, and triggering downstream workflows without polling. Atlas Triggers integrate Change Streams with serverless functions for zero-infrastructure real-time processing. Atlas Stream Processing extends this to continuous queries over Apache Kafka topics alongside your MongoDB collections.',
  },
]

const mongoProducts = [
  { icon: <Database size={20} />, name: 'MongoDB Atlas', desc: 'Fully managed multi-cloud DBaaS' },
  { icon: <Activity size={20} />, name: 'Atlas Search', desc: 'Full-text search on MongoDB data' },
  { icon: <Zap size={20} />, name: 'Atlas Vector Search', desc: 'AI/ML semantic similarity search' },
  { icon: <Layers size={20} />, name: 'Atlas Data Lake', desc: 'Query S3 with MongoDB aggregation' },
  { icon: <BarChart2 size={20} />, name: 'MongoDB Charts', desc: 'Native data visualisation tool' },
  { icon: <RefreshCw size={20} />, name: 'Atlas Stream Processing', desc: 'Real-time Kafka + DB processing' },
  { icon: <Settings size={20} />, name: 'MongoDB Compass', desc: 'GUI for query & schema analysis' },
  { icon: <Package size={20} />, name: 'Realm / Device SDK', desc: 'Mobile & edge offline sync' },
]

const expItems = [
  'MongoDB Atlas multi-region cluster deployments',
  'Sharded cluster architecture for 100M+ document collections',
  'Client-Side Field Level Encryption for PII protection',
  'Atlas Search full-text search integration',
  'Atlas Vector Search for semantic AI search features',
  'Change Streams event-driven microservices',
  'Schema migrations with zero application downtime',
  'MongoDB → Atlas cloud migration with minimal disruption',
  'HIPAA-compliant Atlas deployments with Audit Logging',
  'Aggregation Pipeline performance tuning',
  'Atlas Triggers for serverless event processing',
  'Zone sharding for GDPR data residency compliance',
]

const expTags = [
  'MongoDB Atlas', 'Replica Sets', 'Sharding', 'CSFLE',
  'Atlas Search', 'Vector Search', 'Change Streams', 'Aggregation',
  'Atlas Triggers', 'Realm SDK', 'Compass', 'Atlas Data Lake',
  'Schema Design', 'BSON', 'PyMongo', 'Mongoose',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'MongoDB Certified Team',
    desc: 'Our engineers hold MongoDB Certified Developer and DBA credentials — with 200+ completed MongoDB Atlas projects across SaaS, e-commerce, healthcare, and fintech verticals.',
  },
  {
    icon: <Users size={24} />,
    title: 'Schema-First Approach',
    desc: 'We invest time in data modelling workshops before writing a single line of code. The right schema design prevents performance problems that would otherwise require expensive refactoring.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Atlas Migration Accelerator',
    desc: 'Our proven migration playbook moves your self-hosted MongoDB clusters to Atlas with full data validation, rollback capabilities, and zero-downtime cut-over in a single planned maintenance window.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Ongoing Atlas Operations',
    desc: 'Proactive Atlas monitoring, performance advisor remediation, index optimisation, backup verification, and cost rightsizing as a fully managed advisory service.',
  },
]

export default function MongoDB() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${mongoBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">MongoDB <span>Database Solutions</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's MongoDB-certified architects design, optimise, and operate document databases at any scale —
            from single Atlas serverless clusters to globally distributed multi-region sharded deployments processing
            millions of operations per second.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your MongoDB Project <Database size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mg-stats">
        <div className="mg-stats-grid sp-container">
          {[
            { num: '200+', label: 'MongoDB Projects' },
            { num: '5B+', label: 'Documents Managed' },
            { num: '99.99%', label: 'Atlas Uptime' },
            { num: '10+', label: 'Years Experience' },
          ].map(s => (
            <div className="mg-stat" key={s.label}>
              <span className="mg-stat-num">{s.num}</span>
              <span className="mg-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">MongoDB Services</h2>
            <p className="sp-sub">
              End-to-end MongoDB expertise — from Atlas cluster architecture and schema design to performance tuning,
              HA replication, horizontal sharding, and production security hardening.
            </p>
          </div>
          <div className="mg-svc-grid">
            {services.map(svc => (
              <div className="mg-svc-card" key={svc.title}>
                <div className="mg-svc-header">
                  <div className="mg-svc-icon">{svc.icon}</div>
                  <div className="mg-svc-header-text">
                    <div className="mg-svc-title">{svc.title}</div>
                    <span className="mg-svc-badge">{svc.badge}</span>
                  </div>
                </div>
                <div className="mg-svc-snippet">
                  {svc.snippet.map((part, i) => (
                    <span key={i} className={i % 2 === 0 ? '' : i % 4 === 1 ? 'mg-snip-val' : 'mg-snip-str'}>{part}</span>
                  ))}
                </div>
                <div className="mg-svc-body">
                  <p>{svc.desc}</p>
                  <div className="mg-svc-chips">
                    {svc.chips.map(c => <span className="mg-svc-chip" key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MONGODB */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why MongoDB</p>
            <h2 className="sp-heading">Why Choose MongoDB?</h2>
            <p className="sp-sub">
              MongoDB has grown from a niche NoSQL experiment to the world's most popular non-relational database —
              powering everything from global SaaS platforms to mission-critical financial systems. Here's why.
            </p>
          </div>
          <div className="mg-why-grid">
            {whyMongo.map(w => (
              <div className="mg-why-card" key={w.title}>
                <div className="mg-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Core Products</p>
            <h2 className="sp-heading">MongoDB Products We Work With</h2>
            <p className="sp-sub">
              The full MongoDB platform — from the Atlas managed cloud service to edge sync and real-time streaming processing.
            </p>
          </div>
          <div className="mg-products-grid">
            {mongoProducts.map(p => (
              <div className="mg-product-card" key={p.name}>
                <div className="mg-product-icon">{p.icon}</div>
                <div className="mg-product-name">{p.name}</div>
                <div className="mg-product-desc">{p.desc}</div>
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
            <h2 className="sp-heading">Deep MongoDB Engineering Experience</h2>
            <p className="sp-sub">
              From startup MVP to enterprise-grade Atlas deployments — our MongoDB engineers have solved every
              performance, scaling, and operational challenge the document database ecosystem throws at them.
            </p>
          </div>
          <div className="mg-exp-wrap">
            <ul className="mg-exp-list">
              {expItems.map(item => (
                <li className="mg-exp-item" key={item}>
                  <CheckCircle size={16} />{item}
                </li>
              ))}
            </ul>
            <div className="mg-exp-tags">
              {expTags.map(t => <span className="mg-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for MongoDB?</h2>
            <p className="sp-sub">
              Certified expertise, schema-first methodology, and proven migration tooling — delivering production-ready
              MongoDB systems from Atlas architecture to long-term database operations.
            </p>
          </div>
          <div className="mg-btpl-grid">
            {btplCards.map(c => (
              <div className="mg-btpl-card" key={c.title}>
                <div className="mg-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #001E2B, #013220)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Build on MongoDB?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're starting a greenfield Atlas cluster, migrating a self-hosted MongoDB deployment, or
            troubleshooting a performance crisis — BTPL Soft brings the expertise to solve it.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
