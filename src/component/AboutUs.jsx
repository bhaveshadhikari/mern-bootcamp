// About Us Section
import React from "react";

function AboutUs() {
  return (
    <section id="about" className="about-us-section">
      <div className="section-container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              We are a cutting-edge SaaS company dedicated to providing
              innovative solutions that empower businesses to achieve their
              goals. Our platform combines the power of artificial intelligence
              with intuitive design to deliver exceptional results.
            </p>
            <p>
              Since our founding, we've been committed to helping teams work
              smarter, not harder. We believe in the power of technology to
              transform workflows and drive productivity to new heights.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>Innovation</h4>
              <p>Pioneering the future of business technology</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Focus</h4>
              <p>Dedicated to solving real business problems</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h4>Excellence</h4>
              <p>Committed to delivering quality solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
