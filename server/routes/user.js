const express = require('express');
const { register, login, getUsers, deleteUser, updateUser,getFulldetails } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
router.get('/users/fulldetails/:id', getFulldetails);

module.exports = router;
