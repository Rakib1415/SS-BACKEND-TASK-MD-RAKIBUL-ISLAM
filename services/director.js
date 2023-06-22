const Director = require('../models/Director');
const error = require('../utils/error');

const findDirectors = () => Director.find();

const findDirectorByProperty = (key, value) => {
    if (key === '_id') {
        return Director.findById(value);
    }
    return Director.findOne({ [key]: value });
};

const createNewDirector = async ({ name, contract, bio, specilization }) => {
    const existingDirector = await findDirectorByProperty('contract', contract);
    if (existingDirector) {
        throw error('Director already exists', 400);
    }
    const director = new Director({
        name,
        contract,
        bio,
        specilization,
    });
    return director.save();
};

module.exports = {
    createNewDirector,
    findDirectorByProperty,
    findDirectors,
};
