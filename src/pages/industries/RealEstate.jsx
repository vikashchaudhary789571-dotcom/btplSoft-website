import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Building from 'lucide-react/dist/esm/icons/building'
import Globe from 'lucide-react/dist/esm/icons/globe'
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2'
import Users from 'lucide-react/dist/esm/icons/users'
import Cpu from 'lucide-react/dist/esm/icons/cpu'
import Search from 'lucide-react/dist/esm/icons/search'
import MapPin from 'lucide-react/dist/esm/icons/map-pin'
import Camera from 'lucide-react/dist/esm/icons/camera'
import FileText from 'lucide-react/dist/esm/icons/file-text'
import '../industries/IndustryPage.css'
import heroBanner from '../../assets/industries/hands-working-digital-device-network-graphic-overlay.webp'

const solutions = [
  { icon: <Building size={26} />, title: 'Property Management Portals', desc: 'All-in-one property management platforms for landlords, property managers and tenants — rent collection, maintenance requests and lease management.' },
  { icon: <Search size={26} />, title: 'Real Estate Listing Platforms', desc: 'Feature-rich property search and listing portals with advanced filters, map-based search, virtual tours and lead generation tools.' },
  { icon: <Cpu size={26} />, title: 'Virtual Tour & 3D Visualisation', desc: '360° virtual property tours, 3D floor plan visualisation and AR-powered staging tools that enhance buyer engagement remotely.' },
  { icon: <Users size={26} />, title: 'CRM for Real Estate', desc: 'Real estate-specific CRM solutions with lead pipeline management, automated follow-ups, broker portals and deal lifecycle tracking.' },
  { icon: <BarChart2 size={26} />, title: 'Property Analytics & Valuation', desc: 'AI-driven property valuation models, market trend analysis, investment ROI calculators and neighbourhood insights dashboards.' },
  { icon: <Globe size={26} />, title: 'PropTech Mobile Apps', desc: 'Native iOS and Android apps for property search, virtual viewings, mortgage calculators and agent communication.' },
]

const process = [
  { num: '01', title: 'Market & User Research', desc: 'Understanding your target users — buyers, sellers, agents or property managers — and the competitive landscape.' },
  { num: '02', title: 'UX Design & Prototyping', desc: 'Designing intuitive property search and management experiences with seamless navigation and compelling visuals.' },
  { num: '03', title: 'Development & Integration', desc: 'Building robust platforms integrated with MLS/IDX feeds, payment gateways, map APIs and third-party PropTech tools.' },
  { num: '04', title: 'Launch & Growth', desc: 'SEO-optimised launch with analytics setup, performance monitoring and iterative feature development.' },
]

const whyUs = [
  { title: 'PropTech Domain Expertise', desc: 'Deep understanding of real estate workflows, MLS/IDX integration and the technical requirements of property platforms.' },
  { title: 'MLS & IDX Integration', desc: 'Expert integration with major MLS databases and IDX feeds for real-time property listing data.' },
  { title: 'Virtual Tour Technology', desc: 'Cutting-edge 360° virtual tour and 3D visualisation capabilities that reduce in-person viewing requirements.' },
  { title: 'AI-Powered Valuation', desc: 'Machine learning models that deliver accurate automated property valuations based on market data and comparable sales.' },
  { title: 'Mobile-First Design', desc: 'Property searches predominantly happen on mobile — our platforms deliver exceptional mobile experiences.' },
  { title: 'Secure Payment Processing', desc: 'PCI-compliant rent payment, deposit management and transaction processing built directly into your platforms.' },
]

const techStack = ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Maps API', 'Stripe', 'Three.js', 'TensorFlow', 'ElasticSearch', 'Redis']
const challenges = [
  { text: 'Property Discovery & Search', icon: <Search size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Buyer/Tenant Engagement', icon: <Users size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'Virtual Viewings & Tours', icon: <Camera size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'Agent & Lead Management', icon: <BarChart2 size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Property Valuation Accuracy', icon: <MapPin size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Document & Contract Management', icon: <FileText size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function RealEstate() {
  return (
    <div>
      <section className="ip-hero ip-hero-center" style={{ backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">Real Estate & PropTech</div>
          <h1 className="ip-hero-title">Real Estate & PropTech <span>Software Solutions</span></h1>
          <p className="ip-hero-desc">
            We build innovative PropTech platforms — from property listing portals and AI valuation tools to virtual tour solutions and property management systems — that redefine real estate experiences.
          </p>


        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">Building the Future of <span>PropTech</span></h2>
            <p className="ip-subtext">The real estate industry is undergoing digital disruption. Buyers, sellers and tenants expect seamless digital experiences — from online search and virtual tours to digital signing and online rent payments.</p>
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
            <h2 className="ip-heading">Our Real Estate <span>Technology Solutions</span></h2>
            <p className="ip-subtext">Digital platforms that connect buyers, sellers and agents with seamless, engaging property experiences.</p>
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
            <h2 className="ip-heading">Our PropTech <span>Delivery Process</span></h2>
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
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>Real Estate Technology?</span></h2>
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
          <h2>Ready to Build Your PropTech Platform?</h2>
          <p>Let's create a stunning, high-performance real estate platform that wins more clients and closes more deals.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
