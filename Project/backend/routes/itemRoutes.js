const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/getProductInfo', itemController.getProductInfo);

module.exports = router;