import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Cpu, Database, Globe,
  Zap, MessageSquare, GitBranch, Users, Lock,
  TrendingUp, Clock, Shield, Layers, Code, Settings
} from 'lucide-react'
import '../services/ServicePage.css'
import './Python.css'
import pythonBanner from '../../assets/services/human-ai-touch-connection-technology-innovation.webp'

const services = [
  {
    icon: <Cpu size={28} />, title: 'AI & Machine Learning Development',
    desc: 'We build custom ML pipelines, train domain-specific models, and deploy AI features directly into your product — using PyTorch, TensorFlow, scikit-learn, and HuggingFace Transformers. From recommendation engines to computer-vision inference APIs.',
    tags: ['PyTorch', 'TensorFlow', 'HuggingFace'],
  },
  {
    icon: <Database size={28} />, title: 'Data Engineering & ETL Pipelines',
    desc: 'Our data engineers design Airflow-orchestrated ETL pipelines that ingest, transform, and load data from dozens of sources into analytics-ready warehouses. Apache Spark, dbt, and Pandas power our data transformation layers.',
    tags: ['Apache Airflow', 'dbt', 'Apache Spark'],
  },
  {
    icon: <Globe size={28} />, title: 'Django & FastAPI Web Development',
    desc: 'Django\'s batteries-included framework and FastAPI\'s async performance give us the right tool for every web use case — from content-management platforms and API backends to high-throughput microservices handling 100k+ req/sec.',
    tags: ['Django 5', 'FastAPI', 'Async Python'],
  },
  {
    icon: <Zap size={28} />, title: 'Automation & Scripting Solutions',
    desc: 'We automate repetitive business processes — web scraping, report generation, document processing, notification workflows, and third-party API integrations — with robust, scheduled Python scripts deployed on serverless or container infrastructure.',
    tags: ['Selenium', 'Celery', 'Serverless'],
  },
  {
    icon: <MessageSquare size={28} />, title: 'NLP & Conversational AI',
    desc: 'BERT fine-tuning, GPT API integrations, LangChain RAG pipelines, and vector-database search enable us to build domain-specific chatbots, text classification systems, sentiment analyzers, and document Q&A tools tailored to your business data.',
    tags: ['LangChain', 'OpenAI API', 'Vector DB'],
  },
  {
    icon: <GitBranch size={28} />, title: 'Python API & Microservices',
    desc: 'We design containerised Python microservice architectures — events via Kafka or RabbitMQ, inter-service communication using gRPC or REST, and observability through Prometheus, Grafana, and structured logging. Deploys to AWS, GCP, or Azure.',
    tags: ['FastAPI', 'Kafka', 'gRPC'],
  },
]

const whyPython = [
  { icon: <Cpu size={24} />, title: 'Dominant in AI & ML', desc: 'Python is the undisputed language of artificial intelligence. Every major ML research paper and production deployment — from Google to Meta — uses Python at its core.' },
  { icon: <Layers size={24} />, title: 'Readable & Maintainable', desc: 'Python\'s forced indentation and expressive syntax produce code that\'s genuinely readable for developers who didn\'t write it. This dramatically reduces long-term maintenance costs.' },
  { icon: <Zap size={24} />, title: 'Fastest Prototype-to-Production', desc: 'Python\'s rich standard library, pip ecosystem (500k+ packages), and interactive Jupyter notebooks let teams go from idea to working prototype in hours — not days.' },
  { icon: <Globe size={24} />, title: 'Versatile Across All Domains', desc: 'Web backends, data pipelines, automation scripts, scientific computing, DevOps tools — Python delivers production-grade solutions across every software domain in one unified language.' },
]

const expChips = [
  'Custom ML Model Training', 'Django REST Framework', 'FastAPI Microservices',
  'LangChain RAG Pipelines', 'Data Warehouse ETL', 'Apache Airflow Orchestration',
  'Computer Vision APIs', 'Sentiment Analysis Tools', 'Python Automation Scripts',
  'Web Scraping at Scale', 'Time-Series Forecasting', 'Recommender Systems',
]

