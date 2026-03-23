import { Link } from 'react-router-dom'
import {
  Database, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './PostgreSQL.css'
import pgBanner from '../../assets/services/istockphoto-2195043685-1024x1024.webp'

const services = [
  {
    icon: <Database size={22} />,
    name: 'Architecture & Schema Design',
    desc: 'Normalised schema design, table partitioning, inheritance, DDL review, and database capacity planning aligned with your application\'s query access patterns and scaling roadmap.',
    chips: ['Schema Normalisation', 'Table Partitioning', 'pg_partman', 'DDL Review'],
  },
  {
    icon: <Zap size={22} />,
    name: 'Query Performance & Tuning',
    desc: 'EXPLAIN ANALYZE deep-dives, index strategy design (B-tree, GIN, GiST, BRIN, partial, covering), pg_stat_statements analysis, autovacuum tuning, and configuration parameter optimisation for your specific workload.',
    chips: ['EXPLAIN ANALYZE', 'Covering Indexes', 'pg_stat_statements', 'Autovacuum Tuning'],
  },
  {
    icon: <RefreshCw size={22} />,
    name: 'High Availability & Replication',
    desc: 'Streaming replication with Patroni automatic failover (pgBouncer + HAProxy), logical replication for zero-downtime major version upgrades, pg_basebackup and WAL archiving for PITR, and standby promotion runbooks.',
    chips: ['Patroni', 'Streaming Replication', 'Logical Replication', 'Pgpool-II', 'PITR'],
  },
  {
    icon: <Layers size={22} />,
    name: 'Extensions & Advanced Features',
    desc: 'PostGIS for spatial and geographic queries, pgvector for AI/ML similarity search on embeddings, TimescaleDB for time-series workloads, pg_partman for automated partition management, and Citus for distributed PostgreSQL at multi-terabyte scale.',
    chips: ['PostGIS', 'pgvector', 'TimescaleDB', 'Citus', 'pg_partman'],
  },
  {
    icon: <Globe size={22} />,
    name: 'Migration to PostgreSQL',
    desc: 'Full assessment and migration from Oracle, MySQL, and SQL Server to PostgreSQL using pgloader, AWS SCT, and custom transformation scripts — handling stored procedures, sequences, data type conversion, and constraint migration with validated row counts.',
    chips: ['Oracle → PG', 'MySQL → PG', 'pgloader', 'AWS SCT', 'Data Validation'],
  },
  {
    icon: <Shield size={22} />,
    name: 'Managed Cloud PostgreSQL',
    desc: 'Architecture and ongoing operations for managed PostgreSQL services: Amazon RDS/Aurora PostgreSQL, Google Cloud SQL for PostgreSQL, Azure Database for PostgreSQL Flexible Server, and Supabase — including parameter tuning, read replica setup, connection pooling, and cost optimisation.',
    chips: ['RDS PostgreSQL', 'Cloud SQL PG', 'Azure DB for PG', 'Supabase', 'Aurora PostgreSQL'],
  },
]

const whyPg = [
  {
    icon: <Award size={22} />,
    title: 'Most Advanced Open-Source RDBMS',
    desc: 'PostgreSQL has been "The World\'s Most Advanced Open Source Relational Database" — a title it\'s earned through 35+ years of active development. It supports table inheritance, foreign data wrappers, advanced window functions, CTEs with writeable statements, deferrable constraints, and partial indexes — features enterprise DBMSs charge premium licence fees for. Version 17 adds vectorised execution, incremental query sorting, and asynchronous parallel queries.',
  },
  {
    icon: <Shield size={22} />,
    title: 'True ACID with MVCC',
    desc: 'PostgreSQL implements Multi-Version Concurrency Control (MVCC) where readers never block writers and writers never block readers — enabling high-concurrency OLTP without lock contention that is common in MySQL MyISAM and older RDBMS architectures. Serializable Snapshot Isolation (SSI) provides true serializable transaction semantics without explicit table locks, handling anomalies like write skew that simpler snapshot isolation misses.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Unmatched Extension Ecosystem',
    desc: 'PostgreSQL\'s extension system allows adding data types, functions, operators, index types, and procedural languages as first-class database objects. PostGIS turns PostgreSQL into the world\'s most capable spatial database. pgvector enables AI vector similarity search. TimescaleDB adds time-series compression and continuous aggregates. Citus provides distributed PostgreSQL. No other open-source RDBMS has this breadth of mature community extensions.',
  },
  {
    icon: <Globe size={22} />,
    title: 'JSON & Multi-Model Flexibility',
    desc: 'PostgreSQL\'s JSONB storage with GIN indexing supports hybrid relational-document workloads without switching database engines. Store structured data in normalised tables, semi-structured documents in JSONB columns, and geospatial data via PostGIS — all in the same transaction with full ACID guarantees and unified SQL access across every data model. This eliminates the operational overhead of managing a separate MongoDB or Elasticsearch cluster for unstructured data.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Cost-Effective Scalability',
    desc: 'PostgreSQL scales from a single node to multi-terabyte distributed deployments via Citus without changing application code or paying per-CPU licence fees. Managed services like Amazon Aurora PostgreSQL auto-scale storage to 128TB and replicate across six availability zones. Google Cloud AlloyDB delivers 4x faster analytical queries through columnar acceleration — all on the same PostgreSQL wire protocol your application already speaks.',
  },
  {
    icon: <Lock size={22} />,
    title: 'Enterprise Security Without Enterprise Pricing',
    desc: 'PostgreSQL delivers row-level security (RLS), SSL/TLS encryption in transit, pgcrypto for at-rest column encryption, and comprehensive audit logging via pgaudit — all without the CPU-socket licence fees that commercial databases charge. Amazon RDS, Azure Database for PostgreSQL, and Supabase build PCI-DSS and HIPAA-compliant managed services entirely on these built-in capabilities.',
  },
]

const pgProducts = [
  { icon: <Database size={20} />, name: 'PostgreSQL 17', desc: 'Core RDBMS with vectorised execution' },
  { icon: <Globe size={20} />, name: 'PostGIS', desc: 'World-class spatial & geospatial extension' },
  { icon: <Zap size={20} />, name: 'pgvector', desc: 'AI/ML embedding similarity search' },
  { icon: <Activity size={20} />, name: 'TimescaleDB', desc: 'Time-series hypertable compression' },
  { icon: <Layers size={20} />, name: 'Citus', desc: 'Distributed PostgreSQL at scale' },
  { icon: <Server size={20} />, name: 'Patroni + HAProxy', desc: 'Automatic HA failover stack' },
  { icon: <Package size={20} />, name: 'pgBouncer', desc: 'High-performance connection pooler' },
  { icon: <Settings size={20} />, name: 'pgAdmin / Supabase', desc: 'Management & developer tooling' },
]

const expItems = [
  'PostgreSQL schema design for 1B+ row production tables',
  'Amazon RDS Aurora PostgreSQL multi-AZ cluster deployments',
  'Patroni + HAProxy automatic failover with sub-30-second recovery',
  'PostGIS spatial queries for mapping, routing & logistics applications',
  'pgvector semantic search pipelines for RAG AI applications',
  'TimescaleDB IoT time-series ingestion with automatic chunk compression',
  'Zero-downtime Oracle & MySQL → PostgreSQL migrations',
  'Supabase real-time backends for Next.js and React SaaS products',
  'Row-Level Security for strict multi-tenant SaaS data isolation',
  'PITR recovery testing and WAL archiving to Amazon S3',
  'pg_partman automated monthly partition lifecycle management',
  'Logical replication for major version zero-downtime upgrades',
]

const expTags = [
  'PostgreSQL 17', 'Aurora PostgreSQL', 'RDS PostgreSQL', 'Cloud SQL PG',
  'PostGIS', 'pgvector', 'TimescaleDB', 'Citus',
  'Patroni', 'pgBouncer', 'pgaudit', 'pg_partman',
  'EXPLAIN ANALYZE', 'MVCC', 'WAL Archiving', 'PITR',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'PostgreSQL Architecture Experts',
    desc: 'Our PostgreSQL DBAs have designed schemas, built replication topologies, and tuned execution plans for production systems handling 50,000+ TPS in regulated industries including fintech and healthcare.',
  },
  {
    icon: <Users size={24} />,
    title: 'Migration Factory Methodology',
    desc: 'We migrate Oracle and MySQL schemas to PostgreSQL using a proven 10-step process — covering type mapping, PL/SQL conversion, data migration, row-count validation, and zero-downtime cut-over with full rollback capability.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Performance-Driven Tuning',
    desc: 'Our performance reviews cover every slow query log entry with EXPLAIN ANALYZE, index redesign, autovacuum configuration, and connection pool tuning — backed by measurable before/after benchmark comparisons.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Managed DBA as a Service',
    desc: 'Ongoing operations covering major version upgrades, security patching, backup validation, index maintenance, and 24/7 alert response — so your engineering team stays focused on product features.',
  },
]

