/* eslint-disable implicit-arrow-linebreak */
const Actor = require('../models/Actor');
const error = require('../utils/error');

const findActors = () => Actor.find().populate('movies');

const findActorByProperty = (key, value) => {
    if (key === '_id') {
        return Actor.findById(value);
    }
    return Actor.findOne({ [key]: value });
};

const createNewActor = async ({ name, age, gender, phone }) => {
    const existingActor = await findActorByProperty('phone', phone);
    if (existingActor) {
        throw error('Actor already exists', 400);
    }
    const actor = new Actor({
        name,
        age,
        phone,
        gender: gender || 'male',
    });
    return actor.save();
};

module.exports = {
    createNewActor,
    findActorByProperty,
    findActors,
};
