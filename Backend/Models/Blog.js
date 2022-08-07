const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const blogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        maxLength : [100, 'Title must be less than 100 characters'],
        required: true
    },
    content:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    Slug: {
        type: String,
        required: true,
        unique: true,
        default:  function() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }
        
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }  
        }
    ],
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum:{
            values:['technology','business','entertainment','sports','health','science'],
        }
    },
    Author : {
        type: String
    },
    Reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
            required: false
        }
    ]


})

module.exports = mongoose.model('Blog', blogSchema);