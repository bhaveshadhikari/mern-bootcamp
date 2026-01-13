import React, { useState } from "react";
import { Link } from "react-router";
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
        <Link to={"/home"} className="navbar-link">
          Home
        </Link>
        <a href="#about" className="navbar-link">
          About Us
        </a>
        <Link to={"/team"} className="navbar-link">
          Team
        </Link>
        <Link to={"/contact"} className="navbar-link">
          Contact
        </Link>
        {/* User Clicks on Signin -> updates signin to "Get started" */}

        {isUserAuthenticated ? (
          <button className="navbar-button">Get Started</button>
        ) : (
          <Link to="/sign-in">
            <button
              className="navbar-button-signin"
              // onClick={authenticatedUser}
            >
              Sign In
            </button>
          </Link>
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
