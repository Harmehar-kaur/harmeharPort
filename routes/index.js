const express=require('express'); 
const router = express.Router();
const homeController = require('../controllers/home_controller'); 

var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]
router.get('/', async function(req, res){

    try{
        // const contacts = await contacts.find({}).exec();
        res.render('about', {
            title: "Contact List",
            contact_list: contactList});
        }catch(err){
        console.log('Error', err);
        return;
    }
}); 

router.get('/courses',homeController.courses); 
// router.get('/login',homeController.login); 
router.get('/journey',homeController.journey); 
router.get('/blogs',homeController.blogs); 
router.get('/poetry',homeController.login); 
router.get('/contact',homeController.login); 


module.exports = router;
