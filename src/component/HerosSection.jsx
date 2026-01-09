import React from "react";
import Button from "./Button";

// Landing/Hero Section
// Pascal Case . File name and component name should match

function LandingSection() {
  return (
    <section id="home" className="landing-section">
      <div className="landing-content">
        <h1 className="landing-title">One Tool For Doing It All Together</h1>
        <p className="landing-description">
          With comprehensive competitor analysis, detailed web research, and
          strategic internal linking, your articles will be optimized for
          success. Transform your workflow with our AI-powered platform.
        </p>
        <div className="landing-buttons">
          <Button title={"Book a Demo"} backgroundColor={"purple"} />
          <Button title={"Use AI"} backgroundColor={"blue"} />
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
