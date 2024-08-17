const express = require('express');
const { register, login } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
//router.get('/tests', getCars);

module.exports = router;
