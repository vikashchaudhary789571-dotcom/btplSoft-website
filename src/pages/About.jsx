import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import Target from 'lucide-react/dist/esm/icons/target'
import Eye from 'lucide-react/dist/esm/icons/eye'
import Users from 'lucide-react/dist/esm/icons/users'
import Shield from 'lucide-react/dist/esm/icons/shield'
import Clock from 'lucide-react/dist/esm/icons/clock'
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb'
import Headphones from 'lucide-react/dist/esm/icons/headphones'
import Award from 'lucide-react/dist/esm/icons/award'
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'
import Globe from 'lucide-react/dist/esm/icons/globe'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import Code from 'lucide-react/dist/esm/icons/code'
import Search from 'lucide-react/dist/esm/icons/search'
import Share2 from 'lucide-react/dist/esm/icons/share-2'
import Monitor from 'lucide-react/dist/esm/icons/monitor'
import Mail from 'lucide-react/dist/esm/icons/mail'
import Phone from 'lucide-react/dist/esm/icons/phone'
import Brain from 'lucide-react/dist/esm/icons/brain'
import Cloud from 'lucide-react/dist/esm/icons/cloud'
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag'
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check'
import PenTool from 'lucide-react/dist/esm/icons/pen-tool'
import MapPin from 'lucide-react/dist/esm/icons/map-pin'
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right'
import { Link } from 'react-router-dom'
import logoImg from '../assets/images/btpl-logo.webp'
import aboutBannerImg from '../assets/images/about-banner.webp'
import './About.css'

