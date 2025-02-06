const express=require('express'); 
const router = express.Router();
const homeController = require('../controllers/home_controller'); 
const Message = require('../models/Message');  // Import Mongoose Model
const sendMail = require('../utils/nodemailer');  // Import Mailer Function


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

router.get('/education',homeController.courses); 
// router.get('/login',homeController.login); 
router.get('/experience',homeController.journey); 
router.use('/blogs', require('./blogs'));
router.get('/skills',homeController.poetry); 
// Contact Page Route
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact', success: req.query.success });
});

// Contact Form Submission Route
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    try {
        // Save to Database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Send Email Notification
        await sendMail(name, email, message);

        // Redirect with Success Message
        res.redirect('/contact?success=true');
    } catch (error) {
        console.error('❌ Error submitting message:', error);
        res.status(500).send('Something went wrong. Try again later.');
    }
});


module.exports = router;
