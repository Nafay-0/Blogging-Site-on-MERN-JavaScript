
const User = require('../Models/User');
const Blog = require('../Models/Blog');


exports.createBlog = async (req,res,next) =>{
    const Blog = new Blog({

    })

}

exports.getBlogs = (req,res,next) =>{
    res.status(200).json({
        success:true,
        message:'Blogs fetched successfully'
    });
}