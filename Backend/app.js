const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errors');
app.use(express.json());
app.use(cookieParser());
const blogs = require('./Routes/Blog');
const users = require('./Routes/User');

app.use('/api/blogs', blogs);
app.use('/api/users', users);

app.use(errorMiddleware);

module.exports = app;
