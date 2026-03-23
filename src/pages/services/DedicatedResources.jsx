import { Link } from 'react-router-dom'
import {
  Code, ArrowRight, CheckCircle, Layers, ShieldCheck,
  Zap, Database, Globe, ChevronRight, Cloud, Brain, Monitor, ShoppingCart, Users, Layout, Settings, Smartphone, PenTool, Search, TrendingUp, Share2, Instagram, Facebook, Target, Camera
} from 'lucide-react'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import dedicatedBanner from '../../assets/services/dedicated-businessman-working-late-laptop-dark-office.webp'

const services = [
  {
    "icon": <Code size={28} />,
    "title": "Full-Stack Developers",
    "desc": "Hire experts proficient in React, Node.js, Python, and Java to build end-to-end solutions."
  },
  {
    "icon": <Layout size={28} />,
    "title": "UI/UX Designers",
    "desc": "Bring creative visionaries on board to craft intuitive and visually stunning user interfaces."
  },
  {
    "icon": <ShieldCheck size={28} />,
    "title": "QA Engineers",
    "desc": "Add dedicated testing professionals to ensure your product is bug-free and highly performant."
  },
  {
    "icon": <Cloud size={28} />,
    "title": "DevOps & Cloud Architects",
    "desc": "Experts to manage your AWS/Azure infrastructure, CI/CD pipelines, and scale your servers."
  },
  {
    "icon": <Globe size={28} />,
    "title": "Project Managers",
    "desc": "Agile leaders who align team output with your business objectives and delivery timelines."
  },
  {
    "icon": <Brain size={28} />,
    "title": "Data Scientists/AI Experts",
    "desc": "Specialists ready to jump into your AI initiatives and complex data engineering tasks."
  }
]

const whyUs = [
  {
    "title": "Zero Recruitment Hassle",
    "desc": "Skip the months of sourcing, interviewing, and onboarding. Start building immediately."
  },
  {
    "title": "Top 1% Talent Pool",
    "desc": "Our developers undergo rigorous technical and behavioral testing before joining BTPL Soft."
  },
  {
    "title": "Direct Communication",
    "desc": "You have direct access and complete control over your dedicated offshore or nearshore team."
  },
  {
    "title": "Flexible Scaling",
    "desc": "Scale your team up or down with just a one-month notice, adapting to your project needs."
  }
]

const hiringModels = [
  {
    model: "Full-Time Dedicated",
    duration: "Long-term (6+ months)",
    commitment: "160 hours/month",
    bestFor: "Ongoing product development",
    color: "#2196F3"
  },
  {
    model: "Part-Time Dedicated",
    duration: "Flexible (3+ months)",
    commitment: "80 hours/month",
    bestFor: "Maintenance & support",
    color: "#4CAF50"
  },
  {
    model: "Project-Based Team",
    duration: "Fixed timeline",
    commitment: "Custom hours",
    bestFor: "Specific deliverables",
    color: "#FF9800"
  }
]

const techRoles = [
  { role: "Frontend Developer", skills: ["React", "Vue.js", "Angular", "TypeScript"], icon: <Monitor size={22} />, color: "#2196F3" },
  { role: "Backend Developer", skills: ["Node.js", "Python", "Java", ".NET"], icon: <Code size={22} />, color: "#4CAF50" },
  { role: "Mobile Developer", skills: ["React Native", "Flutter", "iOS", "Android"], icon: <Smartphone size={22} />, color: "#9C27B0" },
  { role: "DevOps Engineer", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"], icon: <Cloud size={22} />, color: "#FF9800" },
  { role: "UI/UX Designer", skills: ["Figma", "Adobe XD", "Prototyping", "User Research"], icon: <PenTool size={22} />, color: "#E91E63" },
  { role: "QA Engineer", skills: ["Selenium", "Cypress", "Manual Testing", "Automation"], icon: <ShieldCheck size={22} />, color: "#00BCD4" }
]

const process = [
  {
    "num": "01",
    "title": "Requirement Gathering",
    "desc": "You tell us the skills, experience level, and team size you need."
  },
  {
    "num": "02",
    "title": "Profile Selection",
    "desc": "We provide hand-picked resumes of our top internal candidates for you to review."
  },
  {
    "num": "03",
    "title": "Client Interviews",
    "desc": "You interview the candidates directly to ensure perfect technical and cultural fit."
  },
  {
    "num": "04",
    "title": "Onboarding & Kickoff",
    "desc": "Seamless integration with your tools (Jira, Slack, Git) to start working instantly."
  }
]

export default function DedicatedResources({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${dedicatedBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-hero-icon"><Users size={36} /></div>
          <h1 className="sp-hero-title">Hire Dedicated <span>Developers</span></h1>
          <p className="sp-hero-desc">
            Scale your engineering team on demand. Hire our pre-vetted, highly skilled software engineers, designers, and project managers to accelerate your product roadmap without the overhead of traditional hiring.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#546E7A', '--sp-accent-dark': '#37474F', '--sp-accent-rgb': '84,110,122' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Seamless Team Integration</h2>
              <p className="sp-subtext-large">We provide more than just developers. We provide an integrated engineering arm that adopts your timezone, your agile rituals, and your company culture.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#546E7A" />
                  </div>
                  <div>
                    <h4>Pre-Vetted Technical Experts</h4>
                    <p>Top 1% developers skilled in React, Node, Python, and cloud infrastructure.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#546E7A" />
                  </div>
                  <div>
                    <h4>Agile & Communication Synchronized</h4>
                    <p>Seamless integration into your Jira boards, Slack channels, and daily standups.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Users size={64} color="#2196F3" />
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

      {/* UNIQUE: HIRING MODELS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Engagement Options</p>
            <h2 className="sp-heading">Flexible <span>Hiring Models</span></h2>
            <p className="sp-sub">Choose the engagement model that aligns with your project timeline and budget.</p>
          </div>
          <div className="dr-models-grid">
            {hiringModels.map((m, i) => (
              <div className="dr-model-card" key={i}>
                <div className="dr-model-badge" style={{ background: `${m.color}15`, color: m.color }}>
                  {m.model}
                </div>
                <div className="dr-model-details">
                  <div className="dr-model-item">
                    <span className="dr-model-label">Duration:</span>
                    <span className="dr-model-value">{m.duration}</span>
                  </div>
                  <div className="dr-model-item">
                    <span className="dr-model-label">Commitment:</span>
                    <span className="dr-model-value">{m.commitment}</span>
                  </div>
                  <div className="dr-model-item">
                    <span className="dr-model-label">Best For:</span>
                    <span className="dr-model-value">{m.bestFor}</span>
                  </div>
                </div>
                <Link to="/contact" className="dr-model-btn" style={{ borderColor: m.color, color: m.color }}>
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: TECH ROLES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Available Talent</p>
            <h2 className="sp-heading">Technical Roles & <span>Expertise</span></h2>
            <p className="sp-sub">Pre-vetted developers and designers with proven expertise in modern tech stacks.</p>
          </div>
          <div className="dr-roles-grid">
            {techRoles.map((r, i) => (
              <div className="dr-role-card" key={i}>
                <div className="dr-role-icon" style={{ background: `${r.color}15`, color: r.color }}>
                  {r.icon}
                </div>
                <h4>{r.role}</h4>
                <div className="dr-role-skills">
                  {r.skills.map((skill, j) => (
                    <span key={j} style={{ background: `${r.color}10`, color: r.color }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Flexible Hiring Models</h2>
            <p className="sp-sub">Choose the engagement model that fits your project scope, budget, and timeline.</p>
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
