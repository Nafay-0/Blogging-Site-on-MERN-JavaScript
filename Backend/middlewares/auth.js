// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// exports.isAuthenticated = async (req, res, next) => {
//     try{
//         const {jwtToken} = req.cookies;
//         console.log(jwtToken);
//         if(!token){
//             return res.status(401).json({
//                 success: false,
//                 message: 'Unauthorized'
//             })
//         }
//         const decode = jwt.verify(jwtToken, process.env.JWT_SECRET);
//         req.user = await User.findById(decode.id);
//         next();
//     }
//     catch{
//         return res.status(401).json({
//             success: false,
//             message: 'Loggin first'
//         })
//     }
// }
