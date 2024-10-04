const Comment = require('../models/comment');
const Review = require('../models/haven'); 
const User = require('../models/user'); 

module.exports.home = async function(req, res){

    try{
        // CHANGE :: populate the likes of each post and comment
        let reviews = await Review.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });

    
        let users = await User.find({});

        return res.render('haven', {
            title: "Brews Haven",
            reviews:  reviews,
            all_users: users
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}


module.exports.create = async function(req, res){
    try{
        let review = await Review.create({
            title:req.body.title, 
            content: req.body.content,
            user: req.user._id
        });
        
        if (req.xhr){
            review = await review.populate('user', 'name').execPopulate();

            return res.status(200).json({
                data: {
                    review: review
                },
                message: " Review Uploaded!"
            });
        }

        req.flash('success', 'Review Uploaded!');
        return res.redirect('back');

    }catch(err){
        req.flash('error', err);
        console.log(err);
        return res.redirect('back');
    }
  
}


module.exports.destroy = async function(req, res){

    try{
        let review = await Review.findById(req.params.id);

        if (post.user == req.user.id){

            // CHANGE :: delete the associated likes for the post and all its comments' likes too
            await Like.deleteMany({likeable: post, onModel: 'Post'});
            await Like.deleteMany({_id: {$in: post.comments}});

            post.remove();
            await Comment.deleteMany({post: req.params.id});

            if (req.xhr){
                return res.status(200).json({
                    data: {
                        post_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }

            req.flash('success', 'Post and associated comments deleted!');

            return res.redirect('back');
        }else{
            req.flash('error', 'You cannot delete this post!');
            return res.redirect('back');
        }

    }catch(err){
        req.flash('error', err);
        return res.redirect('back');
    }
    
}