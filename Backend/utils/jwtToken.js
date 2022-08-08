const sendToken = (User, statusCode, res) => {
    const token = User.generateAuthToken();
    const options = {
        httpOnly: true,
        maxage: 1000 * 60 * 60 * 24 * 7
    }

    res.status(statusCode).cookie('jwtToken', token, options).json({
        success: true,
        message: 'User logged successfully',
        token: token,
        User
    })
}
    module.exports = sendToken;