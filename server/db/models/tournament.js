const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tournament.init({
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    mode: DataTypes.STRING,
    first_round: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tournament',
  });
  return Tournament;
};
