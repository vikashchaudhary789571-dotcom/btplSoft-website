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
import seoBanner from '../../assets/services/geralt-ai-generated-9094599_1920 (1).webp'

const services = [
  {
    "icon": <Code size={28} />,
    "title": "Technical SEO Audits",
    "desc": "Deep-dive crawling to fix broken links, toxic redirects, index bloat, and javascript rendering issues."
  },
  {
    "icon": <Search size={28} />,
    "title": "On-Page Optimization",
    "desc": "Data-driven alterations of metadata, header tags, keyword density, and internal linking structures."
  },
  {
    "icon": <Globe size={28} />,
    "title": "Off-Page Strategy",
    "desc": "High Domain Authority (DA) link-building outreach to massively increase your site`s search trust."
  },
  {
    "icon": <TrendingUp size={28} />,
    "title": "Local Search SEO",
    "desc": "Google Business Profile optimization and localized citation building to dominate regional queries."
  },
  {
    "icon": <Layout size={28} />,
    "title": "Content Gap Analysis",
    "desc": "Finding exactly what competitors rank for, and creating substantially better pillar content."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "Penalty Recovery",
    "desc": "Diagnosing algorithmic drops and systematically recovering lost traffic from Google Core Updates."
  }
]

const whyUs = [
  {
    "title": "Developer-Led SEO",
    "desc": "Unlike marketing agencies, our developers actually implement the complex code fixes directly."
  },
  {
    "title": "White-Hat Execution",
    "desc": "Zero spam, zero shortcuts. We adhere strictly to Google Webmaster Guidelines for safety."
  },
  {
    "title": "Revenue-Focused",
    "desc": "We don`t just track traffic vanity metrics; we track the actual leads and sales SEO generates."
  },
  {
    "title": "Transparent Analytics",
    "desc": "Full access to customized Looker Studio reports showing exact ROI and keyword movements."
  }
]

const process = [
  {
    "num": "01",
    "title": "Intensive Auditing",
    "desc": "Using ScreamingFrog and Ahrefs to uncover every single technical flaw on your domain."
  },
  {
    "num": "02",
    "title": "Keyword Mapping",
    "desc": "Assigning high-intent, low-competition keywords to specific pages across the site."
  },
  {
    "num": "03",
    "title": "Implementation",
    "desc": "Our developers directly inject the necessary code fixes and content restructurings."
  },
  {
    "num": "04",
    "title": "Monitoring & Reporting",
    "desc": "Real-time dashboarding of rank movements, traffic volume, and organic conversion rates."
  }
]

export default function SEOOptimization({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${seoBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Advanced SEO <span>Optimization</span></h1>
          <p className="sp-hero-desc">
            Dominate search rankings. We utilize algorithmic understanding, technical code restructuring, and semantic content mapping to multiply your organic traffic and lead generation.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#039BE5', '--sp-accent-dark': '#0277BD', '--sp-accent-rgb': '3,155,229' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Technical Algorithmic SEO</h2>
              <p className="sp-subtext-large">SEO isn’t just keywords—it’s code. We optimize server response times, implement dynamic Schema.org markup, fix canonical loops, and aggressively optimize Core Web Vitals to satisfy Google Search algorithms.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#039BE5" />
                  </div>
                  <div>
                    <h4>Core Web Vitals Perfection</h4>
                    <p>Rewriting DOM elements to achieve green scores across LCP, FID, and CLS.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#039BE5" />
                  </div>
                  <div>
                    <h4>Semantic Keyword Silos</h4>
                    <p>Structuring your entire website hierarchy into mathematically logical topic clusters.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Search size={64} color="#2196F3" />
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

      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Our SEO Services</h2>
            <p className="sp-sub">Comprehensive organic growth strategies engineered for sustainable long-term visibility.</p>
          </div>
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
