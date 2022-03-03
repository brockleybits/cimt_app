// Import tables and methods
const Func = require('../models').funcTable;
const Unit = require('../models').unitTable;
const Resource = require('../models').resourceTable;
const QueryTypes = require('../models').Sequelize.QueryTypes;


// Retrieve all functions & all units from the database.
exports.getAll = (req, res) => {

  const funcs = Func.sequelize.query(
    "SELECT * FROM func ORDER BY func.id", {
      type: QueryTypes.SELECT
    })

  const units = Unit.findAll({
    order: ['id']
  })

  Promise.all([funcs, units])
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Add Resource: error occurred while retrieving functions & units."
      });
    });

};

// Insert new resource into Resource table
exports.addResource = (req, res) => {
  Resource.create({
    id: null,
    name: req.body.name,
    primary_func_id: req.body.primary_func_id,
    secondary_func_id: req.body.secondary_func_id,
    description: req.body.description,
    capabilities: req.body.capabilities,
    distance: req.body.distance,
    cost: req.body.cost,
    unit_id: req.body.unit_id,
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

