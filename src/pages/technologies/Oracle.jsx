import { Link } from 'react-router-dom'
import {
  Database, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './Oracle.css'
import oracleBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

const services = [
  {
    num: '01',
    icon: <Server size={22} />,
    title: 'Oracle Database Architecture & RAC',
    desc: 'We design and implement Oracle Real Application Clusters (RAC) — the gold standard for database high availability and scalability, providing active-active load balancing across multiple nodes so a single server failure never causes application downtime. Our architects dimension RAC clusters for OLTP and DSS mixed workloads, configure Automatic Storage Management (ASM) disk groups for optimal I/O parallelism, implement Grid Infrastructure with SCAN listeners for seamless client failover, and establish Data Guard physical standby databases for disaster recovery with RPO near zero and sub-minute RTO through Fast-Start Failover.',
    chips: ['Oracle RAC', 'Data Guard', 'ASM', 'Grid Infrastructure', 'SCAN Listeners'],
  },
  {
    num: '02',
    icon: <Zap size={22} />,
    title: 'Performance Tuning & SQL Optimisation',
    desc: 'Oracle\'s Automatic Workload Repository (AWR) and Active Session History (ASH) provide a uniquely deep view into database performance — capturing every wait event, SQL execution statistic, and session activity sample at subsecond granularity. Our DBAs analyse AWR comparison reports to pinpoint performance regressions, use ASH to identify instantaneous I/O contention and locking events, invoke the SQL Tuning Advisor and SQL Access Advisor for automated index recommendations, and manually rewrite suboptimal execution plans using optimizer hints, SQL Baselines, or SQL Profiles — consistently achieving 5x–50x query speed improvements on production Oracle workloads.',
    chips: ['AWR / ASH Analysis', 'SQL Tuning Advisor', 'Execution Plan Tuning', 'SQL Baselines', 'Optimizer Hints'],
  },
  {
    num: '03',
    icon: <Globe size={22} />,
    title: 'Oracle to Cloud & Open-Source Migration',
    desc: 'The ROI from migrating Oracle workloads to PostgreSQL, Amazon Aurora, or Oracle Autonomous Database is compelling — but execution risk is high without deep Oracle and target-platform expertise. Our migration factory converts PL/SQL packages, procedures, and triggers to PL/pgSQL, handles Oracle-specific data types (NUMBER, VARCHAR2, DATE semantics, INTERVAL), transforms implicit conversions, rewrites CONNECT BY hierarchical queries to recursive CTEs, and validates every migrated object with automated regression test suites comparing row counts, checksums, and procedure output across both platforms.',
    chips: ['Oracle → PostgreSQL', 'Oracle → Aurora', 'PL/SQL Conversion', 'Schema Validation', 'AWS SCT'],
  },
  {
    num: '04',
    icon: <Layers size={22} />,
    title: 'Oracle E-Business Suite & ERP Support',
    desc: 'Oracle E-Business Suite and Oracle Fusion ERP systems have uniquely demanding database requirements — thousands of objects, complex interdependencies, strict patch dependency chains, and catastrophic consequences for unplanned downtime. Our Oracle Application DBAs understand EBS R12.2 online patching (EBR — Edition-Based Redefinition), AD/TXK patch utilities, and the autoconfig and rapid clone methodologies for system cloning. We manage EBS database upgrades, performance tuning for custom RICEW objects, and disaster recovery configurations without impacting business-critical financial processes.',
    chips: ['Oracle EBS R12.2', 'EBR Online Patching', 'AD/TXK', 'Rapid Clone', 'Fusion DB Support'],
  },
  {
    num: '05',
    icon: <Shield size={22} />,
    title: 'Oracle Security & Unified Auditing',
    desc: 'Oracle Database Vault prevents even privileged DBAs from accessing application schemas — a critical control for regulatory compliance environments. We implement Transparent Data Encryption (TDE) for data at rest, configure column-level encryption for PII, deploy Virtual Private Database (VPD) for row-level security based on application context, and enable Oracle Unified Auditing to meet PCI-DSS, HIPAA, SOX, and GDPR audit logging requirements. Oracle Label Security provides mandatory access controls for classified or multi-tenant data isolation.',
    chips: ['Database Vault', 'TDE Encryption', 'VPD Row Security', 'Unified Auditing', 'Label Security'],
  },
  {
    num: '06',
    icon: <Layers size={22} />,
    title: 'Oracle Autonomous Database & OCI',
    desc: 'Oracle Autonomous Database (ADB) automates tuning, patching, and scaling — completely eliminating routine DBA toil for standard OLTP and analytics workloads. We architect Autonomous Transaction Processing (ATP) and Autonomous Data Warehouse (ADW) deployments on Oracle Cloud Infrastructure (OCI), configure Exadata Cloud@Customer for on-premises Exadata performance with OCI management overhead, implement Oracle Golden Gate for real-time replication and CDC pipelines, and establish Autonomous Database Serverless deployments for variable workloads that scale to zero between usage periods.',
    chips: ['Autonomous DB (ATP/ADW)', 'OCI Exadata', 'GoldenGate CDC', 'Database@Azure', 'Serverless ADB'],
  },
]

const whyOracle = [
  {
    icon: <Zap size={22} />,
    title: 'Unmatched Enterprise Performance',
    desc: 'Oracle Database Exadata hardware combines columnar flash storage, RDMA network fabric, and Smart Scan offloading to deliver query performance that is 10–100x faster than commodity server hardware. For OLTP, Oracle\'s In-Memory Column Store enables dual-format storage — row for DML and columnar for analytics — in the same database instance, eliminating ETL pipelines to separate analytical stores and delivering sub-second aggregation over billions of rows without materialised views.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Industry-Leading High Availability',
    desc: 'Oracle Real Application Clusters (RAC) provides active-active multi-node database processing with sub-second automatic failover — a capability that no other RDBMS approaches. Data Guard and Active Data Guard maintain fully synchronised physical standby databases with automated Fast-Start Failover achieving less than 30-second RTO and zero RPO for synchronous protection modes. Oracle Maximum Availability Architecture (MAA) Gold tier delivers 99.999% availability — five nines — through RAC + Data Guard + GoldenGate combined.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Complete Multi-Cloud & Hybrid Flexibility',
    desc: 'Oracle Autonomous Database and OCI services run natively on Oracle Cloud Infrastructure, AWS (Database@AWS), Azure (Database@Azure), and Google Cloud — bringing Oracle-grade performance to multi-cloud strategies without cross-cloud egress fees. Exadata Cloud@Customer deploys fully managed Exadata hardware in your data centre, maintaining on-premises data residency with OCI management plane automation, satisfying even the strictest sovereign cloud compliance requirements.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Full ACID with Advanced Transaction Control',
    desc: 'Oracle pioneered multi-version read consistency (MVCC) in commercial databases — readers never block writers, and readers see a consistent point-in-time snapshot regardless of concurrent DML activity. Autonomous Transaction Processing (ATP) extends this with automatic workload management, query plan stabilisation via SQL Performance Analyzer, and automatic index creation recommendations — eliminating the DBA toil that traditionally makes Oracle operational costs prohibitive.',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Native Analytics & Machine Learning',
    desc: 'Oracle Machine Learning (OML) executes AutoML, regression, classification, clustering, and time-series models directly inside the database — eliminating data movement to external ML platforms. Oracle Analytics Server and APEX provide built-in low-code analytics and application development on Oracle Database without separate BI infrastructure. Oracle Text and Oracle Spatial provide full-text search and geospatial analytics as native database features without third-party extensions.',
  },
  {
    icon: <Lock size={22} />,
    title: 'Defence-in-Depth Security Architecture',
    desc: 'Oracle Database Vault adds mandatory access controls that prevent even the SYS/SYSTEM superusers from reading application data — a unique capability that satisfies the strictest privileged-user access controls required by PCI-DSS, SOX, and GDPR data protection regulations. Transparent Data Encryption, Virtual Private Database, Label Security, and Advanced Security Option combine to create an overlapping multi-layer security architecture that no other commercial database can match for regulated workloads.',
  },
]

const oracleProducts = [
  { icon: <Database size={20} />, name: 'Oracle Database 23ai', desc: 'Core enterprise RDBMS with AI Vector Search' },
  { icon: <Zap size={20} />, name: 'Oracle Exadata', desc: 'Purpose-built database machine' },
  { icon: <Activity size={20} />, name: 'Oracle RAC', desc: 'Active-active multi-node clustering' },
  { icon: <Shield size={20} />, name: 'Oracle Data Guard', desc: 'Zero-data-loss standby protection' },
  { icon: <Globe size={20} />, name: 'Oracle Golden Gate', desc: 'Real-time replication & CDC pipeline' },
  { icon: <Layers size={20} />, name: 'Autonomous Database', desc: 'Self-managing ATP / ADW on OCI' },
  { icon: <Server size={20} />, name: 'Oracle OCI', desc: 'Cloud infrastructure with native DB services' },
  { icon: <Package size={20} />, name: 'Oracle APEX', desc: 'Low-code application development platform' },
]

const expItems = [
  'Oracle RAC 4-node cluster design for 24/7 financial trading systems',
  'AWR/ASH-driven SQL tuning achieving 20x performance improvements',
  'Oracle Data Guard Fast-Start Failover with sub-30-second RTO',
  'PL/SQL package and stored procedure development for ERP systems',
  'Oracle E-Business Suite R12.2 EBR online patching implementations',
  'Transparent Data Encryption for PCI-DSS cardholder data protection',
  'Oracle → PostgreSQL migration with automated regression validation',
  'Oracle GoldenGate bidirectional replication for active-active DR',
  'Autonomous Database Serverless provisioning on OCI',
  'Oracle Spatial multi-layer geospatial data platform for utilities',
  'Database Vault mandatory access controls for SOX audit compliance',
  'Exadata Cloud@Customer deployment for regulated financial institutions',
]

const expTags = [
  'Oracle 23ai', 'Oracle RAC', 'Data Guard', 'GoldenGate',
  'Exadata', 'Autonomous DB', 'OCI', 'ASM',
  'PL/SQL', 'Oracle EBS R12.2', 'APEX', 'Oracle Text',
  'AWR / ASH', 'SQL Tuning', 'Database Vault', 'TDE',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'Oracle Certified DBA Team',
    desc: 'Our Oracle DBAs hold OCP certifications and have managed RAC + Data Guard environments for Fortune 500 financial institutions, government agencies, and healthcare systems — with proven track records of zero unplanned downtime.',
  },
  {
    icon: <Users size={24} />,
    title: 'Enterprise ERP Database Support',
    desc: 'We support Oracle E-Business Suite, Oracle Fusion ERP, and custom PL/SQL application databases — handling patch management, cloning, capacity planning, and performance tuning without disrupting business-critical processes.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Proven Migration Tooling',
    desc: 'Our Oracle migration factory converts PL/SQL procedures, sequences, and data types to PostgreSQL or Aurora using automated transformation scripts, with row-count and checksum validation ensuring every byte migrates correctly.',
  },
  {
    icon: <Headphones size={24} />,
    title: '24/7 Oracle DBA Operations',
    desc: 'Round-the-clock Oracle DBA-as-a-Service — covering AWR analysis, backup monitoring, security patching, standby health checks, and emergency incident response for your most business-critical Oracle workloads.',
  },
]

