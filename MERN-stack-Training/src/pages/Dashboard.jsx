import React from "react";
import Navbar from "../component/NavBar";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 24 }}>
        <h1>Dashboard</h1>
        <p>Welcome back! Your account is ready to use.</p>
      </div>
    </div>
  );
}

export default Dashboard;
