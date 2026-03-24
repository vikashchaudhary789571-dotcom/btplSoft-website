import { Link } from 'react-router-dom'
import Activity from 'lucide-react/dist/esm/icons/activity'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Shield from 'lucide-react/dist/esm/icons/shield'
import Cpu from 'lucide-react/dist/esm/icons/cpu'
import Database from 'lucide-react/dist/esm/icons/database'
import Globe from 'lucide-react/dist/esm/icons/globe'
import Users from 'lucide-react/dist/esm/icons/users'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Lock from 'lucide-react/dist/esm/icons/lock'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw'
import Stethoscope from 'lucide-react/dist/esm/icons/stethoscope'
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2'
import '../industries/IndustryPage.css'
import heroBanner from '../../assets/industries/health&science2.webp'
import overviewBanner from '../../assets/industries/health&science1.webp'

const solutions = [
  { icon: <Shield size={26} />, title: 'HIPAA-Compliant Systems', desc: 'End-to-end secure healthcare platforms built to meet strict HIPAA, HL7, and FHIR compliance requirements protecting patient data at every layer.' },
  { icon: <Activity size={26} />, title: 'Telemedicine Platforms', desc: 'Feature-rich virtual care solutions with real-time video consultations, appointment scheduling, e-prescriptions and integrated patient portals.' },
  { icon: <Database size={26} />, title: 'EHR/EMR Solutions', desc: 'Customised Electronic Health Record systems that streamline clinical workflows, reduce admin burden and improve the quality of patient care.' },
  { icon: <Cpu size={26} />, title: 'AI-Powered Diagnostics', desc: 'Machine learning models for medical imaging analysis, early disease detection, and clinical decision support that assist healthcare professionals.' },
  { icon: <Globe size={26} />, title: 'Patient Engagement Apps', desc: 'Mobile and web apps that empower patients with health tracking, medication reminders, lab results, and direct communication with providers.' },
  { icon: <TrendingUp size={26} />, title: 'Healthcare Analytics', desc: 'Advanced data analytics dashboards for clinical KPIs, outcomes measurement, population health management and operational efficiency.' },
]

const process = [
  { num: '01', title: 'Compliance Audit', desc: 'Thorough evaluation of regulatory requirements and risk factors before any development begins.' },
  { num: '02', title: 'Architecture Design', desc: 'Secure, scalable cloud-native architecture with HL7/FHIR integration capabilities.' },
  { num: '03', title: 'Development & QA', desc: 'Agile sprints with dedicated QA and penetration testing to ensure robust, secure output.' },
  { num: '04', title: 'Deployment & Training', desc: 'Seamless go-live with staff training, monitoring and ongoing compliance support.' },
]

const whyUs = [
  { title: 'Healthcare Domain Expertise', desc: 'Our team has deep knowledge of clinical workflows, compliance frameworks, and healthcare interoperability standards.' },
  { title: 'HIPAA & GDPR Compliance', desc: 'Every solution is built from the ground up with security and regulatory compliance as a primary design pillar.' },
  { title: 'Interoperability Ready', desc: 'HL7, FHIR and ICD-10 integration expertise ensures your systems seamlessly connect with third-party healthcare networks.' },
  { title: 'Proven Track Record', desc: '100+ successful healthcare technology projects delivered to hospitals, clinics and health-tech startups globally.' },
  { title: '24/7 Support & Uptime', desc: 'Mission-critical healthcare platforms require maximum reliability — we deliver 99.9% uptime with round-the-clock support.' },
  { title: 'Cloud & On-Premise Deployment', desc: 'Flexible deployment options on AWS, Azure or private servers — tailored to your infrastructure and compliance needs.' },
]

const techStack = ['React.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'FHIR API', 'HL7', 'TensorFlow']

const challenges = [
  { text: 'Patient Data Privacy & Security', icon: <Lock size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'HIPAA/GDPR Regulatory Compliance', icon: <Shield size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'EHR System Interoperability', icon: <Database size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Legacy System Modernisation', icon: <RefreshCw size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Telemedicine & Remote Care', icon: <Stethoscope size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Healthcare Analytics & AI', icon: <BarChart2 size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function Healthcare() {
  return (
    <div>

      {/* HERO */}
      <section className="ip-hero ip-hero-center" style={{ backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">Healthcare & Life Sciences</div>
          <h1 className="ip-hero-title">Healthcare & Life Sciences <span>Software Solutions</span></h1>
          <p className="ip-hero-desc">
            We build secure, HIPAA-compliant healthcare technology solutions — from telemedicine platforms and EHR
            systems to AI-powered diagnostics — helping providers deliver better patient outcomes at scale.
          </p>


        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">Solving <span>Critical Challenges</span> in Healthcare IT</h2>
            <p className="ip-subtext">The healthcare industry faces unprecedented pressure to modernise legacy systems, ensure regulatory compliance, and deliver seamless digital patient experiences — all while maintaining the highest data security standards.</p>
          </div>
          <ul className="ip-checklist ip-checklist-center">
            {challenges.map((c, i) => <li key={i}><span className="ip-chk-icon" style={{ background: c.bg, color: c.color }}>{c.icon}</span>{c.text}</li>)}
          </ul>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="ip-section ip-bg-light">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">What We Build</p>
            <h2 className="ip-heading">Our Healthcare <span>Technology Solutions</span></h2>
            <p className="ip-subtext">Comprehensive digital solutions purpose-built for the healthcare and life sciences ecosystem.</p>
          </div>
          <div className="ip-solutions-grid">
            {solutions.map((s, i) => (
              <div className="ip-solution-card" key={i}>
                <div className="ip-solution-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">How We Work</p>
            <h2 className="ip-heading">Our Healthcare <span>Delivery Process</span></h2>
          </div>
          <div className="ip-process-grid">
            {process.map((p, i) => (
              <div className="ip-process-step" key={i}>
                <div className="ip-process-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
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

      {/* WHY US */}
      <section className="ip-section ip-bg-dark">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label ip-label-light">Why Choose Us</p>
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>Healthcare Technology?</span></h2>
          </div>
          <div className="ip-why-grid">
            {whyUs.map((w, i) => (
              <div className="ip-why-card" key={i}>
                <CheckCircle size={22} className="ip-why-icon" />
                <div><h4>{w.title}</h4><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="ip-cta"
        style={{
          backgroundImage: `url(${overviewBanner})`,
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
          <h2>Ready to Transform Your Healthcare Platform?</h2>
          <p>Let's build secure, compliant and scalable healthcare technology together. Book your free consultation today.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>

    </div>
  )
}
