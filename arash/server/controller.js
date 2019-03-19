const { Todo } = require('../database/models');

const controller = {
  get: (req, res) => {
    Todo.findAll({}) //could do without {}
    .then(data => res.status(200).send(data))
    .catch( err => console.error(err));
  },
  post: (req, res) => {
    const { name } = req.body; //name refering to name in model.js
    Todo.create({ name })  //needs to be an object with key value pair
    .then(data => {
      res.status(201).send('posted!');
    })
    .catch(err => console.error(err))
  },
  update: (req, res) => {
    const { name, newName } = req.body;
    Todo.update({ name: newName },  { where: { name } })
    .then( data => res.status(202).send('updated!'))
    .catch(err => console.error(err))
  },
  delete: (req, res) => {
    const { name } = req.query; //req that client made and inside is the params that the client req
    Todo.destroy({
      where: { name }
    }).then(data => 
      res.status(203)
      .send('deleted')
      .catch(err => console.error(err))
    );
  }
};

module.exports = controller;