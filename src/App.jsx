import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import Check from 'lucide-react/dist/esm/icons/check'
import X from 'lucide-react/dist/esm/icons/x'
import './App.css'
import Navbar from './components/Navbar.jsx'
import logoImg from './assets/images/btpl-logo.webp'
import bannerImg from './assets/images/WhatsApp Image 2026-03-17 at 12.13.43 PM.webp'

// Lazy load homepage below-fold sections + footer
const HomeSections = lazy(() => import('./pages/HomeSections.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))
const FAQ = lazy(() => import('./components/FAQ.jsx'))

// Lazy load all route pages for code splitting
const About = lazy(() => import('./pages/About.jsx'))
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment.jsx'))
const AppDevelopment = lazy(() => import('./pages/services/AppDevelopment.jsx'))
const CustomSoftware = lazy(() => import('./pages/services/CustomSoftware.jsx'))
const SEOOptimization = lazy(() => import('./pages/services/SEOOptimization.jsx'))
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing.jsx'))
const SocialMedia = lazy(() => import('./pages/services/SocialMedia.jsx'))
const AISolution = lazy(() => import('./pages/services/AISolution.jsx'))
const DedicatedResources = lazy(() => import('./pages/services/DedicatedResources.jsx'))
const SaaSSolution = lazy(() => import('./pages/services/SaaSSolution.jsx'))
const ShopifySolution = lazy(() => import('./pages/services/ShopifySolution.jsx'))
const EcommerceB2B = lazy(() => import('./pages/services/EcommerceB2B.jsx'))
const QAAndTesting = lazy(() => import('./pages/services/QAAndTesting.jsx'))
const UIUXDesign = lazy(() => import('./pages/services/UIUXDesign.jsx'))
const ServicesPage = lazy(() => import('./pages/services/Services.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy.jsx'))
const TermsConditions = lazy(() => import('./pages/legal/TermsConditions.jsx'))
const ServicePolicy = lazy(() => import('./pages/legal/ServicePolicy.jsx'))
const IndustriesPage = lazy(() => import('./pages/industries/Industries.jsx'))
const Healthcare = lazy(() => import('./pages/industries/Healthcare.jsx'))
const BankingFintech = lazy(() => import('./pages/industries/BankingFintech.jsx'))
const ECommerce = lazy(() => import('./pages/industries/ECommerce.jsx'))
const Education = lazy(() => import('./pages/industries/Education.jsx'))
const Manufacturing = lazy(() => import('./pages/industries/Manufacturing.jsx'))
const Logistics = lazy(() => import('./pages/industries/Logistics.jsx'))
const RealEstate = lazy(() => import('./pages/industries/RealEstate.jsx'))
const Energy = lazy(() => import('./pages/industries/Energy.jsx'))
const ReactJS = lazy(() => import('./pages/technologies/ReactJS.jsx'))
const NextJS = lazy(() => import('./pages/technologies/NextJS.jsx'))
const Angular = lazy(() => import('./pages/technologies/Angular.jsx'))
const VueJS = lazy(() => import('./pages/technologies/VueJS.jsx'))
const PHP = lazy(() => import('./pages/technologies/PHP.jsx'))
const Python = lazy(() => import('./pages/technologies/Python.jsx'))
const Java = lazy(() => import('./pages/technologies/Java.jsx'))
const NodeJS = lazy(() => import('./pages/technologies/NodeJS.jsx'))
const DotNET = lazy(() => import('./pages/technologies/DotNET.jsx'))
const ReactNativeApp = lazy(() => import('./pages/technologies/ReactNative.jsx'))
const Flutter = lazy(() => import('./pages/technologies/Flutter.jsx'))
const Swift = lazy(() => import('./pages/technologies/Swift.jsx'))
const Kotlin = lazy(() => import('./pages/technologies/Kotlin.jsx'))
const Postman = lazy(() => import('./pages/technologies/Postman.jsx'))
const JMeter = lazy(() => import('./pages/technologies/JMeter.jsx'))
const Selenium = lazy(() => import('./pages/technologies/Selenium.jsx'))
const AWS = lazy(() => import('./pages/technologies/AWS.jsx'))
const Azure = lazy(() => import('./pages/technologies/Azure.jsx'))
const GoogleCloud = lazy(() => import('./pages/technologies/GoogleCloud.jsx'))
const MongoDB = lazy(() => import('./pages/technologies/MongoDB.jsx'))
const PostgreSQL = lazy(() => import('./pages/technologies/PostgreSQL.jsx'))
const Oracle = lazy(() => import('./pages/technologies/Oracle.jsx'))
const SQLServer = lazy(() => import('./pages/technologies/SQLServer.jsx'))
const TensorFlow = lazy(() => import('./pages/technologies/TensorFlow.jsx'))
const PyTorch = lazy(() => import('./pages/technologies/PyTorch.jsx'))
const NumPy = lazy(() => import('./pages/technologies/NumPy.jsx'))
const Pandas = lazy(() => import('./pages/technologies/Pandas.jsx'))
const TechnologiesPage = lazy(() => import('./pages/technologies/Technologies.jsx'))

// Page loading fallback
function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ width: 40, height: 40, border: '3px solid rgba(33,150,243,0.2)', borderTopColor: '#2196F3', borderRadius: '50%', animation: 'spin .8s linear infinite' }} />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const openConsult = useCallback(() => setShowModal(true), [])

  const handleConsultSubmit = useCallback((e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }, [])

  const closeModal = () => {
    setShowModal(false)
    setFormSubmitted(false)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

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

      <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/about" element={<About onOpenConsult={openConsult} />} />
        <Route path="/services" element={<ServicesPage onOpenConsult={openConsult} />} />
        <Route path="/services/custom-software-solution" element={<CustomSoftware onOpenConsult={openConsult} />} />
        <Route path="/services/ai-solution" element={<AISolution onOpenConsult={openConsult} />} />
        <Route path="/services/web-designer-development" element={<WebDevelopment onOpenConsult={openConsult} />} />
        <Route path="/services/dedicated-resources" element={<DedicatedResources onOpenConsult={openConsult} />} />
        <Route path="/services/marketing-solution" element={<DigitalMarketing onOpenConsult={openConsult} />} />
        <Route path="/services/seo-optimization" element={<SEOOptimization onOpenConsult={openConsult} />} />
        <Route path="/services/social-media" element={<SocialMedia onOpenConsult={openConsult} />} />
        <Route path="/services/saas-solution" element={<SaaSSolution onOpenConsult={openConsult} />} />
        <Route path="/services/shopify-solution" element={<ShopifySolution onOpenConsult={openConsult} />} />
        <Route path="/services/bigcommerce-solution" element={<EcommerceB2B onOpenConsult={openConsult} />} />
        <Route path="/services/mobile-app-solution" element={<AppDevelopment onOpenConsult={openConsult} />} />
        <Route path="/services/software-testing-solution" element={<QAAndTesting onOpenConsult={openConsult} />} />
        <Route path="/services/ui-ux-solution" element={<UIUXDesign onOpenConsult={openConsult} />} />
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
      <section className="hero-section" id="hero">
        <img src={bannerImg} alt="" className="hero-bg-img" width="1920" height="1080" fetchpriority="high" />
        <div className="hero-bg-overlay"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot"></span>Trusted IT Solutions Partner</div>
            <h1 className="hero-title">Transforming Ideas<br /><span className="highlight-blue">Into Digital</span> <span className="highlight-green">Reality</span></h1>
            <p className="hero-description">
              BTPL Soft delivers innovative website development and software development, along with cloud solutions and digital transformation services that empower businesses to scale, compete, and succeed in the modern digital landscape.
            </p>
            <div className="hero-buttons">
              <button onClick={openConsult} className="btn-primary">Get Free Consultation <ArrowRight size={20} /></button>
              <Link to="/services" className="btn-secondary">Explore Services <ArrowRight size={20} /></Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="tech-orbit-wrap">
              <div className="tech-orbit-center">
                <img src={logoImg} alt="BTPL" className="tech-orbit-logo" width="60" height="60" />
              </div>
              <div className="tech-orbit-ring ring-1">
                <div className="tech-orbit-item item-top">React</div>
                <div className="tech-orbit-item item-bottom">Node.js</div>
              </div>
              <div className="tech-orbit-ring ring-2">
                <div className="tech-orbit-item item-right">Python</div>
                <div className="tech-orbit-item item-left">Flutter</div>
              </div>
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

      <Suspense fallback={null}>
        <HomeSections logoImg={logoImg} />
      </Suspense>

      </> } />
      </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

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
