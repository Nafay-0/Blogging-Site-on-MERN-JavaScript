const experss = require('express');
const router = experss.Router();
const { getAllUsers, getUserById, createUser,updateUser,deleteUser } = require('../Controllers/UserController');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);
router.route('/').post(createUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
