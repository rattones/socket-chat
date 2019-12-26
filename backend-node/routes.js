const express = require('express');

const UserController= require('./src/controllers/UserController');

const routes = express.Router()

routes.get('/user', UserController.index);
routes.get('/user/:uid', UserController.index);

routes.post('/user', UserController.create);
routes.post('/auth', UserController.auth);
routes.post('/msg', UserController.getMessage);

routes.delete('/user', UserController.remove); // axios
routes.post('/userDelete', UserController.remove); // jquery

module.exports= routes