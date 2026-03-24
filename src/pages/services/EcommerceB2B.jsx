import { Link } from 'react-router-dom'
import Code from 'lucide-react/dist/esm/icons/code'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Layers from 'lucide-react/dist/esm/icons/layers'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Database from 'lucide-react/dist/esm/icons/database'
import Globe from 'lucide-react/dist/esm/icons/globe'
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import Brain from 'lucide-react/dist/esm/icons/brain'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart'
import Users from 'lucide-react/dist/esm/icons/users'
import Layout from 'lucide-react/dist/esm/icons/layout'
import Settings from 'lucide-react/dist/esm/icons/settings'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import PenTool from 'lucide-react/dist/esm/icons/pen-tool'
import Search from 'lucide-react/dist/esm/icons/search'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import Share2 from 'lucide-react/dist/esm/icons/share-2'
import Instagram from 'lucide-react/dist/esm/icons/instagram'
import Facebook from 'lucide-react/dist/esm/icons/facebook'
import Target from 'lucide-react/dist/esm/icons/target'
import Camera from 'lucide-react/dist/esm/icons/camera'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'
import ecommerceBanner from '../../assets/services/istockphoto-2195043685-1024x1024.webp'

const services = [
  {
    "icon": <Layout size={28} />,
    "title": "Store Setup & Configuration",
    "desc": "End-to-end BigCommerce store setup — themes, payment gateways, tax rules, shipping profiles, and catalog configuration."
  },
  {
    "icon": <Monitor size={28} />,
    "title": "Custom Stencil Theme Development",
    "desc": "Pixel-perfect, mobile-first storefronts built on BigCommerce's Stencil framework with Page Builder compatibility."
  },
  {
    "icon": <Settings size={28} />,
    "title": "App & API Integrations",
    "desc": "Connect your store with ERP, CRM, PIM, shipping, and marketing tools via BigCommerce REST & GraphQL APIs."
  },
  {
    "icon": <Users size={28} />,
    "title": "BigCommerce B2B Edition",
    "desc": "Corporate account management, custom price lists, bulk ordering, and digital RFQ workflows for wholesale sellers."
  },
  {
    "icon": <Brain size={28} />,
    "title": "Headless Commerce",
    "desc": "Decouple your storefront with Next.js or React, powered by BigCommerce GraphQL Storefront API for blazing-fast UX."
  },
  {
    "icon": <Database size={28} />,
    "title": "Platform Migration",
    "desc": "Zero-loss migration from Shopify, WooCommerce, Magento, or any other platform to BigCommerce."
  }
]

const whyUs = [
  {
    "title": "BigCommerce Certified Experts",
    "desc": "Our team has hands-on expertise across BigCommerce Essentials, B2B Edition, and Enterprise plans."
  },
  {
    "title": "Full-Cycle Development",
    "desc": "From strategy and design to development, launch, and continuous optimization — we handle it all."
  },
  {
    "title": "B2B & DTC Expertise",
    "desc": "We build for both direct-to-consumer brands and complex wholesale/B2B commerce models."
  },
  {
    "title": "Ongoing Support & Growth",
    "desc": "Post-launch support, performance monitoring, and feature rollouts to keep your store ahead."
  }
]

const b2bPlatforms = [
  {
    platform: "BigCommerce Essentials",
    features: ["Drag-and-Drop Builder", "Multi-Channel Selling", "Built-in SEO", "No Transaction Fees"],
    bestFor: "SMBs and fast-growing DTC brands",
    color: "#2196F3"
  },
  {
    platform: "BigCommerce B2B Edition",
    features: ["Corporate Accounts", "Custom Price Lists", "Quick Order", "RFQ Workflows"],
    bestFor: "Wholesale & B2B merchants",
    color: "#4CAF50"
  },
  {
    platform: "Headless BigCommerce",
    features: ["GraphQL Storefront API", "Next.js / React Frontend", "Custom UX", "Composable Commerce"],
    bestFor: "Brands needing unique, custom experiences",
    color: "#9C27B0"
  }
]

const b2bFeatures = [
  {
    feature: "Stencil Theme Development",
    desc: "Custom, high-performance storefronts using BigCommerce's Stencil CLI with full Page Builder support.",
    tech: ["Stencil CLI", "Page Builder", "Responsive Design"],
    color: "#2196F3"
  },
  {
    feature: "Multi-Channel Selling",
    desc: "Sell seamlessly across Amazon, eBay, Walmart, Facebook, and Instagram — all managed from one BigCommerce dashboard.",
    tech: ["Amazon", "eBay", "Facebook Shop", "Instagram"],
    color: "#4CAF50"
  },
  {
    feature: "Advanced SEO & Performance",
    desc: "Built-in BigCommerce SEO tools — customizable URLs, metadata, structured data, and AMP-ready pages.",
    tech: ["Custom URLs", "Metadata", "Schema Markup"],
    color: "#FF9800"
  },
  {
    feature: "Abandoned Cart Recovery",
    desc: "Automated recovery emails, persistent carts, and targeted promotions to recapture lost sales.",
    tech: ["Email Triggers", "Persistent Cart", "Promo Rules"],
    color: "#9C27B0"
  }
]

