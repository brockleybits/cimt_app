module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
        id: {
            type: Sequelize.STRING(3),
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
  
    return Category;
  };
  