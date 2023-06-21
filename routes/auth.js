const router = require('express').Router();

const { loginController, registerController } = require('../controllers/auth');

router.post('/signup', registerController);

router.post('/signin', loginController);

module.exports = router;