export default function Oracle() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${oracleBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Oracle <span>Database Solutions</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's Oracle-certified DBAs architect, optimise, and operate enterprise Oracle Database environments
            — from RAC cluster design and Data Guard disaster recovery to Autonomous Database on OCI and complex
            PL/SQL application support across highly regulated industries.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your Oracle Project <Database size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="oc-stats">
        <div className="oc-stats-grid sp-container">
          {[
            { num: '160+', label: 'Oracle Projects Delivered' },
            { num: '50B+', label: 'Rows Under Management' },
            { num: '99.999%', label: 'RAC Cluster Uptime' },
            { num: '15+', label: 'Years Oracle Experience' },
          ].map(s => (
            <div className="oc-stat" key={s.label}>
              <span className="oc-stat-num">{s.num}</span>
              <span className="oc-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ SERVICES — numbered enterprise cards ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">Oracle Database Services</h2>
            <p className="sp-sub">
              End-to-end Oracle expertise — from RAC architecture and AWR performance tuning to Data Guard DR,
              ERP database support, Oracle Cloud migrations, and comprehensive security hardening.
            </p>
          </div>
          <div className="oc-svc-list">
            {services.map(svc => (
              <div className="oc-svc-card" key={svc.title}>
                <div className="oc-svc-num">{svc.num}</div>
                <div className="oc-svc-top">
                  <div className="oc-svc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                </div>
                <p className="oc-svc-desc">{svc.desc}</p>
                <div className="oc-svc-chips">
                  {svc.chips.map(c => <span className="oc-svc-chip" key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY ORACLE ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Oracle</p>
            <h2 className="sp-heading">Why Choose Oracle Database?</h2>
            <p className="sp-sub">
              Oracle Database has powered the world's most demanding enterprise workloads for 45+ years — from
              global banking core systems to airline reservation platforms handling millions of concurrent transactions.
            </p>
          </div>
          <div className="oc-why-grid">
            {whyOracle.map(w => (
              <div className="oc-why-card" key={w.title}>
                <div className="oc-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PRODUCTS ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Oracle Portfolio</p>
            <h2 className="sp-heading">Oracle Products We Work With</h2>
            <p className="sp-sub">
              The full Oracle technology stack — from core database and Exadata hardware to cloud-managed Autonomous
              Database, GoldenGate replication, and APEX application development.
            </p>
          </div>
          <div className="oc-products-grid">
            {oracleProducts.map(p => (
              <div className="oc-product-card" key={p.name}>
                <div className="oc-product-icon">{p.icon}</div>
                <div className="oc-product-name">{p.name}</div>
                <div className="oc-product-desc">{p.desc}</div>
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
            <h2 className="sp-heading">Deep Oracle Engineering Experience</h2>
            <p className="sp-sub">
              From RAC cluster commissioning to Autonomous Database migrations — our Oracle DBAs have operated
              mission-critical production systems in banking, healthcare, manufacturing, and government sectors.
            </p>
          </div>
          <div className="oc-exp-wrap">
            <ul className="oc-exp-list">
              {expItems.map(item => (
                <li className="oc-exp-item" key={item}><CheckCircle size={16} />{item}</li>
              ))}
            </ul>
            <div className="oc-exp-tags">
              {expTags.map(t => <span className="oc-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY BTPL ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for Oracle?</h2>
            <p className="sp-sub">
              OCP-certified engineers, enterprise ERP support expertise, and a proven migration factory —
              delivering production-grade Oracle solutions from architecture through long-term managed operations.
            </p>
          </div>
          <div className="oc-btpl-grid">
            {btplCards.map(c => (
              <div className="oc-btpl-card" key={c.title}>
                <div className="oc-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #1e0000, #3d0000)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Optimise Your Oracle Environment?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're diagnosing a performance crisis, planning a Data Guard disaster recovery upgrade, or
            migrating to Oracle Autonomous Database — our certified Oracle DBAs are ready to help.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}