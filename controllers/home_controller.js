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