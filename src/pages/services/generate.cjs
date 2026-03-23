const fs = require('fs');
const path = require('path');

const template = (config) => `import { Link } from 'react-router-dom'
import {
  Code, ArrowRight, CheckCircle, Layers, ShieldCheck,
  Zap, Database, Globe, ChevronRight, Cloud, Brain, Monitor, ShoppingCart, Users, Layout, Settings, Smartphone, PenTool, Search, TrendingUp, Share2, Instagram, Facebook, Target, Camera
} from 'lucide-react'
import './ServicePage.css'
import TechStack from '../../components/TechStack'
import GlobalPresence from '../../components/GlobalPresence'

const services = ${JSON.stringify(config.services, null, 2).replace(/"icon": "(.*?)"/g, '"icon": <$1 size={28} />')}

const whyUs = ${JSON.stringify(config.whyUs, null, 2)}

const process = ${JSON.stringify(config.process, null, 2)}

export default function ${config.componentName}() {
  return (
    <div className="sp-page">
      <section className="sp-hero">
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <div className="sp-breadcrumb">
            <Link to="/">Home</Link><ChevronRight size={14} /><span>Services</span><ChevronRight size={14} /><span className="active">${config.breadcrumb}</span>
          </div>
          <div className="sp-hero-icon"><${config.heroIcon} size={36} /></div>
          <h1 className="sp-hero-title">${config.heroTitle1} <span>${config.heroTitle2}</span></h1>
          <p className="sp-hero-desc">
            ${config.heroDesc}
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></Link>
            <Link to="/about" className="sp-btn-secondary">Know More</Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / TECHNICAL BRIEF SECTION */}
      <section className="sp-section sp-overview">
        <div className="sp-container">
          <div className="sp-overview-grid">
            <div className="sp-overview-content">
              <p className="sp-label">Technical Overview</p>
              <h2 className="sp-heading">${config.overviewTitle}</h2>
              <p className="sp-subtext-large">${config.overviewDesc}</p>
              
              <div className="sp-overview-tech-points">
                ${config.overviewPoints.map(p => `
                <div className="sp-tech-point">
                  <CheckCircle size={24} color="#4CAF50" className="mt-1" style={{ flexShrink: 0 }} />
                  <div>
                    <h4>${p.title}</h4>
                    <p>${p.desc}</p>
                  </div>
                </div>
                `).join('')}
              </div>
            </div>
            <div className="sp-overview-image">
               <div className="sp-tech-box">
                  <${config.heroIcon} size={48} color="#2196F3" style={{ marginBottom: '24px' }} />
                  <div className="sp-tech-line w-full primary"></div>
                  <div className="sp-tech-line w-3-4"></div>
                  <div className="sp-tech-line w-1-2 green"></div>
                  <div className="sp-tech-line w-full" style={{ marginTop: '32px' }}></div>
                  <div className="sp-tech-line w-3-4 primary"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Offer</p>
            <h2 className="sp-heading">${config.sectionTitle}</h2>
            <p className="sp-sub">${config.sectionSub}</p>
          </div>
          <div className="sp-services-grid">
            {services.map((s, i) => (<div className="sp-service-card" key={i}><div className="sp-service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-bg-light">
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
`;

