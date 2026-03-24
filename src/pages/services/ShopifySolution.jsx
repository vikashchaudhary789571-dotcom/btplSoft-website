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
import shopifyBanner from '../../assets/services/istockphoto-2195043685-1024x1024.webp'

const services = [
  {
    "icon": <Layout size={28} />,
    "title": "Custom Theme Development",
    "desc": "Pixel-perfect, responsive Shopify themes built from scratch to match your unique brand identity."
  },
  {
    "icon": <Code size={28} />,
    "title": "Custom App Creation",
    "desc": "Build private Shopify apps to add unique functionalities and automate your backend operations."
  },
  {
    "icon": <Zap size={28} />,
    "title": "Store Optimization",
    "desc": "Speed audits and core web vitals optimization to decrease load times and boost conversions."
  },
  {
    "icon": <Database size={28} />,
    "title": "Store Migration",
    "desc": "Seamlessly migrate your data, products, and SEO rankings from Magento, WooCommerce, or BigCommerce."
  },
  {
    "icon": <Globe size={28} />,
    "title": "Headless Commerce",
    "desc": "Decouple your frontend using React/Next.js and Shopify Storefront API for ultimate speed and flexibility."
  },
  {
    "icon": <Settings size={28} />,
    "title": "Third-Party Integrations",
    "desc": "Connect ERPs, CRMs, inventory systems, and marketing automation tools via robust APIs."
  }
]

const whyUs = [
  {
    "title": "Shopify Certified Partners",
    "desc": "We are recognized experts deeply embedded in the Shopify ecosystem."
  },
  {
    "title": "Conversion-Focused Design",
    "desc": "Our designs aren`t just pretty; they are engineered based on consumer psychology to sell."
  },
  {
    "title": "SEO-Friendly Builds",
    "desc": "Technical SEO is baked into the code, ensuring you rank higher on search engines."
  },
  {
    "title": "Post-Launch Support",
    "desc": "Continuous optimization, A/B testing, and strategy consultation for constant growth."
  }
]

const shopifyTech = [
  { tech: "Liquid", desc: "Shopify's templating language", color: "#2196F3" },
  { tech: "Shopify CLI", desc: "Theme development toolkit", color: "#4CAF50" },
  { tech: "Storefront API", desc: "Headless commerce integration", color: "#FF9800" },
  { tech: "Polaris", desc: "Shopify's design system", color: "#9C27B0" },
  { tech: "Hydrogen", desc: "React-based framework", color: "#E91E63" },
  { tech: "GraphQL", desc: "API query language", color: "#00BCD4" }
]

const shopifyApps = [
  {
    app: "Shopify Plus",
    features: ["Wholesale Channel", "Launchpad", "Flow Automation", "Scripts"],
    icon: <ShoppingCart size={24} />,
    color: "#95BF47"
  },
  {
    app: "Liquid Templating",
    features: ["Custom Sections", "Metafields", "Dynamic Content", "Theme Extensions"],
    icon: <Code size={24} />,
    color: "#2196F3"
  },
  {
    app: "Storefront API",
    features: ["Headless Commerce", "GraphQL", "Custom Checkout", "PWA"],
    icon: <Zap size={24} />,
    color: "#FF9800"
  },
  {
    app: "App Development",
    features: ["Private Apps", "Public Apps", "Webhooks", "Admin API"],
    icon: <Settings size={24} />,
    color: "#9C27B0"
  }
]

const shopifyIntegrations = [
  { name: "Payment Gateways", tools: ["Stripe", "PayPal", "Razorpay", "Square"], color: "#4CAF50" },
  { name: "Shipping & Logistics", tools: ["ShipStation", "Easyship", "Shiprocket", "FedEx"], color: "#2196F3" },
  { name: "Marketing Tools", tools: ["Klaviyo", "Mailchimp", "Google Ads", "Facebook Pixel"], color: "#FF9800" },
  { name: "Inventory Management", tools: ["TradeGecko", "Cin7", "Stocky", "Veeqo"], color: "#9C27B0" },
  { name: "Analytics", tools: ["Google Analytics", "Hotjar", "Lucky Orange", "Mixpanel"], color: "#E91E63" },
  { name: "Customer Support", tools: ["Zendesk", "Gorgias", "Tidio", "Re:amaze"], color: "#00BCD4" }
]

const shopifyFeatures = [
  { metric: "2x", label: "Faster Load Time", desc: "Optimized theme performance", color: "#95BF47" },
  { metric: "30%", label: "Higher Conversions", desc: "UX-driven checkout flow", color: "#4CAF50" },
  { metric: "99.9%", label: "Uptime Guarantee", desc: "Enterprise-grade hosting", color: "#2196F3" },
  { metric: "24/7", label: "Support Available", desc: "Dedicated Shopify experts", color: "#FF9800" }
]

