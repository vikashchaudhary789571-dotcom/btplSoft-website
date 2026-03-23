import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ChevronDown
} from 'lucide-react'
import './Navbar.css'
import logoImg from '../assets/images/btpl-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openTechSub, setOpenTechSub] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenu])

  const closeMobile = useCallback(() => {
    setMobileMenu(false)
    setOpenDropdown(null)
    setOpenTechSub(null)
  }, [])

  const toggleDropdown = useCallback((name, e) => {
    // Only toggle accordion on mobile (≤991px), let desktop hover work normally
    if (window.innerWidth <= 991) {
      e.preventDefault()
      setOpenDropdown(prev => prev === name ? null : name)
      setOpenTechSub(null)
    }
  }, [])

  const toggleTechSub = useCallback((name) => {
    if (window.innerWidth <= 991) {
      setOpenTechSub(prev => prev === name ? null : name)
    }
  }, [])

  return (
    <>
      {/* Overlay (mobile only) */}
      <div
        className={`nav-overlay ${mobileMenu ? 'active' : ''}`}
        onClick={closeMobile}
      />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
        <Link to="/" className="navbar-logo" onClick={closeMobile}>
          <img src={logoImg} alt="BTPL Soft Logo" />
        </Link>

        <div className={`nav-links ${mobileMenu ? 'active' : ''}`}>
          {/* Services Dropdown */}
          <div className={`nav-dropdown ${openDropdown === 'services' ? 'mob-open' : ''}`}>
            <Link
              to="/services"
              className="nav-dropdown-trigger"
              onClick={(e) => toggleDropdown('services', e)}
            >
              Services <ChevronDown size={14} />
            </Link>
            <div className="nav-dropdown-menu">
              <Link to="/services/custom-software-solution" className="nav-dropdown-item" onClick={closeMobile}>Custom Software Solution</Link>
              <Link to="/services/ai-solution" className="nav-dropdown-item" onClick={closeMobile}>AI Solution</Link>
              <Link to="/services/web-designer-development" className="nav-dropdown-item" onClick={closeMobile}>Web Designer Development</Link>
              <Link to="/services/dedicated-resources" className="nav-dropdown-item" onClick={closeMobile}>Dedicated Resources</Link>
              <Link to="/services/marketing-solution" className="nav-dropdown-item" onClick={closeMobile}>Marketing Solution</Link>
              <Link to="/services/saas-solution" className="nav-dropdown-item" onClick={closeMobile}>SaaS Solution</Link>
              <Link to="/services/shopify-solution" className="nav-dropdown-item" onClick={closeMobile}>Shopify Solution</Link>
              <Link to="/services/bigcommerce-solution" className="nav-dropdown-item" onClick={closeMobile}>BigCommerce Solution</Link>
              <Link to="/services/mobile-app-solution" className="nav-dropdown-item" onClick={closeMobile}>Mobile App Solution</Link>
              <Link to="/services/software-testing-solution" className="nav-dropdown-item" onClick={closeMobile}>Software Testing Solution</Link>
              <Link to="/services/ui-ux-solution" className="nav-dropdown-item" onClick={closeMobile}>UI/UX Solution</Link>
            </div>
          </div>

          {/* Technologies Mega Dropdown */}
          <div className={`nav-dropdown ${openDropdown === 'technologies' ? 'mob-open' : ''}`}>
            <Link
              to="/technologies"
              className="nav-dropdown-trigger"
              onClick={(e) => toggleDropdown('technologies', e)}
            >
              Technologies <ChevronDown size={14} />
            </Link>
            <div className="nav-dropdown-menu nav-dropdown-menu--tech">
              <div className={`nav-tech-col ${openTechSub === 'frontend' ? 'tech-sub-open' : ''}`}>
                <span className="nav-tech-heading" onClick={() => toggleTechSub('frontend')}>Frontend <ChevronDown size={12} className="tech-sub-chevron" /></span>
                <div className="nav-tech-links">
                  <Link to="/technologies/reactjs" className="nav-tech-tag" onClick={closeMobile}>React.js</Link>
                  <Link to="/technologies/nextjs" className="nav-tech-tag" onClick={closeMobile}>Next.js</Link>
                  <Link to="/technologies/angular" className="nav-tech-tag" onClick={closeMobile}>Angular</Link>
                  <Link to="/technologies/vuejs" className="nav-tech-tag" onClick={closeMobile}>Vue.js</Link>
                </div>
              </div>
              <div className={`nav-tech-col ${openTechSub === 'backend' ? 'tech-sub-open' : ''}`}>
                <span className="nav-tech-heading" onClick={() => toggleTechSub('backend')}>Backend <ChevronDown size={12} className="tech-sub-chevron" /></span>
                <div className="nav-tech-links">
                  <Link to="/technologies/php" className="nav-tech-tag" onClick={closeMobile}>PHP</Link>
                  <Link to="/technologies/python" className="nav-tech-tag" onClick={closeMobile}>Python</Link>
                  <Link to="/technologies/java" className="nav-tech-tag" onClick={closeMobile}>Java</Link>
                  <Link to="/technologies/nodejs" className="nav-tech-tag" onClick={closeMobile}>Node.js</Link>
                  <Link to="/technologies/dotnet" className="nav-tech-tag" onClick={closeMobile}>.NET</Link>
                </div>
              </div>
              <div className={`nav-tech-col ${openTechSub === 'mobile' ? 'tech-sub-open' : ''}`}>
                <span className="nav-tech-heading" onClick={() => toggleTechSub('mobile')}>Mobile <ChevronDown size={12} className="tech-sub-chevron" /></span>
                <div className="nav-tech-links">
                  <Link to="/technologies/react-native" className="nav-tech-tag" onClick={closeMobile}>React Native</Link>
                  <Link to="/technologies/flutter" className="nav-tech-tag" onClick={closeMobile}>Flutter</Link>
                  <Link to="/technologies/swift" className="nav-tech-tag" onClick={closeMobile}>Swift</Link>
                  <Link to="/technologies/kotlin" className="nav-tech-tag" onClick={closeMobile}>Kotlin</Link>
                </div>
              </div>
              <div className={`nav-tech-col ${openTechSub === 'testing' ? 'tech-sub-open' : ''}`}>
                <span className="nav-tech-heading" onClick={() => toggleTechSub('testing')}>Testing &amp; QA <ChevronDown size={12} className="tech-sub-chevron" /></span>
                <div className="nav-tech-links">
                  <Link to="/technologies/postman" className="nav-tech-tag" onClick={closeMobile}>Postman</Link>
                  <Link to="/technologies/jmeter" className="nav-tech-tag" onClick={closeMobile}>Apache JMeter</Link>
                  <Link to="/technologies/selenium" className="nav-tech-tag" onClick={closeMobile}>Selenium</Link>
                </div>
              </div>
              <div className={`nav-tech-col ${openTechSub === 'cloud' ? 'tech-sub-open' : ''}`}>
                <span className="nav-tech-heading" onClick={() => toggleTechSub('cloud')}>Cloud <ChevronDown size={12} className="tech-sub-chevron" /></span>
                <div className="nav-tech-links">
                  <Link to="/technologies/aws" className="nav-tech-tag" onClick={closeMobile}>AWS</Link>
                  <Link to="/technologies/azure" className="nav-tech-tag" onClick={closeMobile}>Microsoft Azure</Link>
                  <Link to="/technologies/google-cloud" className="nav-tech-tag" onClick={closeMobile}>Google Cloud</Link>
                </div>
              </div>
              <div className={`nav-tech-col ${openTechSub === 'database' ? 'tech-sub-open' : ''}`}>
                <span className="nav-tech-heading" onClick={() => toggleTechSub('database')}>Database <ChevronDown size={12} className="tech-sub-chevron" /></span>
                <div className="nav-tech-links">
                  <Link to="/technologies/mongodb" className="nav-tech-tag" onClick={closeMobile}>MongoDB</Link>
                  <Link to="/technologies/postgresql" className="nav-tech-tag" onClick={closeMobile}>PostgreSQL</Link>
                  <Link to="/technologies/oracle" className="nav-tech-tag" onClick={closeMobile}>Oracle</Link>
                  <Link to="/technologies/sql-server" className="nav-tech-tag" onClick={closeMobile}>SQL Server</Link>
                </div>
              </div>
              <div className={`nav-tech-col ${openTechSub === 'aiml' ? 'tech-sub-open' : ''}`}>
                <span className="nav-tech-heading" onClick={() => toggleTechSub('aiml')}>AI &amp; ML <ChevronDown size={12} className="tech-sub-chevron" /></span>
                <div className="nav-tech-links">
                  <Link to="/technologies/tensorflow" className="nav-tech-tag" onClick={closeMobile}>TensorFlow</Link>
                  <Link to="/technologies/pytorch" className="nav-tech-tag" onClick={closeMobile}>PyTorch</Link>
                  <Link to="/technologies/numpy" className="nav-tech-tag" onClick={closeMobile}>NumPy</Link>
                  <Link to="/technologies/pandas" className="nav-tech-tag" onClick={closeMobile}>Pandas</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className={`nav-dropdown ${openDropdown === 'industries' ? 'mob-open' : ''}`}>
            <Link
              to="/industries"
              className="nav-dropdown-trigger"
              onClick={(e) => toggleDropdown('industries', e)}
            >
              Industries <ChevronDown size={14} />
            </Link>
            <div className="nav-dropdown-menu nav-dropdown-menu--industries">
              <Link to="/industries/healthcare" className="nav-industry-item" onClick={closeMobile}>
                Healthcare &amp; Life Sciences
              </Link>
              <Link to="/industries/banking-fintech" className="nav-industry-item" onClick={closeMobile}>
                Banking &amp; FinTech
              </Link>
              <Link to="/industries/ecommerce-retail" className="nav-industry-item" onClick={closeMobile}>
                E-Commerce &amp; Retail
              </Link>
              <Link to="/industries/education" className="nav-industry-item" onClick={closeMobile}>
                Education &amp; E-Learning
              </Link>
              <Link to="/industries/manufacturing-iot" className="nav-industry-item" onClick={closeMobile}>
                Manufacturing &amp; IoT
              </Link>
              <Link to="/industries/logistics-transportation" className="nav-industry-item" onClick={closeMobile}>
                Logistics &amp; Transportation
              </Link>
              <Link to="/industries/real-estate" className="nav-industry-item" onClick={closeMobile}>
                Real Estate &amp; PropTech
              </Link>
              <Link to="/industries/energy-utilities" className="nav-industry-item" onClick={closeMobile}>
                Energy &amp; Utilities
              </Link>
            </div>
          </div>
          <NavLink to="/about" className="nav-about-link" onClick={closeMobile}>About</NavLink>
          <NavLink to="/case-studies" onClick={closeMobile}>Case Studies</NavLink>
          <NavLink to="/contact" className="nav-contact-btn" onClick={closeMobile}>Contact</NavLink>
        </div>

        <button
          className={`mobile-menu-btn ${mobileMenu ? 'open' : ''}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  )
}
