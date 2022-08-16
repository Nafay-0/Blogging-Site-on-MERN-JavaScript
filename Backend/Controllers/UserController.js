const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const cloudinary = require('cloudinary');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            users: users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Users could not be fetched',
            error: err
        });
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return next(new ErrorHandler(404, 'User not found'));
        }
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            user: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'User could not be fetched',
            error: err
        });
    }
}

exports.createUser = async (req, res, next) => {
    try {
        // console.log(req.body);
        const result = await cloudinary.v2.uploader.upload(
            req.body.ProfilePicture,{
                folder: 'Profiles',
                width: 200,
                crop : "scale"
            }
            );
        let { name, email, password } = req.body;
        password = await bcrypt.hash(password, 10);
        let user = await User.create({
            name: name,
            email: email,
            password: password,
            ProfilePicture: {
                public_id : result.public_id,
                url : result.secure_url
            }
        });
        sendToken(user, 200, res);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'User could not be created',
            error: err
        });
    }

}

exports.updateUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        password = await bcrypt.hash(password, 10);
        const user = await User.findByIdAndUpdate(req.params.id, {
            name: name,
            email: email,
            password: password
        });
        // save the user


        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'User could not be updated',
            error: err
        });
    }

}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            user: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'User could not be deleted',
            error: err
        });
    }
}

exports.Login = async (req, res, next) => {
    // console.log("Called");
    
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new ErrorHandler(400, 'Please provide email and password'));
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(401).json({
                success: false,
                message: 'User not found'
            });
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return next(new ErrorHandler(401, 'Invalid credentials'));
            }
            sendToken(user, 200, res);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'User could not be logged in',
            error: err
        });
    }
}

exports.logOutUser = async (req, res, next) => {
    try {

        //reset cookie
        res.cookie('jwtToken', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            message: 'User logged out successfully'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'User could not be logged out',
            error: err
        });
    }
}

//Forgot password
exports.forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return next(new ErrorHandler(404, 'User not found'));
        }
        const resetToken = user.generatePasswordReset();
        await user.save({ validateBeforeSave: false });
        const resetURL = `${req.protocol}://${req.get('host')}/api/users/resetPassword/${resetToken}`;
        const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you did not forget your password, please ignore this email.`;
        try {
            await sendEmail({
                email: email,
                subject: 'Your password reset token (valid for only 10 minutes)',
                message: message
            });
            res.status(200).json({
                success: true,
                message: 'Email sent successfully'
            });

        }
        catch (err) {
            console.log(err);
            user.passwordResetToken = undefined;
            user.passwordResetExpires = undefined;
            await user.save({ validateBeforeSave: false });
            return next(new ErrorHandler(500, 'There was an error sending the email'));
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'User could not be found',
            error: err
        });
    }
}

exports.resetPassword = async (req, res, next) => {
    try {
        console.log(req.params.token);
        const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
       // console.log(resetPasswordToken);
        const user = await User.findOne({
            resetPasswordToken,
            passwordResetExpires: { $gt: Date.now() }
        });
       // console.log(user);
        if (!user) {
            return next(new ErrorHandler(400, 'Password reset token is invalid or has expired'));
        }
        if (req.body.password !== req.body.passwordConfirm) {
            return next(new ErrorHandler(400, 'Passwords do not match'));
        }
        user.password = req.body.password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();
        sendToken(user, 200, res);
    }
    catch (err) {
        console.log(err);
        return next(new ErrorHandler(500, 'User could not be found'));
    }
}