const process = [
  {
    "num": "01",
    "title": "Business Audit",
    "desc": "Analyzing your catalog size, current platform, and conversion goals."
  },
  {
    "num": "02",
    "title": "UI/UX Design",
    "desc": "Creating conversion-optimized wireframes specifically for the eCommerce buyer journey."
  },
  {
    "num": "03",
    "title": "Liquid/React Dev",
    "desc": "Coding the theme adhering to Shopify 2.0 architecture and best practices."
  },
  {
    "num": "04",
    "title": "QA & Launch",
    "desc": "Rigorous cross-browser testing, load testing, and checkout validation before going live."
  }
]

export default function ShopifySolution({ onOpenConsult }) {
  return (
    <div className="sp-page">
      <section className="sp-hero" style={{
        backgroundImage: `url(${shopifyBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Shopify <span>Development</span></h1>
          <p className="sp-hero-desc">
            Elevate your online retail business with world-class Shopify solutions. From bespoke themes and custom app development to complex migrations, we engineer stores that maximize conversions.
          </p>
          <div className="sp-hero-actions">
            <button onClick={onOpenConsult} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview" style={{ '--sp-accent': '#95BF47', '--sp-accent-dark': '#6B8E23', '--sp-accent-rgb': '149,191,71' }}>
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">Liquid & Headless Commerce</h2>
              <p className="sp-subtext-large">We move beyond standard templates, building intricate Liquid themes and blazing-fast Headless Shopify storefronts using React and Next.js connected via the Storefront API.</p>
              
              <div className="sp-overview-tech-points">
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#95BF47" />
                  </div>
                  <div>
                    <h4>Headless PWA Storefronts</h4>
                    <p>Sub-second load times using cutting-edge edge-network caching.</p>
                  </div>
                </div>
                
                <div className="sp-tech-point">
                  <div className="checkmark-wrapper">
                    <CheckCircle size={24} color="#95BF47" />
                  </div>
                  <div>
                    <h4>Custom Shopify App Nodes</h4>
                    <p>Node.js and Ruby backends connecting Shopify to specialized ERPs.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-illustration">
                  <div className="sp-illustration-icon">
                    <ShoppingCart size={64} color="#2196F3" />
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

      {/* UNIQUE: SHOPIFY FEATURES STRIP */}
      <section className="shopify-features-strip">
        <div className="sp-container">
          <div className="shopify-features-grid">
            {shopifyFeatures.map((f, i) => (
              <div className="shopify-feature-item" key={i}>
                <div className="shopify-feature-metric" style={{ color: f.color }}>{f.metric}</div>
                <div className="shopify-feature-label">{f.label}</div>
                <div className="shopify-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: SHOPIFY APPS & CAPABILITIES */}
      <section className="sp-section sp-bg-light">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Shopify Ecosystem</p>
            <h2 className="sp-heading">Shopify Apps & <span>Capabilities</span></h2>
            <p className="sp-sub">Leveraging the full power of Shopify's platform and APIs.</p>
          </div>
          <div className="shopify-apps-grid">
            {shopifyApps.map((app, i) => (
              <div className="shopify-app-card" key={i}>
                <div className="shopify-app-icon" style={{ background: `${app.color}15`, color: app.color }}>
                  {app.icon}
                </div>
                <h3 style={{ color: app.color }}>{app.app}</h3>
                <ul className="shopify-app-features">
                  {app.features.map((f, j) => (
                    <li key={j}><CheckCircle size={14} style={{ color: app.color }} /> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE: SHOPIFY INTEGRATIONS */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Third-Party Integrations</p>
            <h2 className="sp-heading">Shopify <span>Integrations</span> We Master</h2>
            <p className="sp-sub">Seamlessly connect your store with essential business tools and services.</p>
          </div>
          <div className="shopify-integrations-grid">
            {shopifyIntegrations.map((int, i) => (
              <div className="shopify-integration-card" key={i}>
                <div className="shopify-integration-header" style={{ borderLeftColor: int.color }}>
                  <h4>{int.name}</h4>
                </div>
                <div className="shopify-integration-tools">
                  {int.tools.map((tool, j) => (
                    <span key={j} style={{ background: `${int.color}12`, color: int.color }}>{tool}</span>
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
            <h2 className="sp-heading">Expert Shopify Services</h2>
            <p className="sp-sub">Empowering eCommerce brands with blazing-fast, customized, and high-converting Shopify storefronts.</p>
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
