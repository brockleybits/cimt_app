// Import Express Router and Add Resource controller
const router = require('express').Router();
const addResource = require('../controllers/add-resource');

// Route to retrieve all Functions
router.get('/', addResource.getAll);

// Route to insert new Resource
router.post('/', addResource.addResource);

// Export router to server
module.exports = router;

