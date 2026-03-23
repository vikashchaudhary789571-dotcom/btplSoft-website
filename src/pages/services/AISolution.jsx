import { Link } from 'react-router-dom'
import {
  Code, ArrowRight, CheckCircle, Layers, ShieldCheck,
  Zap, Database, Globe, ChevronRight, Cloud, Brain, Monitor, ShoppingCart, Users, Layout, Settings, Smartphone, PenTool, Search, TrendingUp, Share2, Instagram, Facebook, Target, Camera
} from 'lucide-react'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import aiBanner from '../../assets/services/human-ai-touch-connection-technology-innovation.webp'

const services = [
  {
    "icon": <Brain size={28} />,
    "title": "Machine Learning Models",
    "desc": "Custom ML algorithms tailored to your data for accurate predictions and decision-making."
  },
  {
    "icon": <Zap size={28} />,
    "title": "Robotic Process Automation",
    "desc": "Automate repetitive tasks, reduce human error, and accelerate business processes."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "Computer Vision",
    "desc": "Implement advanced image and video recognition systems for quality control or security."
  },
  {
    "icon": <Code size={28} />,
    "title": "Conversational AI / Chatbots",
    "desc": "Intelligent NLP chatbots that handle customer support 24/7 with human-like accuracy."
  },
  {
    "icon": <Database size={28} />,
    "title": "Predictive Analytics",
    "desc": "Analyze historical data to forecast trends and make strategic, data-driven decisions."
  },
  {
    "icon": <Layers size={28} />,
    "title": "AI Infrastructure Setup",
    "desc": "Robust cloud architectures designed specifically to train and deploy complex AI models."
  }
]

const useCases = [
  {
    "industry": "Healthcare",
    "title": "Medical Diagnosis AI",
    "desc": "AI-powered diagnostic tools analyzing medical images with 95%+ accuracy, reducing diagnosis time by 60%.",
    "impact": "60% faster diagnosis"
  },
  {
    "industry": "Retail",
    "title": "Demand Forecasting",
    "desc": "Predictive models optimizing inventory management, reducing stockouts by 40% and overstock by 35%.",
    "impact": "40% reduction in stockouts"
  },
  {
    "industry": "Finance",
    "title": "Fraud Detection",
    "desc": "Real-time transaction monitoring detecting fraudulent activities with 98% accuracy, saving millions.",
    "impact": "98% fraud detection rate"
  },
  {
    "industry": "Manufacturing",
    "title": "Predictive Maintenance",
    "desc": "IoT + AI predicting equipment failures 2 weeks in advance, reducing downtime by 50%.",
    "impact": "50% less downtime"
  }
]

const aiModels = [
  { name: "GPT-4 & LLMs", desc: "Natural language processing and generation", color: "#2196F3" },
  { name: "Computer Vision", desc: "Image recognition and object detection", color: "#4CAF50" },
  { name: "Time Series", desc: "Forecasting and trend analysis", color: "#FF9800" },
  { name: "Recommendation", desc: "Personalization engines", color: "#9C27B0" },
  { name: "Anomaly Detection", desc: "Fraud and outlier identification", color: "#F44336" },
  { name: "Reinforcement Learning", desc: "Autonomous decision-making", color: "#00BCD4" }
]

const faqs = [
  {
    "q": "How long does it take to build a custom AI model?",
    "a": "Typically 8-16 weeks depending on data quality, complexity, and integration requirements. We provide a detailed timeline after initial assessment."
  },
  {
    "q": "Do you require access to our sensitive data?",
    "a": "No. We can work with anonymized data, implement federated learning, or train models on-premise to ensure complete data privacy."
  },
  {
    "q": "What if the AI model doesn't perform as expected?",
    "a": "We guarantee iterative improvements until accuracy targets are met. Our contracts include performance benchmarks and SLAs."
  },
  {
    "q": "Can you integrate AI into our existing systems?",
    "a": "Yes. We specialize in seamless API integration with legacy systems, cloud platforms, and modern tech stacks."
  }
]

const whyUs = [
  {
    "title": "Data Security Guarantee",
    "desc": "We employ federated learning and data anonymization. Your data never leaves your environment."
  },
  {
    "title": "PhD-level AI Scientists",
    "desc": "Our team comprises top-tier data engineers and AI specialists with proven industry experience."
  },
  {
    "title": "Measurable ROI",
    "desc": "We align AI metrics directly with your business KPIs, ensuring tangible financial benefits."
  },
  {
    "title": "Scalable MLOps",
    "desc": "We don’t just deploy; we build scalable Machine Learning Operations pipelines."
  }
]

