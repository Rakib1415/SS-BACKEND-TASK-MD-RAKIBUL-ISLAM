const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, 'name is too short'],
            maxlength: [20, 'name is too long'],
        },
        runtime: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
        },
        actors: [
            {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Actor',
            },
        ],
        director: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Director',
        },
    },
    { timestamps: true }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
