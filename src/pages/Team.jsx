import React from "react";
import Navbar from "../component/NavBar";
import AboutTeam from "../component/AboutTeam";
import { useParams } from "react-router";

function Team() {
  const { teamId } = useParams();
  console.log("TEAM ID", teamId);
  // id =3
  // API call -> fetch information for team 3
  return (
    <div>
      <Navbar />
      <AboutTeam />
    </div>
  );
}

export default Team;
