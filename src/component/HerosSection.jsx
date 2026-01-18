import React, { useEffect, useState } from "react";
import Button from "./Button";

function LandingSection() {
  const [clockWidget, setClockWidget] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClockWidget = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://127.0.0.1:8080/widget/clock");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const html = await response.text();
        setClockWidget(html);
      } catch (err) {
        setError(err.message || "Failed to load clock widget");
      } finally {
        setLoading(false);
      }
    };

    fetchClockWidget();
  }, []);

  return (
    <section id="home" className="landing-section">
      <div className="landing-content">
        <h1 className="landing-title">One Tool For Doing It All Together</h1>

        {loading && <p>Loading clock...</p>}
        {error && <p className="error-text">Error: {error}</p>}

        {!loading && !error && clockWidget && (
          <iframe
            srcDoc={clockWidget}
            title="Nepal Clock Widget"
          />
        )}

        <p className="landing-description">
          With comprehensive competitor analysis, detailed web research, and
          strategic internal linking, your articles will be optimized for
          success. Transform your workflow with our AI-powered platform.
        </p>

        <div className="landing-buttons">
          <Button title="Book a Demo" backgroundColor="purple" />
          <Button title="Use AI" backgroundColor="blue" />
        </div>
      </div>
    </section>
  );
}

export default LandingSection;