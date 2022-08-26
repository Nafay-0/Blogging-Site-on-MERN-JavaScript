const express = require('express');
const router = express.Router();
const { getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    Login,
    logOutUser,
    forgotPassword,
    resetPassword,
    } = require('../Controllers/UserController');

const {isAuthenticated,HandleUserRole} = require('../middlewares/auth');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);
router.route('/').post(createUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
router.route('/login').post(Login);
router.route('/logout').post(logOutUser);
router.route('/password/reset').post(forgotPassword);
router.route('/resetPassword/:token').put(resetPassword);


module.exports = router;