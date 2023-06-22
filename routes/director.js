const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const { createDirectorController, getDirectorsController } = require('../controllers/director');

router.post('/', authenticate, createDirectorController);
router.get('/', getDirectorsController);

module.exports = router;
