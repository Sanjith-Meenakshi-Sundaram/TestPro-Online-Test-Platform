const express = require('express');
const { register, login, welcome } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/w', welcome);

module.exports = router;
