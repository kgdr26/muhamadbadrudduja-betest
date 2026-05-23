const User =
  require('../models/userModel');

class UserRepository {

  async create(data) {
    return await User.create(data);
  }

  async findAll() {
    return await User.find();
  }

  async findByAccountNumber(accountNumber) {

    return await User.findOne({
      accountNumber
    });
  }

  async findByIdentityNumber(identityNumber) {

    return await User.findOne({
      identityNumber
    });
  }

  async update(id, data) {

    return await User.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  }

  async delete(id) {

    return await User.findByIdAndDelete(id);
  }
}

module.exports =
  new UserRepository();