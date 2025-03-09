const UserRepository = require('./repository');

class UserService {
  // New v2 Feature: Advanced Pagination
  async getUsersWithPagination(page, limit) {
    const skip = (page - 1) * limit;
    return await UserRepository.findWithPagination(skip, limit);
  }

  // New v2 Feature: User Analytics for Admins
  async getUserAnalytics() {
    return await UserRepository.getUserAnalytics();
  }
}

module.exports = new UserService();
