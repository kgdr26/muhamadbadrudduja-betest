const userRepository =
  require('../repositories/userRepository');

const redisClient =
  require('../utils/redisClient');

class UserService {

  async createUser(data) {

    return await userRepository.create(data);
  }

  async getUsers() {

    return await userRepository.findAll();
  }

  async getByAccountNumber(accountNumber) {

    const cache =
      await redisClient.get(accountNumber);

    if (cache) {

      return JSON.parse(cache);
    }

    const user =
      await userRepository
      .findByAccountNumber(accountNumber);

    if (user) {

      await redisClient.set(
        accountNumber,
        JSON.stringify(user),
        {
          EX: 60
        }
      );
    }

    return user;
  }

  async getByIdentityNumber(identityNumber) {

    return await userRepository
      .findByIdentityNumber(identityNumber);
  }

  async updateUser(id, data) {

    return await userRepository.update(id, data);
  }

  async deleteUser(id) {

    return await userRepository.delete(id);
  }
}

module.exports =
  new UserService();