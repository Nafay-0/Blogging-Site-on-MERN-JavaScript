
const Blog = require('../Models/Blog');
const Review = require('../Models/Review');

const APIfeatures = require('../utils/apiFeatures');


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

        const ResultsPerPage = 9;

        const BlogCount = await Blog.countDocuments();

        const features = new APIfeatures(Blog.find(), req.query).search().filter().pagination(ResultsPerPage);

        const blogs = await features.query;
        res.status(200).json({
            success: true,
            message: 'Blogs fetched successfully',
            BlogCount: BlogCount,
            blogs: blogs,
            resPerPage : ResultsPerPage,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Blogs could not be fetched',
            BlogCount: BlogCount,
            resPerPage : ResultsPerPage,
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


exports.addReview = async (req, res, next) => {
    try{
        let { Comment, Rating, User } = req.body;
        let review = await Review.create({
            Comment: Comment,
            Rating: Rating,
            User: User,
            Blog: req.params.id
        });
        res.status(200).json({
            success: true,
            message: 'Review created successfully',
            review: review
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            
            success: false,
            message: 'Review could not be created',
            error: err
        });
    }
}



exports.getReviewsByBlog = async (req, res, next) => {
    try {
        const reviews = await Review.find({ Blog: req.params.id });
        res.status(200).json({
            success: true,
            message: 'Reviews fetched successfully',
            reviews: reviews
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Reviews could not be fetched',
            error: err
        });
    }
}