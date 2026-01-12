import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
// Navbar Component
function Navbar() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const navigate = useNavigate();

  const authenticatedUser = () => {
    setIsUserAuthenticated(true);
    console.log("User authenticated Value", isUserAuthenticated);
    // some login or sign in logic and navigate
    navigate("/sign-in");
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
      <div className="navbar-brand">SaaS Project</div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#about" className="navbar-link">
          About Us
        </a>
        <Link to={"/team"}>Team</Link>
        {/* User Clicks on Signin -> updates signin to "Get started" */}

        {isUserAuthenticated ? (
          <button className="navbar-button">Get Started</button>
        ) : (
          <button className="navbar-button-signin" onClick={authenticatedUser}>
            Sign In
          </button>
        )}
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
