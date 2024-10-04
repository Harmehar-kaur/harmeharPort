const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    // include the array of ids of all comments in this post schema itself
    comments: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},{
    timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;