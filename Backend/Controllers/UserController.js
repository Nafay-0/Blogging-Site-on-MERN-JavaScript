const User = require('../Models/User');
import bcrypt from 'bcryptjs';

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
        const { name, email, password } = req.body;
        password = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            email: email,
            password: password
        });
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            user: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'User could not be created',
            error: err
        });
    }

    // save the user
    try {
        user.save();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'User could not be updated',
            error: err
        });
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