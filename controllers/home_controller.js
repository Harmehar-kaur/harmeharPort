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
        return res.render('courses', {
            title: "Coursework"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.journey = function(req,res){
    try{
        return res.render('courses', {
            title: "Coursework"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.blogs = function(req,res){
    try{
        return res.render('courses', {
            title: "Coursework"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.poetry = function(req,res){
    try{
        return res.render('courses', {
            title: "Coursework"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.contact = function(req,res){
    try{
        return res.render('courses', {
            title: "Coursework"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}

module.exports.login=function(req,res){
    try{
        ('courses', {
            title: "Coursework"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
}