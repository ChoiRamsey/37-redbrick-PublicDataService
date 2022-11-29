const express = require("express");

const router = express.Router();

const newsRouter = require("./newsRouter");
const metroRouter = require("./metroRouter");
const busRouter = require("./busRouter");
const wetherRouters = require("./wetherRouters");
const dustRouter = require("./dustRouter");
const gitRouter = require("./gitRouter");
const homeRouter = require("./homeRouter");
const naverRouter = require("./naverRouter");
const userRouter = require("./userRouter");
const gituserRouter = require("./gituserRouter");

router.use("/news", newsRouter);
router.use("/metro", metroRouter);
router.use("/bus", busRouter);
router.use("/wether", wetherRouters);
router.use("/dust", dustRouter);
router.use("/git", gitRouter);
router.use("/home", homeRouter);
router.use("/naver", naverRouter);
router.use("/facebook", userRouter);
router.use("/login", gituserRouter)

module.exports = router;
