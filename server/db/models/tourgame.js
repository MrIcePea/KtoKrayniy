const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TourGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  TourGame.init({
    user_id: DataTypes.INTEGER,
    '1 / 32': DataTypes.BOOLEAN,
    '1 / 16': DataTypes.BOOLEAN,
    '1 / 8': DataTypes.BOOLEAN,
    '1 / 4': DataTypes.BOOLEAN,
    '1 / 2': DataTypes.BOOLEAN,
    final: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'TourGame',
  });
  return TourGame;
};