const whyBtpl = [
  { icon: <Users size={22} />, title: 'Python AI Specialists on Staff', desc: 'Our team includes data scientists, MLOps engineers, and senior Django/FastAPI developers — ready to embed into your team or deliver a complete solution independently.' },
  { icon: <TrendingUp size={22} />, title: 'Proven AI Product Launches', desc: 'We\'ve shipped production AI features for fintech, healthcare, and e-commerce clients — including fraud-detection models, medical document classifiers, and dynamic pricing engines.' },
  { icon: <Lock size={22} />, title: 'Responsible AI Practices', desc: 'Model interpretability, bias testing, adversarial robustness, and data privacy compliance (GDPR, HIPAA) are non-negotiable parts of our AI development process, not afterthoughts.' },
  { icon: <Clock size={22} />, title: 'Regular Demo Checkpoints', desc: 'We run bi-weekly live demo sessions so you can see, test, and give feedback on real working software — keeping stakeholders aligned and eliminating end-of-project surprises.' },
]

export default function Python() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${pythonBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title"><span>Python</span> Development for the World's Smartest Products</h1>
          <p className="sp-hero-desc">
            From Django-powered platforms to PyTorch AI models and FastAPI microservices — BTPL Soft's Python engineers
            build the intelligent, data-driven software that keeps forward-thinking businesses ahead of the curve.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Build with Python <ArrowRight size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-stats">
        <div className="sp-container">
          <div className="py-stats-grid">
            <div className="py-stat"><span className="py-stat-num">400+</span><div className="py-stat-label">Python Projects</div></div>
            <div className="py-stat"><span className="py-stat-num">60+</span><div className="py-stat-label">AI / ML Models Shipped</div></div>
            <div className="py-stat"><span className="py-stat-num">10+</span><div className="py-stat-label">Years Python Experience</div></div>
            <div className="py-stat"><span className="py-stat-num">98%</span><div className="py-stat-label">Client Retention Rate</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-green)' }}>What We Build</p>
            <h2 className="sp-heading">Python Development Services</h2>
            <p className="sp-sub">Whether you need a high-performance API, a production ML pipeline, or an intelligent automation solution — our Python team delivers results that make a measurable difference to your business.</p>
          </div>
          <div className="py-svc-grid">
            {services.map((s, i) => (
              <div className="py-svc-card" key={i}>
                <div className="py-svc-icon-wrap">{s.icon}</div>
                <div className="py-svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="py-tags">{s.tags.map(t => <span className="py-tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PYTHON */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label" style={{ color: 'var(--primary-green)' }}>The Technology</p>
            <h2 className="sp-heading">Why Python?</h2>
            <p className="sp-sub">Python's combination of readability, ecosystem depth, and AI-first tooling makes it the most versatile language for building modern software products.</p>
          </div>
          <div className="py-why-list">
            {whyPython.map((w, i) => (
              <div className="py-why-row" key={i}>
                <div className="py-why-icon">{w.icon}</div>
                <div className="py-why-title">{w.title}</div>
                <div className="py-why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="py-exp-wrap">
            <p className="sp-label" style={{ color: 'var(--primary-green)', justifyContent: 'center' }}>Our Capabilities</p>
            <h3>Python Development Experience</h3>
            <p>Our engineers have shipped Python solutions across AI/ML, data engineering, and web development — for clients ranging from seed-stage startups to publicly listed enterprises.</p>
            <div className="py-chips-grid">
              {expChips.map((chip, i) => (
                <div className="py-chip" key={i}><CheckCircle size={15} /> {chip}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">Why Choose Us</p>
            <h2 className="sp-heading sp-heading-white">Why BTPL Soft for Python Development?</h2>
          </div>
          <div className="py-btpl-grid">
            {whyBtpl.map((w, i) => (
              <div className="py-btpl-card" key={i}>
                <div className="py-btpl-icon">{w.icon}</div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta" style={{ background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' }}>
        <div className="sp-container">
          <h2 style={{ color: '#0d1b2a' }}>Ready to Make Your Product Intelligent with Python?</h2>
          <p style={{ color: '#37474f' }}>Tell us your vision — whether it's an AI feature, a data pipeline, or a Django web platform. We'll respond with a free technical proposal within 24 hours.</p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary" style={{ background: '#2E7D32', color: '#fff' }}>Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>

    </div>
  )
}
