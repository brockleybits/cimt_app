module.exports = (sequelize, Sequelize) => {
    const Func = sequelize.define('func', {
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
  
    return Func;
  };
  