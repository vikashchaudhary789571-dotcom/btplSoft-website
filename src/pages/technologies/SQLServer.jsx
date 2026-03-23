import { Link } from 'react-router-dom'
import {
  Database, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './SQLServer.css'
import msBanner from '../../assets/services/representation-user-experience-interface-design.webp'

const services = [
  {
    num: '01',
    icon: <Database size={22} />,
    title: 'SQL Server Architecture & Database Design',
    desc: 'We design SQL Server databases with normalised schemas that balance integrity and read performance — considering filegroup placement for isolating I/O intensive objects, tempdb configuration across multiple files to prevent allocation page contention, memory configuration for buffer pool and columnstore pool sizing, and max degree of parallelism (MAXDOP) and cost threshold for parallelism tuning for OLTP vs OLAP workloads. Our architects conduct capacity planning workshops that model index growth, transaction log turnover, and tempdb spill workloads under peak concurrency scenarios before any schema is committed to production.',
    chips: ['Filegroup Design', 'tempdb Optimisation', 'MAXDOP Tuning', 'Capacity Planning', 'Schema Review'],
  },
  {
    num: '02',
    icon: <Zap size={22} />,
    title: 'Performance Tuning & Query Optimisation',
    desc: 'SQL Server\'s Query Store is the most actionable query performance feature in any RDBMS — capturing query plan history, identifying plan regressions by execution count, duration, and CPU, and allowing forced plan stabilisation with a single click. We use sys.dm_exec_query_stats, sys.dm_os_wait_stats, and Extended Events for bottleneck identification, design covering indexes and filtered indexes to eliminate key lookups, rewrite implicit conversion predicates that prevent SARGability, and manage statistics maintenance schedules to prevent stale statistics from triggering suboptimal plans. Our performance reviews consistently yield 40%–80% query execution time reductions.',
    chips: ['Query Store', 'Extended Events', 'DMV Analysis', 'Covering Indexes', 'Statistics Maintenance'],
  },
  {
    num: '03',
    icon: <RefreshCw size={22} />,
    title: 'Always On Availability Groups & HA',
    desc: 'SQL Server Always On Availability Groups provide database-level HA with readable secondary replicas — enabling workload offloading to secondaries for reporting queries, backups, and DBCC consistency checks without impacting the primary. We architect multi-subnet AG configurations with Windows Server Failover Cluster (WSFC), configure automatic failover with synchronous-commit replicas for zero data loss, and design distributed availability groups for geographically dispersed disaster recovery. For containerised environments, we deploy SQL Server on Kubernetes with operator-managed AG for cloud-native HA.',
    chips: ['Always On AG', 'WSFC', 'Readable Secondaries', 'Distributed AG', 'SQL on Kubernetes'],
  },
  {
    num: '04',
    icon: <BarChart2 size={22} />,
    title: 'SSRS, SSIS & SSAS BI Stack',
    desc: 'The SQL Server BI stack — SSIS for ETL, SSRS for operational reporting, and SSAS for multidimensional and tabular OLAP models — remains widely deployed in enterprises running Microsoft-centric data architectures. We design SSIS packages with proper error handling, checkpoint restart logic, and audit logging; build SSRS reports with parameterised subreports, drillthrough, and subscription-based delivery; and create SSAS Tabular models with DAX measures that connect to Power BI Desktop for self-service analytics. We also manage modernisation paths from SSAS to Azure Analysis Services.',
    chips: ['SSIS ETL', 'SSRS Reporting', 'SSAS Tabular', 'DAX Measures', 'Power BI Integration'],
  },
  {
    num: '05',
    icon: <Globe size={22} />,
    title: 'Azure SQL & SQL Managed Instance Migration',
    desc: 'Azure SQL Database and Azure SQL Managed Instance offer SQL Server compatibility in a fully managed PaaS model — eliminating OS patching, failover cluster maintenance, and backup management. We use Azure Database Migration Service (DMS) for online migrations with minimal downtime, SQL Server Migration Assistant (SSMA) for schema and compatible object assessment, and the Azure SQL Database Compatibility Level advisor to identify T-SQL compatibility gaps before migration. For applications needing full SQL Agent, linked servers, and CLR integration, SQL Managed Instance provides near 100% compatibility.',
    chips: ['Azure SQL DB', 'SQL Managed Instance', 'Azure DMS', 'SSMA', 'Elastic Pools'],
  },
  {
    num: '06',
    icon: <Shield size={22} />,
    title: 'SQL Server Security & Compliance',
    desc: 'SQL Server provides multiple overlapping security layers: Transparent Data Encryption (TDE) encrypts database files at rest, Always Encrypted protects column-level data such that even DBAs cannot see plaintext values in memory, Row-Level Security (RLS) restricts row-level access based on execution context, and Dynamic Data Masking obfuscates sensitive columns for non-privileged users without schema changes. SQL Server Audit records server-level and database-level events to Windows Event Log or file targets, meeting PCI-DSS section 10 logging requirements, SOX ITGC controls, and HIPAA technical safeguard audit controls.',
    chips: ['TDE Encryption', 'Always Encrypted', 'Row-Level Security', 'SQL Server Audit', 'Dynamic Data Masking'],
  },
]

const whyMS = [
  {
    icon: <Zap size={22} />,
    title: 'Best-in-Class .NET & Microsoft Ecosystem Integration',
    desc: 'SQL Server is the native data layer for .NET applications, Azure services, Power BI, SharePoint, and the entire Microsoft 365 ecosystem. Entity Framework Core, ADO.NET, and LINQ provide type-safe, ORM-level data access with the lowest latency of any database-application combination in the enterprise software space. Azure SQL Database shares the same T-SQL engine and drivers — meaning code written for on-premises SQL Server runs identically in Azure with zero modifications.',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Integrated BI and Analytics Stack',
    desc: 'The SQL Server BI platform — SSIS for enterprise ETL, SSRS for operational reporting, SSAS for OLAP, and native Power BI connectivity — provides a complete analytics ecosystem without additional vendor licences. SQL Server Analysis Services Tabular model DAX measures connect directly to Power BI for self-service analytics on hundreds of millions of rows. Columnstore indexes provide in-memory warehousing capabilities directly in SQL Server, eliminating the need for a separate analytical database.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Enterprise High Availability Without Complexity',
    desc: 'SQL Server Always On Availability Groups with readable secondaries provide database-level HA that offloads reporting, backups, and DBCC checks to secondary replicas without impacting OLTP throughput. Multi-subnet AG configurations with WSFC provide automatic failover with synchronous-commit replicas guaranteeing zero data loss. Windows Server containers and Kubernetes operators enable cloud-native SQL Server deployment with Helm-managed AG for DevOps-native HA management.',
  },
  {
    icon: <Globe size={22} />,
    title: 'World-Class Performance Observability',
    desc: 'SQL Server Query Store is the most actionable query performance tool in any RDBMS — capturing execution plan history, identifying regressions, and enabling one-click forced plan stabilisation without restarts. Extended Events provide microsecond-precision diagnostics with minimal overhead, while sys.dm_exec_query_stats and sys.dm_os_wait_stats expose lock contention, I/O bottlenecks, and CPU-bound queries that DMV queries surface in seconds without third-party monitoring tools.',
  },
  {
    icon: <Activity size={22} />,
    title: 'Azure SQL: Fully Managed PaaS Evolution',
    desc: 'Azure SQL Database and SQL Managed Instance provide SQL Server compatibility in a fully managed service — eliminating OS patching, failover cluster maintenance, and backup management overhead. Managed Instance achieves 99.99% of SQL Server compatibility including SQL Agent, CLR integration, linked servers, and cross-database queries — enabling lift-and-shift migrations without stored procedure rewrites. Serverless tier automatically pauses and resumes compute based on usage, dramatically reducing costs for variable workloads.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Intelligent Performance with AI-Powered Features',
    desc: 'SQL Server 2022 introduces intelligent query processing features — adaptive joins, memory grant feedback, batch mode on rowstore, and approximate query processing — that automatically improve query performance without manual tuning. Azure SQL Database adds AI-powered automatic tuning that applies, monitors, and rolls back index and query plan changes autonomously. Ledger tables provide immutable, cryptographically verified audit trails for regulatory compliance without external blockchain infrastructure.',
  },
]

const msProducts = [
  { icon: <Database size={20} />, name: 'SQL Server 2022', desc: 'On-premises & container enterprise RDBMS' },
  { icon: <Globe size={20} />, name: 'Azure SQL Database', desc: 'Fully managed PaaS with intelligent scaling' },
  { icon: <Server size={20} />, name: 'SQL Managed Instance', desc: '99.99% SQL Server compatible PaaS' },
  { icon: <BarChart2 size={20} />, name: 'SSIS / SSRS / SSAS', desc: 'Complete enterprise BI stack' },
  { icon: <Zap size={20} />, name: 'SQL Server Always On', desc: 'AG-based HA with readable replicas' },
  { icon: <Activity size={20} />, name: 'Azure Synapse Analytics', desc: 'Unified analytics over SQL + Spark' },
  { icon: <Package size={20} />, name: 'Power BI Premium', desc: 'Enterprise self-service analytics' },
  { icon: <Settings size={20} />, name: 'SSMS / Azure Data Studio', desc: 'Management & development tooling' },
]

const expItems = [
  'SQL Server Always On AG with multi-subnet WSFC automatic failover',
  'Query Store plan regression identification and forced plan stabilisation',
  'Columnstore index design for 10x analytics query acceleration',
  'SSIS ETL pipeline development for enterprise data warehouse loads',
  'SSAS Tabular model design with DAX measures for Power BI integration',
  'SQL Server → Azure SQL Managed Instance online migration via DMS',
  'TDE + Always Encrypted column-level protection for PCI-DSS compliance',
  'Row-Level Security multi-tenant data isolation for SaaS applications',
  'SQL Server on Kubernetes deployment with operator-managed AG',
  'Elastic Pool right-sizing for multi-tenant Azure SQL Database cost optimisation',
  'Extended Events diagnostics for latch contention and I/O bottleneck resolution',
  'SQL Server Audit configuration for SOX ITGC logging requirements',
]

const expTags = [
  'SQL Server 2022', 'Azure SQL DB', 'SQL Managed Instance', 'Azure Synapse',
  'Always On AG', 'WSFC', 'Query Store', 'Extended Events',
  'SSIS', 'SSRS', 'SSAS Tabular', 'Power BI',
  'TDE', 'Always Encrypted', 'RLS', 'Elastic Pools',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'Microsoft Certified SQL DBA Team',
    desc: 'Our SQL Server engineers hold MCSA/MCSE data management certifications and have managed Always On AG environments for .NET enterprise applications, manufacturing ERPs, and financial reporting platforms with 24/7 uptime requirements.',
  },
  {
    icon: <Users size={24} />,
    title: 'Azure SQL Migration Specialists',
    desc: 'We execute SQL Server to Azure SQL Database / Managed Instance migrations using Azure DMS with near-zero downtime — covering compatibility assessment, T-SQL remediation, data migration, and post-migration performance validation.',
  },
  {
    icon: <Clock size={24} />,
    title: 'BI Stack Architecture',
    desc: 'Full-stack SQL Server BI capability covering SSIS ETL design, SSAS Tabular modelling, SSRS report development, and Power BI Premium dataset optimisation — delivering actionable analytics from your SQL Server data warehouse.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Proactive SQL Server Operations',
    desc: 'Ongoing managed DBA service covering Query Store monitoring, index fragmentation management, backup verification, security update deployment, and 24/7 Alert response keeping your SQL Server workloads healthy and performant.',
  },
]

