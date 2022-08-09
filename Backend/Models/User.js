const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, 'Invalid email'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ProfilePicture: [
        {
            public_id: {
                type: String,
                required: false
            },
            url: {
                type: String,
                required: false
            }
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

//Return JWT token
UserSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        _id: this._id,

    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_TIME });
}

//Generate password reset token
UserSchema.methods.generatePasswordReset = function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
}


module.exports = mongoose.model('User', UserSchema);