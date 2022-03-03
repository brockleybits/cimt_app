// Import tables and methods
const User = require("../models").userTable;
const QueryTypes = require('../models').Sequelize.QueryTypes;

// Get count of username
exports.validateUser = (req,res) => {
  User.sequelize.query(
    "SELECT COUNT(1)=1 AS 'count' FROM user WHERE username = :username AND password = :password", {
      replacements: {
        username: req.body.username,
        password: req.body.password
      },
      type: QueryTypes.SELECT
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
      message: err.message || 'dB error while validating Username.'
    }));
}

