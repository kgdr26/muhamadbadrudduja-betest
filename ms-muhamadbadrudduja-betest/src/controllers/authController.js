const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {

  const payload = {
    username: 'admin'
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );

  res.json({
    token
  });
};