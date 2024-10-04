const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/service_controller');



router.get('/',serviceController.order);
router.get('/coffee',serviceController.coffee); 
router.get('/speciality',serviceController.speciality); 
router.get('/tea',serviceController.tea); 
router.get('/snacks',serviceController.snacks); 
router.get('/deserts',serviceController.deserts); 
router.get('/refreshments',serviceController.refreshments); 
router.get('/kids',serviceController.kids); 
router.get('/bestseller',serviceController.bestseller); 
router.get('/drinks',serviceController.drinks); 
router.get('/food',serviceController.food); 
router.get('/coffee-home',serviceController.coffeehome); 
router.get('/ready-eat',serviceController.readyeat); 







module.exports = router