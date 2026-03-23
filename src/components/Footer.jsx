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
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img src={logoImg} alt="BTPL Soft Logo" />
            </Link>
            <p>
              BTPL Soft is a premier software development company delivering innovative
              technology solutions that help businesses thrive in the digital era. We are
              committed to excellence, innovation, and client success.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://twitter.com/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://facebook.com/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://instagram.com/btplsoft" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/custom-software-solution">Custom Software</Link></li>
              <li><Link to="/services/ai-solution">AI Solutions</Link></li>
              <li><Link to="/services/web-designer-development">Web Development</Link></li>
              <li><Link to="/services/dedicated-resources">Dedicated Resources</Link></li>
              <li><Link to="/services/marketing-solution">Marketing Solutions</Link></li>
              <li><Link to="/services/saas-solution">SaaS Solutions</Link></li>
              <li><Link to="/services/shopify-solution">Shopify Solutions</Link></li>
              <li><Link to="/services/bigcommerce-solution">BigCommerce</Link></li>
              <li><Link to="/services/mobile-app-solution">Mobile App</Link></li>
              <li><Link to="/services/software-testing-solution">Testing & QA</Link></li>
              <li><Link to="/services/ui-ux-solution">UI/UX Design</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/service-policy">Services Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Get In Touch</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><MapPin size={18} /></div>
              <p>15442 Ventura Blvd. Ste 201-1736<br />Sherman Oaks, CA 91403</p>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><Mail size={18} /></div>
              <p><a href="mailto:info@btplsoft.com">info@btplsoft.com</a></p>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><Phone size={18} /></div>
              <p><a href="tel:3075335310">3075335310</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BTPL Soft Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
