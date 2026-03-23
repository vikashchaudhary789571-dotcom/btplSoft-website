import React from 'react';
import './Legal.css';

export default function ServicePolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Services <span>Policy</span></h1>
          <p>Service Standards & Guarantees</p>
        </div>
      </div>
      
      <div className="legal-content section-padding">
        <div className="container">
          <div className="legal-grid">
            <div className="legal-article">
              <section>
                <h2>1. Service Scope</h2>
                <p>BTPL Soft provides professional IT services including Web Development, Mobile App Development, Custom Software, SEO, and Digital Marketing. Each project's specific scope is defined in the agreed-upon Proposal or Statement of Work (SOW).</p>
              </section>

              <section>
                <h2>2. Project Execution</h2>
                <p>We follow Agile and Waterfall methodologies depending on project requirements. Clients are expected to provide timely feedback and necessary assets to ensure project timelines are met.</p>
              </section>

              <section>
                <h2>3. Payment Terms</h2>
                <p>Unless otherwise agreed in writing, payments are structured in milestones. A commencement deposit is required for all new projects. BTPL Soft reserves the right to pause work if payments are delayed beyond the agreed period.</p>
              </section>

              <section>
                <h2>4. Support & Maintenance</h2>
                <p>Post-launch support is provided for a fixed period as specified in the contract. Extended maintenance contracts are available for ongoing support and updates.</p>
              </section>

              <section>
                <h2>5. Cancellation Policy</h2>
                <p>Either party may terminate a project with written notice. In such cases, the client is responsible for payment for all work completed up to the termination date.</p>
              </section>
            </div>

            <aside className="legal-sidebar">
              <div className="legal-card green">
                <h3>Our Commitment</h3>
                <p>We strive for 100% client satisfaction and high-quality code delivery on every project.</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
