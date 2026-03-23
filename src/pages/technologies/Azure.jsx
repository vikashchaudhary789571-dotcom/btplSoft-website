import { Link } from 'react-router-dom'
import {
  Cloud, Server, Database, Shield, GitBranch, BarChart2,
  Zap, Globe, Lock, RefreshCw, Layers, Settings,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Cpu, Activity, Package, Monitor, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './Azure.css'
import azureBanner from '../../assets/services/dedicated-businessman-working-late-laptop-dark-office.webp'

const services = [
  {
    icon: <Cloud size={24} />,
    category: 'Architecture',
    title: 'Azure Cloud Architecture & Migration',
    desc: 'Our Azure architects design cloud solutions aligned with the Microsoft Azure Well-Architected Framework — covering reliability, security, cost optimisation, operational excellence, and performance. We guide organisations through every phase of cloud migration: discovery and assessment, wave planning, application transformation, and cutover — using Azure Migrate for server and database discovery, and Azure Database Migration Service for zero-downtime database migrations.',
    chips: ['Azure Migrate', 'Azure Arc', 'Azure Policy', 'Well-Architected Review'],
  },
  {
    icon: <Layers size={24} />,
    category: 'Compute',
    title: 'Azure Kubernetes & Container Services',
    desc: 'We deploy and manage production-grade Kubernetes clusters on Azure Kubernetes Service (AKS) — handling cluster provisioning, node pool autoscaling, Azure CNI networking, RBAC configuration, integration with Azure Container Registry, and GitOps deployment with Flux or ArgoCD. For simpler container workloads, we leverage Azure Container Apps and Azure Container Instances to reduce operational overhead while maintaining full portability.',
    chips: ['AKS', 'Azure Container Apps', 'Azure Container Registry', 'Helm Charts'],
  },
  {
    icon: <Database size={24} />,
    category: 'Data',
    title: 'Azure Data & Analytics Platform',
    desc: 'We build modern data architectures on Azure — from operational databases (Azure SQL Managed Instance, Cosmos DB with multi-model APIs) to analytics platforms (Azure Synapse Analytics, Azure Databricks, Data Factory pipelines). Delta Lake on Azure Data Lake Storage Gen2 forms the foundation of our lakehouse architectures, enabling both real-time streaming with Event Hubs and batch analytics at petabyte scale.',
    chips: ['Azure Synapse', 'Cosmos DB', 'Azure SQL MI', 'Data Factory', 'Databricks'],
  },
  {
    icon: <Shield size={24} />,
    category: 'Security',
    title: 'Azure Security & Identity',
    desc: 'We implement comprehensive security architectures using Microsoft Entra ID (formerly Azure AD) for identity and access management, Azure Defender for Cloud for unified security posture, Microsoft Sentinel for cloud-native SIEM and SOAR, and Azure Private Link to eliminate public internet exposure for PaaS services. Privileged Identity Management (PIM) enforces just-in-time access, and Azure Policy prevents configuration drift across subscriptions.',
    chips: ['Microsoft Entra ID', 'Defender for Cloud', 'Sentinel SIEM', 'Private Link'],
  },
  {
    icon: <GitBranch size={24} />,
    category: 'DevOps',
    title: 'Azure DevOps & Infrastructure as Code',
    desc: 'We build fully automated Azure deployment workflows using Azure DevOps Pipelines or GitHub Actions with Azure deployment targets. Infrastructure is defined in Bicep or Terraform with remote state in Azure Backend. We implement environment isolation via Azure Management Groups and Subscriptions, and use Azure Deployment Environments for self-service developer sandbox provisioning — eliminating infrastructure bottlenecks.',
    chips: ['Azure DevOps', 'Bicep / ARM', 'Terraform', 'GitHub Actions', 'DevTest Labs'],
  },
  {
    icon: <Cpu size={24} />,
    category: 'AI / ML',
    title: 'Azure AI & Machine Learning',
    desc: 'We integrate Azure AI services into your applications — from Azure OpenAI Service for generative AI features powered by GPT-4o and DALL·E 3, to Azure Cognitive Services for pre-built vision, speech, language, and decision capabilities. For custom ML workflows, we use Azure Machine Learning with automated ML, experiment tracking, model registry, and managed online endpoints — the complete ML lifecycle in a single platform.',
    chips: ['Azure OpenAI', 'Azure ML', 'Cognitive Services', 'AI Search', 'Document Intelligence'],
  },
]

const whyAzure = [
  {
    icon: <Globe size={24} />,
    title: 'Microsoft Ecosystem Integration',
    desc: 'Azure integrates natively with the tools enterprises already use — Microsoft 365, Teams, SharePoint, Dynamics 365, Active Directory, and Power Platform. This dramatically reduces integration effort and security complexity for organisations running the Microsoft stack, creating a unified identity, productivity, and cloud platform without vendor fragmentation.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Industry-Leading Hybrid Cloud',
    desc: 'Azure Arc extends Azure management, security policies, and services to any infrastructure — including on-premises servers, other cloud providers, and edge locations. Azure Stack HCI and Azure Stack Hub bring Azure services directly into your data centre. No other cloud offers this level of true hybrid flexibility, making Azure the clear choice for organisations with regulatory or latency requirements.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'First-Class AI & Copilot Integration',
    desc: 'Azure is the exclusive cloud home of OpenAI\'s models — Azure OpenAI Service provides GPT-4o, o1, and DALL·E 3 with enterprise security, data residency guarantees, and no data training on your inputs. Microsoft Copilot integrations across Teams, Azure DevOps, and GitHub Copilot are all built on Azure AI — giving customers a head start on AI adoption.',
  },
  {
    icon: <Lock size={24} />,
    title: 'Compliance & Sovereignty',
    desc: 'Azure holds the largest compliance portfolio of any cloud provider — 100+ compliance offerings including FedRAMP High, HIPAA, GDPR, ISO 27001, SOC 1/2/3, and ITAR. Azure Sovereign regions (Government Cloud, China Cloud) provide data residency guarantees for regulated industries. Azure Confidential Computing protects data-in-use with hardware-based trusted execution environments.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Enterprise Cost Management',
    desc: 'Azure Cost Management + Billing provides detailed cost visibility across subscriptions, resource groups, and tags. Azure Reservations offer up to 72% savings over pay-as-you-go for predictable workloads. Azure Hybrid Benefit allows organisations to reuse existing Windows Server and SQL Server licences on Azure VMs — reducing IaaS costs by up to 40% compared to standard rates.',
  },
  {
    icon: <Activity size={24} />,
    title: 'Built for Enterprise Scale',
    desc: 'Azure Management Groups, Subscriptions, Resource Groups, and Azure Policy create a governance hierarchy that scales to thousands of resources across hundreds of teams without chaos. Azure Landing Zones provide pre-built, enterprise-ready environments with networking, identity, security, and management baselines — getting new workloads production-ready in days instead of months.',
  },
]

const azureProducts = [
  { icon: <Server size={20} />, name: 'Azure Virtual Machines', desc: 'Scalable Windows & Linux VMs' },
  { icon: <Layers size={20} />, name: 'Azure Kubernetes Service', desc: 'Managed Kubernetes orchestration' },
  { icon: <Database size={20} />, name: 'Azure SQL / Cosmos DB', desc: 'Relational & multi-model databases' },
  { icon: <Package size={20} />, name: 'Azure Blob Storage', desc: 'Massively scalable object storage' },
  { icon: <Cloud size={20} />, name: 'Azure Functions', desc: 'Event-driven serverless compute' },
  { icon: <Activity size={20} />, name: 'Azure Service Bus', desc: 'Enterprise messaging & queuing' },
  { icon: <Shield size={20} />, name: 'Microsoft Entra ID', desc: 'Identity & access management' },
  { icon: <Monitor size={20} />, name: 'Azure Monitor', desc: 'Full-stack observability platform' },
]

const expItems = [
  'Enterprise Azure Landing Zone design',
  'Azure Kubernetes Service (AKS) production clusters',
  'Azure Synapse Analytics data warehouses',
  'Cosmos DB multi-region globally distributed apps',
  'Azure OpenAI Service integration & RAG architectures',
  'Azure DevOps full CI/CD pipeline setup',
  'Microsoft Entra ID B2C customer identity',
  'Azure Arc multi-cloud & on-premise governance',
  'HIPAA-compliant healthcare on Azure',
  'Azure Cost Optimisation — 50%+ savings achieved',
  'Azure Bicep / Terraform IaC codebases',
  'Migration from AWS and on-premise to Azure',
]

const expTags = [
  'Azure Well-Architected', 'AKS', 'Azure Functions', 'Cosmos DB',
  'Azure SQL MI', 'Azure Synapse', 'Databricks', 'Data Factory',
  'Microsoft Entra ID', 'Defender for Cloud', 'Azure Bicep', 'Terraform',
  'Azure DevOps', 'Azure OpenAI', 'Azure Monitor', 'Private Link',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'Microsoft Partner Network',
    desc: 'BTPL holds Microsoft certifications across Azure Solutions Architecture, DevOps, Data Engineering, and AI — with verified delivery on 120+ Azure projects.',
  },
  {
    icon: <Users size={24} />,
    title: 'Azure-Specialist Team',
    desc: 'Dedicated Azure architects, cloud engineers, and data platform specialists — not generalist developers moonlighting as cloud engineers.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Landing Zone in 2 Weeks',
    desc: 'Our Azure Landing Zone accelerator gets your organisation\'s governance, networking, identity, and security baseline production-ready in under two weeks.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Managed Azure Operations',
    desc: 'Ongoing Azure infrastructure management, cost optimisation, security posture reviews, and 24/7 incident response — so your team stays focused on product.',
  },
]

