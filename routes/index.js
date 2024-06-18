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
// router.get('/login',homeController.login); 
router.get('/journey',homeController.journey); 
router.get('/blogs',homeController.login); 
router.get('/poetry',homeController.login); 
router.get('/contact',homeController.login); 


module.exports = router;
