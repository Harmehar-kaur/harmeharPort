module.exports.home = function(req, res){

    try{
        return res.render('layout', {
            title: "Harmehar Kaur"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}

module.exports.courses = function(req,res){
    try{
        // const brew = "/harmehar-kaur/views/brew/about.ejs"
        return res.render('education', {
            title: "Education And Trainings"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.journey = function(req,res){
    try{
        return res.render('experience', {
            title: "Experience"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.blogs =async function(req,res){
    try {

        var blogs = [
            {
                Name: "How to deal with changes",
                content: "From school to college could be a very large journey"
            },
            {
                Name:"Full Stack",
                content:"My life made me creative"
            }

        ]
        // const blogs = await Blog.find({}).exec();
        res.render('blogs', {
            title: "Contact List",
            blog_list:blogs 
        });
    } catch (err) {
        console.log("Error", err);
    }
    
}

module.exports.poetry = function(req,res){
    try{
        
        return res.render('skills', {
            title: "Skills",
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.login = function(req,res){
    try{
        ('login', {
            title: "Login"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
}