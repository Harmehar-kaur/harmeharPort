const express = require('express');
const router = express.Router();
const passport = require('passport');

const homeController = require('../controllers/home_controller');
const userController = require('../controllers/user_controller');

router.get('/', homeController.login); 

router.get('/sign-out', userController.destroySession);
router.post('/create',userController.create); 
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/login'},
), userController.createSession);

module.exports = router;
