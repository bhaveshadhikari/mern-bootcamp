import React from "react";
import { Navigate } from "react-router";

function parseJwt(token) {
  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch (e) {
    return null;
  }
}

function Dashboard() {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  const payload = parseJwt(token);
  const name = payload && (payload.name || payload.username || payload.email);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Hello {name ? name : 'User'}!</p>
    </div>
  );
}

export default Dashboard;
