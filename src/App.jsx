import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
import { 
  ArrowRight, 
  ChevronDown,
  Check,
  X,
  Code, 
  Smartphone, 
  Cloud, 
  Globe, 
  Cpu, 
  Briefcase, 
  Database, 
  Layers, 
  Activity, 
  Landmark, 
  ShoppingCart, 
  GraduationCap, 
  Factory, 
  Truck, 
  Home, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ShieldCheck,
  Rocket,
  Search,
  TrendingUp,
  Target,
  Share2,
  Monitor,
  Users,
  Layout,
  Cpu as AI
} from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import logoImg from './assets/images/btpl-logo.png'
import bannerImg from './assets/images/WhatsApp Image 2026-03-17 at 12.13.43 PM.jpeg'
import About from './pages/About.jsx'
import WebDevelopment from './pages/services/WebDevelopment.jsx'
import AppDevelopment from './pages/services/AppDevelopment.jsx'
import CustomSoftware from './pages/services/CustomSoftware.jsx'
import SEOOptimization from './pages/services/SEOOptimization.jsx'
import DigitalMarketing from './pages/services/DigitalMarketing.jsx'
import SocialMedia from './pages/services/SocialMedia.jsx'
import AISolution from './pages/services/AISolution.jsx'
import DedicatedResources from './pages/services/DedicatedResources.jsx'
import SaaSSolution from './pages/services/SaaSSolution.jsx'
import ShopifySolution from './pages/services/ShopifySolution.jsx'
import EcommerceB2B from './pages/services/EcommerceB2B.jsx'
import QAAndTesting from './pages/services/QAAndTesting.jsx'
import UIUXDesign from './pages/services/UIUXDesign.jsx'
import ServicesPage from './pages/services/Services.jsx'
import Contact from './pages/Contact.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'
import TechStack from './components/TechStack.jsx'
import GlobalPresence from './components/GlobalPresence.jsx'
import Footer from './components/Footer.jsx'
import FAQ from './components/FAQ.jsx'
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx'
import TermsConditions from './pages/legal/TermsConditions.jsx'
import ServicePolicy from './pages/legal/ServicePolicy.jsx'
import IndustriesPage from './pages/industries/Industries.jsx'
import Healthcare from './pages/industries/Healthcare.jsx'
import BankingFintech from './pages/industries/BankingFintech.jsx'
import ECommerce from './pages/industries/ECommerce.jsx'
import Education from './pages/industries/Education.jsx'
import Manufacturing from './pages/industries/Manufacturing.jsx'
import Logistics from './pages/industries/Logistics.jsx'
import RealEstate from './pages/industries/RealEstate.jsx'
import Energy from './pages/industries/Energy.jsx'
import ReactJS from './pages/technologies/ReactJS.jsx'
import NextJS from './pages/technologies/NextJS.jsx'
import Angular from './pages/technologies/Angular.jsx'
import VueJS from './pages/technologies/VueJS.jsx'
import PHP from './pages/technologies/PHP.jsx'
import Python from './pages/technologies/Python.jsx'
import Java from './pages/technologies/Java.jsx'
import NodeJS from './pages/technologies/NodeJS.jsx'
import DotNET from './pages/technologies/DotNET.jsx'
import ReactNativeApp from './pages/technologies/ReactNative.jsx'
import Flutter from './pages/technologies/Flutter.jsx'
import Swift from './pages/technologies/Swift.jsx'
import Kotlin from './pages/technologies/Kotlin.jsx'
import Postman from './pages/technologies/Postman.jsx'
import JMeter from './pages/technologies/JMeter.jsx'
import Selenium from './pages/technologies/Selenium.jsx'
import AWS from './pages/technologies/AWS.jsx'
import Azure from './pages/technologies/Azure.jsx'
import GoogleCloud from './pages/technologies/GoogleCloud.jsx'
import MongoDB from './pages/technologies/MongoDB.jsx'
import PostgreSQL from './pages/technologies/PostgreSQL.jsx'
import Oracle from './pages/technologies/Oracle.jsx'
import SQLServer from './pages/technologies/SQLServer.jsx'
import TensorFlow from './pages/technologies/TensorFlow.jsx'
import PyTorch from './pages/technologies/PyTorch.jsx'
import NumPy from './pages/technologies/NumPy.jsx'
import Pandas from './pages/technologies/Pandas.jsx'
import TechnologiesPage from './pages/technologies/Technologies.jsx'

