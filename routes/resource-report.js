// Import Express Router and Add Resource controller
const router = require('express').Router();
const report = require('../controllers/resource-report');

// Route all functions and owner's resource primary functions
router.post('/', report.getAll);

// Export router to server
module.exports = router;
