// Import Express Router and Main Menu controller
const router = require('express').Router();
const menu = require('../controllers/main-menu');

// Route to retrieve user info
router.post('/', menu.getUserInfo)

// Export router to server
module.exports = router;

