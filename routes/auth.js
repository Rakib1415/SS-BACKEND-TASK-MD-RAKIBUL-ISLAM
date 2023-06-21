const router = require('express').Router();

router.post('/register', (req, res) => {
    res.status(200).json({ message: 'Hello register' });
});

router.post('/login', (req, res) => {
    res.status(200).json({ message: 'Hello login' });
});

module.exports = router;
