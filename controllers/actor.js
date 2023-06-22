const error = require('../utils/error');
const { createNewActor, findActors } = require('../services/actor');

const createActorController = async (req, res, next) => {
    const { name, age, gender, phone } = req.body;
    if (!name || !age || !phone) {
        return error('Invalid data', 400);
    }
    try {
        const actor = await createNewActor({ name, age, gender, phone });
        return res.status(201).json({ message: 'Actor created successfully', actor });
    } catch (e) {
        return next(e);
    }
};

const getActorsController = async (_req, res, next) => {
    try {
        const actors = await findActors();
        return res.status(200).json({ message: 'success', actors });
    } catch (e) {
        console.log(e);
        return next(e);
    }
};

module.exports = {
    createActorController,
    getActorsController,
};
