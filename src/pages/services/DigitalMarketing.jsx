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
import digitalMarketingBanner from '../../assets/services/geralt-ai-generated-9094599_1920.webp'

const services = [
  {
    "icon": <Target size={28} />,
    "title": "PPC & Search Ads",
    "desc": "High-intent Google Ads campaigns optimized rigorously for maximum Return on Ad Spend (ROAS)."
  },
  {
    "icon": <Share2 size={28} />,
    "title": "Social Media Advertising",
    "desc": "Hyper-targeted Meta, LinkedIn, and TikTok campaigns combining stunning creative with behavioral logic."
  },
  {
    "icon": <PenTool size={28} />,
    "title": "Content Architecture",
    "desc": "Developing massive educational hubs, whitepapers, and blogs that establish absolute industry authority."
  },
  {
    "icon": <Zap size={28} />,
    "title": "Marketing Automation",
    "desc": "Building complex HubSpot or ActiveCampaign triggered email workflows that convert cold leads."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "Conversion Rate Opt (CRO)",
    "desc": "A/B testing landing pages and adjusting UI incrementally to squeeze every drop of ROI."
  },
  {
    "icon": <Database size={28} />,
    "title": "Attribution Modeling",
    "desc": "Tracking users across 7+ touchpoints to mathematically prove exactly which ads drive the final sale."
  }
]

const whyUs = [
  {
    "title": "Technical Marketers",
    "desc": "We bridge the gap between brilliant creative campaigns and intense backend data analytics."
  },
  {
    "title": "ROAS Obsession",
    "desc": "We don’t care about \"likes\" or \"impressions.\" We optimize strictly for leads, sales, and profit margin."
  },
  {
    "title": "Platform Partnerships",
    "desc": "Direct agency-level support from Google and Meta ensuring access to beta features and rapid issue resolution."
  },
  {
    "title": "Agile Budget Allocation",
    "desc": "We shift money intra-month to whichever platform is currently generating the cheapest conversions."
  }
]

const marketingChannels = [
  {
    channel: "Google Ads",
    platforms: ["Search", "Display", "Shopping", "YouTube"],
    metrics: ["CPC", "ROAS", "CTR", "Quality Score"],
    color: "#2196F3"
  },
  {
    channel: "Social Media Ads",
    platforms: ["Facebook", "Instagram", "LinkedIn", "TikTok"],
    metrics: ["CPM", "Engagement", "Reach", "Conversions"],
    color: "#4CAF50"
  },
  {
    channel: "Email Marketing",
    platforms: ["HubSpot", "Mailchimp", "ActiveCampaign", "SendGrid"],
    metrics: ["Open Rate", "CTR", "Conversion", "ROI"],
    color: "#FF9800"
  },
  {
    channel: "Content Marketing",
    platforms: ["SEO", "Blogs", "Whitepapers", "Video"],
    metrics: ["Traffic", "Leads", "Authority", "Rankings"],
    color: "#9C27B0"
  }
]

const marketingTools = [
  { tool: "Google Analytics", category: "Analytics", icon: <TrendingUp size={20} /> },
  { tool: "Google Tag Manager", category: "Tracking", icon: <Target size={20} /> },
  { tool: "SEMrush", category: "SEO", icon: <Search size={20} /> },
  { tool: "HubSpot", category: "Automation", icon: <Zap size={20} /> },
  { tool: "Meta Business Suite", category: "Social Ads", icon: <Facebook size={20} /> },
  { tool: "Hotjar", category: "CRO", icon: <Monitor size={20} /> }
]

const process = [
  {
    "num": "01",
    "title": "Market & Funnel Mapping",
    "desc": "Auditing your competitors and designing a mathematical projection of ad spend vs expected ROI."
  },
  {
    "num": "02",
    "title": "Tracking Installation",
    "desc": "Installing pristine server-side pixels, GTM tags, and verified domains before any money is spent."
  },
  {
    "num": "03",
    "title": "Campaign Launch",
    "desc": "Testing hundreds of ad variations and copy angles simultaneously to find the winning formula."
  },
  {
    "num": "04",
    "title": "Algorithmic Scaling",
    "desc": "Aggressively pushing budget into winning ad-sets while instantly killing underperforming campaigns."
  }
]

export default function DigitalMarketing({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section 
        className="sp-hero" 
        style={{
          backgroundImage: `url(${digitalMarketingBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-hero-icon"><TrendingUp size={36} /></div>
          <h1 className="sp-hero-title">Data-Driven Digital <span>Marketing</span></h1>
          <p className="sp-hero-desc">
            Turn clicks into enterprise revenue. We engineer highly targeted, programmatic marketing campaigns that mathematically lower Customer Acquisition Costs and scale your brand globally.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#FF9800', '--sp-accent-dark': '#E65100', '--sp-accent-rgb': '255,152,0' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Programmatic Ad Logic & Tracking</h2>
              <p className="sp-subtext-large">We build advanced tracking infrastructures using Server-Side Tagging and Facebook Conversions API to ensure zero data loss, enabling machine-learning ad algorithms to target your exact buyers.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#FF9800" />
                  </div>
                  <div>
                    <h4>Server-Side Analytics</h4>
                    <p>Bypassing ad-blockers and iOS tracking prevention to record 100% accurate conversion data.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#FF9800" />
                  </div>
                  <div>
                    <h4>Dynamic Retargeting</h4>
                    <p>Architecting complex customer journey funnels that adapt based on specific user actions.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <TrendingUp size={64} color="#2196F3" />
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

      {/* UNIQUE: MARKETING CHANNELS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Channels</p>
            <h2 className="sp-heading">Marketing Channels & <span>Platforms</span></h2>
            <p className="sp-sub">Multi-channel strategies optimized for maximum reach and ROI.</p>
          </div>
          <div className="dm-channels-grid">
            {marketingChannels.map((c, i) => (
              <div className="dm-channel-card" key={i}>
                <div className="dm-channel-header" style={{ borderColor: c.color }}>
                  <h3 style={{ color: c.color }}>{c.channel}</h3>
                </div>
                <div className="dm-channel-body">
                  <div className="dm-channel-section">
                    <h4>Platforms</h4>
                    <div className="dm-channel-tags">
                      {c.platforms.map((p, j) => (
                        <span key={j} style={{ background: `${c.color}12`, color: c.color }}>{p}</span>
                      ))}
                    </div>
                  </div>
                  <div className="dm-channel-section">
                    <h4>Key Metrics</h4>
                    <ul>
                      {c.metrics.map((m, j) => (
                        <li key={j}><CheckCircle size={14} style={{ color: c.color }} /> {m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: MARKETING TOOLS */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Stack</p>
            <h2 className="sp-heading">Marketing Tools & <span>Technologies</span></h2>
            <p className="sp-sub">Industry-leading platforms for tracking, analytics, and campaign optimization.</p>
          </div>
          <div className="dm-tools-grid">
            {marketingTools.map((t, i) => (
              <div className="dm-tool-card" key={i}>
                <div className="dm-tool-icon">{t.icon}</div>
                <h4>{t.tool}</h4>
                <span className="dm-tool-category">{t.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Our Digital Marketing Services</h2>
            <p className="sp-sub">End-to-end digital acquisition strategies fueled by data analytics and creative excellence.</p>
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
