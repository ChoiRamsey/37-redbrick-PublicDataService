const express = require("express");
const { dustController } = require("../controllers");
const dustRouter = express.Router();
const { validToken } = require('../utils/auth');

dustRouter.get("", dustController.getApi);

module.exports = dustRouter;
