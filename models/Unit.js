module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define('unit', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        type: {
            type: Sequelize.STRING(63),
            allowNull: false,
            unique: true
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });
  
    return Unit;
  };