import { Link } from 'react-router-dom'
import Code from 'lucide-react/dist/esm/icons/code'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Layers from 'lucide-react/dist/esm/icons/layers'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Database from 'lucide-react/dist/esm/icons/database'
import Globe from 'lucide-react/dist/esm/icons/globe'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import Layout from 'lucide-react/dist/esm/icons/layout'
import Search from 'lucide-react/dist/esm/icons/search'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import webDevBanner from '../../assets/services/html-css-collage-concept.webp'

const services = [
  { icon: <Monitor size={28} />, title: "Corporate Websites", desc: "High-end, dynamic websites showcasing your brand identity to global enterprise clients." },
  { icon: <Layout size={28} />, title: "Web Applications", desc: "Complex, interactive Single Page Applications (SPAs) acting like native desktop programs." },
  { icon: <Zap size={28} />, title: "Performance Optimization", desc: "Auditing and rewriting slow code to ensure blazing-fast rendering and TTI speeds." },
  { icon: <Globe size={28} />, title: "Progressive Web Apps (PWA)", desc: "Offline-capable web apps that sit on your users mobile home screens." },
  { icon: <Database size={28} />, title: "Headless CMS Integration", desc: "Empower your marketing team to edit content instantly without touching a line of code." },
  { icon: <ShieldCheck size={28} />, title: "Secure Maintenance", desc: "Continuous dependency audits, server updates, and 24/7 uptime monitoring." }
]

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript"], color: "#2196F3" },
  { category: "Backend", items: ["Node.js", "Python", "Laravel", "Go"], color: "#4CAF50" },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"], color: "#FF9800" },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"], color: "#9C27B0" }
]



const whyUs = [
  { title: "Pixel-Perfect Fidelity", desc: "Our code looks identical to the Figma design files across every single device breakpoint." },
  { title: "Zero-Bloat Code", desc: "We don't rely on massively bloated libraries. We write clean, semantic HTML5 and CSS3." },
  { title: "SEO-Optimized DOM", desc: "Semantic tags and SSR routing ensures Google spiders index your pages immediately." },
  { title: "Post-Launch Analytics", desc: "Google Tag Manager and Analytics deeply integrated to track every user interaction." }
]

const process = [
  { num: "01", title: "Wireframing & UI Matrix", desc: "Establishing visual hierarchy and mapping out complex responsive layouts." },
  { num: "02", title: "Frontend Architecture", desc: "Scaffolding React components and establishing global state management (Redux/Zustand)." },
  { num: "03", title: "Backend & API Hooking", desc: "Connecting the beautiful frontend securely to robust databases and external APIs." },
  { num: "04", title: "Lighthouse & Go-Live", desc: "Final SEO indexing, speed testing, cache configuration, and global CDN deployment." }
]

export default function WebDevelopment({ onOpenConsult }) {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{
        backgroundImage: `url(${webDevBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Cutting-Edge Web <span>Development</span></h1>
          <p className="sp-hero-desc">
            Creating stunning, responsive, and incredibly fast websites and web applications that drive engagement. We utilize the absolute bleeding edge of front-end tech.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>



      {/* TECHNICAL OVERVIEW */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#2196F3', '--sp-accent-dark': '#1565C0', '--sp-accent-rgb': '33,150,243' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Modern Web Stack Mastery</h2>
              <p className="sp-subtext-large">We abandon slow, bloated templates. We build custom websites using React, Next.js, and headless architectures with aggressive caching to score 99+ on Google Lighthouse.</p>
              <div className="sp-overview-tech-points">
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper"><CheckCircle size={24} color="#2196F3" /></div>
                  <div>
                    <h4>Server-Side Rendering (SSR)</h4>
                    <p>Using Next.js for instant page loads and unparalleled SEO indexing capabilities.</p>
                  </div>
                </div>
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper"><CheckCircle size={24} color="#2196F3" /></div>
                  <div>
                    <h4>Headless Content Management</h4>
                    <p>Decoupling the frontend from backend CMS tools like Sanity or Strapi for ultimate security.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sp-overview-image">
              <div className="sp-tech-illustration">
                <div className="sp-illustration-icon"><Monitor size={64} color="#2196F3" /></div>
                <div className="sp-illustration-circles">
                  <div className="sp-circle sp-circle-1"></div>
                  <div className="sp-circle sp-circle-2"></div>
                  <div className="sp-circle sp-circle-3"></div>
                </div>
                <div className="sp-illustration-dots">
                  <div className="sp-dot"></div><div className="sp-dot"></div>
                  <div className="sp-dot"></div><div className="sp-dot"></div>
                  <div className="sp-dot"></div><div className="sp-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE: TECH STACK BREAKDOWN */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Arsenal</p>
            <h2 className="sp-heading">Technology Stack We <span>Master</span></h2>
            <p className="sp-sub">We pick the right tool for the job — no one-size-fits-all approach.</p>
          </div>
          <div className="wd-stack-grid">
            {techStack.map((t, i) => (
              <div className="wd-stack-card" key={i}>
                <div className="wd-stack-category" style={{ color: t.color, borderColor: `${t.color}30` }}>
                  {t.category}
                </div>
                <div className="wd-stack-items">
                  {t.items.map((item, j) => (
                    <span className="wd-stack-tag" key={j} style={{ background: `${t.color}12`, color: t.color }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Web Development Services</h2>
            <p className="sp-sub">Complete web solutions built for speed, scalability, and absolute aesthetic perfection.</p>
          </div>
          <div className="sp-services-grid">
            {services.map((s, i) => (
              <div className="sp-service-card" key={i}>
                <div className="sp-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">How We Work</p>
            <h2 className="sp-heading">Our Proven Process</h2>
          </div>
          <div className="sp-process-grid">
            {process.map((p, i) => (
              <div className="sp-process-card" key={i}>
                <div className="sp-process-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />
      <GlobalPresence />

      {/* WHY US */}
      <section className="sp-section sp-bg-dark">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label sp-label-light">Why Choose Us</p>
            <h2 className="sp-heading sp-heading-white">Why BTPL Soft?</h2>
          </div>
          <div className="sp-why-grid">
            {whyUs.map((w, i) => (
              <div className="sp-why-card" key={i}>
                <CheckCircle size={22} className="sp-why-check" />
                <div><h4>{w.title}</h4><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
