import { Link } from 'react-router-dom'
import Code from 'lucide-react/dist/esm/icons/code'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Layers from 'lucide-react/dist/esm/icons/layers'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Database from 'lucide-react/dist/esm/icons/database'
import Globe from 'lucide-react/dist/esm/icons/globe'
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import Brain from 'lucide-react/dist/esm/icons/brain'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart'
import Users from 'lucide-react/dist/esm/icons/users'
import Layout from 'lucide-react/dist/esm/icons/layout'
import Settings from 'lucide-react/dist/esm/icons/settings'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import PenTool from 'lucide-react/dist/esm/icons/pen-tool'
import Search from 'lucide-react/dist/esm/icons/search'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import Share2 from 'lucide-react/dist/esm/icons/share-2'
import Instagram from 'lucide-react/dist/esm/icons/instagram'
import Facebook from 'lucide-react/dist/esm/icons/facebook'
import Target from 'lucide-react/dist/esm/icons/target'
import Camera from 'lucide-react/dist/esm/icons/camera'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import qaBanner from '../../assets/services/standard-quality-control-concept-m.webp'

const services = [
  {
    "icon": <Code size={28} />,
    "title": "Test Automation",
    "desc": "Custom automation frameworks using Selenium, Cypress, and Appium for faster release cycles."
  },
  {
    "icon": <Zap size={28} />,
    "title": "Performance & Load Testing",
    "desc": "Simulating high traffic using JMeter to ensure your system doesn`t crash under pressure."
  },
  {
    "icon": <ShieldCheck size={28} />,
    "title": "Security Testing",
    "desc": "Vulnerability scanning, penetration testing, and compliance checks (OWASP, HIPAA, GDPR)."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "Functional & Manual Testing",
    "desc": "Meticulous human exploration to find logical flaws, edge cases, and usability issues."
  },
  {
    "icon": <Layout size={28} />,
    "title": "UI/UX & Cross-Browser Testing",
    "desc": "Ensuring absolute consistency across all browsers, devices, and screen sizes."
  },
  {
    "icon": <Cloud size={28} />,
    "title": "API & Integration Testing",
    "desc": "Validating the security, payload accuracy, and performance of third-party APIs and microservices."
  }
]

const whyUs = [
  {
    "title": "Shift-Left Approach",
    "desc": "We integrate QA early in the development cycle to catch bugs when they are cheap to fix."
  },
  {
    "title": "CI/CD Integration",
    "desc": "Automated test suites run on every code commit, ensuring rapid and safe deployments."
  },
  {
    "title": "Independent Validation",
    "desc": "Unbiased, objective software testing independent of the development team."
  },
  {
    "title": "Modern Tool Stack",
    "desc": "Proficient in the latest testing frameworks and cloud-based device farms (BrowserStack, AWS)."
  }
]

const testingTypes = [
  {
    type: "Functional Testing",
    tools: ["Selenium", "Cypress", "Playwright", "TestCafe"],
    coverage: ["UI Testing", "Integration", "Regression", "Smoke Tests"],
    color: "#2196F3"
  },
  {
    type: "Performance Testing",
    tools: ["JMeter", "K6", "Gatling", "LoadRunner"],
    coverage: ["Load Testing", "Stress Testing", "Spike Testing", "Endurance"],
    color: "#4CAF50"
  },
  {
    type: "Security Testing",
    tools: ["OWASP ZAP", "Burp Suite", "Nessus", "Metasploit"],
    coverage: ["Penetration", "Vulnerability Scan", "SQL Injection", "XSS Testing"],
    color: "#FF9800"
  },
  {
    type: "Mobile Testing",
    tools: ["Appium", "XCUITest", "Espresso", "Detox"],
    coverage: ["iOS Testing", "Android Testing", "Device Farms", "Gestures"],
    color: "#9C27B0"
  }
]

