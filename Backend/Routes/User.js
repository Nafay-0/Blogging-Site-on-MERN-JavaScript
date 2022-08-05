const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser,updateUser,deleteUser,Login } = require('../Controllers/UserController');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);
router.route('/').post(createUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
router.route('/login').post(Login);

module.exports = router;