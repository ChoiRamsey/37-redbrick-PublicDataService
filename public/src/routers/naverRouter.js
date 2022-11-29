const express = require('express');
const { naverController } = require('../controllers');

const router = express.Router();

router.get('/login', naverController.reqAuthCode);
router.get('/callback', naverController.getNaverToken);

module.exports = router;