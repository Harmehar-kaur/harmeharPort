const express=require('express'); 
const router = express.Router();
const homeController = require('../controllers/home_controller'); 


router.get('/', async function(req, res){

    try{
        return res.render('about',{
            title:'Harmehar Kaur'
        }); 
        }catch(err){
        console.log('Error', err);
        return;
    }
}); 

router.get('/brew',homeController.courses); 
// router.get('/login',homeController.login); 
router.get('/journey',homeController.journey); 
router.get('/blogs',homeController.blogs); 
router.get('/poetry',homeController.poetry); 
// router.get('/contact',homeController.login); 


module.exports = router;
