const error = require('../utils/error');
const { createNewMovie, findMovies, findMovieById } = require('../services/movie');

const createMovieController = async (req, res, next) => {
    const { name, runtime, rating, actors, director } = req.body;
    if (!name || !runtime || !actors || !director) {
        return error('Invalid data', 400);
    }
    try {
        const movie = await createNewMovie({ name, runtime, rating, actors, director });
        return res.status(201).json({ message: 'Movie created successfully', movie });
    } catch (e) {
        return next(e);
    }
};

const getMoviesController = async (_req, res, next) => {
    try {
        const movies = await findMovies();
        return res.status(200).json({ message: 'success', movies });
    } catch (e) {
        console.log(e);
        return next(e);
    }
};

const getMovieController = async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const movie = await findMovieById(movieId);
        return res.status(200).json({ message: 'success', movie });
    } catch (e) {
        console.log(e);
        return next(e);
    }
};

module.exports = {
    createMovieController,
    getMoviesController,
    getMovieController,
};
