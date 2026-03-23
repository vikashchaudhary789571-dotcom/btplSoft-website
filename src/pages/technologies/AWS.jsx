import { Link } from 'react-router-dom'
import {
  Cloud, Server, Database, Shield, GitBranch, BarChart2,
  Zap, Globe, Lock, RefreshCw, Layers, Settings,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Cpu, Activity, Package, Monitor, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './AWS.css'
import awsBanner from '../../assets/services/professional-programmer-working-late-dark-office.webp'

const services = [
  {
    icon: <Server size={22} />,
    badge: 'Compute',
    title: 'AWS Cloud Architecture & Migration',
    desc: 'We design battle-tested AWS architectures using the Well-Architected Framework pillars — operational excellence, security, reliability, performance efficiency, and cost optimisation. Whether you\'re lifting and shifting an on-premise data centre or re-architecting a monolith into microservices, our AWS architects create infrastructure that scales with your business without unnecessary complexity or cost.',
    chips: ['EC2', 'Lambda', 'ECS / EKS', 'Auto Scaling', 'Well-Architected Review'],
  },
  {
    icon: <Database size={22} />,
    badge: 'Database',
    title: 'Managed Database & Data Services',
    desc: 'From relational databases to globally distributed NoSQL stores — we architect, migrate, and optimise AWS data layers. We handle RDS Multi-AZ deployments, Aurora Serverless v2 for variable workloads, DynamoDB with proper partition key design, and ElastiCache for Redis caching layers. Every database architecture is tuned for performance, automated backups, point-in-time recovery, and encryption at rest.',
    chips: ['RDS', 'Aurora Serverless', 'DynamoDB', 'ElastiCache', 'Redshift'],
  },
  {
    icon: <Cloud size={22} />,
    badge: 'Serverless',
    title: 'Serverless & Event-Driven Architecture',
    desc: 'We build fully serverless applications using AWS Lambda, API Gateway, EventBridge, SQS, and SNS. Serverless eliminates server management, scales to zero when idle, and charges only for actual invocations. Our event-driven designs decouple services, improve resilience, and enable complex workflows — from file processing pipelines to real-time notification systems and scheduled data aggregation jobs.',
    chips: ['Lambda', 'API Gateway', 'EventBridge', 'SQS / SNS', 'Step Functions'],
  },
  {
    icon: <Shield size={22} />,
    badge: 'Security',
    title: 'AWS Security & Compliance',
    desc: 'Security is non-negotiable. We implement defence-in-depth across every layer — IAM least-privilege policies, VPC network isolation with security groups and NACLs, AWS WAF for application-layer protection, GuardDuty for threat detection, Security Hub for unified compliance posture, and AWS Config for continuous configuration auditing. We also assist with HIPAA, PCI DSS, SOC 2, and GDPR compliance on AWS.',
    chips: ['IAM', 'AWS WAF', 'GuardDuty', 'Security Hub', 'KMS'],
  },
  {
    icon: <GitBranch size={22} />,
    badge: 'DevOps',
    title: 'AWS DevOps & CI/CD Pipelines',
    desc: 'We build fully automated deployment pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy — or integrate with GitHub Actions and GitLab CI to deploy to AWS. Infrastructure is codified in AWS CDK or Terraform with full state management. Blue/green and canary deployments via CodeDeploy eliminate downtime, and CloudWatch alarms with automatic rollbacks ensure failed deployments are self-healing.',
    chips: ['CodePipeline', 'CodeBuild', 'AWS CDK', 'Terraform', 'Blue/Green Deploy'],
  },
  {
    icon: <BarChart2 size={22} />,
    badge: 'Monitoring',
    title: 'Monitoring, Observability & Cost Optimisation',
    desc: 'We implement end-to-end observability stacks on AWS using CloudWatch, X-Ray distributed tracing, and Managed Grafana — giving you full visibility into application performance, infrastructure health, and error rates. Cost optimisation is equally critical: we right-size EC2 instances, implement Savings Plans, identify idle resources with Cost Explorer, and establish tagging governance to allocate costs by team and product.',
    chips: ['CloudWatch', 'AWS X-Ray', 'Cost Explorer', 'AWS Budgets', 'Trusted Advisor'],
  },
]

const whyAWS = [
  {
    icon: <Globe size={24} />,
    title: 'World\'s Largest Cloud Ecosystem',
    desc: 'AWS offers 200+ fully managed services across compute, storage, networking, AI/ML, IoT, AR/VR, and more. No other cloud provider comes close to the breadth of services available. Whatever your application needs — AWS has a managed service for it, eliminating the need to build and operate complex infrastructure yourself.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Unmatched Global Reach',
    desc: 'With 33 geographic regions, 105 Availability Zones, and 600+ CloudFront edge locations worldwide, AWS allows you to deploy applications within milliseconds of your users regardless of where they are. Multi-region active-active architectures become straightforward, giving enterprise applications 99.999% availability SLAs that are impossible to match on-premises.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Enterprise Security by Default',
    desc: 'AWS achieved 143 security, compliance, and governance certifications — more than any other cloud provider. The Shared Responsibility Model is clearly defined. Services like AWS Macie automatically classify sensitive data, Inspector continuously assesses vulnerabilities, and IAM Identity Center provides centralised access management across multi-account organisations.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Pay-as-You-Go Cost Model',
    desc: 'AWS\'s pay-per-use model eliminates large capital expenditure on hardware. Startups can launch on the AWS Free Tier with zero upfront cost, while enterprises use Savings Plans and Reserved Instances to reduce costs by up to 72% compared to on-demand pricing. AWS Cost Anomaly Detection automatically identifies unexpected spending spikes.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'AI & ML as a Platform',
    desc: 'AWS offers the most comprehensive AI/ML portfolio of any cloud — from SageMaker for custom model training and deployment, to Bedrock for foundation model APIs, Rekognition for computer vision, Comprehend for NLP, Polly for text-to-speech, and Lex for conversational AI. Adding intelligent features to your application is just an API call away.',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Continuous Innovation Velocity',
    desc: 'AWS releases 3,000+ new features and services per year — consistently staying years ahead of competitors in emerging technologies. Early access to services like Graviton processors, Nitro enclaves, and AWS Inferentia chips means your applications benefit from hardware and software innovations before they\'re available elsewhere.',
  },
]

const awsProducts = [
  { icon: <Server size={20} />, name: 'Amazon EC2', desc: 'Scalable virtual servers in the cloud' },
  { icon: <Cloud size={20} />, name: 'AWS Lambda', desc: 'Serverless compute, pay per invocation' },
  { icon: <Database size={20} />, name: 'Amazon RDS', desc: 'Managed relational database service' },
  { icon: <Package size={20} />, name: 'Amazon S3', desc: 'Scalable object storage with 99.999999999% durability' },
  { icon: <Globe size={20} />, name: 'CloudFront CDN', desc: 'Global content delivery network' },
  { icon: <Layers size={20} />, name: 'Amazon EKS', desc: 'Managed Kubernetes container orchestration' },
  { icon: <Activity size={20} />, name: 'Amazon SQS', desc: 'Fully managed message queuing service' },
  { icon: <Monitor size={20} />, name: 'Amazon CloudWatch', desc: 'Monitoring, logs, and observability' },
]

const expItems = [
  'Multi-region active-active architectures',
  'Serverless microservices on Lambda + API Gateway',
  'Kubernetes workloads on Amazon EKS',
  'Data lakes and analytics with S3 + Athena',
  'Real-time streaming with Kinesis Data Streams',
  'CI/CD pipelines with CodePipeline + CodeBuild',
  'HIPAA-compliant healthcare platforms on AWS',
  'PCI DSS e-commerce architectures',
  'Cost optimisation — up to 60% reduction achieved',
  'AWS Landing Zone + multi-account governance',
  'Infrastructure as Code with AWS CDK & Terraform',
  'AWS migration from Azure, GCP, and on-premise',
]

const expTags = [
  'AWS Well-Architected', 'EC2 / Lambda', 'ECS / EKS', 'RDS / Aurora',
  'DynamoDB', 'S3 / Glacier', 'CloudFront', 'Route 53',
  'AWS CDK', 'Terraform', 'CloudFormation', 'CodePipeline',
  'IAM / SCP', 'AWS WAF', 'GuardDuty', 'AWS Cost Explorer',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'AWS Certified Partner',
    desc: 'BTPL holds AWS certifications across solutions architecture, DevOps, security, and database specialisms — with proven delivery on 150+ AWS projects.',
  },
  {
    icon: <Users size={24} />,
    title: 'Dedicated Cloud Team',
    desc: 'AWS Solutions Architects, DevOps engineers, and security specialists work together on every engagement — not generalists picking up cloud as a side task.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Fast Migration Execution',
    desc: 'Our proven migration playbook gets most applications onto AWS within 2–8 weeks — with comprehensive runbooks and zero production downtime cutover plans.',
  },
  {
    icon: <Headphones size={24} />,
    title: '24/7 Infrastructure Support',
    desc: 'Round-the-clock AWS infrastructure monitoring, incident response, and on-call engineering coverage. Average alert-to-resolution time under 15 minutes.',
  },
]

