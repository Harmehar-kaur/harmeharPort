const User = require('../models/user');
const fs = require('fs');
const path = require('path');

// let's keep it same as before
module.exports.profile = async function (req, res) {
    try {
        let user = await User.findById(req.params.id);
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user: user
        });
    } catch (err) {
        console.error('Error in fetching user:', err);
        return res.redirect('back');
    }
};

module.exports.update = async function(req, res){
    if(req.user.id == req.params.id){
 
        try{

            let user = await User.findById(req.params.id);
            User.uploadedAvatar(req, res, function(err){
                if (err) {console.log('*****Multer Error: ', err)}
                
                user.name = req.body.name;
                user.email = req.body.email;

                if (req.file){

                    if (user.avatar){
                        fs.unlinkSync(path.join(__dirname, '..', user.avatar));
                    }


                    // this is saving the path of the uploaded file into the avatar field in the user
                    user.avatar = User.avatarPath + '/' + req.file.filename;
                }
                user.save();
                return res.redirect('back');
            });

        }catch(err){
            req.flash('error', err);
            return res.redirect('back');
        }


    }else{
        req.flash('error', 'Unauthorized!');
        return res.status(401).send('Unauthorized');
    }
}


// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/login');
    }

    return res.render('sign-up', {
        title: "Sign-Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = async function (req, res) {
    try {
        if (req.body.password !== req.body.confirm_password) {
            req.flash('error', 'Passwords do not match');
            return res.redirect('back');
        }

        const existingUser = await User.findOne({ email: req.body.email }).exec();

        if (!existingUser) {
            const newUser = await User.create(req.body);
            req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('/login');
        } else {
            req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }
    } catch (err) {
        req.flash('error', err.message);
        return res.redirect('back');
    }
};



// sign in and create a session for the user
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res) {
    req.logout(function(err) {
        if (err) {
            console.error(err);
            return next(err);  
        }
        
        req.flash('success', 'You have logged out!');
        return res.redirect('/');
    });
};
