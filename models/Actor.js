const { Schema, model } = require('mongoose');

const actorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, 'name is too short'],
            maxlength: [20, 'name is too long'],
        },
        age: {
            type: Number,
        },
        gender: {
            type: String,
            required: true,
            enum: ['male', 'female'],
            default: 'male',
        },
        movies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie',
            },
        ],
    },
    { timestamps: true }
);

const Actor = model('Actor', actorSchema);

module.exports = Actor;
