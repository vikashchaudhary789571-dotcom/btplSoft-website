import { Link } from 'react-router-dom'
import { Landmark, ArrowRight, CheckCircle, Shield, Lock, Globe, BarChart2, CreditCard, FileCheck, AlertTriangle, RefreshCw, Zap, Users } from 'lucide-react'
import '../industries/IndustryPage.css'

const solutions = [
  { icon: <Lock size={26} />, title: 'Secure Payment Gateways', desc: 'PCI-DSS compliant payment processing systems with multi-currency support, fraud detection and real-time transaction monitoring.' },
  { icon: <Landmark size={26} />, title: 'Digital Banking Platforms', desc: 'Full-featured online and mobile banking applications with account management, fund transfers, loan origination and more.' },
  { icon: <BarChart2 size={26} />, title: 'Financial Analytics & BI', desc: 'Real-time dashboards, predictive risk modelling, regulatory reporting and AI-driven financial insights for data-driven decisions.' },
  { icon: <Shield size={26} />, title: 'Regulatory Compliance Tools', desc: 'Automated compliance management systems for AML, KYC, GDPR and Basel III — reducing risk and ensuring audit readiness.' },
  { icon: <CreditCard size={26} />, title: 'Lending & Loan Platforms', desc: 'End-to-end digital lending solutions with smart credit scoring, document verification, repayment tracking and customer portals.' },
  { icon: <Globe size={26} />, title: 'WealthTech & Investment Apps', desc: 'Robo-advisory platforms, portfolio management systems and investment analytics tools for modern wealth management firms.' },
]

const process = [
  { num: '01', title: 'Requirements & Compliance', desc: 'Deep dive into your regulatory landscape and business objectives to define a compliant solution architecture.' },
  { num: '02', title: 'Security-First Architecture', desc: 'Design with end-to-end encryption, multi-factor authentication and zero-trust security models from day one.' },
  { num: '03', title: 'Agile Development & QA', desc: 'Iterative development with dedicated financial domain testing, load testing and penetration testing.' },
  { num: '04', title: 'Deployment & Compliance Audit', desc: 'Controlled go-live with regulatory compliance audit, performance monitoring and ongoing support.' },
]

const whyUs = [
  { title: 'FinTech Domain Expertise', desc: 'Our team deeply understands financial regulations, compliance requirements and the complex systems banks operate.' },
  { title: 'PCI-DSS & ISO 27001 Ready', desc: 'We build payment and financial systems that meet the most stringent global security and compliance standards.' },
  { title: 'AI-Driven Fraud Prevention', desc: 'Advanced ML models for real-time transaction fraud detection that protect your business and customers.' },
  { title: 'API-First Banking', desc: 'Open banking APIs enabling seamless integration with third-party fintech services and financial data providers.' },
  { title: 'Scalable Microservices', desc: 'Cloud-native microservice architectures that handle millions of transactions reliably with high availability.' },
  { title: 'Regulatory Reporting', desc: 'Automated regulatory reporting tools for BASEL III, MiFID II, GDPR and other financial compliance frameworks.' },
]

const techStack = ['React.js', 'Node.js', 'Java Spring', 'Python', 'PostgreSQL', 'Oracle', 'Redis', 'AWS', 'Azure', 'Kafka', 'Blockchain', 'TensorFlow']
const challenges = [
  { text: 'Regulatory & AML Compliance', icon: <FileCheck size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'Cybersecurity & Data Breaches', icon: <Shield size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'Legacy System Modernisation', icon: <RefreshCw size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Digital Transformation', icon: <Zap size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Real-Time Payment Processing', icon: <CreditCard size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Customer Trust & Experience', icon: <Users size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function BankingFintech() {
  return (
    <div>
      <section className="ip-hero ip-hero-center">
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">Banking & FinTech</div>
          <h1 className="ip-hero-title">Banking & FinTech <span>Software Solutions</span></h1>
          <p className="ip-hero-desc">
            We engineer secure, compliant and scalable financial technology solutions — from digital banking platforms and payment gateways to AI-driven fraud detection and regulatory compliance tools.
          </p>


        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">Navigating <span>Digital Finance</span> Complexity</h2>
            <p className="ip-subtext">The banking and financial services sector is undergoing a seismic digital transformation. Customer expectations, emerging fintech disruptors and tightening regulations demand technology partners who truly understand the domain.</p>
          </div>
          <ul className="ip-checklist ip-checklist-center">
            {challenges.map((c, i) => <li key={i}><span className="ip-chk-icon" style={{ background: c.bg, color: c.color }}>{c.icon}</span>{c.text}</li>)}
          </ul>
        </div>
      </section>

      <section className="ip-section ip-bg-light">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">What We Build</p>
            <h2 className="ip-heading">Our FinTech <span>Software Solutions</span></h2>
            <p className="ip-subtext">Purpose-built financial technology products designed for security, compliance and exceptional user experience.</p>
          </div>
          <div className="ip-solutions-grid">
            {solutions.map((s, i) => (<div className="ip-solution-card" key={i}><div className="ip-solution-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">How We Work</p>
            <h2 className="ip-heading">Our FinTech <span>Delivery Process</span></h2>
          </div>
          <div className="ip-process-grid">
            {process.map((p, i) => (<div className="ip-process-step" key={i}><div className="ip-process-num">{p.num}</div><h4>{p.title}</h4><p>{p.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="ip-section ip-tech-section-dark">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label ip-label-light">Technologies</p>
            <h2 className="ip-heading ip-heading-white">Tech Stack We <span>Leverage</span></h2>
          </div>
        </div>
        <div className="ip-tech-marquee-wrap">
          <div className="ip-tech-track">
            {[...techStack, ...techStack].map((t, i) => (
              <div className="ip-tech-card" key={i}>
                <span className="ip-tech-card-idx">{String(((i % techStack.length) + 1)).padStart(2,'0')}</span>
                <span className="ip-tech-card-dot" />
                <span className="ip-tech-card-name">{t}</span>
              </div>
            ))}
          </div>
          <div className="ip-tech-track reverse">
            {[...techStack, ...techStack].reverse().map((t, i) => (
              <div className="ip-tech-card" key={i}>
                <span className="ip-tech-card-idx">{String(((i % techStack.length) + 1)).padStart(2,'0')}</span>
                <span className="ip-tech-card-dot" />
                <span className="ip-tech-card-name">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ip-section ip-bg-dark">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label ip-label-light">Why Choose Us</p>
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>FinTech Solutions?</span></h2>
          </div>
          <div className="ip-why-grid">
            {whyUs.map((w, i) => (<div className="ip-why-card" key={i}><CheckCircle size={22} className="ip-why-icon" /><div><h4>{w.title}</h4><p>{w.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <section className="ip-cta">
        <div className="ip-container">
          <h2>Ready to Modernise Your Financial Platform?</h2>
          <p>Partner with BTPL Soft to build secure, compliant FinTech solutions that your customers will trust.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
