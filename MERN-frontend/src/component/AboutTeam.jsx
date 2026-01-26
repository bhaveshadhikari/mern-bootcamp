import React from "react";
import { useParams } from "react-router";

function AboutTeamSection() {
  const { teamId } = useParams(); // fetch id from url
  const memberIndex = Number(teamId);

  const teamMembers = [
    {
      name: "Bhavesh Adhikari",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech",
      image: "👨‍💼",
    },
    {
      name: "Samir Subedi",
      role: "CTO",
      description: "Engineering excellence and innovation",
      image: "👩‍💻",
    },
    {
      name: "Diwash Kafle",
      role: "Head of Product",
      description: "Product strategy and user experience",
      image: "👨‍🎨",
    },
    {
      name: "Prajwal Adhikari",
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

  const isValidIndex =
    Number.isInteger(memberIndex) &&
    memberIndex >= 0 &&
    memberIndex < teamMembers.length;

  const membersToRender = isValidIndex
    ? [teamMembers[memberIndex]]
    : teamMembers;

  return (
    <section id="team" className="about-team-section">
      <div className="section-container">
        { !isValidIndex && 
        <>
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the talented individuals who make our vision a reality
          </p>
        </>}

        <div className="team-grid">
          {membersToRender.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.image}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTeamSection;
