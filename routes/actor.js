const router = require('express').Router();
const { createActorController, getActorsController } = require('../controllers/actor');
const authenticate = require('../middlewares/authenticate');

router.post('/', authenticate, createActorController);
router.get('/', getActorsController);

module.exports = router;
