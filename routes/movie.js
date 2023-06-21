const router = require('express').Router();

router.post('/', (req, res) => {
    res.status(201).json({ message: 'Created a movie successfully' });
});

router.get('/', (req, res) => {
    res.status(200).json({ message: 'get all movie' });
});

router.get('/:movieId', (req, res) => {
    res.status(200).json({ message: 'get a movie' });
});

module.exports = router;
