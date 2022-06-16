module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TourGames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      '1 / 32': {
        type: Sequelize.BOOLEAN,
      },
      '1 / 16': {
        type: Sequelize.BOOLEAN,
      },
      '1 / 8': {
        type: Sequelize.BOOLEAN,
      },
      '1 / 4': {
        type: Sequelize.BOOLEAN,
      },
      '1 / 2': {
        type: Sequelize.BOOLEAN,
      },
      final: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TourGames');
  },
};