const erpIntegrations = [
  { system: "Salesforce CRM", syncData: ["Customers", "Orders", "Leads", "Analytics"], icon: <Users size={22} />, color: "#00A1E0" },
  { system: "SAP / NetSuite", syncData: ["Inventory", "Pricing", "Invoices", "Fulfillment"], icon: <Database size={22} />, color: "#0FAAFF" },
  { system: "ShipStation / ShipBob", syncData: ["Orders", "Tracking", "Returns", "Warehousing"], icon: <Cloud size={22} />, color: "#E31837" },
  { system: "Klaviyo / Mailchimp", syncData: ["Segments", "Campaigns", "Automation", "Reviews"], icon: <Target size={22} />, color: "#FF9800" }
]

const process = [
  {
    "num": "01",
    "title": "Discovery & Planning",
    "desc": "Understanding your business model, catalog structure, integrations, and growth goals before any development begins."
  },
  {
    "num": "02",
    "title": "Design & Development",
    "desc": "Building custom Stencil themes, apps, and API integrations tailored precisely to your brand and workflow."
  },
  {
    "num": "03",
    "title": "Testing & QA",
    "desc": "Comprehensive testing across devices, browsers, and user flows — from checkout to order management."
  },
  {
    "num": "04",
    "title": "Launch & Optimization",
    "desc": "Smooth store launch with post-go-live monitoring, speed optimization, and continuous feature improvements."
  }
]

export default function EcommerceB2B({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${ecommerceBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container" style={{ maxWidth: '1320px' }}>
          <div className="sp-hero-icon"><Globe size={36} /></div>
          <h1 className="sp-hero-title" style={{ maxWidth: '1200px' }}>BigCommerce <span>Development Solutions</span></h1>
          <p className="sp-hero-desc" style={{ maxWidth: '1200px' }}>
            Build powerful, scalable online stores on the world's leading Open SaaS platform. We deliver custom themes, app integrations, B2B editions, and headless commerce solutions that drive real revenue growth.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#512DA8', '--sp-accent-dark': '#311B92', '--sp-accent-rgb': '81,45,168' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Open SaaS — Freedom to Build, Security to Scale</h2>
              <p className="sp-subtext-large">BigCommerce's Open SaaS architecture gives you the flexibility to customize every part of the experience without sacrificing the reliability and security of a managed platform.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#512DA8" />
                  </div>
                  <div>
                    <h4>No Transaction Fees</h4>
                    <p>Unlike Shopify, BigCommerce charges zero transaction fees on all plans — keeping more revenue in your pocket.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#512DA8" />
                  </div>
                  <div>
                    <h4>Native B2B & Multi-Storefront</h4>
                    <p>Built-in B2B Edition with corporate accounts, price lists, and multi-storefront support from a single dashboard.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <Globe size={64} color="#2196F3" />
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

      {/* UNIQUE: B2B PLATFORMS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Platform Expertise</p>
            <h2 className="sp-heading">BigCommerce <span>Editions</span></h2>
            <p className="sp-sub">We work across all BigCommerce editions — from growing DTC brands to large-scale B2B enterprises.</p>
          </div>
          <div className="b2b-platforms-grid">
            {b2bPlatforms.map((p, i) => (
              <div className="b2b-platform-card" key={i}>
                <div className="b2b-platform-badge" style={{ background: `${p.color}15`, color: p.color }}>
                  {p.platform}
                </div>
                <div className="b2b-platform-features">
                  <h4>Key Features</h4>
                  <ul>
                    {p.features.map((f, j) => (
                      <li key={j}><CheckCircle size={14} style={{ color: p.color }} /> {f}</li>
                    ))}
                  </ul>
                </div>
                <div className="b2b-platform-best">
                  <span className="b2b-platform-label">Best For:</span>
                  <span className="b2b-platform-value">{p.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: B2B FEATURES COMPARISON */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Core Capabilities</p>
            <h2 className="sp-heading">Core BigCommerce <span>Capabilities</span></h2>
            <p className="sp-sub">Advanced features that make BigCommerce the preferred platform for high-growth online stores.</p>
          </div>
          <div className="b2b-features-grid">
            {b2bFeatures.map((f, i) => (
              <div className="b2b-feature-card" key={i}>
                <div className="b2b-feature-number" style={{ background: `${f.color}15`, color: f.color }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="b2b-feature-content">
                  <h3>{f.feature}</h3>
                  <p>{f.desc}</p>
                  <div className="b2b-feature-tech">
                    {f.tech.map((t, j) => (
                      <span key={j} style={{ background: `${f.color}10`, color: f.color }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: ERP INTEGRATIONS */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Enterprise Systems</p>
            <h2 className="sp-heading">BigCommerce <span>Integrations</span></h2>
            <p className="sp-sub">Seamlessly connect your BigCommerce store with leading CRM, ERP, shipping, and marketing platforms.</p>
          </div>
          <div className="b2b-erp-grid">
            {erpIntegrations.map((erp, i) => (
              <div className="b2b-erp-card" key={i}>
                <div className="b2b-erp-icon" style={{ background: `${erp.color}15`, color: erp.color }}>
                  {erp.icon}
                </div>
                <h4>{erp.system}</h4>
                <div className="b2b-erp-sync">
                  {erp.syncData.map((data, j) => (
                    <span key={j}>{data}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">Our BigCommerce <span>Services</span></h2>
            <p className="sp-sub">End-to-end BigCommerce development — from store setup to custom integrations and headless solutions.</p>
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
