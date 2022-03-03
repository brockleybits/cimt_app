module.exports = (sequelize, Sequelize) => {
    const Resource = sequelize.define('resource', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(63),
            allowNull: false
        },
        primary_func_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        secondary_func_id: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING(511)
        },
        capabilities: {
            type: Sequelize.STRING(511)
        },
        distance: {
            type: Sequelize.DECIMAL(5,1)
        },
        cost: {
            type: Sequelize.DECIMAL(9,2),
            allowNull: false
        },
        unit_id: {
            type: Sequelize.INTEGER,
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
  
    return Resource;
  };
 