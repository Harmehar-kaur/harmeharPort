const express = require('express');
const router = express.Router();
const passport = require('passport');
const havenController = require('../controllers/haven_controller');
const commentController = require('../controllers/comment_controller'); 

router.get('/', havenController.home); 

router.post('/create',passport.checkAuthentication,havenController.create );
router.post('/comments/create', passport.checkAuthentication, commentController.create);


module.exports = router;