const Comment = require('../models/comment');
const Review = require('../models/haven');
// const commentsMailer = require('../mailers/comments_mailer');
const queue = require('../config/kue');
// const commentEmailWorker = require('../workers/comment_email_worker');
// const Like = require('../models/like');

module.exports.create = async function(req, res){

    try{
        let review = await Review.findById(req.body.review);

        if (review){
            let comment = await Comment.create({
                content: req.body.content,
                review: req.body.review,
                user: req.user._id
            });

            review.comments.push(comment);
            review.save();
            
            comment = await comment.populate('user', 'name email').execPopulate();
            // commentsMailer.newComment(comment);

            // let job = queue.create('emails', comment).save(function(err){
            //     if (err){
            //         console.log('Error in sending to the queue', err);
            //         return;
            //     }
            //     console.log('job enqueued', job.id);

            // })

            if (req.xhr){
                
    
                return res.status(200).json({
                    data: {
                        comment: comment
                    },
                    message: "review created!"
                });
            }


            req.flash('success', 'Comment published!');

            res.redirect('/');
        }
    }catch(err){
        req.flash('error', err);
        return;
    }
    
}


module.exports.destroy = async function(req, res){

    try{
        let comment = await Comment.findById(req.params.id);

        if (comment.user == req.user.id){

            let reviewId = comment.review;

            comment.remove();

            let review = review.findByIdAndUpdate(reviewId, { $pull: {comments: req.params.id}});

            // CHANGE :: destroy the associated likes for this comment
            await Like.deleteMany({likeable: comment._id, onModel: 'Comment'});


            // send the comment id which was deleted back to the views
            if (req.xhr){
                return res.status(200).json({
                    data: {
                        comment_id: req.params.id
                    },
                    message: "review deleted"
                });
            }


            req.flash('success', 'Comment deleted!');

            return res.redirect('back');
        }else{
            req.flash('error', 'Unauthorized');
            return res.redirect('back');
        }
    }catch(err){
        req.flash('error', err);
        return;
    }
    
}