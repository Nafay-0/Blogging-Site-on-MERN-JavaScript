const express = require('express');
const app = express();

app.use(express.json());

const blogs = require('./Routes/Blog');

app.use('/api/blogs', blogs);

module.exports = app;
