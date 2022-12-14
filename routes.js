const express = require('express');

const routes = express.Router();

const userController = require('./controller/userController');

routes.get('/', (req, res) => {
  console.log('>>>>> working');
  res.send('ok');
});

routes.get('/users', userController.getUsers);
routes.get('/users/:login', userController.getUserDetails);
routes.get('/users/:login/repos', userController.getUserRepos);

module.exports = routes;
