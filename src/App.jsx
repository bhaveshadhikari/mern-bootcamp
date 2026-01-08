import { useState, useEffect } from "react";
import "./App.css";
import AboutUsSection from "./AboutUs";
import Footer from "./Footer";
import AboutTeamSection from "./AboutTeam";
// Navbar Component
function Navbar() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const authenticatedUser = () => {
    setIsUserAuthenticated(true);
    console.log("User authenticated Value", isUserAuthenticated);
  };
  // fetch facebook Posts
  //facebook API KEY
  //FACEBOOKA_API_KEY -> using

  const renderAuthenticationScreen = () => {
    // computations

    if (!isUserAuthenticated) {
      return (
        <button className="navbar-button-signin" onClick={authenticatedUser}>
          Sign In
        </button>
      );
    } else {
      return <button className="navbar-button">Get Started</button>;
    }
  };

  const fetchHomeData = async () => {
    try {
      // API call
      // Handles err
    } catch (err) {}
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">SaaS Project</div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#about" className="navbar-link">
          About Us
        </a>
        <a href="#team" className="navbar-link">
          Team
        </a>
        {/* User Clicks on Signin -> updates signin to "Get started" */}
        {/* 
        
        {isUserAuthenticated ? (
          <button className="navbar-button">Get Started</button>
        ) : (
          <button className="navbar-button-signin" onClick={authenticatedUser}>
            Sign In
          </button>
        )} */}

        {/* {isUserAuthenticated && (
          <button className="navbar-button">Get Started</button>
        )} */}

        {renderAuthenticationScreen()}
      </div>
    </nav>
  );
}

// properties -> {title , backgroundColor, onPress}
function Button(props) {
  return (
    <div
      style={{
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        marginTop: 10,
        padding: 5,
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "cursive",
        }}
      >
        {props.title}
      </span>
    </div>
  );
}
// Landing/Hero Section
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

// About Team Section

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <LandingSection />
      <AboutUsSection />
      <AboutTeamSection />
      <Footer />
    </div>
  );
}

export default App;
