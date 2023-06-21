const error = require('../utils/error');
const { createNewActor } = require('../services/actor');

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

module.exports = {
    createActorController,
};
