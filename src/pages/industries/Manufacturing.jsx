import { Link } from 'react-router-dom'
import Factory from 'lucide-react/dist/esm/icons/factory'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Cpu from 'lucide-react/dist/esm/icons/cpu'
import Wifi from 'lucide-react/dist/esm/icons/wifi'
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2'
import Shield from 'lucide-react/dist/esm/icons/shield'
import Cog from 'lucide-react/dist/esm/icons/cog'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle'
import Layers from 'lucide-react/dist/esm/icons/layers'
import Eye from 'lucide-react/dist/esm/icons/eye'
import Users from 'lucide-react/dist/esm/icons/users'
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw'
import HardHat from 'lucide-react/dist/esm/icons/hard-hat'
import '../industries/IndustryPage.css'
import heroBanner from '../../assets/industries/robotic-arms-modern-factory-setting.webp'

const solutions = [
  { icon: <Cpu size={26} />, title: 'Smart Factory Automation', desc: 'IoT-enabled smart factory solutions with real-time equipment monitoring, predictive maintenance and automated production line control.' },
  { icon: <Wifi size={26} />, title: 'IoT Integration Platforms', desc: 'Industrial IoT platforms connecting sensors, machines and enterprise systems for unified data visibility and control.' },
  { icon: <BarChart2 size={26} />, title: 'Production Analytics', desc: 'Real-time dashboards for OEE, throughput, waste reduction and production KPIs with advanced root cause analysis tools.' },
  { icon: <Shield size={26} />, title: 'Quality Management Systems', desc: 'End-to-end QMS solutions for defect tracking, ISO compliance, supplier quality management and audit readiness.' },
  { icon: <Cog size={26} />, title: 'Supply Chain Digitisation', desc: 'Digital supply chain platforms with demand forecasting, supplier portals, procurement automation and inventory optimisation.' },
  { icon: <TrendingUp size={26} />, title: 'ERP Implementation & Customisation', desc: 'Custom ERP solutions and third-party integrations tailored to your manufacturing workflows and operational needs.' },
]

const process = [
  { num: '01', title: 'OT/IT Assessment', desc: 'Mapping your operational technology landscape, identifying integration opportunities and defining the digital roadmap.' },
  { num: '02', title: 'Architecture & Protocol Design', desc: 'Secure, scalable IoT architecture design with support for MQTT, OPC-UA, MODBUS and industrial protocols.' },
  { num: '03', title: 'Development & Device Integration', desc: 'Agile development with hardware integration, edge computing setup and real-time data pipeline configuration.' },
  { num: '04', title: 'Deployment & Training', desc: 'Phased rollout with operator training, performance optimisation and ongoing system health monitoring.' },
]

const whyUs = [
  { title: 'Industrial IoT Expertise', desc: 'Hands-on experience with Industry 4.0 protocols, edge computing and real-time industrial data systems.' },
  { title: 'OT/IT Convergence', desc: 'Bridging the gap between operational technology and IT systems for unified, intelligent manufacturing operations.' },
  { title: 'Predictive Analytics', desc: 'Machine learning models for predictive maintenance that reduce unplanned downtime by up to 40%.' },
  { title: 'Cybersecurity for Industry', desc: 'Industrial cybersecurity practices to protect critical infrastructure from threats and ensure data integrity.' },
  { title: 'Scalable Cloud Infrastructure', desc: 'AWS and Azure IoT-native architectures that scale from single-plant to global multi-site deployments.' },
  { title: 'Legacy Modernisation', desc: 'Expertise in connecting and modernising legacy SCADA and PLC systems without costly full replacements.' },
]

const techStack = ['Node.js', 'Python', 'MQTT', 'OPC-UA', 'AWS IoT', 'Azure IoT Hub', 'PostgreSQL', 'InfluxDB', 'Grafana', 'TensorFlow', 'Docker', 'Kubernetes']
const challenges = [
  { text: 'Unplanned Equipment Downtime', icon: <AlertTriangle size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'OT/IT System Integration', icon: <Layers size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Production Quality Control', icon: <Eye size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'Supply Chain Visibility', icon: <Cog size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Legacy System Modernisation', icon: <RefreshCw size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Workforce & Safety Management', icon: <Users size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function Manufacturing() {
  return (
    <div>
      <section className="ip-hero ip-hero-center" style={{ backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">Manufacturing & IoT</div>
          <h1 className="ip-hero-title">Manufacturing & IoT <span>Software Solutions</span></h1>
          <p className="ip-hero-desc">
            We power Industry 4.0 transformation with smart factory automation, Industrial IoT platforms, predictive maintenance and digital supply chain solutions engineered for operational excellence.
          </p>


        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">Powering <span>Smart Manufacturing</span> Transformation</h2>
            <p className="ip-subtext">Modern manufacturers face mounting pressure to increase productivity, reduce costs, improve quality and respond faster to market demand — all while managing aging infrastructure and a skills shortage.</p>
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
            <h2 className="ip-heading">Our Manufacturing <span>Technology Solutions</span></h2>
            <p className="ip-subtext">Industrial-grade digital solutions built for reliability, performance and operational excellence.</p>
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
            <h2 className="ip-heading">Our IoT & Manufacturing <span>Delivery Process</span></h2>
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
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>Manufacturing & IoT?</span></h2>
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
          <h2>Ready to Modernise Your Manufacturing Operations?</h2>
          <p>Partner with BTPL Soft to embark on your Industry 4.0 journey with confidence and measurable ROI.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
