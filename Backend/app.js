const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errors');
app.use(express.json());
app.use(cookieParser());
const bodyParser = require("body-parser");
const blogs = require('./Routes/Blog');
const users = require('./Routes/User');
const cloudinary = require('cloudinary');
const FileUpload = require('express-fileupload');
app.use(
        bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(FileUpload());




app.use('/api/blogs', blogs);
app.use('/api/users', users);


app.use(errorMiddleware);

module.exports = app;
