import { Link } from 'react-router-dom'
import {
  Activity, Landmark, ShoppingCart, GraduationCap,
  Factory, Truck, Home, Zap, ArrowRight
} from 'lucide-react'
import './Industries.css'
import industriesBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

const industries = [
  {
    icon: <Activity size={36} />,
    iconBg: '#eff6ff',
    iconColor: '#2196F3',
    label: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant solutions, telemedicine platforms, EHR systems and patient engagement tools built for modern healthcare.',
    link: '/industries/healthcare',
  },
  {
    icon: <Landmark size={36} />,
    iconBg: '#fef2f2',
    iconColor: '#ef4444',
    label: 'Banking & FinTech',
    desc: 'Secure payment gateways, digital banking platforms, financial analytics and regulatory compliance tools.',
    link: '/industries/banking-fintech',
  },
  {
    icon: <ShoppingCart size={36} />,
    iconBg: '#ecfdf5',
    iconColor: '#10b981',
    label: 'E-Commerce & Retail',
    desc: 'Scalable storefronts, inventory management, omnichannel solutions and personalised shopping experiences.',
    link: '/industries/ecommerce-retail',
  },
  {
    icon: <GraduationCap size={36} />,
    iconBg: '#fff7ed',
    iconColor: '#f97316',
    label: 'Education & E-Learning',
    desc: 'LMS platforms, virtual classrooms, interactive learning tools and student management systems.',
    link: '/industries/education',
  },
  {
    icon: <Factory size={36} />,
    iconBg: '#f5f3ff',
    iconColor: '#8b5cf6',
    label: 'Manufacturing & IoT',
    desc: 'Smart factory solutions, supply chain automation, predictive maintenance and IoT integration.',
    link: '/industries/manufacturing-iot',
  },
  {
    icon: <Truck size={36} />,
    iconBg: '#f0f9ff',
    iconColor: '#0ea5e9',
    label: 'Logistics & Transportation',
    desc: 'Fleet management, route optimisation, real-time tracking and warehouse management systems.',
    link: '/industries/logistics-transportation',
  },
  {
    icon: <Home size={36} />,
    iconBg: '#fffbeb',
    iconColor: '#f59e0b',
    label: 'Real Estate & PropTech',
    desc: 'Property management portals, virtual tours, CRM solutions and smart building platforms.',
    link: '/industries/real-estate',
  },
  {
    icon: <Zap size={36} />,
    iconBg: '#f0fdf4',
    iconColor: '#4CAF50',
    label: 'Energy & Utilities',
    desc: 'Smart grid monitoring, energy analytics, sustainability platforms and asset management tools.',
    link: '/industries/energy-utilities',
  },
]

export default function Industries() {
  return (
    <div className="ind-page">
      {/* Hero */}
      <section className="ind-hero" style={{
        backgroundImage: `url(${industriesBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="ind-hero-overlay" />
        <div className="container">
          <p className="section-subtitle">Industries We Serve</p>
          <h1 className="ind-hero-title">Domain Expertise Across <span className="highlight">Key Sectors</span></h1>
          <p className="ind-hero-sub">
            Our deep industry knowledge enables us to deliver solutions that address
            sector-specific challenges and drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="ind-grid-section">
        <div className="container">
          <div className="ind-grid">
            {industries.map((ind, i) => (
              <Link to={ind.link} className="ind-card" key={i}>
                <div className="ind-card-icon" style={{ background: ind.iconBg, color: ind.iconColor }}>
                  {ind.icon}
                </div>
                <h3 className="ind-card-title">{ind.label}</h3>
                <p className="ind-card-desc">{ind.desc}</p>
                <span className="ind-card-link">Explore Industry <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ind-cta">
        <div className="container">
          <h2>Ready to transform your industry?</h2>
          <p>Partner with us to build technology that gives your sector a competitive edge.</p>
        </div>
      </section>
    </div>
  )
}
