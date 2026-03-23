import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight, CheckCircle, Monitor, Users, Globe, Cpu, BarChart2, BookOpen, Target, Award, Accessibility, Layers } from 'lucide-react'
import '../industries/IndustryPage.css'
import heroBanner from '../../assets/industries/learning-education-academics-knowledge-concept.webp'

const solutions = [
  { icon: <BookOpen size={26} />, title: 'LMS Platforms', desc: 'Scalable Learning Management Systems with course creation, student progress tracking, assessments, certifications and integrations.' },
  { icon: <Monitor size={26} />, title: 'Virtual Classroom Solutions', desc: 'Live interactive classrooms with video conferencing, whiteboarding, breakout rooms, attendance tracking and session recording.' },
  { icon: <Globe size={26} />, title: 'EdTech Portals & Apps', desc: 'Feature-rich education portals and mobile apps for students, teachers and administrators with personalised learning paths.' },
  { icon: <Cpu size={26} />, title: 'AI-Powered Adaptive Learning', desc: 'Intelligent tutoring systems that adapt content difficulty and delivery style based on individual student learning patterns.' },
  { icon: <Users size={26} />, title: 'Student Information Systems', desc: 'Comprehensive SIS solutions for enrollment management, academic records, grading, timetabling and parent communication.' },
  { icon: <BarChart2 size={26} />, title: 'Education Analytics Platform', desc: 'Data-driven insights into student performance, engagement metrics, course completion rates and institutional KPIs.' },
]

const process = [
  { num: '01', title: 'Curriculum Analysis', desc: 'Understanding your pedagogical approach, content structure and learner demographics to design the right solution.' },
  { num: '02', title: 'UX Design for Learners', desc: 'Intuitive, engaging interfaces designed specifically for learners — reducing friction and maximising course completion.' },
  { num: '03', title: 'Development & Content Integration', desc: 'SCORM/xAPI-compliant development with multimedia content integration and third-party LMS compatibility.' },
  { num: '04', title: 'Launch & Continuous Improvement', desc: 'Phased rollout with data-driven iteration based on learner feedback and engagement analytics.' },
]

const whyUs = [
  { title: 'EdTech Domain Expertise', desc: 'We understand pedagogy, instructional design and the technical challenges of digital learning at scale.' },
  { title: 'SCORM & xAPI Compliance', desc: 'All LMS solutions are built to international e-learning content standards for maximum interoperability.' },
  { title: 'Accessibility Standards', desc: 'WCAG 2.1 AA compliant platforms ensuring inclusive learning experiences for all students.' },
  { title: 'Gamification & Engagement', desc: 'Points, badges, leaderboards and interactive content features that keep learners motivated and coming back.' },
  { title: 'Cloud-Native Scalability', desc: 'Platforms built to scale from hundreds to millions of concurrent learners without performance degradation.' },
  { title: 'Multi-Device Support', desc: 'Seamless learning experiences across desktop, tablet and mobile with offline content availability.' },
]

const techStack = ['React.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'WebRTC', 'SCORM', 'xAPI', 'TensorFlow', 'Redis', 'Stripe']
const challenges = [
  { text: 'Student Engagement & Retention', icon: <Target size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'Scalable Content Delivery', icon: <Globe size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Personalised Learning Paths', icon: <Cpu size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'Assessment & Credentialing', icon: <Award size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Accessibility & Inclusion', icon: <Accessibility size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Integration with SIS/ERP Systems', icon: <Layers size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function Education() {
  return (
    <div>
      <section className="ip-hero ip-hero-center" style={{ backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">Education & E-Learning</div>
          <h1 className="ip-hero-title">Education & E-Learning <span>Software Solutions</span></h1>
          <p className="ip-hero-desc">
            We build engaging, scalable EdTech platforms — from LMS and virtual classrooms to AI-powered adaptive learning systems — that transform the way knowledge is delivered and consumed.
          </p>


        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">The Future of <span>Digital Learning</span> is Here</h2>
            <p className="ip-subtext">The education sector is in a period of rapid transformation. Institutions and EdTech companies must embrace technology to deliver personalised, accessible and engaging learning experiences at scale.</p>
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
            <h2 className="ip-heading">Our Education <span>Technology Solutions</span></h2>
            <p className="ip-subtext">Future-ready EdTech platforms built for engagement, accessibility and measurable learning outcomes.</p>
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
            <h2 className="ip-heading">Our EdTech <span>Delivery Process</span></h2>
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
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>EdTech Solutions?</span></h2>
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
          <h2>Ready to Transform Your Learning Experience?</h2>
          <p>Let's build an engaging, scalable EdTech platform that empowers learners and educators alike.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
