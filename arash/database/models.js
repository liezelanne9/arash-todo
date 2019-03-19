const connection = require('./index');
const Sequelize = require('sequelize');

const Todo = connection.define(
  'Todo',
  {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: Sequelize.STRING, allowNull: false}
  },
  {
    timestamps: false
  }
);

connection
  .sync()
  .then(() => console.log('synced with mysql database'))
  .catch(err => console.error(err));

module.exports = { Todo }; //??