import { Link } from 'react-router-dom'
import Zap from 'lucide-react/dist/esm/icons/zap'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2'
import Globe from 'lucide-react/dist/esm/icons/globe'
import Shield from 'lucide-react/dist/esm/icons/shield'
import Cpu from 'lucide-react/dist/esm/icons/cpu'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import Wifi from 'lucide-react/dist/esm/icons/wifi'
import Activity from 'lucide-react/dist/esm/icons/activity'
import Sun from 'lucide-react/dist/esm/icons/sun'
import FileCheck from 'lucide-react/dist/esm/icons/file-check'
import Users from 'lucide-react/dist/esm/icons/users'
import '../industries/IndustryPage.css'
import heroBanner from '../../assets/industries/data-center-it-specialist-monitoring-ai-llm-visualization-output.webp'

const solutions = [
  { icon: <Wifi size={26} />, title: 'Smart Grid Monitoring', desc: 'Real-time grid monitoring and control systems with fault detection, load balancing, outage prediction and automated response capabilities.' },
  { icon: <BarChart2 size={26} />, title: 'Energy Analytics & Forecasting', desc: 'AI-powered energy consumption analytics, demand forecasting, carbon footprint tracking and sustainability reporting dashboards.' },
  { icon: <Cpu size={26} />, title: 'SCADA & DCS Integration', desc: 'Modern SCADA and Distributed Control System integration with cloud connectivity for centralised energy asset management.' },
  { icon: <Globe size={26} />, title: 'Renewable Energy Platforms', desc: 'Solar, wind and hydro energy management platforms with production monitoring, grid integration and asset performance management.' },
  { icon: <TrendingUp size={26} />, title: 'Energy Trading Systems', desc: 'Real-time energy trading platforms with market data integration, bid management, settlement processing and regulatory reporting.' },
  { icon: <Shield size={26} />, title: 'Utility Customer Portals', desc: 'Self-service utility portals for bill management, consumption tracking, outage reporting and smart meter data visualisation.' },
]

const process = [
  { num: '01', title: 'Infrastructure Assessment', desc: 'Evaluating your existing operational technology, data infrastructure and connectivity for digital integration opportunities.' },
  { num: '02', title: 'Architecture & Security Design', desc: 'Designing secure, resilient architectures for critical infrastructure with cyber security and redundancy built in.' },
  { num: '03', title: 'Development & Integration', desc: 'Building and integrating with SCADA, IoT devices, metering systems and energy market data APIs.' },
  { num: '04', title: 'Deployment & Monitoring', desc: 'Controlled go-live with real-time monitoring, alerting and continuous performance optimisation for critical systems.' },
]

const whyUs = [
  { title: 'Energy Domain Expertise', desc: 'Our team understands energy markets, grid operations and the unique challenges of utility and renewable energy businesses.' },
  { title: 'Critical Infrastructure Security', desc: 'Cybersecurity at the core — our systems are built to protect critical energy infrastructure from evolving threats.' },
  { title: 'OT/IT Convergence', desc: 'Seamless integration between operational technology systems and enterprise IT platforms for unified management.' },
  { title: 'AI & Predictive Analytics', desc: 'Machine learning models for demand forecasting, predictive maintenance and grid anomaly detection.' },
  { title: 'Regulatory Compliance', desc: 'Deep knowledge of energy regulatory frameworks including NERC CIP, EU MDM Directive and national grid standards.' },
  { title: 'Sustainability Focus', desc: 'Platforms designed to support decarbonisation goals with carbon tracking, renewable integration and ESG reporting.' },
]

const techStack = ['Python', 'Node.js', 'AWS IoT', 'Azure', 'InfluxDB', 'PostgreSQL', 'Grafana', 'MQTT', 'OPC-UA', 'TensorFlow', 'Kafka', 'Docker']
const challenges = [
  { text: 'Grid Reliability & Resilience', icon: <Activity size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'Energy Demand Forecasting', icon: <TrendingUp size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Renewable Integration', icon: <Sun size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Cyber Security for Critical Infrastructure', icon: <Shield size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'Regulatory Compliance', icon: <FileCheck size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Customer Engagement & Self-Service', icon: <Users size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function Energy() {
  return (
    <div>
      <section className="ip-hero ip-hero-center" style={{ backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">Energy & Utilities</div>
          <h1 className="ip-hero-title">Energy & Utilities <span>Software Solutions</span></h1>
          <p className="ip-hero-desc">
            We build secure, intelligent energy and utilities software — smart grid monitoring, energy analytics, SCADA integration and renewable energy management platforms — for a sustainable digital future.
          </p>


        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">Digital Transformation for <span>Energy & Utilities</span></h2>
            <p className="ip-subtext">The energy sector is navigating a complex transition — decarbonisation, distributed energy resources, grid modernisation and evolving customer expectations all demand sophisticated digital solutions.</p>
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
            <h2 className="ip-heading">Our Energy & Utilities <span>Technology Solutions</span></h2>
            <p className="ip-subtext">Mission-critical energy technology platforms built for reliability, security and operational intelligence.</p>
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
            <h2 className="ip-heading">Our Energy <span>Delivery Process</span></h2>
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
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>Energy Technology?</span></h2>
          </div>
          <div className="ip-why-grid">
            {whyUs.map((w, i) => (<div className="ip-why-card" key={i}><CheckCircle size={22} className="ip-why-icon" /><div><h4>{w.title}</h4><p>{w.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <section
        className="ip-cta"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,22,40,0.82) 0%, rgba(15,60,30,0.78) 100%)',
        }} />
        <div className="ip-container" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Ready to Power Your Digital Energy Transformation?</h2>
          <p>Partner with BTPL Soft to build secure, intelligent energy technology solutions for the future.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
