const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');
app.use(express.json());

const blogs = require('./Routes/Blog');
const users = require('./Routes/User');

app.use('/api/blogs', blogs);
app.use('/api/users', users);

app.use(errorMiddleware);

module.exports = app;
