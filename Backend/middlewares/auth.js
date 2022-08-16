const jwt = require('jsonwebtoken');
const ErrorHandler = require('../middlewares/errors');
const User = require('../Models/User');
const Blog = require('../Models/Blog');
exports.isAuthenticated = async (req, res, next) => {
    console.log("Called");
    try{
        const {jwtToken} = req.cookies;
      //  console.log(jwtToken);
        if(!jwtToken){
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            })
        }
        const decode = jwt.verify(jwtToken, process.env.JWT_SECRET);
       // console.log(decode);
        console.log(decode.id);
        req.user = await User.findById(decode.id);
        console.log(req.user);
        next();
    }
    catch(err)
    {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: 'Loggin! first'
        })
    }
}

exports.HandleUserRole = async (req, res, next) => {
    try{
        // get blog id from url
        const {id} = req.params;
        const {Author } = req.body;
        // make sure user is the author of the blog
        const blog = await Blog.findById(id);
        //console.log(Author,blog);
        if(blog.Author != Author){
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            })
        }
        next();

    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            success: false,
            message: 'Loggin! first'
        })

    }
}
