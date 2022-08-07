
const User = require('../Models/User');
const Blog = require('../Models/Blog');



exports.createBlog = async (req, res, next) => {
    try {
        let { title, content, category, Author } = req.body;
        let blog = await Blog.create({
            title: title,
            content: content,
            category: category,
            Author: Author
        });
        res.status(200).json({
            success: true,
            message: 'Blog created successfully',
            blog: blog
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Blog could not be created',
            error: err
        });
    }
}


exports.getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            message: 'Blogs fetched successfully',
            blogs: blogs
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Blogs could not be fetched',
            error: err
        });
    }
}

exports.getBlogById = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Blog fetched successfully',
            blog: blog
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Blog could not be fetched',
            error: err
        });
    }
}


exports.getBlogByAuthor = async (req, res, next) => {
    try {
        const blog = await Blog.find({ Author: req.params.id });
        res.status(200).json({
            success: true,
            message: 'Blog fetched successfully',
            blog: blog
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Blog could not be fetched',
            error: err
        });
    }
}

exports.updateBlog = async (req, res, next) => {
    try {
        let { title, content, category, Author } = req.body;
        let blog = await Blog.findByIdAndUpdate(req.params.id, {
            title: title,
            content: content,
            category: category,
            Author: Author
        });
        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            blog: blog
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Blog could not be updated',
            error: err
        });
    }
}

exports.DeleteBlog = async (req, res, next) => {
    try {
        let blog = await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully',
            blog: blog
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Blog could not be deleted',
            error: err
        });
    }
}