export default function Azure() {
  return (
    <div className="sp-page">

      {/* HERO */}
      <section className="sp-hero" style={{ backgroundImage: `url(${azureBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">Cloud Solutions on <span>Microsoft Azure</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's Azure-certified architects build enterprise-grade cloud solutions on Microsoft Azure —
            leveraging its unmatched hybrid capabilities, AI platform, and deep Microsoft ecosystem integration
            to modernise your infrastructure and accelerate innovation.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Explore Azure Solutions <Cloud size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="az-stats">
        <div className="az-stats-grid sp-container">
          {[
            { num: '120+', label: 'Azure Projects Delivered' },
            { num: '50%+', label: 'Average Cost Savings' },
            { num: '99.99%', label: 'Uptime SLA Maintained' },
            { num: '10+', label: 'Years Azure Experience' },
          ].map(s => (
            <div className="az-stat" key={s.label}>
              <span className="az-stat-num">{s.num}</span>
              <span className="az-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">What We Do</p>
            <h2 className="sp-heading">Microsoft Azure Services</h2>
            <p className="sp-subtext-large">
              End-to-end Azure expertise — from initial architecture design and cloud migration to AI integration,
              data platforms, DevOps automation, and ongoing managed services.
            </p>
          </div>
          <div className="az-svc-list">
            {services.map(svc => (
              <div className="az-svc-tile" key={svc.title}>
                <div className="az-svc-tile-left">
                  <div className="az-svc-tile-icon">{svc.icon}</div>
                  <div className="az-svc-tile-category">{svc.category}</div>
                </div>
                <div className="az-svc-tile-right">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="az-svc-chips">
                    {svc.chips.map(c => <span className="az-svc-chip" key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AZURE */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why Azure</p>
            <h2 className="sp-heading">Why Microsoft Azure?</h2>
            <p className="sp-subtext-large">
              Azure is the cloud of choice for enterprises running Microsoft workloads — and increasingly the
              preferred platform for AI-first organisations. Here's why.
            </p>
          </div>
          <div className="az-why-grid">
            {whyAzure.map(w => (
              <div className="az-why-card" key={w.title}>
                <div className="az-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AZURE PRODUCTS */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Core Services</p>
            <h2 className="sp-heading">Key Azure Services We Work With</h2>
            <p className="sp-subtext-large">
              The foundational Azure services that power our cloud architectures — compute, data, networking, and operations.
            </p>
          </div>
          <div className="az-products-grid">
            {azureProducts.map(p => (
              <div className="az-product-card" key={p.name}>
                <div className="az-product-icon">{p.icon}</div>
                <div className="az-product-name">{p.name}</div>
                <div className="az-product-desc">{p.desc}</div>
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
            <h2 className="sp-heading">Deep Azure Engineering Experience</h2>
            <p className="sp-subtext-large">
              From enterprise data platforms and AI integrations to Kubernetes operations and hybrid cloud governance —
              our Azure expertise runs deep.
            </p>
          </div>
          <div className="az-exp-wrap">
            <ul className="az-exp-list">
              {expItems.map(item => (
                <li className="az-exp-item" key={item}>
                  <CheckCircle size={16} />{item}
                </li>
              ))}
            </ul>
            <div className="az-exp-tags">
              {expTags.map(t => <span className="az-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BTPL */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for Your Azure Journey?</h2>
            <p className="sp-subtext-large">
              We bring Microsoft-certified engineers, proven delivery methodology, and deep Azure platform knowledge to every
              engagement — from first conversation to long-term managed operations.
            </p>
          </div>
          <div className="az-btpl-grid">
            {btplCards.map(c => (
              <div className="az-btpl-card" key={c.title}>
                <div className="az-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #003d8a, #0078D4)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Unlock Azure's Full Potential?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            From your first Azure subscription to a fully governed multi-subscription enterprise landing zone —
            BTPL Soft will architect, build, and operate your Azure platform so you can focus on your product.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
