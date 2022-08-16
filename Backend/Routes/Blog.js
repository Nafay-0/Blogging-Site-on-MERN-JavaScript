const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();
const {isAuthenticated,HandleUserRole} = require('../middlewares/auth');

const { getAllBlogs,
    createBlog,
    getBlogById,
    getBlogByAuthor,
    updateBlog,
    DeleteBlog,
    addReview,
    getReviewsByBlog } = require('../Controllers/BlogController');

router.route('/').get(getAllBlogs);
router.route('/').post(createBlog);
router.route('/:id').get(getBlogById);
router.route('/author/:id').get(getBlogByAuthor);
router.route('/:id').put(isAuthenticated,HandleUserRole,updateBlog);
router.route('/:id').delete(isAuthenticated,HandleUserRole,DeleteBlog);
router.route('/:id/review').post(isAuthenticated,addReview);
router.route('/:id/review').get(getReviewsByBlog);

module.exports = router;