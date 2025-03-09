const User = require('./model'); // Import Mongoose Model

class UserRepository {
  // New v2 Feature: Advanced Pagination
  async findWithPagination(skip, limit) {
    return await User.find().select('-password').skip(skip).limit(limit);
  }

  // New v2 Feature: User Analytics for Admins
  async getUserAnalytics() {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true });
    const adminUsers = await User.countDocuments({ role: 'admin' });
    return { totalUsers, activeUsers, adminUsers };
  }
}

module.exports = new UserRepository();
