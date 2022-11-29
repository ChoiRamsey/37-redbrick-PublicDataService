
const router = require('express').Router();
const { gituserController } = require('../controllers');

router.get('/github', gituserController.getgitHubCode);
router.get('/github/callback', gituserController.githubSignIn);

module.exports = router;