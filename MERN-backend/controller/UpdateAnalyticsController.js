import Analytics from '../model/analyticsModel.js';

const UpdateAnalyticsController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { revenue, usage, totalUsers, dailyActiveSessions } = req.body;

    let analytics = await Analytics.findOne({ userId });

    if (!analytics) {
      // Create new analytics record
      analytics = await Analytics.create({
        userId,
        revenue: revenue || 0,
        usage: usage || 0,
        totalUsers: totalUsers || 0,
        dailyActiveSessions: dailyActiveSessions || []
      });
    } else {
      // Update existing analytics
      if (revenue !== undefined) analytics.revenue = revenue;
      if (usage !== undefined) analytics.usage = usage;
      if (totalUsers !== undefined) analytics.totalUsers = totalUsers;
      if (dailyActiveSessions) {
        analytics.dailyActiveSessions = dailyActiveSessions;
      }
      analytics.updatedAt = new Date();
      await analytics.save();
    }

    return res.status(200).send({
      message: "Analytics updated successfully",
      data: analytics
    });
  } catch (err) {
    console.log("Error updating analytics", err);
    return res.status(500).send({
      message: "Error updating analytics",
      error: err.message
    });
  }
};

export default UpdateAnalyticsController;
