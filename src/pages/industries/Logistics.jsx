import { Link } from 'react-router-dom'
import Truck from 'lucide-react/dist/esm/icons/truck'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import MapPin from 'lucide-react/dist/esm/icons/map-pin'
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2'
import Package from 'lucide-react/dist/esm/icons/package'
import Globe from 'lucide-react/dist/esm/icons/globe'
import Cpu from 'lucide-react/dist/esm/icons/cpu'
import Navigation from 'lucide-react/dist/esm/icons/navigation'
import Fuel from 'lucide-react/dist/esm/icons/fuel'
import Clock from 'lucide-react/dist/esm/icons/clock'
import Route from 'lucide-react/dist/esm/icons/route'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import Users from 'lucide-react/dist/esm/icons/users'
import '../industries/IndustryPage.css'
import heroBanner from '../../assets/industries/global-logistics-transportation-network.webp'
import ctaBanner from '../../assets/industries/truck-driver-occupation.webp'

const solutions = [
  { icon: <MapPin size={26} />, title: 'Fleet Management Systems', desc: 'Real-time GPS fleet tracking, driver behaviour monitoring, vehicle health diagnostics and automated maintenance scheduling.' },
  { icon: <Navigation size={26} />, title: 'Route Optimisation', desc: 'AI-driven route planning algorithms that minimise delivery time, fuel costs and carbon footprint across fleet operations.' },
  { icon: <Package size={26} />, title: 'Last-Mile Delivery Platforms', desc: 'End-to-end last-mile delivery management with dynamic dispatch, customer notifications and proof of delivery tools.' },
  { icon: <Globe size={26} />, title: 'Supply Chain Visibility', desc: 'Real-time end-to-end supply chain tracking with exception management, carrier integration and predictive ETA tools.' },
  { icon: <BarChart2 size={26} />, title: 'Logistics Analytics', desc: 'Advanced analytics for freight cost optimisation, carrier performance benchmarking and operational efficiency insights.' },
  { icon: <Cpu size={26} />, title: 'Warehouse Management Systems', desc: 'WMS solutions with barcode/RFID scanning, slotting optimisation, pick-and-pack workflows and 3PL integration.' },
]

const process = [
  { num: '01', title: 'Operations Audit', desc: 'Mapping your supply chain, fleet and warehouse workflows to identify efficiency gaps and technology opportunities.' },
  { num: '02', title: 'Solution Architecture', desc: 'Designing scalable, integrated platforms that connect vehicles, warehouses, carriers and customers in real time.' },
  { num: '03', title: 'Development & Integration', desc: 'Building and integrating with TMS, WMS, ERP, telematics devices and carrier APIs in agile sprints.' },
  { num: '04', title: 'Go-Live & Optimisation', desc: 'Phased rollout with driver/operator training, KPI dashboards and continuous performance optimisation.' },
]

const whyUs = [
  { title: 'Logistics Domain Expertise', desc: 'Years of experience solving complex transport and supply chain challenges for carriers, 3PLs and shippers.' },
  { title: 'Real-Time Telematics Integration', desc: 'Seamless integration with leading telematics providers for live vehicle and asset tracking data.' },
  { title: 'AI Route Optimisation', desc: 'Our ML-powered routing algorithms have reduced delivery costs by up to 30% for logistics clients.' },
  { title: 'Scalable Cloud Architecture', desc: 'Platforms built to manage thousands of vehicles and millions of events per day with consistent performance.' },
  { title: 'Carrier & API Network', desc: 'Pre-built integrations with major shipping carriers, freight brokers and logistics API networks.' },
  { title: '24/7 Operational Support', desc: 'Mission-critical logistics systems require round-the-clock support — we provide dedicated SLA-backed coverage.' },
]

const techStack = ['React.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Maps API', 'HERE Maps', 'Kafka', 'Redis', 'Docker', 'TensorFlow']
const challenges = [
  { text: 'Last-Mile Delivery Costs', icon: <Truck size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'Fleet Visibility & Tracking', icon: <MapPin size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Route Optimisation', icon: <Route size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Supply Chain Disruptions', icon: <Package size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Fuel & Cost Management', icon: <Fuel size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'Delivery Time Accuracy', icon: <Clock size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function Logistics() {
  return (
    <div>
      <section className="ip-hero ip-hero-center" style={{ backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">Logistics & Transportation</div>
          <h1 className="ip-hero-title">Logistics & Transportation <span>Software Solutions</span></h1>
          <p className="ip-hero-desc">
            We build intelligent logistics and transportation platforms — fleet management, route optimisation, last-mile delivery and supply chain visibility solutions — that drive operational excellence.
          </p>


        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">Transforming <span>Logistics Operations</span> with Technology</h2>
            <p className="ip-subtext">The logistics industry is navigating rising customer expectations for real-time delivery visibility, fuel cost pressures and the complexity of modern global supply chains.</p>
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
            <h2 className="ip-heading">Our Logistics <span>Technology Solutions</span></h2>
            <p className="ip-subtext">End-to-end logistics software built for real-time visibility, efficiency and scalable growth.</p>
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
            <h2 className="ip-heading">Our Logistics <span>Delivery Process</span></h2>
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
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>Logistics Technology?</span></h2>
          </div>
          <div className="ip-why-grid">
            {whyUs.map((w, i) => (<div className="ip-why-card" key={i}><CheckCircle size={22} className="ip-why-icon" /><div><h4>{w.title}</h4><p>{w.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <section
        className="ip-cta"
        style={{
          backgroundImage: `url(${ctaBanner})`,
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
          <h2>Ready to Optimise Your Logistics Operations?</h2>
          <p>Partner with BTPL Soft to build smarter, faster and more cost-efficient logistics technology.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
