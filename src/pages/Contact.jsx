import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Building2, User } from 'lucide-react';
import './Contact.css';

const countries = [
  "India", "United States", "United Kingdom", "United Arab Emirates", "Australia", 
  "Canada", "Germany", "France", "Singapore", "Japan", "Saudi Arabia", "Qatar",
  "Oman", "Kuwait", "Netherlands", "Switzerland", "Sweden", "Norway", "Denmark",
  "Malaysia", "Thailand", "Indonesia", "Vietnam", "Philippines", "South Africa",
  "Nigeria", "Egypt", "Brazil", "Mexico", "Italy", "Spain", "Russia", "South Korea",
  "New Zealand", "Ireland", "Belgium", "Portugal", "Greece", "Turkey", "Israel",
  "Argentina", "Chile", "Colombia", "Peru", "Other"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      description: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <p className="section-subtitle">Get In Touch</p>
          <h1 className="section-title">Let's Start a <span>Project Together</span></h1>
          <p className="hero-desc">
            Have a question or a project in mind? We'd love to hear from you. 
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we'll reach out to you shortly.</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name"><User size={16} /> Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><Mail size={16} /> Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone"><Phone size={16} /> Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Your Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company"><Building2 size={16} /> Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder="Company Name" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country"><Globe size={16} /> Select Country</label>
                  <select 
                    id="country" 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Choose your country</option>
                    {countries.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="description"><MessageSquare size={16} /> Project Description</label>
                  <textarea 
                    id="description" 
                    name="description" 
                    rows="5" 
                    placeholder="Tell us about your project or requirements..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:info@btplsoft.com">info@btplsoft.com</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p><a href="tel:3075335310">3075335310</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>15442 Ventura Blvd. Ste 201-1736<br />Sherman Oaks, CA 91403</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-card">
                <h3>Follow Us</h3>
                <p>Connect with us on social media for latest updates.</p>
                <div className="social-links">
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Instagram</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section or Placeholder */}
      <section className="contact-map-section">
        <div className="global-map-wrapper">
          <div className="global-map-image-container">
            <img src="/src/assets/images/global-map.webp" alt="BTPL Soft Global Presence" className="global-map-bg" />
            <div className="map-overlay-v2"></div>
            
            {/* Pulsing Location Pings */}
            <div className="ping-point ping-india" data-label="India - Headquarters"></div>
            <div className="ping-point ping-us" data-label="USA - Client Base"></div>
            <div className="ping-point ping-europe" data-label="Europe - Partners"></div>
            <div className="ping-point ping-dubai" data-label="Middle East - Support"></div>
            <div className="ping-point ping-aus" data-label="Australia - Operations"></div>

            <div className="map-info-content">
              <h3>Our Global Footprint</h3>
              <p>Engineering excellence for clients across the globe from our innovation hub in India.</p>
              <div className="map-metrics">
                <div className="metric"><span>5+</span><p>Continents</p></div>
                <div className="metric"><span>24/7</span><p>Global Support</p></div>
                <div className="metric"><span>100%</span><p>Remote Ready</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
