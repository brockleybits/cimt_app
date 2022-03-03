// Import Express Router & Login controller
const router = require('express').Router();
const login = require('../controllers/login');

// Route to validate login
router.post('/', login.validateUser);

// Export router to server
module.exports = router;

