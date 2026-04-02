const API_BASE_URL = "http://localhost:8000/api";

export const fetchDashboardData = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/private/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch dashboard data");
    }

    return data.data;
  } catch (error) {
    console.error("Dashboard API error:", error);
    throw error;
  }
};

export const updateAnalytics = async (token, payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/private/analytics/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update analytics");
    }

    return data.data;
  } catch (error) {
    console.error("Update analytics API error:", error);
    throw error;
  }
};
