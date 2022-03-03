// Import Express Router and Add Resource controller
const router = require('express').Router();
const addIncident = require('../controllers/add-incident');

// Route to retrieve all Categories
router.get('/', addIncident.getCategories);

// Route to insert new Incident
router.post('/', addIncident.addIncident);

// Route to retrieve max Incident ID given Category type
router.post('/get-max-id', addIncident.getMaxId);

// Route to retrieve specific date format for new incident
router.post('/get-date', addIncident.getDate);

// Export router to server
module.exports = router;