export default function About({ onOpenConsult }) {
  return (
    <div className="about-page">

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="ab-hero"
        style={{
          backgroundImage: `url(${aboutBannerImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
          {/* preload hint so browser fetches banner at highest priority */}
        <img src={aboutBannerImg} alt="" aria-hidden="true" fetchPriority="high" width="1920" height="600" style={{ display: 'none' }} />
        {/* dark overlay */}
        <div className="ab-hero-overlay" />
        <div className="ab-container">
          <h1 className="ab-hero-title">
            About <span>BTPL Soft</span>
          </h1>
          <div className="ab-hero-bar"></div>
          <p className="ab-hero-desc">
            Creating technology solutions that enable businesses to achieve success.
            We are a full-service IT company delivering web, mobile, software, digital marketing
            and SEO services to clients worldwide.
          </p>
          {/* logo shown in hero */}
          {/* <Link to="/">
            <img src={logoImg} alt="BTPL Soft" style={{ height: '52px', marginTop: '36px', opacity: 0.9 }} />
          </Link> */}
        </div>
      </section>

      {/* ══════════════ INTRO + STATS ══════════════ */}
      <section className="ab-intro">
        <div className="ab-container">
          <div className="ab-intro-single">
            <p className="ab-intro-label">Our Story</p>
            <h2 className="ab-intro-heading ab-intro-heading--dark">
              Your Digital Growth Partner — <span className="highlight-blue">BTPL Soft</span>
            </h2>

            {/* Full-width paragraphs */}
            <p className="ab-intro-text">
              BTPL Soft is a California, USA-based IT solutions company delivering cutting-edge
              technology that empowers businesses to thrive in the digital age. From
              startups finding their footing to enterprises optimising operations, we
              bring ideas to life with precision and passion. Our proficiency in
              understanding real business challenges and professional competence allows
              us to create exceptional digital experiences for our clients.
            </p>
            <p className="ab-intro-text">
              Our development services are led by a dedicated and passionate team that
              provides best industry practices combined with technology expertise and
              business domain knowledge — to drive digital transformation on time and on budget.
            </p>

            {/* 2-column accent cards */}
            <div className="ab-intro-accent-grid">
              <div className="ab-intro-accent-card">
                <p>
                  We have successfully delivered 500+ projects ranging from enterprise-level
                  platforms to high-growth startups — who have grown alongside the success
                  of our partnership.
                </p>
              </div>
              <div className="ab-intro-accent-card">
                <p>
                  At present we are a robust team with diverse skills, engaging with customers
                  at a deeper level to provide cutting-edge solutions and innovations backed
                  by years of technology experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="ab-stats">
        <div className="ab-container">
          <div className="ab-stats-grid">
            <div className="ab-stat-item">
              <div className="ab-stat-num">15+</div>
              <div className="ab-stat-title">Years of Experience</div>
              <div className="ab-stat-sub">In IT solutions & digital services</div>
            </div>
            <div className="ab-stat-item">
              <div className="ab-stat-num">1500+</div>
              <div className="ab-stat-title">Projects Completed</div>
              <div className="ab-stat-sub">Web, mobile & software</div>
            </div>
            <div className="ab-stat-item">
              <div className="ab-stat-num">500+</div>
              <div className="ab-stat-title">Happy Clients</div>
              <div className="ab-stat-sub">Worldwide & internationally</div>
            </div>
            <div className="ab-stat-item">
              <div className="ab-stat-num">99%</div>
              <div className="ab-stat-title">Client Retention</div>
              <div className="ab-stat-sub">Based on post-delivery feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ OUR SERVICES ══════════════ */}
      <section className="ab-section bg-light">
        <div className="ab-container">
          <div className="ab-section-head">
            <div className="ab-sec-label">What We Do</div>
            <h2 className="ab-sec-head">Our Services</h2>
            <p className="ab-sec-sub">
              End-to-end digital services tailored to accelerate your business growth
              and ensure your online success.
            </p>
          </div>
          <div className="ab-services-grid">
            <div className="ab-service-tile"><div className="ab-service-icon"><Code size={28} /></div><span className="ab-service-name">Custom Software Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><Brain size={28} /></div><span className="ab-service-name">AI Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><Monitor size={28} /></div><span className="ab-service-name">Web Designer Development</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><Users size={28} /></div><span className="ab-service-name">Dedicated Resources</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><Target size={28} /></div><span className="ab-service-name">Marketing Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><Cloud size={28} /></div><span className="ab-service-name">SaaS Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><ShoppingBag size={28} /></div><span className="ab-service-name">Shopify Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><ShoppingCart size={28} /></div><span className="ab-service-name">BigCommerce Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><Smartphone size={28} /></div><span className="ab-service-name">Mobile App Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><ShieldCheck size={28} /></div><span className="ab-service-name">Software Testing Solution</span></div>
            <div className="ab-service-tile"><div className="ab-service-icon"><PenTool size={28} /></div><span className="ab-service-name">UI/UX Solution</span></div>
          </div>
        </div>
      </section>

      {/* ══════════════ ENGAGEMENT MODELS ══════════════ */}
      <section className="ab-section bg-white">
        <div className="ab-container">
          <div className="ab-section-head">
            <div className="ab-sec-label">How We Engage</div>
            <h2 className="ab-sec-head">Our Business Engagement Models</h2>
            <p className="ab-sec-sub">
              Flexible engagement options to match your project scope, team size, and budget —
              so you get the best value without compromise.
            </p>
          </div>
          <div className="ab-engage-grid">
            <div className="ab-engage-card">
              <div className="ab-engage-num">Model 01</div>
              <h3>Fixed Cost</h3>
              <p>
                Clearly defined scope, timeline, and budget. Ideal for projects with
                well-defined requirements. Our team provides a fixed-cost proposal and
                delivers in milestones with full transparency at every stage.
              </p>
            </div>
            <div className="ab-engage-card">
              <div className="ab-engage-num">Model 02</div>
              <h3>Dedicated Team</h3>
              <p>
                Get a full-time dedicated team that works exclusively on your project.
                Scale up or down as needed. Best for long-term projects requiring ongoing
                development, design, and strategic input.
              </p>
            </div>
            <div className="ab-engage-card">
              <div className="ab-engage-num">Model 03</div>
              <h3>Monthly Retainer</h3>
              <p>
                Retain a block of hours every month for continuous maintenance, updates,
                SEO, marketing, or new feature development. A cost-effective way to keep
                your digital presence growing consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHY BTPL SOFT ══════════════ */}
      <section className="ab-section bg-light">
        <div className="ab-container">
          <div className="ab-why-grid">
            {/* LIST */}
            <div>
              <div className="ab-sec-label">Our Strengths</div>
              <h2 className="ab-sec-head">Why BTPL Soft</h2>
              <p className="ab-sec-sub" style={{ marginBottom: '36px' }}>
                We leverage our experience and talented team to deliver top-notch
                IT services. Over the years we have built long-term relationships
                built on trust, results, and reliability.
              </p>
              <div className="ab-why-list">
                <div className="ab-why-item">
                  <div className="ab-why-icon"><CheckCircle size={20} color="#4CAF50" /></div>
                  <div className="ab-why-text">
                    <h4>One-Stop Digital Solution</h4>
                    <p>From web design and app development to SEO, marketing and software — everything under one roof, delivered by one accountable team.</p>
                  </div>
                </div>
                <div className="ab-why-item">
                  <div className="ab-why-icon"><Users size={20} color="#4CAF50" /></div>
                  <div className="ab-why-text">
                    <h4>Client-Centric Approach</h4>
                    <p>We listen deeply, align with your goals, and tailor every solution to your specific business needs — not a generic template.</p>
                  </div>
                </div>
                <div className="ab-why-item">
                  <div className="ab-why-icon"><Award size={20} color="#4CAF50" /></div>
                  <div className="ab-why-text">
                    <h4>Experienced & Certified Team</h4>
                    <p>Our developers, designers, and strategists bring deep expertise across modern technologies and industry verticals.</p>
                  </div>
                </div>
                <div className="ab-why-item">
                  <div className="ab-why-icon"><Clock size={20} color="#4CAF50" /></div>
                  <div className="ab-why-text">
                    <h4>On-Time, On-Budget Delivery</h4>
                    <p>We follow agile methodology and transparent processes to consistently deliver results within agreed timelines and budgets.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* PANEL */}
            <div className="ab-why-panel">
              <h3>Building a <span>Smarter Future</span><br />with IT Solutions</h3>
              <p>
                We believe in delivering more than just technology — we deliver value,
                innovation, and long-term partnerships designed to help your business
                grow in the digital age.
              </p>
              <div className="ab-panel-stats">
                <div className="ab-panel-stat">
                  <span className="ab-panel-stat-num">15+</span>
                  <span className="ab-panel-stat-lbl">Years in Business</span>
                </div>
                <div className="ab-panel-stat">
                  <span className="ab-panel-stat-num">1500+</span>
                  <span className="ab-panel-stat-lbl">Projects Delivered</span>
                </div>
                <div className="ab-panel-stat">
                  <span className="ab-panel-stat-num">500+</span>
                  <span className="ab-panel-stat-lbl">Happy Clients</span>
                </div>
                <div className="ab-panel-stat">
                  <span className="ab-panel-stat-num">11</span>
                  <span className="ab-panel-stat-lbl">Core Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ OUR VALUES ══════════════ */}
      <section className="ab-section bg-white">
        <div className="ab-container">
          <div className="ab-section-head center">
            <div className="ab-sec-label">What Drives Us</div>
            <h2 className="ab-sec-head">Our Values</h2>
          </div>
          <div className="ab-values-grid">
            <div className="ab-value-card">
              <div className="ab-value-icon"><Shield size={22} color="#4CAF50" /></div>
              <h4>Quality Driven</h4>
              <p>Best-in-class infrastructure and technical expertise ensure superior quality delivered on time, aligned with your expectations.</p>
            </div>
            <div className="ab-value-card">
              <div className="ab-value-icon"><TrendingUp size={22} color="#4CAF50" /></div>
              <h4>Proven Processes</h4>
              <p>Our internal frameworks and defined workflows have led to a consistent track record of excellence across every project we touch.</p>
            </div>
            <div className="ab-value-card">
              <div className="ab-value-icon"><Lightbulb size={22} color="#4CAF50" /></div>
              <h4>Innovation</h4>
              <p>We constantly thrive on new ideas and better implementation strategies to help clients innovate and transform their businesses.</p>
            </div>
            <div className="ab-value-card">
              <div className="ab-value-icon"><Globe size={22} color="#4CAF50" /></div>
              <h4>Broad Industry Expertise</h4>
              <p>Our solutions span diverse industry domains, giving clients a competitive edge with accumulated knowledge and cross-domain experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ HOW WE WORK ══════════════ */}
      <section className="ab-section bg-light">
        <div className="ab-container">
          <div className="ab-section-head center">
            <div className="ab-sec-label">Our Process</div>
            <h2 className="ab-sec-head">How We Work</h2>
          </div>
          <div className="ab-process-grid">
            <div className="ab-process-card">
              <div className="ab-process-num">01</div>
              <h4>Planning & Strategy</h4>
              <p>Every successful project begins with a solid foundation. We listen to your goals, analyse requirements, and build a clear roadmap before writing a single line of code.</p>
            </div>
            <div className="ab-process-card">
              <div className="ab-process-num">02</div>
              <h4>Development & Execution</h4>
              <p>Our agile teams work in focused sprints — designing, developing, and testing in parallel. You get regular demos and updates so you're fully in the loop at every stage.</p>
            </div>
            <div className="ab-process-card">
              <div className="ab-process-num">03</div>
              <h4>Launch & Optimization</h4>
              <p>After thorough QA, we deploy your solution and actively monitor performance. We continue to improve, optimise, and scale to keep you ahead of the competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT STRIP ══════════════ */}
      <section className="ab-contact-strip">
        <div className="ab-container">
          <div className="ab-contact-grid">
            <div className="ab-contact-item">
              <div className="ab-contact-icon"><MapPin size={20} /></div>
              <div className="ab-contact-info">
                <h5>Our Office</h5>
                <p>15442 Ventura Blvd. Ste 201-1736<br />Sherman Oaks, CA 91403</p>
              </div>
            </div>
            <div className="ab-contact-item">
              <div className="ab-contact-icon"><Mail size={20} /></div>
              <div className="ab-contact-info">
                <h5>Email Us</h5>
                <p>info@btplsoft.com</p>
              </div>
            </div>
            <div className="ab-contact-item">
              <div className="ab-contact-icon"><Phone size={20} /></div>
              <div className="ab-contact-info">
                <h5>Call Us</h5>
                <p>3075335310</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="ab-cta">
        <div className="ab-container">
          <h2>Ready to Build Your Custom Solution?</h2>
          <p>
            Send us your requirements at info@btplsoft.com or talk to our experts today — free consultation.
          </p>
          <button onClick={onOpenConsult} className="ab-cta-btn">
            Get Free Consultation <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  )
}
