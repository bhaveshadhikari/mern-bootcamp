import React from "react";

function TeamDetails() {
  let user = {
    name: "Redmen",
    details:
      "Reserve usage of useNavigate to situations where the user is not interacting but you need to navigate, for example:",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          height: "80vh",
          borderRadius: 10,
          padding: 20,
          width: "50vw",
        }}
      >
        <h1 style={{ textAlign: "center", padding: 100 }}>{user.name}</h1>
        <span style={{ textAlign: "center", marginTop: 20 }}>
          {user.details}
        </span>
      </div>
    </div>
  );
}

export default TeamDetails;