function App() {
  // Counter animation hook
  const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)
    
    useEffect(() => {
      if (!started) return
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }, [started, target, duration])
    
    return [count, setStarted]
  }

  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleConsultSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setFormSubmitted(false)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const [projects, setProjectsStarted] = useCounter(1800)
  const [years, setYearsStarted] = useCounter(25)
  const [clients, setClientsStarted] = useCounter(810)
  const [countries, setCountriesStarted] = useCounter(36)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setProjectsStarted(true)
            setYearsStarted(true)
            setClientsStarted(true)
            setCountriesStarted(true)
          }
        })
      },
      { threshold: 0.3 }
    )
    
    // Wait for DOM to be ready
    const checkAndObserve = () => {
      const statsEl = document.getElementById('stats-bar')
      if (statsEl) {
        observer.observe(statsEl)
      } else {
        // Retry after a short delay if element not found
        setTimeout(checkAndObserve, 100)
      }
    }
    
    checkAndObserve()
    return () => observer.disconnect()
  }, [setProjectsStarted, setYearsStarted, setClientsStarted, setCountriesStarted])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Open modal from any page via custom event
  useEffect(() => {
    const handler = () => setShowModal(true)
    window.addEventListener('openConsultModal', handler)
    return () => window.removeEventListener('openConsultModal', handler)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/about" element={<About onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services" element={<ServicesPage onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/custom-software-solution" element={<CustomSoftware onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/ai-solution" element={<AISolution onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/web-designer-development" element={<WebDevelopment onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/dedicated-resources" element={<DedicatedResources onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/marketing-solution" element={<DigitalMarketing onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/seo-optimization" element={<SEOOptimization onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/social-media" element={<SocialMedia onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/saas-solution" element={<SaaSSolution onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/shopify-solution" element={<ShopifySolution onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/bigcommerce-solution" element={<EcommerceB2B onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/mobile-app-solution" element={<AppDevelopment onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/software-testing-solution" element={<QAAndTesting onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/services/ui-ux-solution" element={<UIUXDesign onOpenConsult={() => setShowModal(true)} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/service-policy" element={<ServicePolicy />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/banking-fintech" element={<BankingFintech />} />
        <Route path="/industries/ecommerce-retail" element={<ECommerce />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/manufacturing-iot" element={<Manufacturing />} />
        <Route path="/industries/logistics-transportation" element={<Logistics />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/energy-utilities" element={<Energy />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/technologies/reactjs" element={<ReactJS />} />
        <Route path="/technologies/nextjs" element={<NextJS />} />
        <Route path="/technologies/angular" element={<Angular />} />
        <Route path="/technologies/vuejs" element={<VueJS />} />
        <Route path="/technologies/php" element={<PHP />} />
        <Route path="/technologies/python" element={<Python />} />
        <Route path="/technologies/java" element={<Java />} />
        <Route path="/technologies/nodejs" element={<NodeJS />} />
        <Route path="/technologies/dotnet" element={<DotNET />} />
        <Route path="/technologies/react-native" element={<ReactNativeApp />} />
        <Route path="/technologies/flutter" element={<Flutter />} />
        <Route path="/technologies/swift" element={<Swift />} />
        <Route path="/technologies/kotlin" element={<Kotlin />} />
        <Route path="/technologies/postman" element={<Postman />} />
        <Route path="/technologies/jmeter" element={<JMeter />} />
        <Route path="/technologies/selenium" element={<Selenium />} />
        <Route path="/technologies/aws" element={<AWS />} />
        <Route path="/technologies/azure" element={<Azure />} />
        <Route path="/technologies/google-cloud" element={<GoogleCloud />} />
        <Route path="/technologies/mongodb" element={<MongoDB />} />
        <Route path="/technologies/postgresql" element={<PostgreSQL />} />
        <Route path="/technologies/oracle" element={<Oracle />} />
        <Route path="/technologies/sql-server" element={<SQLServer />} />
        <Route path="/technologies/tensorflow" element={<TensorFlow />} />
        <Route path="/technologies/pytorch" element={<PyTorch />} />
        <Route path="/technologies/numpy" element={<NumPy />} />
        <Route path="/technologies/pandas" element={<Pandas />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" id="hero" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="hero-bg-overlay"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-particles">
          <div className="particle"></div><div className="particle"></div><div className="particle"></div><div className="particle"></div>
          <div className="particle"></div><div className="particle"></div><div className="particle"></div><div className="particle"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot"></span>Trusted IT Solutions Partner</div>
            <h1 className="hero-title">Transforming Ideas<br /><span className="highlight-blue">Into Digital</span> <span className="highlight-green">Reality</span></h1>
            <p className="hero-description">
              BTPL Soft delivers innovative software development, cloud solutions, and digital 
              transformation services that empower businesses to scale, compete, and succeed 
              in the modern digital landscape.
            </p>
            <div className="hero-buttons">
              <button onClick={() => setShowModal(true)} className="btn-primary">Get Free Consultation <ArrowRight size={20} /></button>
              <Link to="/services" className="btn-secondary">Explore Services <ArrowRight size={20} /></Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="tech-orbit-wrap">
              {/* Center */}
              <div className="tech-orbit-center">
                <img src={logoImg} alt="BTPL" className="tech-orbit-logo" />
              </div>

              {/* Ring 1 — innermost */}
              <div className="tech-orbit-ring ring-1">
                <div className="tech-orbit-item item-top">React</div>
                <div className="tech-orbit-item item-bottom">Node.js</div>
              </div>

              {/* Ring 2 */}
              <div className="tech-orbit-ring ring-2">
                <div className="tech-orbit-item item-right">Python</div>
                <div className="tech-orbit-item item-left">Flutter</div>
              </div>

              {/* Ring 3 — outermost */}
              <div className="tech-orbit-ring ring-3">
                <div className="tech-orbit-item item-top">AWS</div>
                <div className="tech-orbit-item item-right">AI / ML</div>
                <div className="tech-orbit-item item-bottom">MongoDB</div>
                <div className="tech-orbit-item item-left">.NET</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar" id="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><div className="stat-number">{projects}+</div><div className="stat-label">Delivered Solutions</div></div>
            <div className="stat-item"><div className="stat-number">{years}+</div><div className="stat-label">Years In Industry</div></div>
            <div className="stat-item"><div className="stat-number">{clients}+</div><div className="stat-label">Worldwide Clients</div></div>
            <div className="stat-item"><div className="stat-number">{countries}</div><div className="stat-label">Global Presence Reach</div></div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">End-to-End <span className="highlight">Software Solutions</span></h2>
            <p className="section-description">
              From ideation to deployment and beyond, we deliver comprehensive technology 
              services tailored to your unique business requirements and growth objectives.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><Code size={32} color="#FF6B35" /></div>
              <h3>Custom Software Solution</h3>
              <p>Tailored software solutions designed to meet your specific business needs and streamline complex workflows.</p>
              <Link to="/services/custom-software-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><AI size={32} color="#6366F1" /></div>
              <h3>AI Solution</h3>
              <p>Harness the power of Artificial Intelligence and Machine Learning to automate processes and gain actionable insights.</p>
              <Link to="/services/ai-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><Monitor size={32} color="#06B6D4" /></div>
              <h3>Web Designer Development</h3>
              <p>Creating stunning, responsive, and user-centric websites that drive engagement and represent your brand perfectly.</p>
              <Link to="/services/web-designer-development" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><Users size={32} color="#EC4899" /></div>
              <h3>Dedicated Resources</h3>
              <p>Scale your team with our expert developers, designers, and project managers dedicated exclusively to your success.</p>
              <Link to="/services/dedicated-resources" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><TrendingUp size={32} color="#10B981" /></div>
              <h3>Marketing Solution</h3>
              <p>Comprehensive digital marketing strategies to boost your online presence, drive traffic, and increase conversions.</p>
              <Link to="/services/marketing-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><Cloud size={32} color="#3B82F6" /></div>
              <h3>SaaS Solution</h3>
              <p>End-to-end SaaS application development, from architecture design to deployment and scaling on cloud platforms.</p>
              <Link to="/services/saas-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><ShoppingCart size={32} color="#84CC16" /></div>
              <h3>Shopify Solution</h3>
              <p>Expert Shopify development services including custom theme design, app integration, and store optimization.</p>
              <Link to="/services/shopify-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><Globe size={32} color="#0EA5E9" /></div>
              <h3>BigCommerce Solution</h3>
              <p>Custom BigCommerce stores with Stencil themes, B2B Edition, headless commerce, and seamless ERP/CRM integrations — built to scale.</p>
              <Link to="/services/bigcommerce-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><Smartphone size={32} color="#8B5CF6" /></div>
              <h3>Mobile App Solution</h3>
              <p>Intuitive and high-performance mobile applications for iOS and Android platforms using modern technologies.</p>
              <Link to="/services/mobile-app-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><ShieldCheck size={32} color="#94A3B8" /></div>
              <h3>Software Testing Solution</h3>
              <p>Rigorous quality assurance and testing services to ensure your software is bug-free, secure, and performs optimally.</p>
              <Link to="/services/software-testing-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon"><Layout size={32} color="#F43F5E" /></div>
              <h3>UI/UX Solution</h3>
              <p>Crafting beautiful and functional user interfaces and experiences that delight users and drive business results.</p>
              <Link to="/services/ui-ux-solution" className="service-link">Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-image-container">
                <div className="about-graphic">
                  <img src={logoImg} alt="BTPL Soft" className="about-logo-large" />
                  <h3>Innovation-Driven Development</h3>
                  <p>Engineering Excellence Since Day One</p>
                </div>
              </div>
              <div className="about-experience-badge"><span className="years">25+</span><span className="label">Years</span></div>
            </div>
            <div className="about-content">
              <p className="section-subtitle">About BTPL Soft</p>
              <h2 className="section-title">Your Trusted Partner for <span className="highlight">Digital Innovation</span></h2>
              <p className="section-description">
                BTPL Soft is a leading software development company committed to delivering 
                cutting-edge technology solutions that fuel business growth. With a passionate 
                team of developers, designers, and strategists, we transform complex challenges 
                into elegant, scalable software products.
              </p>
              <Link to="/about" className="btn-primary">Discover Our Story <ArrowRight size={20} /></Link>
            </div>
          </div>

          <div className="about-features-counter">
            <div className="about-feature">
              <div><h4>Agile Methodology</h4><p>Iterative development with feedback loops</p></div>
            </div>
            <div className="about-feature">
              <div><h4>Dedicated Teams</h4><p>Skilled engineers committed to success</p></div>
            </div>
            <div className="about-feature">
              <div><h4>24/7 Support</h4><p>Technical support and maintenance</p></div>
            </div>
            <div className="about-feature">
              <div><h4>Quality Assurance</h4><p>Rigorous testing for bug-free results</p></div>
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      <GlobalPresence />

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="industries-section" id="industries">
        <div className="container">
          <div className="industries-header">
            <p className="section-subtitle">Industries We Serve</p>
            <h2 className="section-title">Domain Expertise Across <span className="highlight">Key Sectors</span></h2>
            <p className="section-description">Our deep industry knowledge enables us to deliver solutions that address sector-specific challenges and drive measurable business outcomes.</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card"><Activity size={40} color="#2196F3" className="mx-auto mb-4" /><h3>Healthcare & Life Sciences</h3><p>HIPAA-compliant solutions, telemedicine platforms, and EHR systems</p></div>
            <div className="industry-card"><Landmark size={40} color="#2196F3" className="mx-auto mb-4" /><h3>Banking & FinTech</h3><p>Secure payment gateways, digital banking, and financial analytics</p></div>
            <div className="industry-card"><ShoppingCart size={40} color="#2196F3" className="mx-auto mb-4" /><h3>E-Commerce & Retail</h3><p>Scalable storefronts, inventory management, and omnichannel solutions</p></div>
            <div className="industry-card"><GraduationCap size={40} color="#2196F3" className="mx-auto mb-4" /><h3>Education & E-Learning</h3><p>LMS platforms, virtual classrooms, and interactive learning tools</p></div>
            <div className="industry-card"><Factory size={40} color="#2196F3" className="mx-auto mb-4" /><h3>Manufacturing & IoT</h3><p>Smart factory solutions, supply chain automation, and IoT integration</p></div>
            <div className="industry-card"><Truck size={40} color="#2196F3" className="mx-auto mb-4" /><h3>Logistics & Transportation</h3><p>Fleet management, route optimization, and real-time tracking systems</p></div>
            <div className="industry-card"><Home size={40} color="#2196F3" className="mx-auto mb-4" /><h3>Real Estate & PropTech</h3><p>Property management portals, virtual tours, and CRM solutions</p></div>
            <div className="industry-card"><Zap size={40} color="#2196F3" className="mx-auto mb-4" /><h3>Energy & Utilities</h3><p>Smart grid monitoring, energy analytics, and sustainability platforms</p></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section" id="why-us">
        <div className="container">
          <div className="why-header">
            <p className="section-subtitle">Why BTPL Soft</p>
            <h2 className="section-title">Why Leading Businesses <span className="highlight">Choose Us</span></h2>
            <p className="section-description">We combine technical expertise with a client-first approach to deliver solutions that exceed expectations and create lasting partnerships.</p>
          </div>
          <div className="why-grid">
            <div className="why-card"><div className="why-number">01</div><h3>Proven Track Record</h3><p>500+ successful projects delivered across diverse industries with a 98% client satisfaction rate and long-term partnerships.</p></div>
            <div className="why-card"><div className="why-number">02</div><h3>Transparent Communication</h3><p>Regular progress updates, dedicated project managers, and open communication channels ensure you're always in the loop.</p></div>
            <div className="why-card"><div className="why-number">03</div><h3>Cost-Effective Solutions</h3><p>High-quality software development at competitive rates without compromising on performance, security, or user experience.</p></div>
            <div className="why-card"><div className="why-number">04</div><h3>Scalable Architecture</h3><p>Future-proof solutions built with scalability in mind, ensuring your software grows seamlessly alongside your business.</p></div>
            <div className="why-card"><div className="why-number">05</div><h3>On-Time Delivery</h3><p>Agile workflows and milestone-based development ensure your project is delivered on schedule, every single time.</p></div>
            <div className="why-card"><div className="why-number">06</div><h3>Post-Launch Support</h3><p>Comprehensive maintenance, monitoring, and support services to keep your applications running at peak performance.</p></div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-content">
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Ready to Get Started?</p>
            <h2 className="section-title">Let's Build Something <span className="highlight">Extraordinary</span> Together</h2>
            <p>
              Whether you need a custom web application, mobile app, or a complete 
              digital transformation strategy, our team is ready to bring your vision to life. 
              Get a free consultation today.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary"><Mail size={20} className="mr-2" /> Start Your Project</Link>
              <a href="tel:3075335310" className="btn-cta-secondary"><Phone size={20} className="mr-2" /> Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      </> } />
      </Routes>
      <FAQ />
      <Footer />

      {showModal && (
        <div className="consult-overlay" onClick={closeModal}>
          <div className="consult-modal" onClick={e => e.stopPropagation()}>
            <button className="consult-close" onClick={closeModal}><X size={22} /></button>
            {!formSubmitted ? (
              <>
                <div className="consult-modal-header">
                  <div className="consult-modal-badge">Free Consultation</div>
                  <h2>Let's Build Something Great</h2>
                  <p>Fill in your details and our team will get back to you within 24 hours.</p>
                </div>
                <form className="consult-form" onSubmit={handleConsultSubmit}>
                  <div className="consult-form-row">
                    <div className="consult-field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" placeholder="Your full name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    </div>
                    <div className="consult-field">
                      <label>Email Address <span>*</span></label>
                      <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                    </div>
                  </div>
                  <div className="consult-form-row">
                    <div className="consult-field">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+1 234 567 8900" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div className="consult-field">
                      <label>Service Interested In</label>
                      <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                        <option value="">Select a service</option>
                        <option>Custom Software Development</option>
                        <option>AI Solution</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>BigCommerce Solution</option>
                        <option>Shopify Solution</option>
                        <option>SaaS Solution</option>
                        <option>Digital Marketing</option>
                        <option>UI/UX Design</option>
                        <option>QA &amp; Testing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="consult-field">
                    <label>Message</label>
                    <textarea rows={4} placeholder="Tell us about your project..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" className="consult-submit">Send Request <ArrowRight size={18} /></button>
                </form>
              </>
            ) : (
              <div className="consult-success">
                <div className="consult-success-icon"><Check size={40} /></div>
                <h3>Thank You!</h3>
                <p>Your consultation request has been submitted. Our team will contact you within 24 hours.</p>
                <button className="consult-submit" onClick={closeModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}

    </>
  )
}

export default App
