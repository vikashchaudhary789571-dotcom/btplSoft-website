import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    question: "What services does BTPL Soft provide?",
    answer: "BTPL Soft offers a wide range of end-to-end technology solutions including Custom Software Development, AI & Machine Learning, Web & Mobile App Development, Digital Marketing, SaaS development, Shopify and BigCommerce solutions, Software Testing, and UI/UX Design."
  },
  {
    question: "How long does it take to develop a custom software solution?",
    answer: "The timeline depends on the complexity and requirements of the project. A simple web application might take 4-8 weeks, while a complex enterprise software solution could take 4-6 months or more. We follow an agile methodology to deliver functional modules iteratively."
  },
  {
    question: "Which technologies do you specialize in?",
    answer: "Our tech stack is diverse and modern. For backend, we use Node.js, Python, Java, and .NET. On the frontend, we specialize in React, Vue, and Next.js. For mobile, we use React Native and Flutter. We also have expertise in AWS, Azure, and Google Cloud platforms."
  },
  {
    question: "Do you provide maintenance and support after project completion?",
    answer: "Yes, we providing comprehensive post-launch support and maintenance services. This includes bug fixes, security updates, performance optimization, and version upgrades to ensure your software remains efficient and secure over time."
  },
  {
    question: "How do you ensure the security of our data and software?",
    answer: "Security is our top priority. We implement industry-standard security protocols, including data encryption (SSL/TLS), secure authentication (OAuth/JWT), regular security audits, and we follow OWASP guidelines to prevent common vulnerabilities and protect your intellectual property."
  },
  {
    question: "Can you help with existing projects or only new ones?",
    answer: "We handle both new 'greenfield' projects and existing legacy systems. Whether you need to build from scratch, add features to an existing app, or refactor outdated code, our team has the expertise to jump in and deliver value at any stage."
  },
  {
    question: "What is your development process?",
    answer: "We primarily follow the Agile-Scrum methodology. This involves discovery and planning, design, development in 2-week sprints, rigorous quality assurance, deployment, and finally, maintenance. This ensures transparency, flexibility, and high-quality results."
  },
  {
    question: "How do you handle project pricing and timelines?",
    answer: "We offer flexible engagement models tailored to your needs: Fixed Price for well-defined projects, and Time & Material for projects with evolving requirements. After the discovery phase, we provide a detailed proposal with clear milestones, costs, and expected delivery dates."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <p className="section-subtitle">Got Questions?</p>
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="section-description">
            Find answers to common queries about our development process, technologies, 
            and how we help businesses achieve their digital goals.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span className="faq-icon-wrapper">
                  <HelpCircle size={18} className="faq-icon-help" />
                </span>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
