// Import tables and methods
const Func = require('../models').funcTable;
const Resource = require('../models').resourceTable;
const QueryTypes = require('../models').Sequelize.QueryTypes;


// Retrieve all functions & all units from the database.
exports.getAll = (req, res) => {

    const funcs = Func.sequelize.query(
        "SELECT * FROM func ORDER BY func.id", {
          type: QueryTypes.SELECT
        });

    const funcCount = Resource.sequelize.query(
        "SELECT func.id AS 'pf_id', COUNT(resource.primary_func_id) AS 'func_count' FROM resource JOIN func ON resource.primary_func_id = func.id WHERE resource.user_username = :username GROUP BY func.id", {
          replacements: {
            username: req.body.username
          },
          type: QueryTypes.SELECT
    })

    Promise.all([funcs, funcCount])
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Resource Report: error occurred while retrieving functions & owner's resource functions."
        });
    });
};
