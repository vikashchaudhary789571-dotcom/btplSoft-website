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
import uiuxBanner from '../../assets/services/representation-user-experience-interface-design.webp'

const services = [
  {
    "icon": <Brain size={28} />,
    "title": "User Research & Persona Mapping",
    "desc": "Deep behavioral analysis to understand what your target audience truly needs and wants."
  },
  {
    "icon": <Layout size={28} />,
    "title": "Wireframing & Prototyping",
    "desc": "Low and high-fidelity interactive prototypes (Figma, Adobe XD) to visualize the user journey."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "UI Design & Visual Identity",
    "desc": "Creating modern, beautiful, and accessible interfaces that perfectly reflect your brand."
  },
  {
    "icon": <CheckCircle size={28} />,
    "title": "Usability Testing",
    "desc": "Evaluating designs with real users to eliminate friction points before development begins."
  },
  {
    "icon": <Layers size={28} />,
    "title": "Design Systems",
    "desc": "Building comprehensive component libraries ensuring absolute consistency across large platforms."
  },
  {
    "icon": <Globe size={28} />,
    "title": "Web & Mobile App Design",
    "desc": "Tailored, platform-specific design systems adhering to Apple HIG and Google Material Design guidelines."
  }
]

const whyUs = [
  {
    "title": "Data-Driven Creativity",
    "desc": "We rely on analytics, heatmaps, and testing—not just intuition—to drive design decisions."
  },
  {
    "title": "Accessibility Standard (WCAG)",
    "desc": "Our designs are highly inclusive, ensuring access for users with varying visual abilities."
  },
  {
    "title": "Conversion Rate Optimization",
    "desc": "We strategically position CTAs and minimize cognitive load to dramatically boost user conversions."
  },
  {
    "title": "Future-Proof Scalability",
    "desc": "Our component-driven Design Systems allow your product UI to scale effortlessly for years."
  }
]

const designTools = [
  {
    category: "Design & Prototyping",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    color: "#2196F3"
  },
  {
    category: "User Research",
    tools: ["Hotjar", "Maze", "UserTesting", "Optimal Workshop"],
    color: "#4CAF50"
  },
  {
    category: "Collaboration",
    tools: ["Miro", "FigJam", "Notion", "Zeplin"],
    color: "#FF9800"
  },
  {
    category: "Animation & Motion",
    tools: ["After Effects", "Principle", "Lottie", "Rive"],
    color: "#9C27B0"
  }
]

const designPrinciples = [
  {
    principle: "User-Centered Design",
    desc: "Every decision backed by user research, personas, and journey mapping.",
    icon: <Users size={24} />
  },
  {
    principle: "Visual Hierarchy",
    desc: "Strategic use of size, color, and spacing to guide user attention.",
    icon: <Layout size={24} />
  },
  {
    principle: "Consistency & Patterns",
    desc: "Reusable components and design systems for cohesive experiences.",
    icon: <Layers size={24} />
  },
  {
    principle: "Accessibility First",
    desc: "WCAG 2.1 AA compliant designs with proper contrast and keyboard navigation.",
    icon: <CheckCircle size={24} />
  },
  {
    principle: "Mobile-First Approach",
    desc: "Designing for smallest screens first, then scaling up progressively.",
    icon: <Smartphone size={24} />
  },
  {
    principle: "Micro-interactions",
    desc: "Delightful animations and feedback that enhance user engagement.",
    icon: <Zap size={24} />
  }
]

const process = [
  {
    "num": "01",
    "title": "Empathize & Discover",
    "desc": "Stakeholder interviews, market research, and defining the core problem statement."
  },
  {
    "num": "02",
    "title": "Information Architecture",
    "desc": "Structuring the sitemap and user flows for maximum intuitive navigation."
  },
  {
    "num": "03",
    "title": "Visual Design",
    "desc": "Applying color theory, typography, and micro-animations to bring the wireframes to life."
  },
  {
    "num": "04",
    "title": "Developer Handoff",
    "desc": "Seamless CSS/asset generation and documentation ensuring developers replicate the exact design."
  }
]

export default function UIUXDesign({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${uiuxBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Exceptional UI/UX <span>Design Solutions</span></h1>
          <p className="sp-hero-desc">
            We craft human-centric digital experiences. By merging behavioral psychology with stunning visual aesthetics, our UI/UX designs captivate users, simplify complexities, and drive massive business conversions.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#E91E63', '--sp-accent-dark': '#AD1457', '--sp-accent-rgb': '233,30,99' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Component-Driven Design Systems</h2>
              <p className="sp-subtext-large">We build structured, reusable atomic design frameworks in Figma that map 1:1 with React/Vue components, ensuring pixel-to-code parity and extreme development speed.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#E91E63" />
                  </div>
                  <div>
                    <h4>Psychology-Backed Wireframing</h4>
                    <p>We utilize mental models, F-patterns, and cognitive load theory to guide users.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#E91E63" />
                  </div>
                  <div>
                    <h4>Accessible & WCAG Compliant</h4>
                    <p>Color contrast ratios and scalable typographies designed for true inclusivity.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Layout size={64} color="#2196F3" />
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

      {/* UNIQUE: DESIGN TOOLS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Toolkit</p>
            <h2 className="sp-heading">Design Tools & <span>Platforms</span></h2>
            <p className="sp-sub">Industry-leading tools for research, design, prototyping, and collaboration.</p>
          </div>
          <div className="uiux-tools-grid">
            {designTools.map((t, i) => (
              <div className="uiux-tool-card" key={i}>
                <div className="uiux-tool-category" style={{ color: t.color, borderColor: `${t.color}30` }}>
                  {t.category}
                </div>
                <div className="uiux-tool-items">
                  {t.tools.map((tool, j) => (
                    <span className="uiux-tool-tag" key={j} style={{ background: `${t.color}12`, color: t.color }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: DESIGN PRINCIPLES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Philosophy</p>
            <h2 className="sp-heading">Core Design <span>Principles</span></h2>
            <p className="sp-sub">The foundational principles that guide every design decision we make.</p>
          </div>
          <div className="uiux-principles-grid">
            {designPrinciples.map((p, i) => (
              <div className="uiux-principle-card" key={i}>
                <div className="uiux-principle-icon">{p.icon}</div>
                <h4>{p.principle}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Design & Experience Services</h2>
            <p className="sp-sub">From initial user research to pixel-perfect prototypes, we design products people love to use.</p>
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
