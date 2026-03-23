import React from 'react';
import './Legal.css';

export default function TermsConditions() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Terms & <span>Conditions</span></h1>
          <p>Effective Date: March 2026</p>
        </div>
      </div>
      
      <div className="legal-content section-padding">
        <div className="container">
          <div className="legal-grid">
            <div className="legal-article">
              <section>
                <h2>1. Agreement to Terms</h2>
                <p>By accessing or using the BTPL Soft website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.</p>
              </section>

              <section>
                <h2>2. Intellectual Property</h2>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of BTPL Soft and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BTPL Soft.</p>
              </section>

              <section>
                <h2>3. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials on BTPL Soft's website for personal, non-commercial transitory viewing only.</p>
                <ul>
                  <li>Modify or copy the materials.</li>
                  <li>Use the materials for any commercial purpose.</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                </ul>
              </section>

              <section>
                <h2>4. Limitation of Liability</h2>
                <p>In no event shall BTPL Soft, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
              </section>

              <section>
                <h2>5. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
              </section>
            </div>

            <aside className="legal-sidebar">
              <div className="legal-card highlight">
                <h3>Important Notice</h3>
                <p>Using our website implies acceptance of these terms. Please read them carefully.</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
