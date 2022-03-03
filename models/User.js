module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING(63),
        primaryKey: true,
    },
    password: {
        type: Sequelize.STRING(63),
        allowNull: false
    },
    user_type: {
        type: Sequelize.STRING(63),
        allowNull: false
    },
    display_name: {
        type: Sequelize.STRING(63),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(127),
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING(31),
        allowNull: true
    },
    address: {
        type: Sequelize.STRING(255),
        allowNull: true
    }
  }, {
      timestamps: false,
      freezeTableName: true
  });

  return User;
};