export default function SQLServer() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${msBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">SQL Server <span>Database Solutions</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's Microsoft-certified SQL Server engineers design robust database architectures, tune query
            performance to enterprise standards, and migrate on-premises SQL Server workloads to Azure SQL with
            minimal downtime — supporting .NET applications across every industry vertical.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your SQL Server Project <Database size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="ms-stats">
        <div className="ms-stats-grid sp-container">
          {[
            { num: '220+', label: 'SQL Server Projects' },
            { num: '500TB+', label: 'Data Managed' },
            { num: '99.99%', label: 'Always On Uptime' },
            { num: '12+', label: 'Years Experience' },
          ].map(s => (
            <div className="ms-stat" key={s.label}>
              <span className="ms-stat-num">{s.num}</span>
              <span className="ms-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ SERVICES — vertical timeline ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">SQL Server Services</h2>
            <p className="sp-subtext-large">
              End-to-end SQL Server expertise — from Always On HA architecture and Query Store performance tuning
              to Azure SQL migrations, BI stack delivery, and ongoing managed database operations.
            </p>
          </div>
          <div className="ms-timeline">
            {services.map(svc => (
              <div className="ms-tl-item" key={svc.title}>
                <div className="ms-tl-left">
                  <div className="ms-tl-num">{svc.num}</div>
                  <div className="ms-tl-line" />
                </div>
                <div className="ms-tl-card">
                  <div className="ms-tl-card-top">
                    <div className="ms-tl-icon">{svc.icon}</div>
                    <h3>{svc.title}</h3>
                  </div>
                  <p>{svc.desc}</p>
                  <div className="ms-tl-chips">
                    {svc.chips.map(c => <span className="ms-chip" key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY SQL SERVER ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why SQL Server</p>
            <h2 className="sp-heading">Why Choose SQL Server?</h2>
            <p className="sp-subtext-large">
              SQL Server powers 80% of .NET enterprise applications worldwide — delivering the deepest Microsoft
              ecosystem integration, world-class BI tooling, and an unmatched path to Azure cloud modernisation.
            </p>
          </div>
          <div className="ms-why-grid">
            {whyMS.map(w => (
              <div className="ms-why-card" key={w.title}>
                <div className="ms-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PRODUCTS ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Microsoft Data Stack</p>
            <h2 className="sp-heading">SQL Server Ecosystem We Master</h2>
            <p className="sp-subtext-large">
              From on-premises SQL Server 2022 to fully managed Azure SQL and the complete Microsoft BI platform —
              we work across the full Microsoft data ecosystem for every workload pattern.
            </p>
          </div>
          <div className="ms-products-grid">
            {msProducts.map(p => (
              <div className="ms-product-card" key={p.name}>
                <div className="ms-product-icon">{p.icon}</div>
                <div className="ms-product-name">{p.name}</div>
                <div className="ms-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ EXPERIENCE ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep SQL Server Engineering Experience</h2>
            <p className="sp-subtext-large">
              From Always On HA design to Azure SQL migration — our SQL Server DBAs have solved every performance,
              availability, and compliance challenge across manufacturing, finance, retail, and healthcare sectors.
            </p>
          </div>
          <div className="ms-exp-wrap">
            <ul className="ms-exp-list">
              {expItems.map(item => (
                <li className="ms-exp-item" key={item}><CheckCircle size={16} />{item}</li>
              ))}
            </ul>
            <div className="ms-exp-tags">
              {expTags.map(t => <span className="ms-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY BTPL ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for SQL Server?</h2>
            <p className="sp-subtext-large">
              Microsoft-certified expertise, Azure SQL migration tooling, and full BI stack capability — delivering
              SQL Server solutions from on-premises architecture to cloud-native PaaS deployments.
            </p>
          </div>
          <div className="ms-btpl-grid">
            {btplCards.map(c => (
              <div className="ms-btpl-card" key={c.title}>
                <div className="ms-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #003087, #0050CC)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Modernise Your SQL Server Environment?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're tuning a slow query, designing an Always On AG cluster, or planning an Azure SQL
            migration — BTPL Soft's SQL Server experts are here to deliver results fast.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}