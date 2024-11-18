const express = require('express');
const { register, login, getUsers, deleteUser, updateUser,getFulldetails,getUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
router.get('/users/fulldetails/:id', getFulldetails);

module.exports = router;
