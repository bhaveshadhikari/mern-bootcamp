import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    unique: true
  },
  revenue: {
    type: Number,
    default: 0
  },
  usage: {
    type: Number,
    default: 0,
    description: "Usage count/hours"
  },
  totalUsers: {
    type: Number,
    default: 0,
    description: "Total users in their product"
  },
  dailyActiveSessions: [{
    date: { type: Date, default: Date.now },
    activeSessions: { type: Number, default: 0 }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Analytics = mongoose.model("analytics", analyticsSchema);

export default Analytics;
