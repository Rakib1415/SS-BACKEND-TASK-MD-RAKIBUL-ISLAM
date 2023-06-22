const router = require('express').Router();
const { createActorController, getActorsController } = require('../controllers/actor');
const authenticate = require('../middlewares/authenticate');
const { validate, actorValidationRules } = require('../middlewares/validator');

router.post('/', actorValidationRules(), validate, authenticate, createActorController);
router.get('/', getActorsController);

module.exports = router;
