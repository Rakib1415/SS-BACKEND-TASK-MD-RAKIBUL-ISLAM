const error = require('../utils/error');
const { createNewDirector, findDirectors } = require('../services/director');

const createDirectorController = async (req, res, next) => {
    const { name, contract, bio, specilization } = req.body;
    if (!name || !contract) {
        return error('Invalid data', 400);
    }
    try {
        const director = await createNewDirector({ name, contract, bio, specilization });
        return res.status(201).json({ message: 'Director created successfully', director });
    } catch (e) {
        return next(e);
    }
};

const getDirectorsController = async (_req, res, next) => {
    try {
        const directors = await findDirectors();
        return res.status(200).json({ message: 'success', directors });
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    createDirectorController,
    getDirectorsController,
};
