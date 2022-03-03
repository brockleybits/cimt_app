// Import tables and methods
const Category = require('../models').categoryTable;
const Incident = require('../models').incidentTable;
const QueryTypes = require('../models').Sequelize.QueryTypes;


// Retrieve all functions & all units from the database.
exports.getCategories = (req, res) => {
  Category.findAll({
      order: ['id']
    })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Add Incident: error while retrieving categories"
      });
    });
};

// Retrieve max incident id given category_id
exports.getMaxId = (req, res) => {
    Incident.sequelize.query(
        "SELECT MAX(incident.id) AS 'maxId' FROM incident JOIN category ON incident.category_id = category.id WHERE category.type = :category_type", {
          replacements: {
            category_type: req.body.category_type
          },
          type: QueryTypes.SELECT
        })
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
          message: err.message || 'dB error while retrieving max category-incident-id.'
        }));
}

// Retrieve specific date format given composite id
exports.getDate = (req, res) => {
  Incident.sequelize.query(
      "SELECT date_format(date, '%d-%b-%Y') AS 'date' FROM incident WHERE category_id = :category_id AND id = :id", {
        replacements: {
          id: req.body.id,
          category_id: req.body.category_id
        },
        type: QueryTypes.SELECT
      })
      .then(data => res.send(data))
      .catch(err => res.status(500).send({
        message: err.message || 'dB error while retrieving max category-incident-id.'
      }));
}

// Insert new resource into Resource table
exports.addIncident = (req, res) => {
  Incident.create({
    category_id: req.body.category_id,
    id: req.body.id,
    date: req.body.date,
    description: req.body.description,
    user_username: req.body.user_username
  })
  .then(data => res.send(data))
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Add Resource: error occurred while retrieving functions & units."
    })
  });
}
