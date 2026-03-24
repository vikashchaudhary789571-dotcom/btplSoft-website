import { Link, useParams, useNavigate } from 'react-router-dom'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right'
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left'
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down'
import { useState } from 'react'
import './CaseStudy.css'

// Case Studies Data
const caseStudiesData = {
  'erp-manufacturing': {
    title: "Enterprise Resource Planning System",
    subtitle: "Transforming Business Operations for a Global Manufacturing Leader",
    client: "Fortune 500 Manufacturing Company",
    industry: "Manufacturing & Supply Chain",
    location: "United States",
    duration: "18 Months",
    teamSize: "25+ Developers",
    heroImage: "/src/assets/caseStudy/ERP.webp",
    
    clientRequirements: {
      title: "Client and Their Business Requirements",
      description: "Our client, a leading manufacturing company with operations across 15 countries, was struggling with fragmented legacy systems that hindered operational efficiency. Their existing infrastructure consisted of multiple disconnected systems built over two decades using outdated technologies. The client wanted to develop a unified ERP system that would integrate all business operations including manufacturing, supply chain, finance, HR, and sales into a single, scalable platform with real-time analytics and reporting capabilities."
    },
    
    challenge: {
      title: "The Challenge",
      description: "The client decided to modernize their entire technology infrastructure while maintaining business continuity. They needed to migrate data from 15+ legacy systems without any downtime or data loss.",
      points: [
        "Integrate 15+ disconnected legacy systems across multiple countries",
        "Migrate 20+ years of historical data without any loss or downtime",
        "Ensure real-time synchronization across 50+ warehouses globally",
        "Build complex supply chain visibility with predictive analytics",
        "Implement role-based access control for 5000+ users",
        "Achieve 99.9% uptime with disaster recovery mechanisms"
      ]
    },
    
    expertise: {
      title: "Tools & Technology",
      technologies: [
        { category: "Frontend", tools: ["React", "TypeScript", "Redux", "Material-UI"] },
        { category: "Backend", tools: ["Node.js", "Python", "PostgreSQL", "Redis"] },
        { category: "Cloud & DevOps", tools: ["AWS", "Docker", "Kubernetes", "Jenkins"] },
        { category: "Analytics", tools: ["Power BI", "Tableau", "Apache Kafka", "Elasticsearch"] }
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "After comprehensive analysis and stakeholder interviews across all departments and locations, BTPL Soft delivered a unified, cloud-native ERP system that integrated all business operations into a single, scalable platform with real-time data synchronization.",
      features: [
        {
          title: "Unified Platform Architecture",
          desc: "Integrated all departments - Manufacturing, Supply Chain, Finance, HR, and Sales into one cohesive system with real-time data synchronization across all modules and locations."
        },
        {
          title: "Advanced Analytics & BI Dashboards",
          desc: "Built-in business intelligence dashboards with predictive analytics for demand forecasting, inventory optimization, financial planning, and production scheduling."
        },
        {
          title: "Multi-Location Inventory Management",
          desc: "Seamless management of 50+ warehouses across 15 countries with real-time inventory tracking, automated reordering, and inter-warehouse transfer capabilities."
        },
        {
          title: "Workflow Automation Engine",
          desc: "Automated 80% of manual processes including purchase orders, invoice processing, approval workflows, and compliance reporting with configurable business rules."
        },
        {
          title: "Real-Time Production Monitoring",
          desc: "Live dashboards for production tracking, quality control, machine utilization, and supply chain visibility with instant alerts and notifications."
        },
        {
          title: "API Integration Hub",
          desc: "Connected with existing CRM, accounting software, logistics providers, and third-party systems via robust REST APIs and webhooks for seamless data flow."
        }
      ],
      implementation: [
        "System analysis and comprehensive requirement gathering",
        "Microservices architecture design and database schema planning",
        "Agile development with 2-week sprints and continuous integration",
        "Parallel data migration with validation and reconciliation",
        "User acceptance testing and training programs",
        "Phased rollout with 24/7 support and monitoring"
      ]
    },
    
    results: {
      title: "Results & Business Impact",
      description: "The implementation of our ERP system delivered transformative results across all business operations, significantly improving efficiency, reducing costs, and enabling data-driven decision making.",
      metrics: [
        { number: "65%", label: "Reduction in Operational Costs", color: "#4CAF50" },
        { number: "40%", label: "Increase in Productivity", color: "#2196F3" },
        { number: "90%", label: "Faster Reporting & Analytics", color: "#FF9800" },
        { number: "99.9%", label: "System Uptime Achieved", color: "#9C27B0" }
      ],
      benefits: [
        "Eliminated data silos with unified database architecture",
        "Reduced inventory carrying costs by 35% through predictive analytics",
        "Improved order fulfillment time from 5 days to 24 hours",
        "Achieved real-time visibility across entire supply chain",
        "Automated financial reporting saving 200+ hours monthly",
        "Enhanced customer satisfaction with 99.5% on-time delivery",
        "Reduced IT maintenance costs by 50% with cloud infrastructure",
        "Enabled data-driven decision making with real-time dashboards"
      ]
    }
  },
  
  'fintech-platform': {
    title: "Digital Banking & Investment Platform",
    subtitle: "Building a Secure FinTech Ecosystem for Modern Investors",
    client: "Leading FinTech Startup",
    industry: "Banking & FinTech",
    location: "United States",
    duration: "12 Months",
    teamSize: "20+ Developers",
    heroImage: "/src/assets/caseStudy/digi-banking.webp",
    
    clientRequirements: {
      title: "Client and Their Business Requirements",
      description: "Our client is a rising FinTech startup from the USA with an impressive background in project financing, banking solutions, and managing investor relations. They wanted to develop a comprehensive digital banking and investment marketplace platform where users can manage their finances, invest in various opportunities, and connect with other investors - all in one secure ecosystem."
    },
    
    challenge: {
      title: "The Challenge",
      description: "The client needed to build a highly secure, scalable platform that complies with financial regulations while providing seamless user experience.",
      points: [
        "Implement bank-level security with PCI-DSS compliance",
        "Integrate with multiple payment gateways and banking APIs",
        "Build real-time transaction processing with fraud detection",
        "Manage complex KYC/AML verification workflows",
        "Handle high-frequency trading data and market updates",
        "Ensure 99.99% uptime for financial transactions"
      ]
    },
    
    expertise: {
      title: "Tools & Technology",
      technologies: [
        { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
        { category: "Backend", tools: ["Java", "Spring Boot", "PostgreSQL", "Redis"] },
        { category: "Security", tools: ["OAuth 2.0", "JWT", "AES-256", "2FA"] },
        { category: "Infrastructure", tools: ["AWS", "Kubernetes", "Terraform", "CloudWatch"] }
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We delivered a comprehensive FinTech platform with digital banking, investment marketplace, and social networking features, all built on a secure, scalable microservices architecture.",
      features: [
        {
          title: "Digital Banking Core",
          desc: "Full-featured digital banking with account management, fund transfers, bill payments, and transaction history with real-time notifications."
        },
        {
          title: "Investment Marketplace",
          desc: "Platform for users to discover, evaluate, and invest in various opportunities including stocks, bonds, startups, and real estate projects."
        },
        {
          title: "KYC/AML Automation",
          desc: "Automated identity verification, document validation, and compliance checks using AI-powered OCR and facial recognition."
        },
        {
          title: "Real-Time Analytics",
          desc: "Portfolio tracking, performance analytics, risk assessment, and personalized investment recommendations based on user preferences."
        },
        {
          title: "Social Investment Network",
          desc: "Users can follow successful investors, share insights, and collaborate on investment opportunities with built-in messaging."
        },
        {
          title: "Multi-Layer Security",
          desc: "Bank-grade security with encryption, 2FA, biometric authentication, fraud detection, and real-time threat monitoring."
        }
      ],
      implementation: [
        "Security-first architecture design and threat modeling",
        "Microservices development with API gateway",
        "Integration with banking APIs and payment gateways",
        "Automated testing and security audits",
        "PCI-DSS compliance certification",
        "Gradual rollout with beta testing program"
      ]
    },
    
    results: {
      title: "Results & Business Impact",
      description: "The platform successfully launched and gained rapid user adoption, establishing itself as a trusted FinTech solution in the competitive market.",
      metrics: [
        { number: "100K+", label: "Active Users", color: "#4CAF50" },
        { number: "$50M+", label: "Transaction Volume", color: "#2196F3" },
        { number: "99.99%", label: "System Uptime", color: "#FF9800" },
        { number: "4.8/5", label: "User Rating", color: "#9C27B0" }
      ],
      benefits: [
        "PCI-DSS Level 1 compliance achieved",
        "Zero security breaches since launch",
        "Average transaction processing time under 2 seconds",
        "95% user retention rate",
        "Featured in top FinTech innovation lists",
        "Secured Series A funding of $10M",
        "Expanded to 3 additional countries",
        "Partnership with 5 major banks established"
      ]
    }
  },
  
  'ecommerce-marketplace': {
    title: "Multi-Vendor E-Commerce Marketplace",
    subtitle: "Building a Scalable Platform Connecting Thousands of Sellers and Buyers",
    client: "E-Commerce Startup",
    industry: "E-Commerce & Retail",
    location: "United Kingdom",
    duration: "14 Months",
    teamSize: "18+ Developers",
    heroImage: "/src/assets/caseStudy/ecommerce.webp",
    
    clientRequirements: {
      title: "Client and Their Business Requirements",
      description: "Our client envisioned creating a comprehensive multi-vendor marketplace that would compete with major e-commerce platforms. They needed a solution that could handle thousands of vendors, millions of products, and provide seamless shopping experience with advanced search, personalized recommendations, and secure payment processing. The platform needed to support multiple currencies, languages, and integrate with various shipping providers."
    },
    
    challenge: {
      title: "The Challenge",
      description: "Building a scalable marketplace that handles high traffic, complex vendor management, and provides excellent user experience across all devices.",
      points: [
        "Handle 10,000+ concurrent users with sub-second response times",
        "Manage complex vendor onboarding and verification workflows",
        "Implement advanced product search with AI-powered recommendations",
        "Integrate with 20+ payment gateways and shipping providers",
        "Build real-time inventory synchronization across vendors",
        "Ensure fraud detection and secure transaction processing"
      ]
    },
    
    expertise: {
      title: "Tools & Technology",
      technologies: [
        { category: "Frontend", tools: ["React", "Next.js", "Redux", "Ant Design"] },
        { category: "Backend", tools: ["Node.js", "Express", "MongoDB", "Redis"] },
        { category: "Search & AI", tools: ["Elasticsearch", "TensorFlow", "Python", "Apache Spark"] },
        { category: "Infrastructure", tools: ["AWS", "Docker", "Kubernetes", "CloudFront"] }
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We built a robust, scalable multi-vendor marketplace with advanced features including AI-powered search, personalized recommendations, vendor management portal, and seamless checkout experience.",
      features: [
        {
          title: "Vendor Management Portal",
          desc: "Comprehensive dashboard for vendors to manage products, inventory, orders, payments, and analytics with automated onboarding and verification."
        },
        {
          title: "AI-Powered Search & Discovery",
          desc: "Advanced search with natural language processing, filters, facets, and personalized product recommendations based on user behavior."
        },
        {
          title: "Smart Checkout System",
          desc: "One-click checkout, multiple payment options, saved addresses, order tracking, and automated invoice generation."
        },
        {
          title: "Real-Time Inventory Management",
          desc: "Synchronized inventory across all vendors with low-stock alerts, automated reordering, and warehouse management integration."
        },
        {
          title: "Review & Rating System",
          desc: "Verified purchase reviews, seller ratings, Q&A section, and AI-powered review moderation to maintain quality."
        },
        {
          title: "Multi-Currency & Multi-Language",
          desc: "Support for 15+ currencies and 10+ languages with automatic conversion, localized content, and regional pricing."
        }
      ],
      implementation: [
        "Microservices architecture with API gateway",
        "Elasticsearch for product search and filtering",
        "Redis caching for improved performance",
        "CDN integration for fast content delivery",
        "Automated testing and CI/CD pipeline",
        "Phased rollout with vendor beta program"
      ]
    },
    
    results: {
      title: "Results & Business Impact",
      description: "The marketplace successfully launched and achieved rapid growth, becoming one of the fastest-growing e-commerce platforms in the region.",
      metrics: [
        { number: "5000+", label: "Active Vendors", color: "#4CAF50" },
        { number: "500K+", label: "Products Listed", color: "#2196F3" },
        { number: "2M+", label: "Monthly Visitors", color: "#FF9800" },
        { number: "$25M+", label: "GMV in Year 1", color: "#9C27B0" }
      ],
      benefits: [
        "Achieved 99.8% uptime since launch",
        "Average page load time under 1.5 seconds",
        "85% customer satisfaction rating",
        "40% repeat purchase rate",
        "Featured in top 10 emerging marketplaces",
        "Secured Series B funding of $15M",
        "Expanded to 5 countries in first year",
        "Partnership with major logistics providers"
      ]
    }
  },
  
  'healthcare-telemedicine': {
    title: "Telemedicine & Healthcare Platform",
    subtitle: "Revolutionizing Healthcare Delivery with Digital Solutions",
    client: "Healthcare Provider Network",
    industry: "Healthcare & Medical",
    location: "Canada",
    duration: "16 Months",
    teamSize: "22+ Developers",
    heroImage: "/src/assets/caseStudy/The-Rise-of-Digital-Health-Platforms.webp",
    
    clientRequirements: {
      title: "Client and Their Business Requirements",
      description: "A leading healthcare provider network wanted to develop a comprehensive telemedicine platform to expand their reach and provide quality healthcare services remotely. The platform needed to support video consultations, electronic health records, prescription management, appointment scheduling, and integrate with existing hospital management systems while ensuring HIPAA compliance and patient data security."
    },
    
    challenge: {
      title: "The Challenge",
      description: "Building a HIPAA-compliant telemedicine platform with real-time video consultations, secure data handling, and seamless integration with existing healthcare systems.",
      points: [
        "Ensure HIPAA compliance and end-to-end data encryption",
        "Build high-quality video consultation with low latency",
        "Integrate with existing EMR/EHR systems and hospital databases",
        "Implement AI-powered symptom checker and triage system",
        "Handle prescription management with e-pharmacy integration",
        "Support 24/7 availability with 99.99% uptime"
      ]
    },
    
    expertise: {
      title: "Tools & Technology",
      technologies: [
        { category: "Frontend", tools: ["React", "TypeScript", "WebRTC", "Socket.io"] },
        { category: "Backend", tools: ["Python", "Django", "PostgreSQL", "RabbitMQ"] },
        { category: "AI & ML", tools: ["TensorFlow", "NLP", "Computer Vision", "OpenAI"] },
        { category: "Infrastructure", tools: ["Azure", "Docker", "Kubernetes", "Azure Health"] }
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We delivered a comprehensive telemedicine platform with video consultations, AI-powered diagnostics, electronic health records, and seamless integration with healthcare systems.",
      features: [
        {
          title: "HD Video Consultations",
          desc: "High-quality video calls with screen sharing, file transfer, digital whiteboard, and automated session recording for medical records."
        },
        {
          title: "AI Symptom Checker",
          desc: "Intelligent symptom analysis using NLP and machine learning to provide preliminary diagnosis and recommend appropriate specialists."
        },
        {
          title: "Electronic Health Records",
          desc: "Comprehensive EHR system with patient history, lab results, imaging, prescriptions, and secure sharing with healthcare providers."
        },
        {
          title: "Smart Appointment Scheduling",
          desc: "AI-powered scheduling with doctor availability, automated reminders, rescheduling, and integration with calendar systems."
        },
        {
          title: "E-Prescription Management",
          desc: "Digital prescription generation, pharmacy integration, medication tracking, refill reminders, and drug interaction alerts."
        },
        {
          title: "Remote Patient Monitoring",
          desc: "Integration with wearable devices and IoT sensors for continuous health monitoring with automated alerts for critical conditions."
        }
      ],
      implementation: [
        "HIPAA compliance audit and security implementation",
        "WebRTC integration for video consultations",
        "HL7/FHIR standards for healthcare data exchange",
        "AI model training for symptom analysis",
        "Integration with pharmacy and lab systems",
        "Pilot program with select clinics before full rollout"
      ]
    },
    
    results: {
      title: "Results & Business Impact",
      description: "The telemedicine platform transformed healthcare delivery, making quality medical care accessible to remote areas and improving patient outcomes.",
      metrics: [
        { number: "150K+", label: "Patients Served", color: "#4CAF50" },
        { number: "500+", label: "Healthcare Providers", color: "#2196F3" },
        { number: "95%", label: "Patient Satisfaction", color: "#FF9800" },
        { number: "60%", label: "Cost Reduction", color: "#9C27B0" }
      ],
      benefits: [
        "HIPAA compliance certification achieved",
        "Zero data breaches since launch",
        "Average consultation wait time reduced to 5 minutes",
        "Expanded healthcare access to rural areas",
        "Reduced hospital readmission rates by 30%",
        "Improved chronic disease management outcomes",
        "Featured in healthcare innovation awards",
        "Partnership with 50+ hospitals and clinics"
      ]
    }
  },
  
  'logistics-tracking': {
    title: "Real-Time Logistics & Fleet Management",
    subtitle: "Optimizing Supply Chain Operations with IoT and AI",
    client: "Global Logistics Company",
    industry: "Logistics & Transportation",
    location: "Germany",
    duration: "15 Months",
    teamSize: "24+ Developers",
    heroImage: "/src/assets/caseStudy/Truck-Fleet-Management-in-Logistics_.webp",
    
    clientRequirements: {
      title: "Client and Their Business Requirements",
      description: "A major logistics company managing a fleet of 5,000+ vehicles across Europe needed a comprehensive solution to track shipments in real-time, optimize routes, manage drivers, and provide customers with live tracking. They wanted to reduce fuel costs, improve delivery times, and enhance customer satisfaction through better visibility and predictive analytics."
    },
    
    challenge: {
      title: "The Challenge",
      description: "Building a real-time tracking system that handles massive data from IoT devices, provides route optimization, and ensures seamless communication across the supply chain.",
      points: [
        "Track 5,000+ vehicles in real-time with GPS and IoT sensors",
        "Process millions of location updates per day",
        "Implement AI-powered route optimization and traffic prediction",
        "Integrate with warehouse management and ERP systems",
        "Build driver mobile app with offline capabilities",
        "Ensure data accuracy and system reliability 24/7"
      ]
    },
    
    expertise: {
      title: "Tools & Technology",
      technologies: [
        { category: "Frontend", tools: ["React", "React Native", "Mapbox", "Chart.js"] },
        { category: "Backend", tools: ["Node.js", "Python", "PostgreSQL", "TimescaleDB"] },
        { category: "IoT & AI", tools: ["MQTT", "Apache Kafka", "TensorFlow", "Google Maps API"] },
        { category: "Infrastructure", tools: ["AWS", "Lambda", "DynamoDB", "CloudWatch"] }
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We developed an end-to-end logistics platform with real-time tracking, AI-powered route optimization, fleet management, and customer portal for shipment visibility.",
      features: [
        {
          title: "Real-Time Vehicle Tracking",
          desc: "Live GPS tracking with geofencing, route deviation alerts, speed monitoring, and historical playback for all vehicles in the fleet."
        },
        {
          title: "AI Route Optimization",
          desc: "Machine learning algorithms for optimal route planning considering traffic, weather, delivery windows, and vehicle capacity."
        },
        {
          title: "Fleet Management Dashboard",
          desc: "Comprehensive dashboard for vehicle maintenance, fuel consumption, driver performance, and operational analytics."
        },
        {
          title: "Driver Mobile App",
          desc: "Mobile app for drivers with turn-by-turn navigation, delivery proof capture, offline mode, and communication tools."
        },
        {
          title: "Customer Tracking Portal",
          desc: "Self-service portal for customers to track shipments in real-time, receive notifications, and manage delivery preferences."
        },
        {
          title: "Predictive Maintenance",
          desc: "IoT sensor data analysis to predict vehicle maintenance needs, reducing breakdowns and extending vehicle lifespan."
        }
      ],
      implementation: [
        "IoT device integration and data pipeline setup",
        "Real-time data processing with Apache Kafka",
        "Machine learning model development for route optimization",
        "Mobile app development for iOS and Android",
        "Integration with existing ERP and WMS systems",
        "Gradual fleet migration with training programs"
      ]
    },
    
    results: {
      title: "Results & Business Impact",
      description: "The logistics platform delivered significant operational improvements, cost savings, and enhanced customer satisfaction across all metrics.",
      metrics: [
        { number: "35%", label: "Fuel Cost Reduction", color: "#4CAF50" },
        { number: "45%", label: "Faster Deliveries", color: "#2196F3" },
        { number: "92%", label: "On-Time Delivery Rate", color: "#FF9800" },
        { number: "50%", label: "Reduced Idle Time", color: "#9C27B0" }
      ],
      benefits: [
        "Real-time visibility across entire supply chain",
        "Reduced average delivery time from 3 days to 1.5 days",
        "Decreased vehicle maintenance costs by 40%",
        "Improved customer satisfaction score to 4.7/5",
        "Reduced carbon emissions by 30%",
        "Optimized fleet utilization by 25%",
        "Won industry award for logistics innovation",
        "Expanded operations to 10 additional countries"
      ]
    }
  },
  
  'education-lms': {
    title: "Learning Management System & EdTech Platform",
    subtitle: "Transforming Education with Interactive Digital Learning",
    client: "Educational Institution Network",
    industry: "Education & E-Learning",
    location: "Australia",
    duration: "13 Months",
    teamSize: "19+ Developers",
    heroImage: "/src/assets/caseStudy/E-Learning.webp",
    
    clientRequirements: {
      title: "Client and Their Business Requirements",
      description: "A network of educational institutions wanted to develop a comprehensive learning management system to support online and hybrid learning models. The platform needed to support live classes, recorded lectures, assignments, assessments, student progress tracking, and provide tools for teachers to create engaging content. Integration with existing student information systems and support for multiple learning formats were essential requirements."
    },
    
    challenge: {
      title: "The Challenge",
      description: "Creating an engaging, scalable LMS that supports diverse learning styles, handles high concurrent users during peak times, and provides comprehensive analytics.",
      points: [
        "Support 50,000+ concurrent users during live classes",
        "Build interactive content creation tools for educators",
        "Implement AI-powered personalized learning paths",
        "Integrate with existing SIS and authentication systems",
        "Ensure accessibility compliance (WCAG 2.1 AA)",
        "Handle video streaming and content delivery at scale"
      ]
    },
    
    expertise: {
      title: "Tools & Technology",
      technologies: [
        { category: "Frontend", tools: ["React", "Vue.js", "WebRTC", "Three.js"] },
        { category: "Backend", tools: ["Node.js", "Python", "MongoDB", "PostgreSQL"] },
        { category: "Video & Content", tools: ["AWS MediaConvert", "CloudFront", "FFmpeg", "Vimeo API"] },
        { category: "AI & Analytics", tools: ["TensorFlow", "Pandas", "Tableau", "Google Analytics"] }
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We delivered a feature-rich LMS with live classes, interactive content, AI-powered personalization, comprehensive analytics, and seamless integration with existing systems.",
      features: [
        {
          title: "Live Virtual Classrooms",
          desc: "HD video conferencing with screen sharing, whiteboard, breakout rooms, polls, Q&A, and automated attendance tracking."
        },
        {
          title: "Interactive Content Builder",
          desc: "Drag-and-drop course builder with support for videos, quizzes, assignments, simulations, and gamification elements."
        },
        {
          title: "AI-Powered Learning Paths",
          desc: "Personalized course recommendations and adaptive learning paths based on student performance, interests, and learning pace."
        },
        {
          title: "Assessment & Grading System",
          desc: "Automated grading for objective tests, plagiarism detection, rubric-based evaluation, and detailed performance analytics."
        },
        {
          title: "Student Progress Dashboard",
          desc: "Comprehensive analytics for students, teachers, and administrators with insights on engagement, performance, and completion rates."
        },
        {
          title: "Mobile Learning App",
          desc: "Native mobile apps for iOS and Android with offline content access, push notifications, and seamless sync across devices."
        }
      ],
      implementation: [
        "Scalable architecture design for high concurrency",
        "Video streaming infrastructure with CDN",
        "AI model development for personalized learning",
        "Accessibility audit and WCAG compliance",
        "Integration with SIS via SCORM and LTI standards",
        "Pilot program with 5 institutions before full rollout"
      ]
    },
    
    results: {
      title: "Results & Business Impact",
      description: "The LMS platform successfully transformed the learning experience, improving student engagement, outcomes, and enabling seamless transition to hybrid learning models.",
      metrics: [
        { number: "200K+", label: "Active Students", color: "#4CAF50" },
        { number: "5,000+", label: "Educators", color: "#2196F3" },
        { number: "88%", label: "Course Completion Rate", color: "#FF9800" },
        { number: "4.6/5", label: "User Satisfaction", color: "#9C27B0" }
      ],
      benefits: [
        "WCAG 2.1 AA accessibility compliance achieved",
        "Supported smooth transition during pandemic",
        "Increased student engagement by 65%",
        "Improved learning outcomes by 40%",
        "Reduced administrative workload by 50%",
        "Enabled learning from anywhere, anytime",
        "Won EdTech innovation award",
        "Adopted by 50+ educational institutions"
      ]
    }
  }
}


const industries = [
  'Manufacturing & Supply Chain',
  'Banking & FinTech',
  'E-Commerce & Retail',
  'Healthcare & Medical',
  'Logistics & Transportation',
  'Education & E-Learning',
  'Energy & Utility',
  'Media & Entertainment',
  'Government & Public Safety',
  'Travel & Hospitality'
]

// Map industries to case study IDs
const industryCaseStudyMap = {
  'Manufacturing & Supply Chain': 'erp-manufacturing',
  'Banking & FinTech': 'fintech-platform',
  'E-Commerce & Retail': 'ecommerce-marketplace',
  'Healthcare & Medical': 'healthcare-telemedicine',
  'Logistics & Transportation': 'logistics-tracking',
  'Education & E-Learning': 'education-lms'
}

export default function CaseStudyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const study = caseStudiesData[id]
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  const handleIndustryClick = (industry) => {
    const caseStudyId = industryCaseStudyMap[industry]
    if (caseStudyId) {
      navigate(`/case-study/${caseStudyId}`)
    }
  }

  if (!study) {
    return (
      <div className="case-study-page">
        <div className="cs-container" style={{ padding: '100px 40px', textAlign: 'center' }}>
          <h1>Case Study Not Found</h1>
          <Link to="/case-studies" className="cs-btn-primary" style={{ marginTop: '20px', display: 'inline-flex' }}>
            <ArrowLeft size={18} /> Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="case-study-page">
      
      {/* HERO SECTION WITH BANNER */}
      <section className="cs-detail-hero" style={{
        backgroundImage: `url(${study.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="cs-detail-hero-overlay"></div>
        <div className="cs-detail-container">
          <div className="cs-detail-hero-content">
            <div className="cs-hero-badge">{study.industry}</div>
            <h1 className="cs-detail-hero-title">{study.title}</h1>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WITH SIDEBAR */}
      <section className="cs-detail-section">
        <div className="cs-detail-container">
          <div className="cs-detail-layout">
            
            {/* SIDEBAR FILTER */}
            <aside className="cs-sidebar">
              <div className="cs-filter-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h3>Filter Portfolios</h3>
                <ChevronDown size={20} className={isFilterOpen ? 'rotate' : ''} />
              </div>
              
              {isFilterOpen && (
                <div className="cs-filter-section">
                  <h4>By Industries</h4>
                  <ul className="cs-filter-list">
                    {industries.map((industry) => {
                      const caseStudyId = industryCaseStudyMap[industry]
                      const isAvailable = !!caseStudyId
                      const isActive = study.industry === industry
                      
                      return (
                        <li 
                          key={industry}
                          className={`${isActive ? 'active' : ''} ${!isAvailable ? 'disabled' : ''}`}
                          onClick={() => isAvailable && handleIndustryClick(industry)}
                          style={{ cursor: isAvailable ? 'pointer' : 'not-allowed', opacity: isAvailable ? 1 : 0.5 }}
                        >
                          {industry}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </aside>

            {/* MAIN CONTENT */}
            <div className="cs-detail-content">
              
              {/* CLIENT REQUIREMENTS */}
              <div className="cs-content-section">
                <h2 className="cs-content-title">{study.clientRequirements.title}</h2>
                <p className="cs-content-text">{study.clientRequirements.description}</p>
              </div>

              {/* CHALLENGE */}
              <div className="cs-content-section">
                <h2 className="cs-content-title">{study.challenge.title}</h2>
                <p className="cs-content-text">{study.challenge.description}</p>
                <ul className="cs-content-list">
                  {study.challenge.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* SOLUTION */}
              <div className="cs-content-section">
                <h2 className="cs-content-title">{study.solution.title}</h2>
                <p className="cs-content-text">{study.solution.description}</p>
                
                <h3 className="cs-content-subtitle">Key Features</h3>
                {study.solution.features.map((feature, i) => (
                  <div key={i} className="cs-feature-item">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                ))}

                <h3 className="cs-content-subtitle">Implementation Approach</h3>
                <ul className="cs-content-list">
                  {study.solution.implementation.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* RESULTS */}
              <div className="cs-content-section">
                <h2 className="cs-content-title">{study.results.title}</h2>
                <p className="cs-content-text">{study.results.description}</p>
                
                <div className="cs-metrics-simple">
                  {study.results.metrics.map((metric, i) => (
                    <div key={i} className="cs-metric-simple">
                      <span className="cs-metric-num">{metric.number}</span>
                      <span className="cs-metric-lbl">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <h3 className="cs-content-subtitle">Key Benefits</h3>
                <ul className="cs-content-list">
                  {study.results.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* TECHNOLOGIES */}
              <div className="cs-content-section">
                <h2 className="cs-content-title">{study.expertise.title}</h2>
                <div className="cs-tech-simple">
                  {study.expertise.technologies.map((tech, i) => (
                    <div key={i} className="cs-tech-item">
                      <h4>{tech.category}</h4>
                      <p>{tech.tools.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cs-cta">
        <div className="cs-detail-container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve similar results.</p>
          <Link to="/contact" className="cs-btn-primary">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>

    </div>
  )
}
