module.exports = (sequelize, Sequelize) => {
    const Incident = sequelize.define('incident', {
        category_id: {
            type: Sequelize.STRING(3),
            primaryKey: true,
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(511),
            allowNull: false
        },
        user_username: {
            type: Sequelize.STRING(63),
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
  
    return Incident;
  };
 