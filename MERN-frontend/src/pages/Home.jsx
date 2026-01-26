import React from "react";
import Navbar from "../component/NavBar";
import LandingSection from "../component/HerosSection";
import AboutUs from "../component/AboutUs";
import AboutTeam from "../component/AboutTeam";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <AboutUs />
      <AboutTeam />
      <Footer />
    </>
  );
}

export default Home;
