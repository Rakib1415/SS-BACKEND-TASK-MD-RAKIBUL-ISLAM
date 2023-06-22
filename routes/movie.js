const router = require('express').Router();
const {
    createMovieController,
    getMoviesController,
    getMovieController,
} = require('../controllers/movie');
const authenticate = require('../middlewares/authenticate');
const { movieValidationRules, validate } = require('../middlewares/validator');

router.post('/', movieValidationRules(), validate, authenticate, createMovieController);

router.get('/', getMoviesController);

router.get('/:movieId', getMovieController);

module.exports = router;
