const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");

//
// Instantiate our database
//
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

//
// dB object to export for controllers to import
//
const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  userTable: require('./User')(sequelize, Sequelize),
  funcTable: require('./Func')(sequelize, Sequelize),
  unitTable: require('./Unit')(sequelize, Sequelize),
  categoryTable: require('./Category')(sequelize, Sequelize),
  resourceTable: require('./Resource')(sequelize, Sequelize),
  incidentTable: require('./Incident')(sequelize, Sequelize)
}

//
// Set up One-to-Many relationship between Function
// and Resource tables so JOIN statements will work
//
db.funcTable.hasMany(db.resourceTable);
db.resourceTable.belongsTo(db.funcTable);

module.exports = db;
