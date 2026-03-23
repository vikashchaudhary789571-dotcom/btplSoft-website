import React from 'react';
import './GlobalPresence.css';
import mapImg from "../assets/images/global-map-2.webp";
import { Globe2, MapPin, Users2, ShieldCheck, Zap } from 'lucide-react';

const locations = [
  { id: 1, city: 'Dallas', country: 'USA', top: '38%', left: '18%' },
  { id: 2, city: 'London', country: 'UK', top: '28%', left: '48%' },
  { id: 3, city: 'Noida', country: 'India (HQ)', top: '48%', left: '68%', isHQ: true },
  { id: 4, city: 'Riyadh', country: 'Saudi Arabia', top: '52%', left: '58%' },
  { id: 5, city: 'Tokyo', country: 'Japan', top: '38%', left: '88%' },
  { id: 6, city: 'Melbourne', country: 'Australia', top: '78%', left: '85%' },
];

export default function GlobalPresence() {
  return (
    <section className="gp-v3-section">
      <div className="gp-v3-bg-text">NETWORK</div>
      
      <div className="container">
        <div className="gp-v3-top">
          <div className="gp-v3-title-area">
            <div className="gp-v3-badge">
              <Globe2 size={16} /> <span>International Reach</span>
            </div>
            <h2 className="gp-v3-heading">
              Our <span>Connected</span> <br /> Global Network
            </h2>
          </div>
          
          <div className="gp-v3-stats-grid">
            <div className="gp-v3-stat-card">
              <div className="stat-icon"><Users2 /></div>
              <div className="stat-info">
                <h3>500+</h3>
                <p>Global Clients</p>
              </div>
            </div>
            <div className="gp-v3-stat-card">
              <div className="stat-icon"><Zap /></div>
              <div className="stat-info">
                <h3>05+</h3>
                <p>Continents Covered</p>
              </div>
            </div>
            <div className="gp-v3-stat-card">
              <div className="stat-icon"><ShieldCheck /></div>
              <div className="stat-info">
                <h3>100%</h3>
                <p>Secure Delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gp-v3-visual-area">
          <div className="gp-v3-map-frame">
            <div className="gp-v3-scanner-line"></div>
            <img src={mapImg} alt="World Map" className="gp-v3-map-img" width="1200" height="600" loading="lazy" />
            
            <div className="gp-v3-pings-layer">
              {locations.map((loc) => (
                <div 
                  key={loc.id} 
                  className={`gp-v3-node ${loc.isHQ ? 'is-hq' : ''}`}
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="node-dot">
                    <div className="node-pulse"></div>
                  </div>
                  <div className="node-card">
                    <div className="node-card-content">
                      <MapPin size={12} />
                      <div>
                        <strong>{loc.city}</strong>
                        <span>{loc.country}</span>
                      </div>
                    </div>
                  </div>
                  {/* Connectors to HQ */}
                  {!loc.isHQ && <div className="node-connector"></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="gp-v3-bottom-info">
            <div className="info-box">
              <h3>Engineering Without Borders</h3>
              <p>
                From our state-of-the-art development center in India, we provide 
                premium software solutions to visionaries in North America, Europe, 
                and across the world. No distance is too far for innovation.
              </p>
            </div>
            <div className="info-box accent">
              <h3>24/7 Global Operations</h3>
              <p>
                Our global presence ensures that we are always available to support 
                your mission-critical systems, regardless of your time zone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
