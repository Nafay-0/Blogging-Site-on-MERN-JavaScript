const jwt = require('jsonwebtoken');
const ErrorHandler = require('../middlewares/errors');
const User = require('../Models/User');
exports.isAuthenticated = async (req, res, next) => {
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
        req.user = await User.findById(decode.id);
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
