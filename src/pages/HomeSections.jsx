import { useState, useEffect, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import Code from 'lucide-react/dist/esm/icons/code'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import Globe from 'lucide-react/dist/esm/icons/globe'
import Activity from 'lucide-react/dist/esm/icons/activity'
import Landmark from 'lucide-react/dist/esm/icons/landmark'
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart'
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap'
import Factory from 'lucide-react/dist/esm/icons/factory'
import Truck from 'lucide-react/dist/esm/icons/truck'
import Home from 'lucide-react/dist/esm/icons/house'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Mail from 'lucide-react/dist/esm/icons/mail'
import Phone from 'lucide-react/dist/esm/icons/phone'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import Users from 'lucide-react/dist/esm/icons/users'
import Layout from 'lucide-react/dist/esm/icons/layout'

const AI = Code
const TechStack = lazy(() => import('../components/TechStack.jsx'))
const GlobalPresence = lazy(() => import('../components/GlobalPresence.jsx'))

function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let raf
    const startTime = performance.now()
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      }
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [started, target, duration])

  return [count, setStarted]
}

export default function HomeSections({ logoImg }) {
  const [projects, setProjectsStarted] = useCounter(1500)
  const [years, setYearsStarted] = useCounter(15)
  const [clients, setClientsStarted] = useCounter(500)
  const [countries, setCountriesStarted] = useCounter(25)

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

    const statsEl = document.getElementById('stats-bar')
    if (statsEl) observer.observe(statsEl)
    return () => observer.disconnect()
  }, [setProjectsStarted, setYearsStarted, setClientsStarted, setCountriesStarted])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
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
                  <img src={logoImg} alt="BTPL Soft" className="about-logo-large" width="80" height="80" loading="lazy" />
                  <h3>Innovation-Driven Development</h3>
                  <p>Engineering Excellence Since Day One</p>
                </div>
              </div>
              <div className="about-experience-badge"><span className="years">15+</span><span className="label">Years</span></div>
            </div>
            <div className="about-content">
              <p className="section-subtitle">About BTPL Soft</p>
              <h2 className="section-title">Your Trusted Partner for <span className="highlight">Digital Innovation</span></h2>
              <p className="section-description">
                BTPL Soft is a leading software development & Website development company committed to delivering 
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

      <Suspense fallback={null}>
        <TechStack />
      </Suspense>

      <Suspense fallback={null}>
        <GlobalPresence />
      </Suspense>

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
    </>
  )
}
