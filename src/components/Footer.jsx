import { Link } from 'react-router-dom'
import {
  Linkedin, Twitter, Facebook, Instagram,
  MapPin, Mail, Phone
} from 'lucide-react'
import logoImg from '../assets/images/btpl-logo.webp'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/">
              <img src={logoImg} alt="BTPL Soft Logo" />
            </Link>
            <p>
              Delivering innovative technology solutions that help businesses
              thrive in the digital era. Committed to excellence, innovation,
              and client success.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://twitter.com/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="https://facebook.com/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://instagram.com/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services/custom-software-solution">Custom Software</Link></li>
                <li><Link to="/services/ai-solution">AI Solutions</Link></li>
                <li><Link to="/services/web-designer-development">Web Development</Link></li>
                <li><Link to="/services/mobile-app-solution">Mobile App</Link></li>
                <li><Link to="/services/saas-solution">SaaS Solutions</Link></li>
                <li><Link to="/services/ui-ux-solution">UI/UX Design</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><Link to="/services/dedicated-resources">Dedicated Resources</Link></li>
                <li><Link to="/services/shopify-solution">Shopify Solutions</Link></li>
                <li><Link to="/services/bigcommerce-solution">BigCommerce</Link></li>
                <li><Link to="/services/marketing-solution">Digital Marketing</Link></li>
                <li><Link to="/services/software-testing-solution">Testing & QA</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/technologies">Technologies</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <MapPin size={15} />
                  <span>15442 Ventura Blvd. Ste 201-1736, Sherman Oaks, CA 91403</span>
                </li>
                <li>
                  <Mail size={15} />
                  <a href="mailto:info@btplsoft.com">info@btplsoft.com</a>
                </li>
                <li>
                  <Phone size={15} />
                  <a href="tel:3075335310">(307) 533-5310</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} BTPL Soft Pvt. Ltd. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/service-policy">Service Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