const pagesConfig = [
  {
    componentName: 'AISolution',
    fileName: 'AISolution.jsx',
    breadcrumb: 'AI Solution',
    heroIcon: 'Brain',
    heroTitle1: 'AI & Machine Learning',
    heroTitle2: 'Solutions',
    heroDesc: 'Unlock the power of Artificial Intelligence. We build custom machine learning models, predictive analytics, and conversational AI tools to transform your business operations and drive intelligent growth.',
    overviewTitle: 'Intelligent Engineering & ML Models',
    overviewDesc: 'We architect AI solutions from the ground up, focusing on data purity, robust training pipelines, and optimized deployment via Machine Learning Operations (MLOps).',
    overviewPoints: [
      { title: 'Neural Networks & Deep Learning', desc: 'Deploying advanced PyTorch and TensorFlow models.' },
      { title: 'Data Pipeline Engineering', desc: 'Secure, scalable ETL processes preventing data bottlenecks.' },
    ],
    sectionTitle: 'Our AI Capabilities',
    sectionSub: 'Harness cutting-edge AI technologies to automate workflows, analyze vast datasets, and create personalized customer experiences.',
    services: [
      { icon: 'Brain', title: 'Machine Learning Models', desc: 'Custom ML algorithms tailored to your data for accurate predictions and decision-making.' },
      { icon: 'Zap', title: 'Robotic Process Automation', desc: 'Automate repetitive tasks, reduce human error, and accelerate business processes.' },
      { icon: 'Monitor', title: 'Computer Vision', desc: 'Implement advanced image and video recognition systems for quality control or security.' },
      { icon: 'Code', title: 'Conversational AI / Chatbots', desc: 'Intelligent NLP chatbots that handle customer support 24/7 with human-like accuracy.' },
      { icon: 'Database', title: 'Predictive Analytics', desc: 'Analyze historical data to forecast trends and make strategic, data-driven decisions.' },
      { icon: 'Layers', title: 'AI Infrastructure Setup', desc: 'Robust cloud architectures designed specifically to train and deploy complex AI models.' }
    ],
    process: [
      { num: '01', title: 'Data Assessment', desc: 'We analyze your data quality and volume to determine the best ML approach.' },
      { num: '02', title: 'Model Training', desc: 'Iterative model training and hyperparameter tuning for maximum accuracy.' },
      { num: '03', title: 'Integration', desc: 'Deploying the trained models seamlessly into your existing software stack.' },
      { num: '04', title: 'Continuous Learning', desc: 'Setting up pipelines so your AI gets smarter as new data comes in.' }
    ],
    whyUs: [
      { title: 'Data Security Guarantee', desc: 'We employ federated learning and data anonymization. Your data never leaves your environment.' },
      { title: 'PhD-level AI Scientists', desc: 'Our team comprises top-tier data engineers and AI specialists with proven industry experience.' },
      { title: 'Measurable ROI', desc: 'We align AI metrics directly with your business KPIs, ensuring tangible financial benefits.' },
      { title: 'Scalable MLOps', desc: 'We don’t just deploy; we build scalable Machine Learning Operations pipelines.' }
    ]
  },
  {
    componentName: 'DedicatedResources',
    fileName: 'DedicatedResources.jsx',
    breadcrumb: 'Dedicated Resources',
    heroIcon: 'Users',
    heroTitle1: 'Hire Dedicated',
    heroTitle2: 'Developers',
    heroDesc: 'Scale your engineering team on demand. Hire our pre-vetted, highly skilled software engineers, designers, and project managers to accelerate your product roadmap without the overhead of traditional hiring.',
    overviewTitle: 'Seamless Team Integration',
    overviewDesc: 'We provide more than just developers. We provide an integrated engineering arm that adopts your timezone, your agile rituals, and your company culture.',
    overviewPoints: [
      { title: 'Pre-Vetted Technical Experts', desc: 'Top 1% developers skilled in React, Node, Python, and cloud infrastructure.' },
      { title: 'Agile & Communication Synchronized', desc: 'Seamless integration into your Jira boards, Slack channels, and daily standups.' },
    ],
    sectionTitle: 'Flexible Hiring Models',
    sectionSub: 'Choose the engagement model that fits your project scope, budget, and timeline.',
    services: [
      { icon: 'Code', title: 'Full-Stack Developers', desc: 'Hire experts proficient in React, Node.js, Python, and Java to build end-to-end solutions.' },
      { icon: 'Layout', title: 'UI/UX Designers', desc: 'Bring creative visionaries on board to craft intuitive and visually stunning user interfaces.' },
      { icon: 'ShieldCheck', title: 'QA Engineers', desc: 'Add dedicated testing professionals to ensure your product is bug-free and highly performant.' },
      { icon: 'Cloud', title: 'DevOps & Cloud Architects', desc: 'Experts to manage your AWS/Azure infrastructure, CI/CD pipelines, and scale your servers.' },
      { icon: 'Globe', title: 'Project Managers', desc: 'Agile leaders who align team output with your business objectives and delivery timelines.' },
      { icon: 'Brain', title: 'Data Scientists/AI Experts', desc: 'Specialists ready to jump into your AI initiatives and complex data engineering tasks.' }
    ],
    process: [
      { num: '01', title: 'Requirement Gathering', desc: 'You tell us the skills, experience level, and team size you need.' },
      { num: '02', title: 'Profile Selection', desc: 'We provide hand-picked resumes of our top internal candidates for you to review.' },
      { num: '03', title: 'Client Interviews', desc: 'You interview the candidates directly to ensure perfect technical and cultural fit.' },
      { num: '04', title: 'Onboarding & Kickoff', desc: 'Seamless integration with your tools (Jira, Slack, Git) to start working instantly.' }
    ],
    whyUs: [
      { title: 'Zero Recruitment Hassle', desc: 'Skip the months of sourcing, interviewing, and onboarding. Start building immediately.' },
      { title: 'Top 1% Talent Pool', desc: 'Our developers undergo rigorous technical and behavioral testing before joining BTPL Soft.' },
      { title: 'Direct Communication', desc: 'You have direct access and complete control over your dedicated offshore or nearshore team.' },
      { title: 'Flexible Scaling', desc: 'Scale your team up or down with just a one-month notice, adapting to your project needs.' }
    ]
  },
  {
    componentName: 'SaaSSolution',
    fileName: 'SaaSSolution.jsx',
    breadcrumb: 'SaaS Solution',
    heroIcon: 'Cloud',
    heroTitle1: 'SaaS Product',
    heroTitle2: 'Development',
    heroDesc: 'Transform your vision into a scalable Software-as-a-Service platform. From multitenant architecture and subscription billing to secure cloud deployment, we cover the entire SaaS lifecycle.',
    overviewTitle: 'Multi-Tenant Cloud Architectures',
    overviewDesc: 'We engineer SaaS platforms with strong data isolation, scalable microservices, and high-availability clustered databases capable of handling thousands of concurrent enterprise tenants.',
    overviewPoints: [
      { title: 'Serverless & Microservices', desc: 'Utilizing Docker and Kubernetes to ensure granular auto-scaling.' },
      { title: 'Subscription & Billing APIs', desc: 'Robust integration with Stripe, Paddle, and Braintree for recurring revenue.' },
    ],
    sectionTitle: 'Comprehensive SaaS Services',
    sectionSub: 'We build robust, multi-tenant cloud products that delight users and generate recurring revenue.',
    services: [
      { icon: 'Cloud', title: 'Multi-Tenant Architecture', desc: 'Design scalable, secure, and isolated database architectures for shared or dedicated tenancy.' },
      { icon: 'Monitor', title: 'MVP Development', desc: 'Rapidly launch a Minimum Viable Product to test the market, gather feedback, and secure funding.' },
      { icon: 'Zap', title: 'Subscription & Billing Integration', desc: 'Implement robust Stripe, Paddle, or PayPal integration for seamless recurring payments.' },
      { icon: 'Code', title: 'API Development', desc: 'Build comprehensive, secure REST/GraphQL APIs for your platform to allow third-party integrations.' },
      { icon: 'Layout', title: 'SaaS Dashboard Design', desc: 'Create powerful, intuitive admin panels and user dashboards with real-time analytics.' },
      { icon: 'ShieldCheck', title: 'Security & Compliance', desc: 'Ensure your SaaS meets GDPR, HIPAA, or SOC2 standards with end-to-end encryption.' }
    ],
    process: [
      { num: '01', title: 'Discovery & Blueprinting', desc: 'Defining user personas, feature sets, and the tech stack for maximum scalability.' },
      { num: '02', title: 'Prototyping', desc: 'Clickable high-fidelity wireframes mapping out the entire user journey.' },
      { num: '03', title: 'Agile Build', desc: 'Iterative development focusing on core features and multi-tenant security layers.' },
      { num: '04', title: 'Launch & Iterate', desc: 'Cloud deployment, performance tuning, and continuous feature updates based on user data.' }
    ],
    whyUs: [
      { title: 'Cloud-Native Experts', desc: 'Deep expertise in AWS, Azure, and Google Cloud, utilizing severless and microservices.' },
      { title: 'Cost-Optimized Architecture', desc: 'We design SaaS infrastructure that scales efficiently, keeping your cloud costs under control.' },
      { title: 'High Availability (99.9%)', desc: 'Fault-tolerant systems engineered to prevent downtime and data loss.' },
      { title: 'End-to-End Partnership', desc: 'We don`t just code; we advise on product strategy, pricing models, and tech scaling.' }
    ]
  },
  {
    componentName: 'ShopifySolution',
    fileName: 'ShopifySolution.jsx',
    breadcrumb: 'Shopify Solution',
    heroIcon: 'ShoppingCart',
    heroTitle1: 'Shopify',
    heroTitle2: 'Development',
    heroDesc: 'Elevate your online retail business with world-class Shopify solutions. From bespoke themes and custom app development to complex migrations, we engineer stores that maximize conversions.',
    overviewTitle: 'Liquid & Headless Commerce',
    overviewDesc: 'We move beyond standard templates, building intricate Liquid themes and blazing-fast Headless Shopify storefronts using React and Next.js connected via the Storefront API.',
    overviewPoints: [
      { title: 'Headless PWA Storefronts', desc: 'Sub-second load times using cutting-edge edge-network caching.' },
      { title: 'Custom Shopify App Nodes', desc: 'Node.js and Ruby backends connecting Shopify to specialized ERPs.' },
    ],
    sectionTitle: 'Expert Shopify Services',
    sectionSub: 'Empowering eCommerce brands with blazing-fast, customized, and high-converting Shopify storefronts.',
    services: [
      { icon: 'Layout', title: 'Custom Theme Development', desc: 'Pixel-perfect, responsive Shopify themes built from scratch to match your unique brand identity.' },
      { icon: 'Code', title: 'Custom App Creation', desc: 'Build private Shopify apps to add unique functionalities and automate your backend operations.' },
      { icon: 'Zap', title: 'Store Optimization', desc: 'Speed audits and core web vitals optimization to decrease load times and boost conversions.' },
      { icon: 'Database', title: 'Store Migration', desc: 'Seamlessly migrate your data, products, and SEO rankings from Magento, WooCommerce, or BigCommerce.' },
      { icon: 'Globe', title: 'Headless Commerce', desc: 'Decouple your frontend using React/Next.js and Shopify Storefront API for ultimate speed and flexibility.' },
      { icon: 'Settings', title: 'Third-Party Integrations', desc: 'Connect ERPs, CRMs, inventory systems, and marketing automation tools via robust APIs.' }
    ],
    process: [
      { num: '01', title: 'Business Audit', desc: 'Analyzing your catalog size, current platform, and conversion goals.' },
      { num: '02', title: 'UI/UX Design', desc: 'Creating conversion-optimized wireframes specifically for the eCommerce buyer journey.' },
      { num: '03', title: 'Liquid/React Dev', desc: 'Coding the theme adhering to Shopify 2.0 architecture and best practices.' },
      { num: '04', title: 'QA & Launch', desc: 'Rigorous cross-browser testing, load testing, and checkout validation before going live.' }
    ],
    whyUs: [
      { title: 'Shopify Certified Partners', desc: 'We are recognized experts deeply embedded in the Shopify ecosystem.' },
      { title: 'Conversion-Focused Design', desc: 'Our designs aren`t just pretty; they are engineered based on consumer psychology to sell.' },
      { title: 'SEO-Friendly Builds', desc: 'Technical SEO is baked into the code, ensuring you rank higher on search engines.' },
      { title: 'Post-Launch Support', desc: 'Continuous optimization, A/B testing, and strategy consultation for constant growth.' }
    ]
  },
  {
    componentName: 'EcommerceB2B',
    fileName: 'EcommerceB2B.jsx',
    breadcrumb: 'B2B Commerce Solution',
    heroIcon: 'Globe',
    heroTitle1: 'B2B & Enterprise',
    heroTitle2: 'E-Commerce',
    heroDesc: 'Transform your wholesale and B2B operations with powerful digital commerce platforms. We build complex portals featuring custom pricing, vast catalogs, and seamless ERP/CRM integrations.',
    overviewTitle: 'Complex Data & Enterprise Logic',
    overviewDesc: 'B2B requires extreme architectural rigor. We synchronize massive disjointed datasets across legacy ERPs, PIMs, and customized checkout workflows using heavy API middleware.',
    overviewPoints: [
      { title: 'Dynamic Pricing Engines', desc: 'Custom rules for tiered pricing, account-based quoting, and real-time inventory.' },
      { title: 'Bi-Directional ERP Sync', desc: 'Reliable fault-tolerant cron jobs and webhooks mapped directly to SAP or Oracle.' },
    ],
    sectionTitle: 'B2B Commerce Services',
    sectionSub: 'Next-generation digital buying experiences designed for the complexities of B2B transactions.',
    services: [
      { icon: 'Layers', title: 'B2B Platform Development', desc: 'Scalable platforms using Magento, BigCommerce B2B, or custom microservices architecture.' },
      { icon: 'Database', title: 'Complex Catalog Management', desc: 'Handle millions of SKUs, deep attribute structures, and dynamic inventory synchronization.' },
      { icon: 'Users', title: 'Custom Pricing & Quotes', desc: 'Tiered pricing, customer-specific discounts, and digital Request For Quote (RFQ) workflows.' },
      { icon: 'CheckCircle', title: 'ERP/CRM Integrations', desc: 'Real-time two-way syncing with SAP, Oracle, Microsoft Dynamics, and Salesforce.' },
      { icon: 'ShieldCheck', title: 'Corporate Accounts Management', desc: 'Hierarchical account structures with varied permissions, buying limits, and approval workflows.' },
      { icon: 'Zap', title: 'Omnichannel B2B2C', desc: 'Unified commerce solutions that serve both wholesale distributors and direct end-consumers.' }
    ],
    process: [
      { num: '01', title: 'System Architecture', desc: 'Mapping out data flows between the eCommerce frontend, ERP, PIM, and CRM.' },
      { num: '02', title: 'UX For Procurement', desc: 'Designing interfaces built for bulk ordering, quick re-orders, and complex search.' },
      { num: '03', title: 'Development & API', desc: 'Building custom backend logic and secure API middleware for seamless data sync.' },
      { num: '04', title: 'UAT & Deployment', desc: 'Extensive User Acceptance Testing simulating real wholesale buyer scenarios.' }
    ],
    whyUs: [
      { title: 'Enterprise Experience', desc: 'We routinely handle complex enterprise migrations and legacy system modernization.' },
      { title: 'Data Security First', desc: 'Enterprise-grade security protocols ensuring highly sensitive pricing and business data is safe.' },
      { title: 'Performance at Scale', desc: 'Our platforms remain lightning-fast regardless of catalog size or traffic spikes.' },
      { title: 'Strategic Advisory', desc: 'We help you navigate the digital transformation of traditional sales processes.' }
    ]
  },
  {
    componentName: 'QAAndTesting',
    fileName: 'QAAndTesting.jsx',
    breadcrumb: 'Software Testing Solution',
    heroIcon: 'ShieldCheck',
    heroTitle1: 'Software QA &',
    heroTitle2: 'Testing Solutions',
    heroDesc: 'Deliver flawless software to your users. Our comprehensive QA and testing services combine manual precision with automated efficiency to ensure your applications are secure, scalable, and bug-free.',
    overviewTitle: 'Automated CI/CD Test Grids',
    overviewDesc: 'We don`t just find bugs—we mathematically prevent them by integrating automated Selenium, Cypress, and Jest scripts directly into your CI/CD delivery pipelines.',
    overviewPoints: [
      { title: 'Continuous Integration QA', desc: 'Automated suites that block bad code deployments before they reach production.' },
      { title: 'Load & Penetration Simulation', desc: 'Stress testing servers with JMeter and securing endpoints against top OWASP vulnerabilities.' },
    ],
    sectionTitle: 'Our QA Offerings',
    sectionSub: 'Rigorous testing methodologies covering every aspect of your software lifecycle.',
    services: [
      { icon: 'Code', title: 'Test Automation', desc: 'Custom automation frameworks using Selenium, Cypress, and Appium for faster release cycles.' },
      { icon: 'Zap', title: 'Performance & Load Testing', desc: 'Simulating high traffic using JMeter to ensure your system doesn`t crash under pressure.' },
      { icon: 'ShieldCheck', title: 'Security Testing', desc: 'Vulnerability scanning, penetration testing, and compliance checks (OWASP, HIPAA, GDPR).' },
      { icon: 'Monitor', title: 'Functional & Manual Testing', desc: 'Meticulous human exploration to find logical flaws, edge cases, and usability issues.' },
      { icon: 'Layout', title: 'UI/UX & Cross-Browser Testing', desc: 'Ensuring absolute consistency across all browsers, devices, and screen sizes.' },
      { icon: 'Cloud', title: 'API & Integration Testing', desc: 'Validating the security, payload accuracy, and performance of third-party APIs and microservices.' }
    ],
    process: [
      { num: '01', title: 'Test Strategy formulation', desc: 'Defining the scope, tools, environments, and test matrices based on project requirements.' },
      { num: '02', title: 'Test Case Design', desc: 'Writing comprehensive manual test cases and automated test scripts.' },
      { num: '03', title: 'Execution & Bug Tracking', desc: 'Running tests and logging issues with detailed reproduction steps in Jira.' },
      { num: '04', title: 'Regression & Sign-off', desc: 'Verifying bug fixes and running full regression suites before deployment approval.' }
    ],
    whyUs: [
      { title: 'Shift-Left Approach', desc: 'We integrate QA early in the development cycle to catch bugs when they are cheap to fix.' },
      { title: 'CI/CD Integration', desc: 'Automated test suites run on every code commit, ensuring rapid and safe deployments.' },
      { title: 'Independent Validation', desc: 'Unbiased, objective software testing independent of the development team.' },
      { title: 'Modern Tool Stack', desc: 'Proficient in the latest testing frameworks and cloud-based device farms (BrowserStack, AWS).' }
    ]
  },
  {
    componentName: 'UIUXDesign',
    fileName: 'UIUXDesign.jsx',
    breadcrumb: 'UI/UX Solution',
    heroIcon: 'Layout',
    heroTitle1: 'Exceptional UI/UX',
    heroTitle2: 'Design Solutions',
    heroDesc: 'We craft human-centric digital experiences. By merging behavioral psychology with stunning visual aesthetics, our UI/UX designs captivate users, simplify complexities, and drive massive business conversions.',
    overviewTitle: 'Component-Driven Design Systems',
    overviewDesc: 'We build structured, reusable atomic design frameworks in Figma that map 1:1 with React/Vue components, ensuring pixel-to-code parity and extreme development speed.',
    overviewPoints: [
      { title: 'Psychology-Backed Wireframing', desc: 'We utilize mental models, F-patterns, and cognitive load theory to guide users.' },
      { title: 'Accessible & WCAG Compliant', desc: 'Color contrast ratios and scalable typographies designed for true inclusivity.' },
    ],
    sectionTitle: 'Design & Experience Services',
    sectionSub: 'From initial user research to pixel-perfect prototypes, we design products people love to use.',
    services: [
      { icon: 'Brain', title: 'User Research & Persona Mapping', desc: 'Deep behavioral analysis to understand what your target audience truly needs and wants.' },
      { icon: 'Layout', title: 'Wireframing & Prototyping', desc: 'Low and high-fidelity interactive prototypes (Figma, Adobe XD) to visualize the user journey.' },
      { icon: 'Monitor', title: 'UI Design & Visual Identity', desc: 'Creating modern, beautiful, and accessible interfaces that perfectly reflect your brand.' },
      { icon: 'CheckCircle', title: 'Usability Testing', desc: 'Evaluating designs with real users to eliminate friction points before development begins.' },
      { icon: 'Layers', title: 'Design Systems', desc: 'Building comprehensive component libraries ensuring absolute consistency across large platforms.' },
      { icon: 'Globe', title: 'Web & Mobile App Design', desc: 'Tailored, platform-specific design systems adhering to Apple HIG and Google Material Design guidelines.' }
    ],
    process: [
      { num: '01', title: 'Empathize & Discover', desc: 'Stakeholder interviews, market research, and defining the core problem statement.' },
      { num: '02', title: 'Information Architecture', desc: 'Structuring the sitemap and user flows for maximum intuitive navigation.' },
      { num: '03', title: 'Visual Design', desc: 'Applying color theory, typography, and micro-animations to bring the wireframes to life.' },
      { num: '04', title: 'Developer Handoff', desc: 'Seamless CSS/asset generation and documentation ensuring developers replicate the exact design.' }
    ],
    whyUs: [
      { title: 'Data-Driven Creativity', desc: 'We rely on analytics, heatmaps, and testing—not just intuition—to drive design decisions.' },
      { title: 'Accessibility Standard (WCAG)', desc: 'Our designs are highly inclusive, ensuring access for users with varying visual abilities.' },
      { title: 'Conversion Rate Optimization', desc: 'We strategically position CTAs and minimize cognitive load to dramatically boost user conversions.' },
      { title: 'Future-Proof Scalability', desc: 'Our component-driven Design Systems allow your product UI to scale effortlessly for years.' }
    ]
  },
  {
    componentName: 'CustomSoftware',
    fileName: 'CustomSoftware.jsx',
    breadcrumb: 'Custom Software Solution',
    heroIcon: 'Code',
    heroTitle1: 'Custom Software',
    heroTitle2: 'Development',
    heroDesc: 'We build tailored software solutions that fit your exact business processes — not the other way around. From enterprise platforms to bespoke operations dashboards, we deliver quality at every layer.',
    overviewTitle: 'Robust Enterprise Architecture',
    overviewDesc: 'We architect highly scalable, robust monoliths or microservice networks utilizing modern backend technologies such as Node.js, Python, and Java, connected securely to massive relational databases.',
    overviewPoints: [
      { title: 'API-First Microservices', desc: 'Decoupled services for incredible scalability and zero-downtime deployments.' },
      { title: 'Secure Data Pipelines', desc: 'Enterprise-grade ORM implementations mitigating SQL injections and data leaks.' },
    ],
    sectionTitle: 'Our Custom Software Services',
    sectionSub: 'Bespoke software development that aligns with your unique operations and long-term vision.',
    services: [
      { icon: 'Layers', title: 'Enterprise Automation', desc: 'Streamline heavy administrative workloads into lightning-fast automated digital systems.' },
      { icon: 'Cloud', title: 'Cloud-Native Builds', desc: 'AWS and Azure hosted bespoke applications providing seamless global scalability.' },
      { icon: 'Monitor', title: 'Legacy Modernization', desc: 'Reverse engineering and rebuilding old systems into secure, fast, modern web platforms.' },
      { icon: 'Database', title: 'Custom CRM/ERP', desc: 'Don’t conform to off-the-shelf tools. We build operations software exactly how your team works.' },
      { icon: 'Code', title: 'API & Integration', desc: 'Creating robust middleware to connect fragmented third-party softwares into one dashboard.' },
      { icon: 'ShieldCheck', title: 'Enterprise Security', desc: 'Banking-level encryption algorithms integrated deep into your bespoke platform code.' }
    ],
    process: [
      { num: '01', title: 'Requirements Analysis', desc: 'Deep-dive workshops to map every business requirement into clear, testable technical specifications.' },
      { num: '02', title: 'Architecture Design', desc: 'System design, database schemas, and infrastructure planning before any code is written.' },
      { num: '03', title: 'Agile Development', desc: 'Two-week sprints with continuous integration, automated testing, and regular client demos.' },
      { num: '04', title: 'Deployment & Handover', desc: 'CI/CD pipelines, documentation, and training so your team hits the ground running.' }
    ],
    whyUs: [
      { title: 'Business-First Approach', desc: 'We understand your business goals before writing a single line of code.' },
      { title: 'Scalable Architecture', desc: 'Modular, microservices-based designs that scale horizontally as your user base grows.' },
      { title: 'Security & Compliance', desc: 'OWASP-compliant code, data encryption, and audit trails built into every system.' },
      { title: 'Transparent Process', desc: 'Regular sprint reviews, detailed documentation, and full source code ownership.' }
    ]
  },
  {
    componentName: 'WebDevelopment',
    fileName: 'WebDevelopment.jsx',
    breadcrumb: 'Web Development',
    heroIcon: 'Monitor',
    heroTitle1: 'Cutting-Edge Web',
    heroTitle2: 'Development',
    heroDesc: 'Creating stunning, responsive, and incredibly fast websites and web applications that drive engagement. We utilize the absolute bleeding edge of front-end tech.',
    overviewTitle: 'Modern Web Stack Mastery',
    overviewDesc: 'We abandon slow, bloated templates. We build custom websites using React, Next.js, and headless architectures with aggressive caching to score 99+ on Google Lighthouse.',
    overviewPoints: [
      { title: 'Server-Side Rendering (SSR)', desc: 'Using Next.js for instant page loads and unparalleled SEO indexing capabilities.' },
      { title: 'Headless Content Management', desc: 'Decoupling the frontend from backend CMS tools like Sanity or Strapi for ultimate security.' },
    ],
    sectionTitle: 'Web Development Services',
    sectionSub: 'Complete web solutions built for speed, scalability, and absolute aesthetic perfection.',
    services: [
      { icon: 'Monitor', title: 'Corporate Websites', desc: 'High-end, dynamic websites showcasing your brand identity to global enterprise clients.' },
      { icon: 'Layout', title: 'Web Applications', desc: 'Complex, interactive Single Page Applications (SPAs) acting like native desktop programs.' },
      { icon: 'Zap', title: 'Performance Optimization', desc: 'Auditing and rewriting slow code to ensure blazing-fast rendering and TTI speeds.' },
      { icon: 'Globe', title: 'Progressive Web Apps (PWA)', desc: 'Offline-capable web apps that sit on your users mobile home screens.' },
      { icon: 'Database', title: 'Headless CMS Integration', desc: 'Empower your marketing team to edit content instantly without touching a line of code.' },
      { icon: 'ShieldCheck', title: 'Secure Maintenance', desc: 'Continuous dependency audits, server updates, and 24/7 uptime monitoring.' }
    ],
    process: [
      { num: '01', title: 'Wireframing & UI Matrix', desc: 'Establishing visual hierarchy and mapping out complex responsive layouts.' },
      { num: '02', title: 'Frontend Architecture', desc: 'Scaffolding React components and establishing global state management (Redux/Zustand).' },
      { num: '03', title: 'Backend & API Hooking', desc: 'Connecting the beautiful frontend securely to robust databases and external APIs.' },
      { num: '04', title: 'Lighthouse & Go-Live', desc: 'Final SEO indexing, speed testing, cache configuration, and global CDN deployment.' }
    ],
    whyUs: [
      { title: 'Pixel-Perfect Fidelity', desc: 'Our code looks identical to the Figma design files across every single device breakpoint.' },
      { title: 'Zero-Bloat Code', desc: 'We don’t rely on massively bloated libraries. We write clean, semantic HTML5 and CSS3.' },
      { title: 'SEO-Optimized DOM', desc: 'Semantic tags and SSR routing ensures Google spiders index your pages immediately.' },
      { title: 'Post-Launch Analytics', desc: 'Google Tag Manager and Analytics deeply integrated to track every user interaction.' }
    ]
  },
  {
    componentName: 'AppDevelopment',
    fileName: 'AppDevelopment.jsx',
    breadcrumb: 'Mobile App Development',
    heroIcon: 'Smartphone',
    heroTitle1: 'Mobile App',
    heroTitle2: 'Development',
    heroDesc: 'From concept to the App Store — we build powerful, beautiful, and performance-driven mobile applications for iOS and Android that users love and businesses rely on.',
    overviewTitle: 'Native & Hybrid Architectures',
    overviewDesc: 'Whether you need ultra-performant Swift/Kotlin codebases or highly efficient cross-platform React Native and Flutter apps, we engineer mobile software that interacts flawlessly with hardware.',
    overviewPoints: [
      { title: '60fps UI Performance', desc: 'Optimizing rendering thread locks to ensure apps feel buttery smooth on all hardware.' },
      { title: 'Offline-First Syncing', desc: 'Implementing SQLite and Realm databases so users can work completely without internet.' },
    ],
    sectionTitle: 'Our App Development Services',
    sectionSub: 'Complete mobile application development — from strategy and design to launch and beyond.',
    services: [
      { icon: 'Smartphone', title: 'iOS Native Development', desc: 'High-performance Swift applications completely integrated with Apple ecosystem features.' },
      { icon: 'Layers', title: 'Android Native Development', desc: 'Kotlin-based apps optimized to run across thousands of varied Android screen sizes.' },
      { icon: 'Code', title: 'Cross-Platform Dev', desc: 'React Native & Flutter solutions delivering near-native performance with 50% less code.' },
      { icon: 'Zap', title: 'IoT & Wearables', desc: 'Connecting apps via Bluetooth/Wi-Fi to smartwatches, medical devices, and smart home tech.' },
      { icon: 'Layout', title: 'Mobile UI/UX Design', desc: 'Gesture-driven interfaces rigorously following Apple HIG and Material guidelines.' },
      { icon: 'Cloud', title: 'API & Backend Dev', desc: 'Scalable server-side infrastructure and Firebase integration for real-time app data.' }
    ],
    process: [
      { num: '01', title: 'Strategy & Discovery', desc: 'We analyze your target audience, competition, and business model to define the strategy.' },
      { num: '02', title: 'Prototype & Design', desc: 'Interactive prototypes and polished UI designs reviewed and approved.' },
      { num: '03', title: 'Agile Coding', desc: 'Development sprints with device-level testing and regular TestFlight distributions.' },
      { num: '04', title: 'Store Approvals', desc: 'We handle entire App Store and Play Store submission bureaucracy and metadata.' }
    ],
    whyUs: [
      { title: 'User-Centric Design', desc: 'Every screen is crafted to delight users and maximise engagement and retention.' },
      { title: 'Performance First', desc: 'Optimised animations, lazy loading, and efficient state management for buttery-smooth apps.' },
      { title: 'Secure by Default', desc: 'Data encryption, secure authentication, and compliance with platform guidelines.' },
      { title: 'Store Submission Support', desc: 'We handle App Store and Play Store submission, review responses, and approvals.' }
    ]
  },
  {
    componentName: 'SEOOptimization',
    fileName: 'SEOOptimization.jsx',
    breadcrumb: 'SEO Optimization',
    heroIcon: 'Search',
    heroTitle1: 'Advanced SEO',
    heroTitle2: 'Optimization',
    heroDesc: 'Dominate search rankings. We utilize algorithmic understanding, technical code restructuring, and semantic content mapping to multiply your organic traffic and lead generation.',
    overviewTitle: 'Technical Algorithmic SEO',
    overviewDesc: 'SEO isn’t just keywords—it’s code. We optimize server response times, implement dynamic Schema.org markup, fix canonical loops, and aggressively optimize Core Web Vitals to satisfy Google Search algorithms.',
    overviewPoints: [
      { title: 'Core Web Vitals Perfection', desc: 'Rewriting DOM elements to achieve green scores across LCP, FID, and CLS.' },
      { title: 'Semantic Keyword Silos', desc: 'Structuring your entire website hierarchy into mathematically logical topic clusters.' },
    ],
    sectionTitle: 'Our SEO Services',
    sectionSub: 'Comprehensive organic growth strategies engineered for sustainable long-term visibility.',
    services: [
      { icon: 'Code', title: 'Technical SEO Audits', desc: 'Deep-dive crawling to fix broken links, toxic redirects, index bloat, and javascript rendering issues.' },
      { icon: 'Search', title: 'On-Page Optimization', desc: 'Data-driven alterations of metadata, header tags, keyword density, and internal linking structures.' },
      { icon: 'Globe', title: 'Off-Page Strategy', desc: 'High Domain Authority (DA) link-building outreach to massively increase your site`s search trust.' },
      { icon: 'TrendingUp', title: 'Local Search SEO', desc: 'Google Business Profile optimization and localized citation building to dominate regional queries.' },
      { icon: 'Layout', title: 'Content Gap Analysis', desc: 'Finding exactly what competitors rank for, and creating substantially better pillar content.' },
      { icon: 'Monitor', title: 'Penalty Recovery', desc: 'Diagnosing algorithmic drops and systematically recovering lost traffic from Google Core Updates.' }
    ],
    process: [
      { num: '01', title: 'Intensive Auditing', desc: 'Using ScreamingFrog and Ahrefs to uncover every single technical flaw on your domain.' },
      { num: '02', title: 'Keyword Mapping', desc: 'Assigning high-intent, low-competition keywords to specific pages across the site.' },
      { num: '03', title: 'Implementation', desc: 'Our developers directly inject the necessary code fixes and content restructurings.' },
      { num: '04', title: 'Monitoring & Reporting', desc: 'Real-time dashboarding of rank movements, traffic volume, and organic conversion rates.' }
    ],
    whyUs: [
      { title: 'Developer-Led SEO', desc: 'Unlike marketing agencies, our developers actually implement the complex code fixes directly.' },
      { title: 'White-Hat Execution', desc: 'Zero spam, zero shortcuts. We adhere strictly to Google Webmaster Guidelines for safety.' },
      { title: 'Revenue-Focused', desc: 'We don`t just track traffic vanity metrics; we track the actual leads and sales SEO generates.' },
      { title: 'Transparent Analytics', desc: 'Full access to customized Looker Studio reports showing exact ROI and keyword movements.' }
    ]
  },
  {
    componentName: 'DigitalMarketing',
    fileName: 'DigitalMarketing.jsx',
    breadcrumb: 'Digital Marketing',
    heroIcon: 'TrendingUp',
    heroTitle1: 'Data-Driven Digital',
    heroTitle2: 'Marketing',
    heroDesc: 'Turn clicks into enterprise revenue. We engineer highly targeted, programmatic marketing campaigns that mathematically lower Customer Acquisition Costs and scale your brand globally.',
    overviewTitle: 'Programmatic Ad Logic & Tracking',
    overviewDesc: 'We build advanced tracking infrastructures using Server-Side Tagging and Facebook Conversions API to ensure zero data loss, enabling machine-learning ad algorithms to target your exact buyers.',
    overviewPoints: [
      { title: 'Server-Side Analytics', desc: 'Bypassing ad-blockers and iOS tracking prevention to record 100% accurate conversion data.' },
      { title: 'Dynamic Retargeting', desc: 'Architecting complex customer journey funnels that adapt based on specific user actions.' },
    ],
    sectionTitle: 'Our Digital Marketing Services',
    sectionSub: 'End-to-end digital acquisition strategies fueled by data analytics and creative excellence.',
    services: [
      { icon: 'Target', title: 'PPC & Search Ads', desc: 'High-intent Google Ads campaigns optimized rigorously for maximum Return on Ad Spend (ROAS).' },
      { icon: 'Share2', title: 'Social Media Advertising', desc: 'Hyper-targeted Meta, LinkedIn, and TikTok campaigns combining stunning creative with behavioral logic.' },
      { icon: 'PenTool', title: 'Content Architecture', desc: 'Developing massive educational hubs, whitepapers, and blogs that establish absolute industry authority.' },
      { icon: 'Zap', title: 'Marketing Automation', desc: 'Building complex HubSpot or ActiveCampaign triggered email workflows that convert cold leads.' },
      { icon: 'Monitor', title: 'Conversion Rate Opt (CRO)', desc: 'A/B testing landing pages and adjusting UI incrementally to squeeze every drop of ROI.' },
      { icon: 'Database', title: 'Attribution Modeling', desc: 'Tracking users across 7+ touchpoints to mathematically prove exactly which ads drive the final sale.' }
    ],
    process: [
      { num: '01', title: 'Market & Funnel Mapping', desc: 'Auditing your competitors and designing a mathematical projection of ad spend vs expected ROI.' },
      { num: '02', title: 'Tracking Installation', desc: 'Installing pristine server-side pixels, GTM tags, and verified domains before any money is spent.' },
      { num: '03', title: 'Campaign Launch', desc: 'Testing hundreds of ad variations and copy angles simultaneously to find the winning formula.' },
      { num: '04', title: 'Algorithmic Scaling', desc: 'Aggressively pushing budget into winning ad-sets while instantly killing underperforming campaigns.' }
    ],
    whyUs: [
      { title: 'Technical Marketers', desc: 'We bridge the gap between brilliant creative campaigns and intense backend data analytics.' },
      { title: 'ROAS Obsession', desc: 'We don’t care about "likes" or "impressions." We optimize strictly for leads, sales, and profit margin.' },
      { title: 'Platform Partnerships', desc: 'Direct agency-level support from Google and Meta ensuring access to beta features and rapid issue resolution.' },
      { title: 'Agile Budget Allocation', desc: 'We shift money intra-month to whichever platform is currently generating the cheapest conversions.' }
    ]
  },
  {
    componentName: 'SocialMedia',
    fileName: 'SocialMedia.jsx',
    breadcrumb: 'Social Media Management',
    heroIcon: 'Share2',
    heroTitle1: 'Social Media',
    heroTitle2: 'Brand Building',
    heroDesc: 'Build massive digital communities. We craft viral-ready, high-engagement social media strategies that command attention, foster incredible brand loyalty, and dominate modern social algorithms.',
    overviewTitle: 'Algorithmic Content Engineering',
    overviewDesc: 'Social media is no longer about just posting—it’s about understanding the specific retention metrics and watch-time triggers that force the Instagram, TikTok, and LinkedIn algorithms to push your content organically.',
    overviewPoints: [
      { title: 'Graph API Automation', desc: 'Utilizing profound backend tooling to schedule and aggregate massive cross-platform metrics.' },
      { title: 'Short-Form Video Hooks', desc: 'Engineering the first three seconds of video content using proven psychological retention loops.' },
    ],
    sectionTitle: 'Our Social Media Services',
    sectionSub: 'Complete end-to-end community building and brand amplification across all major networks.',
    services: [
      { icon: 'Layout', title: 'Platform Strategy Mapping', desc: 'Defining exact content pillars, tone of voice, and posting cadences customized for your brand ecosystem.' },
      { icon: 'Camera', title: 'High-End Content Creation', desc: 'Producing stunning Reels, TikToks, carousels, and graphics that stand out in crowded feeds.' },
      { icon: 'Users', title: 'Community Management', desc: 'Active, real-time engagement with your audience, turning followers into fierce brand advocates.' },
      { icon: 'TrendingUp', title: 'Influencer Operations', desc: 'Identifying, negotiating, and tracking campaigns with key creators to inject trust into your brand.' },
      { icon: 'ShieldCheck', title: 'Brand Reputation Monitoring', desc: 'Using advanced software to track brand sentiment and mitigate PR crises before they escalate.' },
      { icon: 'Monitor', title: 'Data Analytics & Growth', desc: 'Deep-diving into engagement graphs to constantly pivot strategy toward the highest-performing content.' }
    ],
    process: [
      { num: '01', title: 'Brand Audit', desc: 'Analyzing your current social footprint, audience demographics, and immediate competitors.' },
      { num: '02', title: 'Content Blueprint', desc: 'Creating a 30-day visual grid and script bank, ensuring perfectly consistent brand messaging.' },
      { num: '03', title: 'Production & Scheduling', desc: 'Shooting video, polishing graphics, and loading them into automated cross-platform schedulers.' },
      { num: '04', title: 'Engagement & Iteration', desc: 'Actively participating in comments while analyzing 14-day data cohorts to tweak the next batch.' }
    ],
    whyUs: [
      { title: 'Algorithm Experts', desc: 'We study algorithm updates daily to ensure our content format always receives maximum organic reach.' },
      { title: 'In-House Creators', desc: 'No outsourced junk. Our native teams write scripts, shoot, and edit all multimedia internally.' },
      { title: 'Multi-Network Dominance', desc: 'From B2B lead gen on LinkedIn to viral consumer trends on TikTok, we conquer every platform.' },
      { title: 'Transparent Growth KPIs', desc: 'Monthly reporting that ties social engagement directly back to actual website traffic and brand searches.' }
    ]
  }
];

pagesConfig.forEach(config => {
  const fileContent = template(config);
  fs.writeFileSync(path.join('e:/BHOOMI_TECHZONE/Btpl_website/btplfrontend/src/pages/services', config.fileName), fileContent);
});

console.log('Successfully generated complete 13 service pages!');
