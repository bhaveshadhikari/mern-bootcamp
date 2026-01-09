import React from "react";
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

export default AboutTeamSection;
