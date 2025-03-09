const UserService = require('./service');

class UserController {
  // New v2 Feature: Advanced Pagination
  async getUsersWithPagination(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const users = await UserService.getUsersWithPagination(page, limit);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching paginated users', error: error.message });
    }
  }

  // New v2 Feature: User Analytics for Admins
  async getUserAnalytics(req, res) {
    try {
      const analytics = await UserService.getUserAnalytics();
      res.status(200).json(analytics);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user analytics', error: error.message });
    }
  }
}

module.exports = new UserController();
