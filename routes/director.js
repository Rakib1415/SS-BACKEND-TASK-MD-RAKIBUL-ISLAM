const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const { createDirectorController, getDirectorsController } = require('../controllers/director');
const { directorValidationRules, validate } = require('../middlewares/validator');

router.post('/', directorValidationRules(), validate, authenticate, createDirectorController);
router.get('/', getDirectorsController);

module.exports = router;
