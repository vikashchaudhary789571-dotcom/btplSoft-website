import { Link } from 'react-router-dom'
import {
  Cpu, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, Database, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './NumPy.css'
import npBanner from '../../assets/services/geralt-ai-generated-9094599_1920.webp'

const services = [
  {
    icon: <Cpu size={22} />,
    name: 'Scientific Computing & Math Operations',
    desc: 'We implement high-performance scientific computing solutions using NumPy\'s complete linear algebra, Fourier transform, polynomial, and random-number libraries. From solving systems of linear equations to eigenvalue decomposition and matrix factorisation, our pipelines handle complex mathematical workloads at machine speed with full numerical precision.',
    chips: ['Linear Algebra', 'FFT', 'Polynomials', 'Random Sampling', 'Matrix Ops'],
  },
  {
    icon: <Database size={22} />,
    name: 'AI/ML Data Preprocessing Pipelines',
    desc: 'Our data engineers build robust preprocessing pipelines that transform raw datasets into clean, ML-ready arrays using NumPy\'s advanced indexing, reshape, stack, and split operations. We apply normalisation, standardisation, one-hot encoding, and feature scaling using fully vectorised transformations — ensuring zero Python loops and maximum throughput for training pipelines.',
    chips: ['Normalisation', 'One-Hot Encoding', 'Reshape & Stack', 'Batch Slicing', 'Broadcasting'],
  },
  {
    icon: <Activity size={22} />,
    name: 'Signal & Image Processing',
    desc: 'We deliver NumPy-powered signal processing for audio, radar, seismic, and medical imaging domains. Using numpy.fft for spectral analysis, convolution for filtering, and ndimage-compatible arrays for image manipulation, we process continuous data streams at scale. Our solutions integrate seamlessly with SciPy\'s signal module and Pillow/OpenCV pipelines.',
    chips: ['FFT / IFFT', 'Convolution', 'Windowing', 'Audio Processing', 'Image Arrays'],
  },
  {
    icon: <BarChart2 size={22} />,
    name: 'Statistical Analysis & Data Profiling',
    desc: 'Leveraging NumPy\'s statistical functions we deliver thorough data profiling — computing descriptive statistics, correlation matrices, covariance estimation, and distribution fitting across millions of samples in milliseconds. Our statistical pipelines power A/B testing frameworks, quality control systems, and exploratory analytics dashboards for data-driven organisations.',
    chips: ['Descriptive Stats', 'Correlation Matrix', 'Percentiles', 'Histogram', 'Skewness/Kurtosis'],
  },
  {
    icon: <Zap size={22} />,
    name: 'High-Performance Vectorised Computing',
    desc: 'We replace slow Python loops with fully vectorised NumPy operations achieving 10–500× speed improvements. Our engineers optimise memory layouts (C vs Fortran order), exploit BLAS/LAPACK routines embedded in NumPy, and use Numba JIT decorators for further acceleration. We also profile and eliminate unnecessary array copies using views and in-place operations.',
    chips: ['Vectorisation', 'BLAS/LAPACK', 'In-Place Ops', 'Memory Views', 'Numba JIT'],
  },
  {
    icon: <Server size={22} />,
    name: 'GPU-Accelerated Array Computing',
    desc: 'We extend NumPy workloads to GPU hardware using CuPy (CUDA-compatible drop-in replacement), JAX\'s just-in-time compiled arrays, and Numba CUDA kernels — delivering 50–200× speedups on large array computations. Our team handles environment setup, dtype compatibility, device memory management, and unified NumPy/CuPy code so the same logic runs on both CPU and GPU.',
    chips: ['CuPy', 'JAX', 'CUDA Kernels', 'Numba CUDA', 'Unified CPU/GPU'],
  },
]

const whyNumpy = [
  {
    icon: <Zap size={22} />,
    title: 'Vectorised Operations — 100×+ Faster',
    desc: 'NumPy executes bulk operations on entire arrays in a single C-level call, eliminating interpreter overhead. Operations that take minutes in pure Python finish in milliseconds, making it the backbone of every high-performance data pipeline.',
  },
  {
    icon: <Database size={22} />,
    title: 'Universal Foundation for AI/ML',
    desc: 'Every major Python ML library — TensorFlow, PyTorch, scikit-learn, Pandas, and SciPy — accepts or wraps NumPy arrays at their core. Mastery of NumPy means seamless integration across the entire data science ecosystem.',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Memory-Efficient ndarray Engine',
    desc: 'NumPy stores data in contiguous typed buffers (float32, int64, etc.) consuming a fraction of the memory of Python lists. Views and in-place operations allow transforming data without any duplication, critical for large-dataset workloads.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Powerful Broadcasting Rules',
    desc: 'NumPy\'s broadcasting automatically expands arrays with compatible shapes, enabling element-wise operations on differently shaped tensors without manual reshaping or memory copies. This dramatically simplifies scientific code and accelerates execution.',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Rich Mathematics & Statistics Library',
    desc: 'From basic arithmetic to complex linear algebra (linalg), Fourier analysis (fft), random distributions, and polynomial operations — NumPy ships a comprehensive mathematical toolkit that covers 90% of scientific computing needs out of the box.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Industry-Wide Adoption & Longevity',
    desc: 'Over 25 years old with a weekly PyPI download rate exceeding 50 million, NumPy is among the most trusted Python packages. It powers NASA, CERN, financial modelling firms, and AI research labs worldwide, guaranteeing long-term stability.',
  },
]

const products = [
  { icon: <Package size={20} />, name: 'NumPy 2.x', desc: 'Core N-dimensional array library with C backend and full type system.' },
  { icon: <Activity size={20} />, name: 'SciPy', desc: 'Scientific algorithms — optimization, integration, interpolation on NumPy arrays.' },
  { icon: <Zap size={20} />, name: 'Numba', desc: 'JIT compiler for NumPy code — GPU & multi-core CPU kernels with @njit decorator.' },
  { icon: <Server size={20} />, name: 'CuPy', desc: 'CUDA-accelerated NumPy drop-in — identical API, GPU memory, 50–200× speedup.' },
  { icon: <Cpu size={20} />, name: 'JAX', desc: 'Google\'s autodiff + XLA-compiled NumPy for TPU/GPU research workflows.' },
  { icon: <Layers size={20} />, name: 'Dask', desc: 'Distributed NumPy — processes arrays larger than RAM across clusters.' },
  { icon: <BarChart2 size={20} />, name: 'Matplotlib', desc: 'Plotting library built on NumPy arrays; standard for scientific visualisation.' },
  { icon: <Database size={20} />, name: 'Pandas', desc: 'DataFrame library built on top of NumPy; tabular data manipulation and analysis.' },
]

const expItems = [
  'Vectorised data pipelines for trading & financial analytics',
  'NumPy-based preprocessing for CV and NLP model training',
  'Signal processing pipelines for audio, IoT sensor & radar data',
  'GPU array migration from NumPy to CuPy / JAX for research labs',
  'Large-array optimisation with memory-mapped files (numpy.memmap)',
  'Custom Numba JIT kernels for domain-specific numerical algorithms',
  'Integration with C/C++ extension modules via NumPy C API',
  'Scientific computing libraries for engineering simulation workflows',
  'High-throughput batch inference preprocessing for production ML',
  'Statistical quality-control systems for manufacturing analytics',
  'ndarray-based feature engineering for ML pipelines at scale',
  'Distributed NumPy workloads on Dask clusters for big-data analytics',
]

const expTags = [
  'ndarray', 'Broadcasting', 'Linear Algebra', 'FFT', 'Numba JIT', 'CuPy',
  'JAX', 'Dask', 'SciPy', 'Vectorisation', 'BLAS', 'LAPACK',
  'Memory Maps', 'Structured Arrays', 'Random', 'Polynomial Fitting',
]

const btplCards = [
  {
    icon: <Users size={24} />,
    title: 'NumPy-Certified Engineers',
    desc: 'Our team holds deep expertise in NumPy internals, memory layout, BLAS optimisation, and GPU-accelerated array computing for production systems.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Performance-First Approach',
    desc: 'Every array operation we write is profiled and benchmarked. We deliver measurable speedups — often 10–500× — by eliminating Python loops and maximising cache efficiency.',
  },
  {
    icon: <Award size={24} />,
    title: 'End-to-End Pipeline Ownership',
    desc: 'From raw data ingestion to post-processed arrays ready for ML training, we own and optimise the entire numerical pipeline including dtype management and data integrity validation.',
  },
  {
    icon: <Headphones size={24} />,
    title: '24/7 Support & SLA',
    desc: 'Production issues in numerical pipelines need immediate attention. Our on-call engineering team provides round-the-clock monitoring and rapid incident response under SLA guarantees.',
  },
]

export default function NumPy() {
  return (
    <div className="sp-page">
      {/* ── HERO ── */}
      <section className="sp-hero" style={{ backgroundImage: `url(${npBanner})` }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <p className="sp-label">AI &amp; ML Technologies</p>
          <h1 className="sp-heading" style={{ color: '#fff' }}>
            NumPy Development &amp; Scientific Computing Services
          </h1>
          <p className="sp-subtext-large" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Harness the raw power of N-dimensional arrays. We build vectorised, GPU-ready numerical pipelines using NumPy, SciPy, CuPy, and JAX that out-perform Python loops by orders of magnitude — accelerating your AI, ML, and data engineering workloads.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Get a Free Consultation</Link>
            <Link to="/case-studies" className="sp-btn-secondary">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="np-stats">
        <div className="np-stats-grid sp-container">
          {[
            { num: '50M+', label: 'Weekly PyPI Downloads' },
            { num: '500×', label: 'Faster vs Pure Python' },
            { num: '60+', label: 'NumPy Projects Delivered' },
            { num: '100%', label: 'Vectorised — Zero Loops' },
          ].map((s, i) => (
            <div className="np-stat" key={i}>
              <span className="np-stat-num">{s.num}</span>
              <span className="np-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container sp-overview-content">
          <p className="sp-label">What We Offer</p>
          <h2 className="sp-heading">End-to-End NumPy &amp; Scientific Computing Solutions</h2>
          <p className="sp-subtext-large">
            NumPy is the cornerstone of the entire Python scientific computing ecosystem. As every serious ML framework and data library sits atop NumPy arrays, mastery of its internals — memory layout, broadcasting, BLAS bindings, and GPU portability — is the difference between pipelines that crawl and those that fly. Our engineers bring that mastery to your organisation.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="np-sec-head">
            <p className="sp-label">Our Services</p>
            <h2 className="sp-heading">NumPy Development Services We Provide</h2>
          </div>
          <div className="np-svc-outer">
            <div className="np-svc-matrix-head">
              <span></span>
              <span>Service</span>
              <span>Description</span>
              <span>Technologies</span>
            </div>
            {services.map((svc, i) => (
              <div className="np-svc-row" key={i}>
                <div className="np-svc-row-icon">{svc.icon}</div>
                <div className="np-svc-row-name">{svc.name}</div>
                <div className="np-svc-row-desc">{svc.desc}</div>
                <div className="np-svc-row-chips">
                  {svc.chips.map((c, j) => <span className="np-svc-chip" key={j}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NUMPY ── */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="np-sec-head">
            <p className="sp-label">Why NumPy</p>
            <h2 className="sp-heading">Why NumPy Powers Every Serious Data Pipeline</h2>
          </div>
          <div className="np-why-grid">
            {whyNumpy.map((w, i) => (
              <div className="np-why-card" key={i}>
                <div className="np-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ── */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="np-sec-head">
            <p className="sp-label">Ecosystem</p>
            <h2 className="sp-heading">The NumPy Ecosystem We Work With</h2>
          </div>
          <div className="np-products-grid">
            {products.map((p, i) => (
              <div className="np-product-card" key={i}>
                <div className="np-product-icon">{p.icon}</div>
                <div className="np-product-name">{p.name}</div>
                <div className="np-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="np-sec-head">
            <p className="sp-label">Our Experience</p>
            <h2 className="sp-heading">NumPy Projects We've Delivered</h2>
          </div>
          <div className="np-exp-wrap">
            <ul className="np-exp-list">
              {expItems.map((item, i) => (
                <li className="np-exp-item" key={i}>
                  <CheckCircle size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="np-exp-tags">
              {expTags.map((tag, i) => <span className="np-exp-tag" key={i}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BTPL ── */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="np-sec-head">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why Partner with BTPL for NumPy Development?</h2>
          </div>
          <div className="np-btpl-grid">
            {btplCards.map((c, i) => (
              <div className="np-btpl-card" key={i}>
                <div className="np-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #013243, #1a4a6e)' }}>
        <div className="sp-container sp-overview-content">
          <h2 className="sp-heading" style={{ color: '#fff' }}>
            Ready to Supercharge Your Data Pipelines with NumPy?
          </h2>
          <p className="sp-subtext-large" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Whether you need to migrate slow Python loops to vectorised operations, scale to GPU arrays with CuPy or JAX, or build production-grade scientific computing pipelines — our team delivers measurable performance improvements from day one.
          </p>
          <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="sp-btn-primary"
              style={{ background: '#4D77CF', borderColor: '#4D77CF', cursor: 'pointer' }}
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