const process = [
  {
    "num": "01",
    "title": "Data Assessment",
    "desc": "We analyze your data quality and volume to determine the best ML approach."
  },
  {
    "num": "02",
    "title": "Model Training",
    "desc": "Iterative model training and hyperparameter tuning for maximum accuracy."
  },
  {
    "num": "03",
    "title": "Integration",
    "desc": "Deploying the trained models seamlessly into your existing software stack."
  },
  {
    "num": "04",
    "title": "Continuous Learning",
    "desc": "Setting up pipelines so your AI gets smarter as new data comes in."
  }
]

export default function AISolution({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${aiBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-hero-icon"><Brain size={36} /></div>
          <h1 className="sp-hero-title">AI & Machine Learning <span>Solutions</span></h1>
          <p className="sp-hero-desc">
            Unlock the power of Artificial Intelligence. We build custom machine learning models, predictive analytics, and conversational AI tools to transform your business operations and drive intelligent growth.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#FF6F00', '--sp-accent-dark': '#E65100', '--sp-accent-rgb': '255,111,0' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Intelligent Engineering & ML Models</h2>
              <p className="sp-subtext-large">We architect AI solutions from the ground up, focusing on data purity, robust training pipelines, and optimized deployment via Machine Learning Operations (MLOps).</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#FF6F00" />
                  </div>
                  <div>
                    <h4>Neural Networks & Deep Learning</h4>
                    <p>Deploying advanced PyTorch and TensorFlow models.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#FF6F00" />
                  </div>
                  <div>
                    <h4>Data Pipeline Engineering</h4>
                    <p>Secure, scalable ETL processes preventing data bottlenecks.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Brain size={64} color="#2196F3" />
                  </div>
                  <div className="sp-illustration-circles">
                    <div className="sp-circle sp-circle-1"></div>
                    <div className="sp-circle sp-circle-2"></div>
                    <div className="sp-circle sp-circle-3"></div>
                  </div>
                  <div className="sp-illustration-dots">
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                    <div className="sp-dot"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE: AI USE CASES SECTION */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Real-World Impact</p>
            <h2 className="sp-heading">AI Use Cases Across <span>Industries</span></h2>
            <p className="sp-sub">See how our AI solutions are transforming businesses and delivering measurable ROI.</p>
          </div>
          <div className="ai-use-cases-grid">
            {useCases.map((uc, i) => (
              <div className="ai-use-case-card" key={i}>
                <div className="ai-use-case-tag">{uc.industry}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
                <div className="ai-use-case-impact">
                  <TrendingUp size={18} />
                  <span>{uc.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: AI MODELS & TECHNOLOGIES */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">AI Models & <span>Technologies</span></h2>
            <p className="sp-sub">We work with cutting-edge AI frameworks and models to deliver state-of-the-art solutions.</p>
          </div>
          <div className="ai-models-grid">
            {aiModels.map((model, i) => (
              <div className="ai-model-card" key={i}>
                <div className="ai-model-icon" style={{ background: `${model.color}15`, color: model.color }}>
                  <Brain size={24} />
                </div>
                <h4>{model.name}</h4>
                <p>{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center"><p className="sp-label">What We Offer</p><h2 className="sp-heading">Our AI Capabilities</h2><p className="sp-sub">Harness cutting-edge AI technologies to automate workflows, analyze vast datasets, and create personalized customer experiences.</p></div>
          <div className="sp-services-grid">
            {services.map((s, i) => (<div className="sp-service-card" key={i}><div className="sp-service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center"><p className="sp-label">How We Work</p><h2 className="sp-heading">Our Proven Process</h2></div>
          <div className="sp-process-grid">
            {process.map((p, i) => (<div className="sp-process-card" key={i}><div className="sp-process-num">{p.num}</div><h4>{p.title}</h4><p>{p.desc}</p></div>))}
          </div>
        </div>
      </section>

      <TechStack />
      <GlobalPresence />

      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center"><p className="sp-label sp-label-light">Why Choose Us</p><h2 className="sp-heading sp-heading-white">Why BTPL Soft?</h2></div>
          <div className="sp-why-grid">
            {whyUs.map((w, i) => (<div className="sp-why-card" key={i}><CheckCircle size={22} className="sp-why-check" /><div><h4>{w.title}</h4><p>{w.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      {/* UNIQUE: FAQ SECTION */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Got Questions?</p>
            <h2 className="sp-heading">Frequently Asked <span>Questions</span></h2>
          </div>
          <div className="ai-faq-grid">
            {faqs.map((faq, i) => (
              <div className="ai-faq-card" key={i}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-container">
          <h2>Have a Project Idea in Mind?</h2>
          <p>Talk to our experts and get a detailed proposal — absolutely free.</p>
          <Link to="/contact" className="sp-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
