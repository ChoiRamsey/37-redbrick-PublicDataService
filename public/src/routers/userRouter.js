const router = require("express").Router();
const { userController } = require("../controllers");

router.get("", userController.getToken);

module.exports = router;
