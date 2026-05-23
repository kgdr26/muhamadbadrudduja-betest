const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/userController');

const auth =
  require('../middlewares/authMiddleware');

router.post(
  '/',
  auth,
  controller.createUser
);

router.get(
  '/',
  auth,
  controller.getUsers
);

router.get(
  '/account/:accountNumber',
  auth,
  controller.getByAccountNumber
);

router.get(
  '/identity/:identityNumber',
  auth,
  controller.getByIdentityNumber
);

router.put(
  '/:id',
  auth,
  controller.updateUser
);

router.delete(
  '/:id',
  auth,
  controller.deleteUser
);

module.exports = router;