export default function PostgreSQL() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${pgBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">PostgreSQL <span>Database Solutions</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's PostgreSQL engineers design, optimise, and operate the world's most advanced open-source
            relational database — from single-node production deployments to globally distributed Aurora PostgreSQL
            clusters processing millions of transactions per minute.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your PostgreSQL Project <Database size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="pg-stats">
        <div className="pg-stats-grid sp-container">
          {[
            { num: '180+', label: 'PostgreSQL Projects' },
            { num: '1TB+', label: 'Data Under Management' },
            { num: '99.98%', label: 'Managed Uptime SLA' },
            { num: '10+', label: 'Years Experience' },
          ].map(s => (
            <div className="pg-stat" key={s.label}>
              <span className="pg-stat-num">{s.num}</span>
              <span className="pg-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ SERVICES — SQL table metaphor ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">PostgreSQL Services</h2>
            <p className="sp-sub">
              End-to-end PostgreSQL expertise — from schema architecture and extension deployment to performance
              tuning, HA replication, cloud migrations, and fully managed database operations.
            </p>
          </div>
          <div className="pg-svc-table">
            <div className="pg-svc-table-head">
              <span> </span>
              <span>Service</span>
              <span>Description</span>
              <span>Capabilities</span>
            </div>
            {services.map(svc => (
              <div className="pg-svc-row" key={svc.name}>
                <div className="pg-svc-row-icon">{svc.icon}</div>
                <div className="pg-svc-row-name">{svc.name}</div>
                <div className="pg-svc-row-desc">{svc.desc}</div>
                <div className="pg-svc-row-chips">
                  {svc.chips.map(c => <span className="pg-svc-chip" key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY POSTGRESQL ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why PostgreSQL</p>
            <h2 className="sp-heading">Why Choose PostgreSQL?</h2>
            <p className="sp-sub">
              PostgreSQL has earned the title "World's Most Advanced Open Source Relational Database" over 35+
              years of active development — trusted by Apple, Instagram, Spotify, and thousands of SaaS companies globally.
            </p>
          </div>
          <div className="pg-why-grid">
            {whyPg.map(w => (
              <div className="pg-why-card" key={w.title}>
                <div className="pg-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ECOSYSTEM ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Ecosystem</p>
            <h2 className="sp-heading">PostgreSQL Ecosystem We Master</h2>
            <p className="sp-sub">
              From core PostgreSQL to world-class extensions and cloud-managed services — we leverage the full
              ecosystem to deliver the right tool for every workload type and scale.
            </p>
          </div>
          <div className="pg-products-grid">
            {pgProducts.map(p => (
              <div className="pg-product-card" key={p.name}>
                <div className="pg-product-icon">{p.icon}</div>
                <div className="pg-product-name">{p.name}</div>
                <div className="pg-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ EXPERIENCE ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep PostgreSQL Engineering Experience</h2>
            <p className="sp-sub">
              From startup MVP to enterprise-grade relational systems — our PostgreSQL engineers have solved every
              performance, scaling, and operational challenge the ecosystem can present.
            </p>
          </div>
          <div className="pg-exp-wrap">
            <ul className="pg-exp-list">
              {expItems.map(item => (
                <li className="pg-exp-item" key={item}><CheckCircle size={16} />{item}</li>
              ))}
            </ul>
            <div className="pg-exp-tags">
              {expTags.map(t => <span className="pg-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY BTPL ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for PostgreSQL?</h2>
            <p className="sp-sub">
              Certified expertise, a migration factory methodology, and performance-first engineering — delivering
              production-ready PostgreSQL systems from architecture through to long-term managed operations.
            </p>
          </div>
          <div className="pg-btpl-grid">
            {btplCards.map(c => (
              <div className="pg-btpl-card" key={c.title}>
                <div className="pg-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #2e5b82, #336791)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Take PostgreSQL to Production?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're starting a new schema, migrating from Oracle or MySQL, or troubleshooting a performance
            crisis — BTPL Soft brings the deep PostgreSQL expertise to solve it right.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}