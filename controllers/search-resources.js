// Import tables and methods
const Resource = require('../models').resourceTable;
const Unit = require('../models').unitTable;
const QueryTypes = require('../models').Sequelize.QueryTypes;

// Select all functions
exports.getFuncs = (req,res) => {
    Resource.sequelize.query(
      "SELECT * FROM func ORDER BY func.id",{
        type: QueryTypes.SELECT
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
        message: err.message || 'dB error while retrieving functions.'
    }));
}

// Select resources based on search criteria
exports.getResources = (req,res) => {
    Resource.sequelize.query(
      req.body.query,{
        type: QueryTypes.SELECT
      })
      .then(data => res.send(data))
      .catch(err => res.status(500).send({
        message: err.message || 'dB error while searching resources.'
      }));
  }
