import { Link } from 'react-router-dom'
import {
  Globe, RefreshCw, GitBranch, Shield, BarChart2, Settings,
  CheckCircle, Zap, Users, Clock, Award, Headphones,
  Code, Monitor, Database, Layers, TestTube, Cpu, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './Selenium.css'
import seleniumBanner from '../../assets/services/html-css-collage-concept.webp'

const services = [
  {
    url: 'selenium://automated-ui-testing',
    icon: <Monitor size={24} />,
    title: 'Automated UI & Functional Testing',
    desc: 'We build comprehensive Selenium WebDriver test suites that simulate real user interactions — clicks, form fills, dropdowns, file uploads, drag-and-drop actions, and multi-step form submissions. Every critical user journey is automated to run in seconds, replacing hours of repetitive manual regression cycles and ensuring new deployments never break working functionality.',
    tags: ['WebDriver', 'UI Automation', 'Functional Tests', 'Regression'],
  },
  {
    url: 'selenium://cross-browser-testing',
    icon: <Globe size={24} />,
    title: 'Cross-Browser & Cross-Platform Testing',
    desc: 'Modern web applications must work flawlessly across Chrome, Firefox, Safari, Edge, and legacy Internet Explorer — as well as on Windows, macOS, and Linux. We build parameterised Selenium test suites that execute the same test scenarios across every target browser and OS combination, feeding results into a unified dashboard that pinpoints platform-specific rendering or behaviour differences.',
    tags: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Cross-Platform'],
  },
  {
    url: 'selenium://grid-parallel-testing',
    icon: <Cpu size={24} />,
    title: 'Selenium Grid & Parallel Execution',
    desc: 'Running hundreds of test cases sequentially can take hours. We set up Selenium Grid 4 with distributed node architecture — local or on Kubernetes — that executes test suites in parallel across dozens of browsers simultaneously. What took 3 hours now completes in under 10 minutes, enabling rapid feedback loops in your CI/CD pipeline.',
    tags: ['Selenium Grid 4', 'Parallel Execution', 'Docker', 'Kubernetes'],
  },
  {
    url: 'selenium://framework-development',
    icon: <Code size={24} />,
    title: 'Test Framework Architecture',
    desc: 'Poorly architected Selenium tests are brittle, slow, and expensive to maintain. We design scalable test frameworks using the Page Object Model (POM), fluent interface patterns, and factory classes. Whether you prefer Java + TestNG, Python + pytest, or C# + NUnit — we architect the framework around your existing tech stack and team preferences.',
    tags: ['Page Object Model', 'TestNG / JUnit', 'pytest', 'BDD / Cucumber'],
  },
  {
    url: 'selenium://ci-cd-integration',
    icon: <GitBranch size={24} />,
    title: 'CI/CD Integration & Reporting',
    desc: 'Selenium tests are most valuable when they run automatically. We integrate your test suites into Jenkins, GitHub Actions, GitLab CI, or CircleCI pipelines — triggering on every pull request and generating Allure, Extent Reports, or HTML reports with screenshots, video recordings, and stack traces for every failure. Failing tests block merges automatically.',
    tags: ['GitHub Actions', 'Jenkins', 'Allure Reports', 'Auto-Screenshots'],
  },
  {
    url: 'selenium://mobile-web-testing',
    icon: <Layers size={24} />,
    title: 'Mobile Web & Appium Testing',
    desc: 'We extend Selenium test coverage to mobile browsers using Selenium with ChromeDriver on Android and Safari WebDriver on iOS. For native and hybrid mobile app testing, we leverage Appium — which shares Selenium\'s WebDriver protocol — ensuring a unified testing approach across web and mobile channels with shared driver utilities and reporting infrastructure.',
    tags: ['Appium', 'Mobile Web', 'Android', 'iOS WebDriver'],
  },
]

const whySelenium = [
  {
    icon: <Globe size={24} />,
    title: 'True Cross-Browser Coverage',
    desc: 'Selenium\'s WebDriver protocol is the W3C standard, natively implemented by every major browser\'s built-in driver — ChromeDriver, GeckoDriver (Firefox), SafariDriver, and EdgeDriver. Unlike proprietary tools, Selenium guarantees you\'re testing real browser engines with no abstraction layer, so test results accurately reflect user experience across all platforms.',
  },
  {
    icon: <Code size={24} />,
    title: 'Language-Agnostic & Flexible',
    desc: 'Selenium WebDriver has official client bindings for Java, Python, JavaScript, C#, Ruby, and Kotlin. Your QA and development teams can write tests in whatever language they already know — there\'s no need to learn a proprietary scripting language or vendor-specific DSL. Tests live in the same repository as application code and follow the same review process.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Massive Plugin & Framework Ecosystem',
    desc: 'Selenium integrates with virtually every major testing framework and tool in existence — TestNG, JUnit 5, pytest, NUnit, Cucumber, SpecFlow, Allure Reports, Extent Reports, Jenkins, GitHub Actions, Docker, Selenium Grid, and cloud execution platforms like Sauce Labs and BrowserStack. You\'re never locked into a single vendor.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Proven Enterprise Reliability',
    desc: 'Selenium is used by Google, Netflix, Amazon, and thousands of enterprise organisations to protect their web applications. Its open-source nature means bugs are fixed rapidly by a global community, security issues are transparently disclosed, and the codebase benefits from contributions by some of the world\'s best software engineers.',
  },
  {
    icon: <Database size={24} />,
    title: 'Seamless Cloud Execution',
    desc: 'With cloud platforms like BrowserStack, Sauce Labs, LambdaTest, and AWS Device Farm, Selenium tests can run against real devices and browser versions without maintaining a local Selenium Grid. We configure cloud execution so your tests can run on 3,000+ real browser/OS combinations, providing coverage that\'s impossible to replicate on-premises.',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Long-Term Maintainability',
    desc: 'With proper Page Object Model architecture, Selenium test suites are straightforward to maintain as applications evolve. Locator changes in one file propagate automatically to all tests using that page. Combined with factory patterns, data providers, and configuration-driven test execution, our Selenium frameworks are built to last years, not months.',
  },
]

const frameworks = [
  { icon: <Code size={20} />, name: 'Java + TestNG', desc: 'Enterprise-grade test runner with parallel execution' },
  { icon: <Code size={20} />, name: 'Python + pytest', desc: 'Concise, fixture-based test framework' },
  { icon: <Code size={20} />, name: 'C# + NUnit', desc: 'Ideal for .NET-stack engineering teams' },
  { icon: <Code size={20} />, name: 'Cucumber + BDD', desc: 'Gherkin feature files for stakeholder alignment' },
  { icon: <Monitor size={20} />, name: 'Selenium Grid 4', desc: 'Parallel cross-browser distributed execution' },
  { icon: <Globe size={20} />, name: 'BrowserStack', desc: 'Real browser cloud with 3,000+ combinations' },
  { icon: <GitBranch size={20} />, name: 'Allure Reports', desc: 'Beautiful interactive test result dashboards' },
  { icon: <Cpu size={20} />, name: 'Docker Selenium', desc: 'Containerised browser nodes for CI pipelines' },
]

const expItems = [
  'E-commerce checkout flow automation',
  'User authentication & session testing',
  'Dynamic content & AJAX interaction tests',
  'File upload and download automation',
  'iFrame & popup window handling',
  'Multi-tab browser workflow testing',
  'Shadow DOM element interaction',
  'Visual regression with screenshot comparison',
  'Database state verification in tests',
  'Cross-browser CSS rendering validation',
  'Accessibility (a11y) automation testing',
  'Mobile browser responsive testing',
]

const expTags = [
  'Selenium 4.x', 'WebDriver Protocol (W3C)', 'ChromeDriver',
  'GeckoDriver', 'Page Object Model', 'TestNG / JUnit 5',
  'pytest + Selenium', 'Cucumber / SpecFlow', 'Allure Reports',
  'Extent Reports', 'Selenium Grid 4', 'Docker',
  'BrowserStack', 'GitHub Actions CI', 'Jenkins Pipeline',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: '400+ Automation Projects',
    desc: 'Selenium automation suites built for startups, enterprises, and everything in between — across e-commerce, fintech, healthcare, and SaaS.',
  },
  {
    icon: <Users size={24} />,
    title: 'Certified ISTQB Engineers',
    desc: 'Our QA engineers hold ISTQB Advanced Test Automation certifications with 8+ years of Selenium WebDriver experience.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Fast Framework Setup',
    desc: 'Full Page Object Model framework with CI integration, reporting, and your first 50 automated test cases delivered within one sprint.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Continuous Maintenance',
    desc: 'As your app evolves, we update selectors, expand coverage, and ensure your test suite stays green through every release cycle.',
  },
]

