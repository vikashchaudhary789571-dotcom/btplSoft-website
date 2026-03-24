import { Link } from 'react-router-dom'
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Package from 'lucide-react/dist/esm/icons/package'
import Globe from 'lucide-react/dist/esm/icons/globe'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart-2'
import XCircle from 'lucide-react/dist/esm/icons/x-circle'
import Layers from 'lucide-react/dist/esm/icons/layers'
import Users from 'lucide-react/dist/esm/icons/users'
import Zap from 'lucide-react/dist/esm/icons/zap'
import '../industries/IndustryPage.css'
import heroBanner from '../../assets/industries/hands-working-digital-device-network-graphic-overlay.webp'

const solutions = [
  { icon: <ShoppingCart size={26} />, title: 'Custom E-Commerce Platforms', desc: 'Tailored online storefronts built for performance and conversions — from single-vendor stores to complex multi-vendor marketplaces.' },
  { icon: <Package size={26} />, title: 'Inventory Management Systems', desc: 'Real-time inventory tracking, warehouse management, automated restocking alerts and supplier integration tools.' },
  { icon: <Globe size={26} />, title: 'Omnichannel Commerce', desc: 'Unified retail experiences across web, mobile, in-store POS and social commerce platforms with centralised data management.' },
  { icon: <TrendingUp size={26} />, title: 'Personalisation & AI Engine', desc: 'AI-driven recommendation engines, dynamic pricing tools and personalisation modules that increase AOV and customer loyalty.' },
  { icon: <Smartphone size={26} />, title: 'Mobile Commerce Apps', desc: 'Native iOS and Android shopping apps with seamless UX, push notifications, loyalty programs and one-tap checkout flows.' },
  { icon: <BarChart2 size={26} />, title: 'Retail Analytics Dashboard', desc: 'Comprehensive analytics on sales trends, customer behaviour, product performance and conversion funnels for smarter decisions.' },
]

const process = [
  { num: '01', title: 'Discovery & Strategy', desc: 'Understanding your market, customers, competition and defining a clear product roadmap aligned with business goals.' },
  { num: '02', title: 'UX Design & Prototyping', desc: 'Conversion-focused UI/UX design with A/B-tested prototypes before any development begins.' },
  { num: '03', title: 'Development & Integration', desc: 'Agile development with payment gateway, ERP, logistics and third-party API integrations built-in.' },
  { num: '04', title: 'Launch & Growth', desc: 'Performance-optimised go-live, SEO setup, monitoring and continuous feature iteration for growth.' },
]

const whyUs = [
  { title: 'Commerce Platform Expertise', desc: 'Deep experience across Shopify, Magento, WooCommerce and completely custom-built e-commerce platforms.' },
  { title: 'Conversion Rate Optimisation', desc: 'Every pixel is designed with conversions in mind — our clients see an average 35% lift in conversion rates.' },
  { title: 'Scalable Architecture', desc: 'Platforms built to handle Black Friday traffic spikes without downtime — elastic cloud infrastructure as standard.' },
  { title: 'Seamless Integrations', desc: 'Native integration with payment gateways, logistics providers, ERPs, CRMs and marketing automation tools.' },
  { title: 'Mobile-First Approach', desc: 'Every commerce solution is designed mobile-first, delivering outstanding experiences on every device.' },
  { title: 'Post-Launch Support', desc: '24/7 monitoring, bug fixes, SEO optimisation and feature updates keep your store competitive and growing.' },
]

const techStack = ['React.js', 'Next.js', 'Node.js', 'Shopify', 'Magento', 'Stripe', 'PostgreSQL', 'Redis', 'AWS', 'Elasticsearch', 'GraphQL', 'TensorFlow']
const challenges = [
  { text: 'Cart Abandonment & Conversions', icon: <XCircle size={18} />, bg: '#FBE9E7', color: '#F4511E' },
  { text: 'Inventory & Supply Chain', icon: <Package size={18} />, bg: '#E3F2FD', color: '#2196F3' },
  { text: 'Omnichannel Experience', icon: <Layers size={18} />, bg: '#EDE7F6', color: '#7C4DFF' },
  { text: 'Mobile Commerce Growth', icon: <Smartphone size={18} />, bg: '#E8F5E9', color: '#4CAF50' },
  { text: 'Customer Retention & Loyalty', icon: <Users size={18} />, bg: '#FFF3E0', color: '#FF9800' },
  { text: 'Scalability During Peak Traffic', icon: <Zap size={18} />, bg: '#E0F7FA', color: '#00BCD4' },
]

export default function ECommerce() {
  return (
    <div>
      <section className="ip-hero ip-hero-center" style={{ backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ip-hero-overlay" />
        <div className="ip-container">

          <div className="ip-hero-badge">E-Commerce & Retail</div>
          <h1 className="ip-hero-title">E-Commerce & Retail <span>Technology Solutions</span></h1>
          <p className="ip-hero-desc">
            We build high-performance e-commerce platforms and retail technology solutions that drive conversions, streamline operations and deliver outstanding customer experiences across every channel.
          </p>


        </div>
      </section>

      <section className="ip-section ip-bg-white">
        <div className="ip-container">
          <div className="ip-section-head center">
            <p className="ip-label">Industry Overview</p>
            <h2 className="ip-heading">Powering <span>Retail Success</span> in the Digital Age</h2>
            <p className="ip-subtext">The e-commerce landscape is fiercely competitive. Success requires more than just a good product — it demands seamless UX, fast performance, smart personalisation and robust backend operations.</p>
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
            <h2 className="ip-heading">Our E-Commerce <span>Technology Solutions</span></h2>
            <p className="ip-subtext">Everything you need to build, launch and scale a thriving digital retail business.</p>
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
            <h2 className="ip-heading">Our Commerce <span>Delivery Process</span></h2>
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
            <h2 className="ip-heading ip-heading-white">Why BTPL Soft for <span>E-Commerce?</span></h2>
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
          <h2>Ready to Build Your Next-Gen Commerce Platform?</h2>
          <p>Let's create a high-converting, scalable e-commerce experience that grows your revenue.</p>
          <Link to="/contact" className="ip-cta-btn">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}
