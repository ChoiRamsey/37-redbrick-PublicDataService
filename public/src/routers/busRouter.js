const express = require('express');
const { busController } = require('../controllers');
const busRouter = express.Router();
const { validToken } = require('../utils/auth');

busRouter.get('/stop/:keyword', validToken, busController.getBusStops);
busRouter.get('/passenger', validToken, busController.getPassengersByLine);

module.exports = busRouter;