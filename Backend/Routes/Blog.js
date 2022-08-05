const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();

const {getBlogs} = require('../Controllers/BlogController');

router.route('/').get(getBlogs);

module.exports = router;