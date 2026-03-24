import { Link } from 'react-router-dom'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down'
import { useState } from 'react'
import './CaseStudies.css'

const caseStudiesData = [
  {
    id: 'erp-manufacturing',
    title: 'Enterprise Resource Planning System',
    client: 'Global Manufacturing Corporation',
    industry: 'Manufacturing & Supply Chain',
    description: 'Our client, a leading manufacturing company with operations across 15 countries, was struggling with fragmented legacy systems that hindered operational efficiency. Their existing infrastructure consisted of multiple disconnected systems built over two decades using outdated technologies.',
    image: '/src/assets/caseStudy/ERP.webp',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    results: ['65% cost reduction', '40% productivity increase', '90% faster reporting']
  },
  {
    id: 'fintech-platform',
    title: 'Digital Banking & Investment Platform',
    client: 'Leading FinTech Startup',
    industry: 'Banking & FinTech',
    description: 'Our client is a rising FinTech startup from the USA with an impressive background in project financing, banking solutions, and managing investor relations. They wanted to develop a comprehensive digital banking and investment marketplace platform.',
    image: '/src/assets/caseStudy/digi-banking.webp',
    technologies: ['Java', 'React', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    results: ['100K+ active users', 'PCI-DSS compliant', '99.9% uptime']
  },
  {
    id: 'ecommerce-marketplace',
    title: 'Multi-Vendor E-Commerce Marketplace',
    client: 'E-Commerce Startup',
    industry: 'E-Commerce & Retail',
    description: 'Our client envisioned creating a comprehensive multi-vendor marketplace that would compete with major e-commerce platforms. They needed a solution that could handle thousands of vendors, millions of products, and provide seamless shopping experience.',
    image: '/src/assets/caseStudy/ecommerce.webp',
    technologies: ['Magento', 'PHP', 'MySQL', 'Redis', 'Elasticsearch'],
    results: ['500+ vendors onboarded', '3x order volume', '45% faster fulfillment']
  },
  {
    id: 'healthcare-telemedicine',
    title: 'Telemedicine & Healthcare Platform',
    client: 'Healthcare Provider Network',
    industry: 'Healthcare & Medical',
    description: 'A leading healthcare provider network wanted to develop a comprehensive telemedicine platform to expand their reach and provide quality healthcare services remotely. The platform needed to support video consultations, electronic health records, and prescription management.',
    image: '/src/assets/caseStudy/The-Rise-of-Digital-Health-Platforms.webp',
    technologies: ['React', 'Python', 'Django', 'WebRTC', 'AWS'],
    results: ['50K+ consultations', 'HIPAA compliant', '95% patient satisfaction']
  },
  {
    id: 'logistics-tracking',
    title: 'Real-Time Logistics & Fleet Management',
    client: 'Global Logistics Company',
    industry: 'Logistics & Transportation',
    description: 'A major logistics company managing a fleet of 5,000+ vehicles across Europe needed a comprehensive solution to track shipments in real-time, optimize routes, manage drivers, and provide customers with live tracking.',
    image: '/src/assets/caseStudy/Truck-Fleet-Management-in-Logistics_.webp',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'IoT', 'Google Maps API'],
    results: ['30% fuel savings', '25% faster deliveries', '200+ vehicles tracked']
  },
  {
    id: 'education-lms',
    title: 'Learning Management System & EdTech Platform',
    client: 'Educational Institution Network',
    industry: 'Education & E-Learning',
    description: 'A network of educational institutions wanted to develop a comprehensive learning management system to support online and hybrid learning models. The platform needed to support live classes, recorded lectures, assignments, and assessments.',
    image: '/src/assets/caseStudy/E-Learning.webp',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'AI/ML'],
    results: ['10K+ students', '500+ courses', '85% completion rate']
  }
]

const industries = [
  'Manufacturing & Supply Chain',
  'Banking & FinTech',
  'E-Commerce & Retail',
  'Healthcare & Medical',
  'Logistics & Transportation',
  'Education & E-Learning',
  'Energy & Utility',
  'Media & Entertainment',
  'Government & Public Safety',
  'Travel & Hospitality'
]

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudiesData 
    : caseStudiesData.filter(study => study.industry === selectedIndustry)

  return (
    <div className="case-studies-page">
      
      {/* HERO SECTION */}
      <section className="cs-list-hero" style={{
        backgroundImage: 'url(/src/assets/caseStudy/banner-case.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="cs-list-hero-overlay"></div>
        <div className="cs-list-container">
          <div className="cs-list-hero-content">
            <h1 className="cs-list-hero-title">Our Success <span>Stories</span></h1>
            <p className="cs-list-hero-desc">
              Explore how we've helped businesses across industries transform their operations 
              with innovative technology solutions. Real projects, real results, real impact.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="cs-list-section">
        <div className="cs-list-container">
          <div className="cs-list-grid">
            {caseStudiesData.map((study) => (
              <Link to={`/case-study/${study.id}`} className="cs-card" key={study.id}>
                <div className="cs-card-image" style={{ backgroundImage: `url(${study.image})` }}>
                  <div className="cs-card-overlay"></div>
                  <div className="cs-card-badge">{study.industry}</div>
                </div>
                <div className="cs-card-content">
                  <h3 className="cs-card-title">{study.title}</h3>
                  <p className="cs-card-desc">{study.description}</p>
                  <div className="cs-card-footer">
                    <span>View Case Study</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cs-list-cta">
        <div className="cs-list-container">
          <h2>Ready to Create Your Success Story?</h2>
          <p>Let's discuss how we can help transform your business with innovative technology solutions.</p>
          <Link to="/contact" className="cs-list-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>

    </div>
  )
}
