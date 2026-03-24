import { Link } from 'react-router-dom'
import Code from 'lucide-react/dist/esm/icons/code'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import Globe from 'lucide-react/dist/esm/icons/globe'
import Cpu from 'lucide-react/dist/esm/icons/cpu'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import Search from 'lucide-react/dist/esm/icons/search'
import Share2 from 'lucide-react/dist/esm/icons/share-2'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart'
import Layers from 'lucide-react/dist/esm/icons/layers'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import './Services.css'
import servicesBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

const services = [
  {
    icon: <Code size={32} color="#6366f1" />,
    iconBg: '#eef2ff',
    label: 'Custom Software Solution',
    desc: 'Tailor-made software built around your unique business processes to boost efficiency and scalability.',
    link: '/services/custom-software-solution',
  },
  {
    icon: <Cpu size={32} color="#ef4444" />,
    iconBg: '#fef2f2',
    label: 'AI Solution',
    desc: 'Harness AI & Machine Learning to automate processes, predict trends and gain actionable insights.',
    link: '/services/ai-solution',
  },
  {
    icon: <Globe size={32} color="#2196F3" />,
    iconBg: '#eff6ff',
    label: 'Web Development',
    desc: 'High-performance, responsive websites and web apps crafted with modern frameworks and best practices.',
    link: '/services/web-designer-development',
  },
  {
    icon: <Smartphone size={32} color="#4CAF50" />,
    iconBg: '#f0fdf4',
    label: 'Mobile App Solution',
    desc: 'Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.',
    link: '/services/mobile-app-solution',
  },
  {
    icon: <Cloud size={32} color="#f59e0b" />,
    iconBg: '#fffbeb',
    label: 'SaaS Solution',
    desc: 'Cloud-based SaaS products built for scale — multi-tenant architecture, subscription billing and more.',
    link: '/services/saas-solution',
  },
  {
    icon: <Layers size={32} color="#8b5cf6" />,
    iconBg: '#f5f3ff',
    label: 'Dedicated Resources',
    desc: 'Extend your team with our skilled developers, designers and QA engineers on a dedicated engagement model.',
    link: '/services/dedicated-resources',
  },
  {
    icon: <TrendingUp size={32} color="#0ea5e9" />,
    iconBg: '#f0f9ff',
    label: 'Digital Marketing',
    desc: 'Data-driven digital marketing strategies that grow your brand reach, leads and revenue.',
    link: '/services/marketing-solution',
  },
  {
    icon: <Search size={32} color="#10b981" />,
    iconBg: '#ecfdf5',
    label: 'SEO Optimization',
    desc: 'Rank higher on search engines with our proven on-page, off-page and technical SEO strategies.',
    link: '/services/seo-optimization',
  },
  {
    icon: <Share2 size={32} color="#f97316" />,
    iconBg: '#fff7ed',
    label: 'Social Media',
    desc: 'Build a powerful social presence with creative content, community management and paid campaigns.',
    link: '/services/social-media',
  },
  {
    icon: <ShoppingCart size={32} color="#ec4899" />,
    iconBg: '#fdf2f8',
    label: 'Shopify Solution',
    desc: 'Custom Shopify stores, themes and apps designed to maximise conversions and customer satisfaction.',
    link: '/services/shopify-solution',
  },
  {
    icon: <Monitor size={32} color="#14b8a6" />,
    iconBg: '#f0fdfa',
    label: 'BigCommerce Solution',
    desc: 'Custom BigCommerce stores with Stencil themes, B2B edition, headless commerce, and seamless third-party integrations.',
    link: '/services/bigcommerce-solution',
  },
  {
    icon: <ShieldCheck size={32} color="#6366f1" />,
    iconBg: '#eef2ff',
    label: 'QA & Testing',
    desc: 'Comprehensive manual and automated testing to ensure your software is bug-free and production-ready.',
    link: '/services/software-testing-solution',
  },
  {
    icon: <Layers size={32} color="#f59e0b" />,
    iconBg: '#fffbeb',
    label: 'UI/UX Design',
    desc: 'Intuitive, beautiful interfaces designed with user-first thinking — wireframes, prototypes and final UI.',
    link: '/services/ui-ux-solution',
  },
]

export default function Services({ onOpenConsult }) {
  return (
    <div className="srv-page">
      {/* Hero */}
      <section className="srv-hero" style={{
        backgroundImage: `url(${servicesBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="srv-hero-overlay" />
        <div className="container">
          <p className="section-subtitle">What We Offer</p>
          <h1 className="srv-hero-title">Our <span className="highlight">Services</span></h1>
          <p className="srv-hero-sub">
            End-to-end technology services tailored to your business — from strategy and design
            to development, deployment and growth.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="srv-grid-section">
        <div className="container">
          <div className="srv-grid">
            {services.map((s, i) => (
              <Link to={s.link} className="srv-card" key={i}>
                <div className="srv-card-icon" style={{ background: s.iconBg }}>
                  {s.icon}
                </div>
                <h3 className="srv-card-title">{s.label}</h3>
                <p className="srv-card-desc">{s.desc}</p>
                <span className="srv-card-link">Learn More <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="srv-cta">
        <div className="container">
          <h2>Not sure which service fits your needs?</h2>
          <p>Talk to our experts and we'll help you find the right solution.</p>
          <button onClick={onOpenConsult} className="btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
        </div>
      </section>
    </div>
  )
}
