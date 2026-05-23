const userService = require('../services/userService');

exports.createUser = async (req, res) => {

  try {

    const user =
      await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: user
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
        message: err.message
    });
  }
};

exports.getUsers = async (req, res) => {

  const users =
    await userService.getUsers();

  res.json(users);
};

exports.getByAccountNumber =
  async (req, res) => {

  const user =
    await userService.getByAccountNumber(
      req.params.accountNumber
    );

  res.json(user);
};

exports.getByIdentityNumber =
  async (req, res) => {

  const user =
    await userService.getByIdentityNumber(
      req.params.identityNumber
    );

  res.json(user);
};

exports.updateUser = async (req, res) => {

  const user =
    await userService.updateUser(
      req.params.id,
      req.body
    );

  res.json(user);
};

exports.deleteUser = async (req, res) => {

  await userService.deleteUser(
    req.params.id
  );

  res.json({
    message: 'User deleted'
  });
};