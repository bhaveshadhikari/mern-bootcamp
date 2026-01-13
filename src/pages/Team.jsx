import React from "react";
import Navbar from "../component/NavBar";
import AboutTeam from "../component/AboutTeam";
import { useParams } from "react-router";

function Team() {
  // routing bata pathayeko teamId access gareko
  const {teamId} = useParams();

  return (
    <div>
      <Navbar />
      <h1>Current Team ID: {teamId} </h1>
      <AboutTeam />
    </div>
  );
}

export default Team;
