import { useState, useEffect } from "react";
import "./App.css";

// Navbar Component
function Navbar() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const authenticatedUser = () => {
    setIsUserAuthenticated(true);
    console.log("User authenticated Value", isUserAuthenticated);
  };

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

// About Us Section
function AboutUsSection() {
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

// About Team Section
function AboutTeamSection() {
  // json <- API request
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech",
      image: "👨‍💼",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      description: "Engineering excellence and innovation",
      image: "👩‍💻",
    },
    {
      name: "Mike Johnson",
      role: "Head of Product",
      description: "Product strategy and user experience",
      image: "👨‍🎨",
    },
    {
      name: "Sarah Williams",
      role: "Head of Marketing",
      description: "Growth and brand strategy expert",
      image: "👩‍💼",
    },
    {
      name: "Redmen",
      role: "HOE",
      description: "Engineering Design and Architect",
      image: "👨‍🎨",
    },
  ];
  const displayTeams = () => {
    return (
      <>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-avatar">{member.image}</div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <section id="team" className="about-team-section">
      <div className="section-container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the talented individuals who make our vision a reality
        </p>
        <div className="team-grid">{displayTeams()}</div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");

  const handleOnChangeEmail = (e) => {
    let emailValue = e.target.value;
    setEmail(emailValue);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeContactDetails = (e) => {
    let contactValue = e.target.value;
    setContact(contactValue);
  };

  const handleOnChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleFormSubmit = (e) => {
    // alert("Form Submitted");
    console.log(e.target);
    // email check
    //message length > 10 ??
    //contct Number isNumber()

    // request call -> server save
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SaaS Project</h3>
          <p>Empowering businesses with innovative solutions</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h2> Contact Us Form</h2>

          <form className="footer-form" onSubmit={handleFormSubmit}>
            <input
              name="email"
              placeholder="email"
              className="form-input-field"
              onChange={handleOnChangeEmail}
              value={email}
            />
            <input
              name="Password"
              value={password}
              placeholder="Password"
              className="form-input-field"
              onChange={handleOnChangePassword}
              type={"password"}
            />
            <input
              placeholder="Contact Details"
              className="form-input-field"
              onChange={handleOnChangeContactDetails}
              value={contact}
            />
            <input
              placeholder="Message"
              className="form-input-field"
              onChange={handleOnChangeMsg}
              value={msg}
              style={{ minHeight: 100 }}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SaaS Project. All rights reserved.</p>
      </div>
    </footer>
  );
}

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
