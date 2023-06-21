const { Schema, model } = require('mongoose');

const directorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, 'name is too short'],
            maxlength: [20, 'name is too long'],
        },
        bio: {
            type: String,
        },
        contract: {
            type: String,
        },
        specilization: {
            type: String,
        },
    },
    { timestamps: true }
);

const Director = model('Director', directorSchema);

module.exports = Director;
