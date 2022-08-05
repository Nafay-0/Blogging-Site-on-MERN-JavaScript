const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    Comment: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    User : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Blog : {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    }});
