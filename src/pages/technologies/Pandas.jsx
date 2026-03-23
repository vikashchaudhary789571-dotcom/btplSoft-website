import { Link } from 'react-router-dom'
import {
  Cpu, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, Database, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './Pandas.css'
import pdBanner from '../../assets/services/dedicated-businessman-working-late-laptop-dark-office.webp'

const services = [
  {
    idx: 1,
    badge: 'ETL',
    icon: <Database size={22} />,
    title: 'Data Wrangling & ETL Pipelines',
    desc: 'We build robust ETL pipelines powered by Pandas to ingest, transform, and load data from heterogeneous sources — CSV, JSON, SQL databases, REST APIs, Excel, Parquet — into clean, analysis-ready DataFrames. Our pipelines handle merges, joins, pivots, melts, and complex multi-key aggregations at scale, with full schema validation and error logging integrated throughout.',
    chips: ['Merge & Join', 'Pivot / Melt', 'MultiIndex', 'Parquet I/O', 'SQL Integration'],
  },
  {
    idx: 2,
    badge: 'EDA',
    icon: <BarChart2 size={22} />,
    title: 'Exploratory Data Analysis (EDA)',
    desc: 'Our data scientists deliver thorough EDA that reveals the structure, quality, and statistical properties of your dataset. Using Pandas profiling, correlation matrices, distribution analysis, and missing-value heatmaps, we identify data quality issues, feature interactions, and outliers early — reducing debugging time downstream and guiding feature engineering decisions for ML models.',
    chips: ['Profiling', 'Correlation Matrix', 'Missing Values', 'Distribution Analysis', 'Outlier Detection'],
  },
  {
    idx: 3,
    badge: 'Time Series',
    icon: <Activity size={22} />,
    title: 'Time Series Analysis & Forecasting Prep',
    desc: 'We harness Pandas\' DatetimeIndex and time-aware operations — resample, rolling, ewm, shift, and seasonal decomposition — to build rich time series features for analytics and forecasting models. Our pipelines serve trading platforms, IoT monitoring systems, energy grids, and any application where timestamp-indexed data drives business intelligence.',
    chips: ['DatetimeIndex', 'Resample', 'Rolling Window', 'EWM', 'Shift / Lag'],
  },
  {
    idx: 4,
    badge: 'Quality',
    icon: <Shield size={22} />,
    title: 'Data Quality & Automated Cleaning',
    desc: 'We implement structured data quality frameworks using Pandas to detect and remediate missing values, duplicate records, invalid entries, and inconsistent formats automatically. Our cleaning workflows cover multi-strategy imputation (median, KNN, forward-fill), deduplication with fuzzy matching, regex-based text normalisation, and continuous data validation with schema enforcement.',
    chips: ['Imputation', 'Deduplication', 'Type Coercion', 'Regex Cleaning', 'Schema Validation'],
  },
  {
    idx: 5,
    badge: 'ML Ready',
    icon: <Layers size={22} />,
    title: 'Feature Engineering for Machine Learning',
    desc: 'Our ML engineers use Pandas to construct powerful feature sets that elevate model performance. We create rolling statistical features, lag variables, target encoding, frequency encoding, interaction terms, and date-part extraction — all benchmarked against model metrics. The resulting DataFrames feed directly into scikit-learn pipelines with dtype compatibility guaranteed.',
    chips: ['Target Encoding', 'Lag Features', 'Window Stats', 'Categorical Encoding', 'Date Parts'],
  },
  {
    idx: 6,
    badge: 'Reporting',
    icon: <TrendingUp size={22} />,
    title: 'Automated Reporting & Data Export',
    desc: 'We automate business reporting workflows that export polished, formatted outputs using Pandas\' rich I/O layer — generating Excel workbooks with conditional formatting via openpyxl, PDF reports via WeasyPrint, and live dashboards via Plotly/Dash. Scheduled Pandas jobs replace hours of manual data wrangling with fully automated, reproducible reporting pipelines.',
    chips: ['Excel + openpyxl', 'PDF Reports', 'Parquet / Feather', 'Plotly / Dash', 'Scheduled Jobs'],
  },
]

const whyPandas = [
  {
    icon: <Database size={22} />,
    title: 'Intuitive DataFrame API',
    desc: 'Pandas brings spreadsheet-level simplicity to programmatic data manipulation. Its df.groupby(), df.merge(), and df.pivot_table() methods turn multi-step data transformations into single-line operations, making code readable and auditable across teams.',
  },
  {
    icon: <Activity size={22} />,
    title: 'Native Time Series Intelligence',
    desc: 'No other mainstream library matches Pandas\' native DatetimeIndex and dt accessor. Rolling windows, frequency resampling, timezone conversion, and business-day offsets make Pandas the unrivalled choice for financial, IoT, and monitoring data workloads.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Unmatched I/O Versatility',
    desc: 'Pandas reads and writes CSV, Excel, Parquet, ORC, Feather, HDF5, JSON, HTML tables, SQL databases, and more — natively. A single read_csv() or read_sql() call replaces complex boilerplate code, connecting your data from any source to your pipeline instantly.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Pandas 2.0 + PyArrow Backend',
    desc: 'Pandas 2.0 introduced the optional PyArrow backend, delivering 2–5× memory reduction and significantly faster I/O for Parquet files. Copy-on-Write semantics eliminate accidental mutations, making production pipelines safer and more predictable.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Deep ML Ecosystem Integration',
    desc: 'DataFrames integrate natively with scikit-learn\'s Pipeline, TensorFlow\'s tf.data, and PyTorch DataLoaders. Pandas sits right between raw data and model training, passing feature-engineered arrays to every major ML framework without format conversion overhead.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Industry Standard for Data Teams',
    desc: 'With over 1 billion monthly downloads, Pandas is the de-facto language of data analysts and data engineers worldwide. Hiring Pandas-proficient talent is easy, code reviews are straightforward, and the library\'s maturity guarantees long-term stability.',
  },
]

const products = [
  { icon: <Package size={20} />, name: 'Pandas 2.x', desc: 'Core DataFrame & Series library with PyArrow backend and Copy-on-Write.' },
  { icon: <Zap size={20} />, name: 'Polars', desc: 'Lightning-fast Rust-based DataFrame library — up to 30× faster than Pandas for heavy transforms.' },
  { icon: <Server size={20} />, name: 'Dask', desc: 'Distributed Pandas — processes DataFrames larger than RAM on clusters.' },
  { icon: <Cpu size={20} />, name: 'Vaex', desc: 'Out-of-core DataFrames for billion-row datasets with lazy evaluation.' },
  { icon: <Layers size={20} />, name: 'Modin', desc: 'Parallel Pandas drop-in using Ray/Dask — no code change, multiple-core speedup.' },
  { icon: <Globe size={20} />, name: 'GeoPandas', desc: 'Extends Pandas with geospatial operations for geographic data analysis.' },
  { icon: <BarChart2 size={20} />, name: 'Matplotlib / Seaborn', desc: 'Statistical visualisation libraries tightly integrated with Pandas DataFrames.' },
  { icon: <Activity size={20} />, name: 'Jupyter / IPython', desc: 'Rich interactive notebook environment with native Pandas DataFrame rendering.' },
]

const expItems = [
  'ETL pipelines ingesting 10M+ rows daily from multi-database sources',
  'Time series forecasting prep for trading, energy, and IoT platforms',
  'Automated Excel reporting replacing 20+ hours of weekly manual work',
  'Customer 360 feature stores built on Pandas for e-commerce recommendation',
  'Data quality frameworks reducing bad-data incidents by 90% in production',
  'Pandas-to-Polars migration for 15× faster data transformation at startup scale',
  'churn prediction feature engineering pipelines for SaaS subscription products',
  'Geospatial data analysis with GeoPandas for logistics route optimisation',
  'Clinical trial data wrangling for healthcare research organisations',
  'Financial reconciliation pipelines processing multi-currency transaction ledgers',
  'Scheduled monthly P&L reporting pipelines for mid-size enterprises',
  'Large-scale survey analytics with cross-tabulation and weighting workflows',
]

const expTags = [
  'DataFrame', 'GroupBy', 'Merge / Join', 'Pivot Table', 'Time Series',
  'Parquet', 'PyArrow', 'Dask', 'Polars', 'Modin', 'GeoPandas',
  'EDA', 'ETL', 'Feature Engineering', 'Excel Automation', 'openpyxl',
]

const btplCards = [
  {
    icon: <Users size={24} />,
    title: 'Senior Pandas Engineers',
    desc: 'Our analysts and engineers have delivered 100+ production Pandas pipelines across fintech, healthcare, e-commerce, and energy sectors — with deep knowledge of Pandas internals and performance optimisation.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Rapid Pipeline Delivery',
    desc: 'We ship working data pipelines fast. With battle-tested templates for common ETL patterns, most initial pipelines are operational within 1–2 weeks, letting your team generate insights immediately.',
  },
  {
    icon: <Award size={24} />,
    title: 'Data Quality Commitment',
    desc: 'We bake automated data quality checks into every pipeline we build. You receive pipelines that alert, log, and recover from bad data — never silently producing corrupted results in production.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Ongoing Maintenance & SLA',
    desc: 'Data pipelines need ongoing care as schemas evolve. Our team monitors your Pandas workflows, handles schema changes, and provides 24/7 support under agreed SLAs to keep your data flowing uninterrupted.',
  },
]

export default function Pandas() {
  return (
    <div className="sp-page">
      {/* ── HERO ── */}
      <section className="sp-hero" style={{ backgroundImage: `url(${pdBanner})` }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <p className="sp-label">AI &amp; ML Technologies</p>
          <h1 className="sp-heading" style={{ color: '#fff' }}>
            Pandas Development &amp; Data Engineering Services
          </h1>
          <p className="sp-sub" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Turn raw, messy data into clean, analysis-ready insights. We build production-grade Pandas pipelines for ETL, time series analysis, feature engineering, and automated reporting — helping your team move from data chaos to business intelligence with speed and confidence.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Get a Free Consultation</Link>
            <Link to="/case-studies" className="sp-btn-secondary">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="pd-stats">
        <div className="pd-stats-grid sp-container">
          {[
            { num: '1B+', label: 'Monthly Downloads' },
            { num: '100+', label: 'Pandas Projects Delivered' },
            { num: '2–5×', label: 'Memory Savings with PyArrow' },
            { num: '90%', label: 'Reduction in Manual Reporting' },
          ].map((s, i) => (
            <div className="pd-stat" key={i}>
              <span className="pd-stat-num">{s.num}</span>
              <span className="pd-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Comprehensive Pandas &amp; Data Engineering Solutions</h2>
            <p className="sp-sub">
              Pandas is the world's most widely used data manipulation library and the common language of data analysts and engineers everywhere. Whether you're building a first ETL pipeline, migrating from Excel-based workflows, engineering ML features, or automating monthly reporting — Pandas sits at the centre of modern data work. Our engineers combine deep Pandas expertise with best practices in data quality, pipeline architecture, and performance to deliver solutions that scale.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="pd-sec-head">
            <p className="sp-label">Our Services</p>
            <h2 className="sp-heading">Pandas Development Services We Provide</h2>
          </div>
          <div className="pd-svc-grid">
            {services.map((svc, i) => (
              <div className="pd-svc-cell" key={i}>
                <div className="pd-svc-cell-header">
                  <span className="pd-svc-cell-label">In [{svc.idx}]:</span>
                  <span className="pd-svc-cell-badge">{svc.badge}</span>
                </div>
                <div className="pd-svc-cell-title-row">
                  <div className="pd-svc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                </div>
                <div className="pd-svc-body">
                  <p>{svc.desc}</p>
                  <div className="pd-svc-chips">
                    {svc.chips.map((c, j) => <span className="pd-svc-chip" key={j}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PANDAS ── */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="pd-sec-head">
            <p className="sp-label">Why Pandas</p>
            <h2 className="sp-heading">Why Pandas Remains the Go-To Data Tool</h2>
          </div>
          <div className="pd-why-grid">
            {whyPandas.map((w, i) => (
              <div className="pd-why-card" key={i}>
                <div className="pd-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ── */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="pd-sec-head">
            <p className="sp-label">Ecosystem</p>
            <h2 className="sp-heading">The Pandas Ecosystem We Work With</h2>
          </div>
          <div className="pd-products-grid">
            {products.map((p, i) => (
              <div className="pd-product-card" key={i}>
                <div className="pd-product-icon">{p.icon}</div>
                <div className="pd-product-name">{p.name}</div>
                <div className="pd-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="pd-sec-head">
            <p className="sp-label">Our Experience</p>
            <h2 className="sp-heading">Pandas Projects We've Delivered</h2>
          </div>
          <div className="pd-exp-wrap">
            <ul className="pd-exp-list">
              {expItems.map((item, i) => (
                <li className="pd-exp-item" key={i}>
                  <CheckCircle size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pd-exp-tags">
              {expTags.map((tag, i) => <span className="pd-exp-tag" key={i}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BTPL ── */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="pd-sec-head">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why Partner with BTPL for Pandas Development?</h2>
          </div>
          <div className="pd-btpl-grid">
            {btplCards.map((c, i) => (
              <div className="pd-btpl-card" key={i}>
                <div className="pd-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #005f8f, #0077B6)' }}>
        <div className="sp-container">
          <div className="sp-section-head center">
          <h2 className="sp-heading" style={{ color: '#fff' }}>
            Ready to Transform Your Data with Pandas?
          </h2>
          <p className="sp-sub" style={{ color: 'rgba(255,255,255,0.8)' }}>
            From first-time ETL pipelines to complex multi-source data warehousing, our Pandas engineers deliver clean, tested, production-ready code. Let's build a data backbone that scales with your business and gives your team the reliable insights they need to make confident decisions.
          </p>
          </div>
          <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="sp-btn-primary"
              style={{ background: '#0077B6', borderColor: '#0077B6', cursor: 'pointer' }}
              onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))}
            >
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
