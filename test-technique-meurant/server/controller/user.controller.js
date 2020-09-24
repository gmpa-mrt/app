const db = require('../model/db.model');
const User = db.users_test;

exports.createUser = (req, res) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email) {
    return res.status(400).send({message: "Content can not be empty!"});
  }

  const {
    firstName,
    lastName,
    email
  } = req.body;

  User.create({
    firstName: firstName,
    lastName: lastName,
    email: email
  })
    .then(data => res.sendStatus(201).json({
      error: false,
      data: data,
      message: 'New user created'
    }))
    .catch(err => res.sendStatus(400).json({
      error: true,
      message: `${error.message}`
    }))

};


exports.getAllUser = (req, res) => {

  User.find()
    .then(user => res.send(user))
    .catch(error => console.log(`Error KO => ${error}`))
};

exports.updateUser = (req, res) => {
  if (!req.body) {
    res.sendStatus(400).json({
      error: true,
      message: 'Invalid request'
    })
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(user => {
      if (!user) {
        res.sendStatus(404).json({
          error: true,
          message: 'User not found'
        })
      } else {
        res.sendStatus(201).json({
          error: false,
          message: 'User created'
        });
      }
    })
    .catch(err => {
      res.sendStatus(500).json({
        error: true,
        message: `${err.message}`
      })
    })

};
