// Import tables and methods
const User = require("../models").userTable;
const QueryTypes = require('../models').Sequelize.QueryTypes;

// Select single user
exports.getUserInfo = (req,res) => {
  User.sequelize.query(
    "SELECT * FROM user WHERE username = :username", {
      replacements: {
        username: req.body.username
      },
      type: QueryTypes.SELECT
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
      message: err.message || 'dB error while validating Username.'
    }))
}
