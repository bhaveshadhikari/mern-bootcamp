import React, { useState, useEffect } from "react";
import Navbar from "../component/NavBar";
import UiButton from "../component/ui/Button";
import Card from "../component/ui/Card";
import { fetchDashboardData } from "../services/dashboardService";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found");
          setLoading(false);
          return;
        }

        const data = await fetchDashboardData(token);
        setDashboardData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Failed to load dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  if (loading) {
    return (
      <div className="dashboard-page">
        <Navbar />
        <div style={{ padding: "40px 20px", textAlign: "center" }}>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-page">
        <Navbar />
        <div style={{ padding: "40px 20px", textAlign: "center", color: "#dc2626" }}>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  const revenueValue = dashboardData?.revenue || 0;
  const usageValue = dashboardData?.usage || 0;
  const totalUsersValue = dashboardData?.totalUsers || 0;
  const sessionsData = dashboardData?.recentDailyActiveSessions || [];
  return (
    <div className="dashboard-page">
      <Navbar />
      <section className="dashboard-hero">
        <div className="dashboard-hero-text">
          <p className="dashboard-kicker">SaaS Analytics</p>
          <h1>Dashboard Overview</h1>
          <p>
            Welcome back! Track your growth, engagement, and revenue health in
            one place.
          </p>
        </div>
        <div className="dashboard-hero-actions">
          <div className="dashboard-chips">
            <UiButton className="dashboard-chip is-active" aria-pressed="true">
              Last 30 days
            </UiButton>
            <UiButton className="dashboard-chip">Quarter to date</UiButton>
            <UiButton className="dashboard-chip">Custom</UiButton>
          </div>
          <UiButton className="dashboard-cta">Export report</UiButton>
        </div>
      </section>

      <section className="dashboard-grid">
        <Card className="stat-card">
          <div className="stat-icon">US</div>
          <div>
            <p className="stat-label">Total Users</p>
            <h3>{formatNumber(totalUsersValue)}</h3>
            <p className="stat-meta">Users in your product</p>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon accent-green">MRR</div>
          <div>
            <p className="stat-label">Revenue</p>
            <h3>{formatCurrency(revenueValue)}</h3>
            <p className="stat-meta">Monthly recurring revenue</p>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon accent-amber">RR</div>
          <div>
            <p className="stat-label">Usage</p>
            <h3>{formatNumber(usageValue)}</h3>
            <p className="stat-meta">Total usage count</p>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon accent-purple">NPS</div>
          <div>
            <p className="stat-label">Last Updated</p>
            <h3>{new Date(dashboardData?.lastUpdated).toLocaleDateString()}</h3>
            <p className="stat-meta">Analytics snapshot</p>
          </div>
        </Card>
      </section>

      <section className="dashboard-charts">
        <Card className="chart-card">
          <header className="chart-header">
            <div>
              <p className="chart-label">Product usage</p>
              <h3>Daily active sessions</h3>
            </div>
            <span className="chart-pill">Real-time</span>
          </header>
          <div className="chart-body">
            <svg
              className="line-chart"
              viewBox="0 0 600 220"
              role="img"
              aria-label="Line chart showing daily active sessions"
            >
              <path
                className="line-chart-area"
                d="M0,180 C60,120 120,160 180,120 C240,80 300,130 360,90 C420,50 480,80 540,40 L600,20 L600,220 L0,220 Z"
              />
              <path
                className="line-chart-path"
                d="M0,180 C60,120 120,160 180,120 C240,80 300,130 360,90 C420,50 480,80 540,40 L600,20"
              />
            </svg>
            <div className="chart-legend">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </Card>

        <Card className="chart-card">
          <header className="chart-header">
            <div>
              <p className="chart-label">Revenue mix</p>
              <h3>Plan upgrades</h3>
            </div>
            <span className="chart-pill muted">Weekly</span>
          </header>
          <div className="bar-chart">
            <div className="bar-group">
              <span className="bar" style={{ height: "68%" }} />
              <span className="bar-label">Starter</span>
            </div>
            <div className="bar-group">
              <span className="bar accent" style={{ height: "82%" }} />
              <span className="bar-label">Growth</span>
            </div>
            <div className="bar-group">
              <span className="bar" style={{ height: "54%" }} />
              <span className="bar-label">Scale</span>
            </div>
            <div className="bar-group">
              <span className="bar accent" style={{ height: "90%" }} />
              <span className="bar-label">Enterprise</span>
            </div>
          </div>
          <p className="chart-footnote">Upgrade conversions are up 14% this week.</p>
        </Card>
      </section>

      <section className="dashboard-insights">
        <Card className="insight-card">
          <h4>Key insights</h4>
          <ul>
            <li>Onboarding completion improved after the new checklist.</li>
            <li>Most active teams are in North America and Europe.</li>
            <li>Pro plan trials convert best after 10 days of usage.</li>
          </ul>
        </Card>
        <Card className="insight-card highlight">
          <h4>Next best actions</h4>
          <ul>
            <li>Send a reactivation campaign to 2,430 dormant users.</li>
            <li>Review billing anomalies in the Growth plan.</li>
            <li>Launch the in-app feedback survey this Friday.</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

export default Dashboard;
