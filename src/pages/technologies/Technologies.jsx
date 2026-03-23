import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Server, Smartphone, Cloud, Database, Brain, TestTube2 } from 'lucide-react'
import './Technologies.css'
import techBanner from '../../assets/services/html-css-collage-concept.webp'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'database', label: 'Database' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'qa', label: 'QA & Testing' },
]

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Monitor size={20} />,
    color: '#2196F3',
    techs: [
      { name: 'React.js',     link: '/technologies/reactjs',     color: '#61dafb', bg: '#e8f9fe', abbr: 'Re' },
      { name: 'Next.js',      link: '/technologies/nextjs',       color: '#000000', bg: '#f0f0f0', abbr: 'Nx' },
      { name: 'Angular',      link: '/technologies/angular',      color: '#dd0031', bg: '#fff0f2', abbr: 'Ng' },
      { name: 'Vue.js',       link: '/technologies/vuejs',        color: '#42b883', bg: '#edfbf3', abbr: 'Vu' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Server size={20} />,
    color: '#4CAF50',
    techs: [
      { name: 'Node.js',      link: '/technologies/nodejs',       color: '#68a063', bg: '#f0fdf0', abbr: 'No' },
      { name: 'Python',       link: '/technologies/python',       color: '#3776ab', bg: '#eff6ff', abbr: 'Py' },
      { name: 'Java',         link: '/technologies/java',         color: '#e76f00', bg: '#fff7ed', abbr: 'Ja' },
      { name: 'PHP',          link: '/technologies/php',          color: '#777bb4', bg: '#f4f3ff', abbr: 'Ph' },
      { name: '.NET',         link: '/technologies/dotnet',       color: '#512bd4', bg: '#f3f0ff', abbr: '.N' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: <Smartphone size={20} />,
    color: '#f05138',
    techs: [
      { name: 'React Native', link: '/technologies/react-native', color: '#61dafb', bg: '#e8f9fe', abbr: 'RN' },
      { name: 'Flutter',      link: '/technologies/flutter',      color: '#54c5f8', bg: '#edf9ff', abbr: 'Fl' },
      { name: 'Swift',        link: '/technologies/swift',        color: '#f05138', bg: '#fff2f0', abbr: 'Sw' },
      { name: 'Kotlin',       link: '/technologies/kotlin',       color: '#7f52ff', bg: '#f5f0ff', abbr: 'Ko' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: <Cloud size={20} />,
    color: '#ff9900',
    techs: [
      { name: 'AWS',          link: '/technologies/aws',          color: '#ff9900', bg: '#fff8ed', abbr: 'AW' },
      { name: 'Azure',        link: '/technologies/azure',        color: '#0078d4', bg: '#eff6ff', abbr: 'Az' },
      { name: 'Google Cloud', link: '/technologies/google-cloud', color: '#4285f4', bg: '#eef3ff', abbr: 'GC' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: <Database size={20} />,
    color: '#4db33d',
    techs: [
      { name: 'MongoDB',      link: '/technologies/mongodb',      color: '#4db33d', bg: '#f0fdf0', abbr: 'Mo' },
      { name: 'PostgreSQL',   link: '/technologies/postgresql',   color: '#336791', bg: '#eff4fb', abbr: 'Pg' },
      { name: 'Oracle',       link: '/technologies/oracle',       color: '#c74634', bg: '#fff1ef', abbr: 'Or' },
      { name: 'SQL Server',   link: '/technologies/sql-server',   color: '#cc2927', bg: '#fff1f1', abbr: 'SS' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    icon: <Brain size={20} />,
    color: '#ff6f00',
    techs: [
      { name: 'TensorFlow',   link: '/technologies/tensorflow',   color: '#ff6f00', bg: '#fff8ee', abbr: 'TF' },
      { name: 'PyTorch',      link: '/technologies/pytorch',      color: '#ee4c2c', bg: '#fff1ef', abbr: 'PT' },
      { name: 'NumPy',        link: '/technologies/numpy',        color: '#4dabcf', bg: '#eef8fb', abbr: 'Np' },
      { name: 'Pandas',       link: '/technologies/pandas',       color: '#150458', bg: '#f0eeff', abbr: 'Pa' },
    ],
  },
  {
    id: 'qa',
    label: 'QA & Testing',
    icon: <TestTube2 size={20} />,
    color: '#43b02a',
    techs: [
      { name: 'Postman',      link: '/technologies/postman',      color: '#ff6c37', bg: '#fff4ef', abbr: 'Po' },
      { name: 'JMeter',       link: '/technologies/jmeter',       color: '#d22128', bg: '#fff1f1', abbr: 'JM' },
      { name: 'Selenium',     link: '/technologies/selenium',     color: '#43b02a', bg: '#f0fdf0', abbr: 'Se' },
    ],
  },
]

export default function Technologies() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? categories : categories.filter(c => c.id === active)

  return (
    <div className="tp-page">

      {/* Hero */}
      <section className="tp-hero" style={{
        backgroundImage: `url(${techBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="tp-hero-overlay" />
        <div className="container">
          <p className="tp-eyebrow">What We Build With</p>
          <h1 className="tp-hero-title">Our <span className="tp-blue">Technology</span> Stack</h1>
          <p className="tp-hero-sub">
            We work with cutting-edge technologies across frontend, backend, mobile, cloud,
            databases, AI/ML and QA — choosing the best fit for every project.
          </p>
        </div>
      </section>

      {/* Technologies grouped by category */}
      <section className="tp-body">
        <div className="container">

          {/* Filter tabs */}
          <div className="tp-tabs">
            {tabs.map(t => (
              <button
                key={t.id}
                className={`tp-tab ${active === t.id ? 'active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {filtered.map(cat => (
            <div className="tp-category-section" key={cat.id}>
              <div className="tp-category-header">
                <span className="tp-category-icon" style={{ color: cat.color, background: cat.color + '18' }}>
                  {cat.icon}
                </span>
                <h2 className="tp-category-title">{cat.label}</h2>
                <span className="tp-category-count">{cat.techs.length} technologies</span>
                <div className="tp-category-line" style={{ background: cat.color }} />
              </div>
              <div className="tp-grid">
                {cat.techs.map((t, i) => (
                  <Link to={t.link} className="tp-card" key={i}>
                    <div className="tp-card-avatar" style={{ background: t.bg, color: t.color }}>
                      {t.abbr}
                    </div>
                    <div className="tp-card-body">
                      <h3 className="tp-card-name">{t.name}</h3>
                      <span className="tp-card-cat">{cat.label}</span>
                    </div>
                    <ArrowRight size={16} className="tp-card-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tp-cta">
        <div className="container">
          <h2>Want to know which stack suits your project?</h2>
          <p>Our architects will guide you to the right technology choices.</p>
          <button
            className="btn-primary"
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))}
          >
            Get Free Consultation <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  )
}
