const express=require('express'); 
const router = express.Router();


router.get('/', function(req, res){

    try{
        return res.render('about', {
            title: "Harmehar Kaur"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
}); 

module.exports = router;