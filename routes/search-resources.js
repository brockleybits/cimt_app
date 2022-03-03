// Import Express Router and Add Resource controller
const router = require('express').Router();
const searchResources = require('../controllers/search-resources');

// Route to retrieve all Categories
router.get('/', searchResources.getFuncs);

// Route to retrieve all Categories
router.post('/', searchResources.getResources);

// Export router to server
module.exports = router;