const automationBenefits = [
  { metric: "70%", label: "Faster Testing", desc: "Automated regression suites", color: "#2196F3" },
  { metric: "90%", label: "Bug Detection", desc: "Early defect identification", color: "#4CAF50" },
  { metric: "50%", label: "Cost Reduction", desc: "Lower QA overhead", color: "#FF9800" },
  { metric: "24/7", label: "Continuous Testing", desc: "CI/CD pipeline integration", color: "#9C27B0" }
]

const process = [
  {
    "num": "01",
    "title": "Test Strategy formulation",
    "desc": "Defining the scope, tools, environments, and test matrices based on project requirements."
  },
  {
    "num": "02",
    "title": "Test Case Design",
    "desc": "Writing comprehensive manual test cases and automated test scripts."
  },
  {
    "num": "03",
    "title": "Execution & Bug Tracking",
    "desc": "Running tests and logging issues with detailed reproduction steps in Jira."
  },
  {
    "num": "04",
    "title": "Regression & Sign-off",
    "desc": "Verifying bug fixes and running full regression suites before deployment approval."
  }
]

export default function QAAndTesting({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${qaBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-hero-icon"><ShieldCheck size={36} /></div>
          <h1 className="sp-hero-title">Software QA & <span>Testing Solutions</span></h1>
          <p className="sp-hero-desc">
            Deliver flawless software to your users. Our comprehensive QA and testing services combine manual precision with automated efficiency to ensure your applications are secure, scalable, and bug-free.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#009688', '--sp-accent-dark': '#00695C', '--sp-accent-rgb': '0,150,136' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Automated CI/CD Test Grids</h2>
              <p className="sp-subtext-large">We don`t just find bugs—we mathematically prevent them by integrating automated Selenium, Cypress, and Jest scripts directly into your CI/CD delivery pipelines.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#009688" />
                  </div>
                  <div>
                    <h4>Continuous Integration QA</h4>
                    <p>Automated suites that block bad code deployments before they reach production.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#009688" />
                  </div>
                  <div>
                    <h4>Load & Penetration Simulation</h4>
                    <p>Stress testing servers with JMeter and securing endpoints against top OWASP vulnerabilities.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <ShieldCheck size={64} color="#2196F3" />
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

      {/* UNIQUE: AUTOMATION BENEFITS */}
      <section className="qa-benefits-strip">
        <div className="sp-container">
          <div className="qa-benefits-grid">
            {automationBenefits.map((b, i) => (
              <div className="qa-benefit-item" key={i}>
                <div className="qa-benefit-metric" style={{ color: b.color }}>{b.metric}</div>
                <div className="qa-benefit-label">{b.label}</div>
                <div className="qa-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: TESTING TYPES & TOOLS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Testing Arsenal</p>
            <h2 className="sp-heading">Testing Types & <span>Tools We Master</span></h2>
            <p className="sp-sub">Comprehensive testing coverage using industry-leading automation frameworks.</p>
          </div>
          <div className="qa-testing-grid">
            {testingTypes.map((t, i) => (
              <div className="qa-testing-card" key={i}>
                <div className="qa-testing-header" style={{ borderColor: t.color }}>
                  <h3 style={{ color: t.color }}>{t.type}</h3>
                </div>
                <div className="qa-testing-body">
                  <div className="qa-testing-section">
                    <h4>Tools & Frameworks</h4>
                    <div className="qa-testing-tags">
                      {t.tools.map((tool, j) => (
                        <span key={j} style={{ background: `${t.color}12`, color: t.color }}>{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="qa-testing-section">
                    <h4>Coverage Areas</h4>
                    <ul>
                      {t.coverage.map((c, j) => (
                        <li key={j}><CheckCircle size={14} style={{ color: t.color }} /> {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Our QA Offerings</h2>
            <p className="sp-sub">Rigorous testing methodologies covering every aspect of your software lifecycle.</p>
          </div>
          <div className="sp-services-grid">
            {services.map((s, i) => (<div className="sp-service-card" key={i}><div className="sp-service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-white">
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
