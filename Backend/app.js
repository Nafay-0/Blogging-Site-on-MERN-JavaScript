const express = require('express');
const app = express();

app.use(express.json());

const blogs = require('./Routes/Blog');
const users = require('./Routes/User');

app.use('/api/blogs', blogs);
app.use('/api/users', users);

module.exports = app;
