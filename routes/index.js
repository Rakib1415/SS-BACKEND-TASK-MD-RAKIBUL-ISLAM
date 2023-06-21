const router = require('express').Router();
const authRoutes = require('./auth');
const movieRoutes = require('./movie');
const actorRoutes = require('./actor');
const directorRoutes = require('./director');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/movies', movieRoutes);
router.use('/api/v1/actors', actorRoutes);
router.use('/api/v1/directors', directorRoutes);

module.exports = router;