export default function AWS() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${awsBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Cloud Solutions on <span>Amazon Web Services</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's AWS-certified architects design, migrate, and optimise cloud infrastructure that scales
            effortlessly, costs less, and keeps your business always available — backed by the world's most
            comprehensive cloud platform.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Cloud Journey <Cloud size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="aws-stats">
        <div className="aws-stats-grid sp-container">
          {[
            { num: '150+', label: 'AWS Projects Delivered' },
            { num: '60%', label: 'Average Cost Reduction' },
            { num: '99.99%', label: 'Uptime SLA Achieved' },
            { num: '12+', label: 'Years Cloud Experience' },
          ].map(s => (
            <div className="aws-stat" key={s.label}>
              <span className="aws-stat-num">{s.num}</span>
              <span className="aws-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">AWS Cloud Services</h2>
            <p className="sp-subtext-large">
              From architecture design and migration to ongoing operations and cost optimisation — we offer
              end-to-end AWS expertise across every layer of the cloud stack.
            </p>
          </div>
          <div className="aws-svc-grid">
            {services.map(svc => (
              <div className="aws-svc-card" key={svc.title}>
                <div className="aws-svc-header">
                  <div className="aws-svc-icon">{svc.icon}</div>
                  <div className="aws-svc-header-text">
                    <div className="aws-svc-header-title">{svc.title}</div>
                    <span className="aws-svc-header-badge">{svc.badge}</span>
                  </div>
                </div>
                <div className="aws-svc-body">
                  <p>{svc.desc}</p>
                  <div className="aws-svc-chips">
                    {svc.chips.map(c => <span className="aws-svc-chip" key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AWS */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why AWS</p>
            <h2 className="sp-heading">Why Amazon Web Services?</h2>
            <p className="sp-subtext-large">
              AWS has led Gartner's Magic Quadrant for Cloud Infrastructure for 13 consecutive years.
              Here's why it remains our primary cloud platform recommendation for most businesses.
            </p>
          </div>
          <div className="aws-why-grid">
            {whyAWS.map(w => (
              <div className="aws-why-card" key={w.title}>
                <div className="aws-why-icon">{w.icon}</div>
                <div className="aws-why-body">
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS PRODUCTS */}
      <section className="aws-products">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Core Services</p>
            <h2 className="sp-heading">Key AWS Services We Work With</h2>
            <p className="sp-subtext-large">
              The core AWS services powering our cloud architectures — from compute and storage to
              networking and observability.
            </p>
          </div>
          <div className="aws-products-grid">
            {awsProducts.map(p => (
              <div className="aws-product-card" key={p.name}>
                <div className="aws-product-icon">{p.icon}</div>
                <div className="aws-product-name">{p.name}</div>
                <div className="aws-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep AWS Engineering Experience</h2>
            <p className="sp-subtext-large">
              Over a decade of hands-on AWS experience — from greenfield cloud-native builds to complex
              enterprise migrations and compliance-heavy regulated industries.
            </p>
          </div>
          <div className="aws-exp-wrap">
            <ul className="aws-exp-list">
              {expItems.map(item => (
                <li className="aws-exp-item" key={item}>
                  <CheckCircle size={16} />{item}
                </li>
              ))}
            </ul>
            <div className="aws-exp-tags">
              {expTags.map(t => <span className="aws-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why Build Your Cloud with BTPL?</h2>
            <p className="sp-subtext-large">
              We treat your AWS infrastructure as a product — designed for reliability, security, and
              long-term cost efficiency, not just getting things running.
            </p>
          </div>
          <div className="aws-btpl-grid">
            {btplCards.map(c => (
              <div className="aws-btpl-card" key={c.title}>
                <div className="aws-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #232f3e, #131921)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Move to AWS?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're starting your cloud journey or optimising an existing AWS footprint — BTPL Soft
            will architect a solution that performs, scales, and costs exactly what it should.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
