const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();

const { getAllBlogs,
    createBlog,
    getBlogById,
    getBlogByAuthor,
    updateBlog,
    DeleteBlog } = require('../Controllers/BlogController');

router.route('/').get(getAllBlogs);
router.route('/').post(createBlog);
router.route('/:id').get(getBlogById);
router.route('/author/:id').get(getBlogByAuthor);
router.route('/:id').put(updateBlog);
router.route('/:id').delete(DeleteBlog);


module.exports = router;