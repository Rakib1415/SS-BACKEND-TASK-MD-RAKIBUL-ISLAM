/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */

const Movie = require('../models/Movie');
const error = require('../utils/error');
const { findActorByProperty } = require('./actor');

const findMovies = () =>
    Movie.aggregate([
        {
            $lookup: {
                from: 'actors',
                localField: 'actors',
                foreignField: '_id',
                as: 'actors',
            },
        },
        {
            $lookup: {
                from: 'directors',
                localField: 'director',
                foreignField: '_id',
                as: 'director',
            },
        },
    ]);

const findMovieById = (movieId) => Movie.findById(movieId).populate(['actors', 'director']);

const findMovieByProperty = (key, value) => {
    if (key === '_id') {
        return Movie.findById(value);
    }
    return Movie.findOne({ [key]: value });
};

const createNewMovie = async ({ name, runtime, rating, actors, director }) => {
    const existingMovie = await findMovieByProperty('name', name);
    if (existingMovie) {
        throw error('Movie already exists', 400);
    }
    const movie = new Movie({
        name,
        runtime,
        rating: rating || 0.0,
        actors,
        director,
    });
    actors.map(async (actorId) => {
        const actor = await findActorByProperty('_id', actorId);
        if (!actor?.movies?.includes(actorId)) {
            actor?.movies?.push(movie?._id);
            await actor.save();
        }
    });
    return movie.save();
};

module.exports = {
    createNewMovie,
    findMovieByProperty,
    findMovies,
    findMovieById,
};
