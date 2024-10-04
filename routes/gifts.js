const express = require('express');
const router = express.Router();
const giftController = require('../controllers/gift_controller');

router.get('/', giftController.gifts);
router.get('/featured', giftController.gifts);
router.get('/anytime', giftController.anytime);
router.get('/congratulations', giftController.congrats);
router.get('/thank-you', giftController.thankyou);





module.exports = router