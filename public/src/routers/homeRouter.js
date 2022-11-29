const express = require('express');
const { homeController } = require('../controllers');
const router = express.Router();

router.get('', homeController.showHome);
router.get('/service', homeController.mainService);

module.exports = router;