export default function Selenium() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${seleniumBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Test Automation with <span>Selenium</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft builds enterprise-grade Selenium WebDriver automation frameworks that eliminate manual regression
            testing, accelerate your release cycle, and guarantee consistent cross-browser quality across every deployment.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Test Automation <Globe size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="se-stats">
        <div className="se-stats-grid sp-container">
          {[
            { num: '400+', label: 'Automation Projects' },
            { num: '95%', label: 'Manual Testing Reduced' },
            { num: '8x', label: 'Faster Regression Cycles' },
            { num: '3000+', label: 'Browser Combinations' },
          ].map(s => (
            <div className="se-stat" key={s.label}>
              <span className="se-stat-num">{s.num}</span>
              <span className="se-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">Selenium Automation Services</h2>
            <p className="sp-sub">
              From single-page app testing to enterprise-wide cross-browser automation — we cover the full
              spectrum of Selenium WebDriver capabilities.
            </p>
          </div>
          <div className="se-svc-grid">
            {services.map(svc => (
              <div className="se-svc-card" key={svc.title}>
                <div className="se-svc-browser-bar">
                  <div className="se-svc-dots">
                    <span /><span /><span />
                  </div>
                  <div className="se-svc-browser-url">{svc.url}</div>
                </div>
                <div className="se-svc-body">
                  <div className="se-svc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="se-svc-tags">
                    {svc.tags.map(t => <span className="se-svc-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SELENIUM */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Selenium</p>
            <h2 className="sp-heading">Why We Choose Selenium for Web Automation</h2>
            <p className="sp-sub">
              Selenium has been the gold standard for web automation since 2004. Here's why it remains our
              primary choice for browser-based test automation in 2026.
            </p>
          </div>
          <div className="se-why-grid">
            {whySelenium.map(w => (
              <div className="se-why-card" key={w.title}>
                <div className="se-why-icon">{w.icon}</div>
                <div className="se-why-body">
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="se-frameworks">
        <div className="sp-container">
          <div className="sp-section-head center" style={{ marginBottom: 0 }}>
            <p className="sp-label">Technology Stack</p>
            <h2 className="sp-heading" style={{ color: '#fff' }}>Frameworks & Tools We Use</h2>
            <p className="sp-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
              The complete technology ecosystem we use to build, run, and report on Selenium test automation.
            </p>
          </div>
          <div className="se-fw-grid">
            {frameworks.map(f => (
              <div className="se-fw-card" key={f.name}>
                <div className="se-fw-icon">{f.icon}</div>
                <div className="se-fw-name">{f.name}</div>
                <div className="se-fw-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Comprehensive Selenium Automation Experience</h2>
            <p className="sp-sub">
              A decade of automating complex web applications — from simple form submissions to sophisticated
              multi-tab, multi-window, and dynamic SPA interactions.
            </p>
          </div>
          <div className="se-exp-wrap">
            <ul className="se-exp-list">
              {expItems.map(item => (
                <li className="se-exp-item" key={item}>
                  <CheckCircle size={16} />{item}
                </li>
              ))}
            </ul>
            <div className="se-exp-tags">
              {expTags.map(t => (
                <span className="se-exp-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why Partner with BTPL for Selenium Automation?</h2>
            <p className="sp-sub">
              We don't just automate tests — we build quality systems that make your engineering team move faster
              with full confidence in every release.
            </p>
          </div>
          <div className="se-btpl-grid">
            {btplCards.map(c => (
              <div className="se-btpl-card" key={c.title}>
                <div className="se-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #1b5e20, #0d1b2a)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Automate Your Web Testing?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Let BTPL Soft build a Selenium automation framework that cuts your regression cycle from days to minutes —
            and gives your team the confidence to ship faster, every sprint.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
