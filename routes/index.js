const express=require('express'); 
const router = express.Router();
const homeController = require('../controllers/home_controller'); 

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

router.get('/courses',homeController.courses); 
router.get('/login',homeController.login); 
module.exports = router;
