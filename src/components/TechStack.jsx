import { useState } from 'react'
import {
  Server, Monitor, Cloud, Database, TestTube2, Smartphone
} from 'lucide-react'
import './TechStack.css'

const categories = [
  {
    id: 'backend',
    label: 'Backend',
    icon: <Server size={22} />,
    accent: '#6366f1',
    description: 'Server-side logic, APIs & microservices',
    techs: ['.NET', 'Java', 'Node.js', 'PHP', 'Python', 'Ruby on Rails', 'Django', 'Spring Boot', 'Express.js', 'Go'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Monitor size={22} />,
    accent: '#06b6d4',
    description: 'Modern UI frameworks & client-side',
    techs: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'Redux', 'Webpack', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: <Cloud size={22} />,
    accent: '#f59e0b',
    description: 'Infrastructure, CI/CD & deployment',
    techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitHub Actions', 'Nginx'],
  },
  {
    id: 'database',
    label: 'Database',
    icon: <Database size={22} />,
    accent: '#10b981',
    description: 'Relational & NoSQL data stores',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Redis', 'Cassandra', 'Elasticsearch', 'DynamoDB', 'Amazon RDS', 'Oracle'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: <Smartphone size={22} />,
    accent: '#ec4899',
    description: 'Cross-platform & native apps',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Firebase', 'Expo', 'Push Notifications'],
  },
  {
    id: 'testing',
    label: 'Testing & QA',
    icon: <TestTube2 size={22} />,
    accent: '#ef4444',
    description: 'Quality assurance & automation',
    techs: ['Selenium', 'Jest', 'Postman', 'Cypress', 'JUnit', 'TestRail', 'OWASP ZAP', 'Apache JMeter', 'Katalon'],
  },
]

export default function TechStack() {
  const [active, setActive] = useState(0)
  const cat = categories[active]

  return (
    <section className="ts-section" id="technologies">
      <div className="ts-container">

        {/* HEADER */}
        <div className="ts-header">
          <p className="section-subtitle">Our Tech Stack</p>
          <h2 className="section-title">
            Technologies We <span>Master</span>
          </h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            We leverage the latest and most battle-tested technologies to build
            robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* BODY */}
        <div className="ts-body">

          {/* LEFT — category tabs */}
          <div className="ts-sidebar">
            {categories.map((c, i) => (
              <button
                key={c.id}
                className={`ts-tab ${i === active ? 'ts-tab--active' : ''}`}
                style={{ '--accent': c.accent }}
                onClick={() => setActive(i)}
              >
                <span className="ts-tab-icon" style={{ color: i === active ? '#fff' : c.accent }}>
                  {c.icon}
                </span>
                <div className="ts-tab-text">
                  <span className="ts-tab-label">{c.label}</span>
                  <span className="ts-tab-count">{c.techs.length} technologies</span>
                </div>
                {i === active && <span className="ts-tab-dot" />}
              </button>
            ))}
          </div>

          {/* RIGHT — tech chips */}
          <div className="ts-content" key={cat.id}>
            <div className="ts-content-header">
              <span className="ts-content-icon" style={{ background: cat.accent + '18', color: cat.accent }}>
                {cat.icon}
              </span>
              <div>
                <h3 className="ts-content-title" style={{ color: cat.accent }}>{cat.label}</h3>
                <p className="ts-content-desc">{cat.description}</p>
              </div>
            </div>

            <div className="ts-chips">
              {cat.techs.map((tech, i) => (
                <span
                  className="ts-chip"
                  key={tech}
                  style={{ animationDelay: `${i * 50}ms`, '--accent': cat.accent }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* accent bar */}
            <div className="ts-progress-bar">
              <div
                className="ts-progress-fill"
                style={{ background: cat.accent, width: `${(active + 1) * (100 / categories.length)}%` }}
              />
            </div>
            <p className="ts-progress-label">
              Category {active + 1} of {categories.length}
            </p>
          </div>

        </div>

        {/* BOTTOM — all category dots */}
        <div className="ts-dots">
          {categories.map((c, i) => (
            <button
              key={c.id}
              className={`ts-dot ${i === active ? 'ts-dot--active' : ''}`}
              style={{ '--accent': c.accent }}
              onClick={() => setActive(i)}
              title={c.label}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
