const router = require('express').Router();
const { createActorController } = require('../controllers/actor');
const authenticate = require('../middlewares/authenticate');

router.post('/', authenticate, createActorController);

module.exports = router;
