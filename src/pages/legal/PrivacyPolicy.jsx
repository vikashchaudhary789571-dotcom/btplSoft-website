import React from 'react';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Privacy <span>Policy</span></h1>
          <p>Last Updated: March 2026</p>
        </div>
      </div>
      
      <div className="legal-content section-padding">
        <div className="container">
          <div className="legal-grid">
            <div className="legal-article">
              <section>
                <h2>1. Introduction</h2>
                <p>Welcome to BTPL Soft. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
              </section>

              <section>
                <h2>2. Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul>
                  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                  <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                </ul>
              </section>

              <section>
                <h2>3. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                  <li>To provide and maintain our Service.</li>
                  <li>To notify you about changes to our Service.</li>
                  <li>To provide customer support.</li>
                  <li>To gather analysis or valuable information so that we can improve our Service.</li>
                </ul>
              </section>

              <section>
                <h2>4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
              </section>

              <section>
                <h2>5. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                <p>Email: <strong>info@btplsoft.com</strong></p>
              </section>
            </div>
            
            <aside className="legal-sidebar">
              <div className="legal-card">
                <h3>Quick summary</h3>
                <p>We collect minimal data to provide you with a better experience. We never sell your data to third parties.</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
