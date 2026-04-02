import Analytics from '../model/analyticsModel.js';

const DashboardController = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch analytics for the logged-in user
    let analytics = await Analytics.findOne({ userId });

    if (!analytics) {
      // Create default analytics if doesn't exist
      analytics = await Analytics.create({
        userId,
        revenue: 0,
        usage: 0,
        totalUsers: 0,
        dailyActiveSessions: [
          { date: new Date(), activeSessions: 0 }
        ]
      });
    }

    // Calculate summary metrics
    const totalRevenue = analytics.revenue;
    const totalUsage = analytics.usage;
    const totalProductUsers = analytics.totalUsers;
    const recentSessions = analytics.dailyActiveSessions.slice(-7); // Last 7 days

    const dashboardData = {
      userId,
      revenue: totalRevenue,
      usage: totalUsage,
      totalUsers: totalProductUsers,
      recentDailyActiveSessions: recentSessions,
      lastUpdated: analytics.updatedAt
    };

    return res.status(200).send({
      message: "Dashboard data fetched successfully",
      data: dashboardData
    });
  } catch (err) {
    console.log("Error fetching dashboard", err);
    return res.status(500).send({
      message: "Error fetching dashboard data",
      error: err.message
    });
  }
};

export default DashboardController;
