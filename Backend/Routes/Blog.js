const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();
const {isAuthenticated} = require('../middlewares/auth');

const { getAllBlogs,
    createBlog,
    getBlogById,
    getBlogByAuthor,
    updateBlog,
    DeleteBlog,
    addReview,
    getReviewsByBlog } = require('../Controllers/BlogController');

router.route('/').get(getAllBlogs);
router.route('/').post(isAuthenticated,createBlog);
router.route('/:id').get(getBlogById);
router.route('/author/:id').get(getBlogByAuthor);
router.route('/:id').put(updateBlog);
router.route('/:id').delete(DeleteBlog);
router.route('/:id/review').post(addReview);
router.route('/:id/review').get(getReviewsByBlog);

module.exports = router;