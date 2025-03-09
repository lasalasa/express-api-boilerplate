const User = require('./model');

class UserRepository {
  async findAll() {
    return await User.find().select('-password'); // Exclude password
  }

  async findById(id) {
    return await User.findById(id).select('-password'); // Exclude password
  }

  async findByEmail(email) {
    return await User.findOne({ email }).select('+password');
  }

  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async update(id, userData) {
    return await User.findByIdAndUpdate(id, userData, { new: true }).select('-password'); // Exclude password
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
