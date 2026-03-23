import { Link } from 'react-router-dom'
import {
  Code, ArrowRight, CheckCircle, Layers, ShieldCheck,
  Zap, Database, Globe, ChevronRight, Cloud, Brain, Monitor, ShoppingCart, Users, Layout, Settings, Smartphone, PenTool, Search, TrendingUp, Share2, Instagram, Facebook, Target, Camera
} from 'lucide-react'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import socialMediaBanner from '../../assets/services/geralt-ai-generated-9094599_1920 (1).webp'

const services = [
  {
    "icon": <Layout size={28} />,
    "title": "Platform Strategy Mapping",
    "desc": "Defining exact content pillars, tone of voice, and posting cadences customized for your brand ecosystem."
  },
  {
    "icon": <Camera size={28} />,
    "title": "High-End Content Creation",
    "desc": "Producing stunning Reels, TikToks, carousels, and graphics that stand out in crowded feeds."
  },
  {
    "icon": <Users size={28} />,
    "title": "Community Management",
    "desc": "Active, real-time engagement with your audience, turning followers into fierce brand advocates."
  },
  {
    "icon": <TrendingUp size={28} />,
    "title": "Influencer Operations",
    "desc": "Identifying, negotiating, and tracking campaigns with key creators to inject trust into your brand."
  },
  {
    "icon": <ShieldCheck size={28} />,
    "title": "Brand Reputation Monitoring",
    "desc": "Using advanced software to track brand sentiment and mitigate PR crises before they escalate."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "Data Analytics & Growth",
    "desc": "Deep-diving into engagement graphs to constantly pivot strategy toward the highest-performing content."
  }
]

const whyUs = [
  {
    "title": "Algorithm Experts",
    "desc": "We study algorithm updates daily to ensure our content format always receives maximum organic reach."
  },
  {
    "title": "In-House Creators",
    "desc": "No outsourced junk. Our native teams write scripts, shoot, and edit all multimedia internally."
  },
  {
    "title": "Multi-Network Dominance",
    "desc": "From B2B lead gen on LinkedIn to viral consumer trends on TikTok, we conquer every platform."
  },
  {
    "title": "Transparent Growth KPIs",
    "desc": "Monthly reporting that ties social engagement directly back to actual website traffic and brand searches."
  }
]

const process = [
  {
    "num": "01",
    "title": "Brand Audit",
    "desc": "Analyzing your current social footprint, audience demographics, and immediate competitors."
  },
  {
    "num": "02",
    "title": "Content Blueprint",
    "desc": "Creating a 30-day visual grid and script bank, ensuring perfectly consistent brand messaging."
  },
  {
    "num": "03",
    "title": "Production & Scheduling",
    "desc": "Shooting video, polishing graphics, and loading them into automated cross-platform schedulers."
  },
  {
    "num": "04",
    "title": "Engagement & Iteration",
    "desc": "Actively participating in comments while analyzing 14-day data cohorts to tweak the next batch."
  }
]

export default function SocialMedia({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${socialMediaBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-hero-icon"><Share2 size={36} /></div>
          <h1 className="sp-hero-title">Social Media <span>Brand Building</span></h1>
          <p className="sp-hero-desc">
            Build massive digital communities. We craft viral-ready, high-engagement social media strategies that command attention, foster incredible brand loyalty, and dominate modern social algorithms.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#F44336', '--sp-accent-dark': '#C62828', '--sp-accent-rgb': '244,67,54' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Algorithmic Content Engineering</h2>
              <p className="sp-subtext-large">Social media is no longer about just posting—it’s about understanding the specific retention metrics and watch-time triggers that force the Instagram, TikTok, and LinkedIn algorithms to push your content organically.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#F44336" />
                  </div>
                  <div>
                    <h4>Graph API Automation</h4>
                    <p>Utilizing profound backend tooling to schedule and aggregate massive cross-platform metrics.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#F44336" />
                  </div>
                  <div>
                    <h4>Short-Form Video Hooks</h4>
                    <p>Engineering the first three seconds of video content using proven psychological retention loops.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Share2 size={64} color="#2196F3" />
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
            <h2 className="sp-heading">Our Social Media Services</h2>
            <p className="sp-sub">Complete end-to-end community building and brand amplification across all major networks.</p>
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
