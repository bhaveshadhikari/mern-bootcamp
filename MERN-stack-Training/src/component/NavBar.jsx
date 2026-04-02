import React from "react";
import { Link, useNavigate } from "react-router";
// Navbar Component
function Navbar() {
  const navigate = useNavigate();
  const isUserAuthenticated = Boolean(localStorage.getItem("token"));

  const authenticatedUser = () => {
    // some login or sign in logic and navigate
    navigate("/auth/sign-in");
  };

  const renderAuthenticationScreen = () => {
    // computations
    // if (!isUserAuthenticated) {
    //   return (
    //     <button className="navbar-button-signin" onClick={authenticatedUser}>
    //       Sign In
    //     </button>
    //   );
    // } else {
    //   return <button className="navbar-button">Get Started</button>;
    // }
  };

  const fetchHomeData = async () => {
    try {
      // API call
      let res = fetch("URL");
      // Handles err
    } catch (err) {}
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-brand-icon" aria-hidden="true">
            ◆
          </span>
          <span className="navbar-brand-text">SaaS Project</span>
        </div>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">
            Home
          </a>
          <a href="#about" className="navbar-link">
            About Us
          </a>
          <Link className="navbar-link" to="/team">
            Team
          </Link>
        </div>
        {/* User Clicks on Signin -> updates signin to "Get started" */}
        <div className="navbar-actions">
          {isUserAuthenticated ? (
            <Link className="navbar-button" to="/dashboard">
              Get Started
            </Link>
          ) : (
            <button className="navbar-button-signin" onClick={authenticatedUser}>
              Sign In
            </button>
          )}
        </div>
        {/* {isUserAuthenticated && (
            <button className="navbar-button">Get Started</button>
          )}
 */}
        {renderAuthenticationScreen()}
      </div>
    </nav>
  );
}

export default Navbar;
