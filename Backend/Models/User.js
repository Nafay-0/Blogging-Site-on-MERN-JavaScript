const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ProfilePicture:[
        {
            public_id:{
                type:String,
                required:false
            },
            url:{
                type:String,
                required:false
            }  
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);