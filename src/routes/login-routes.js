import express from 'express';

import LoginController from '../controllers/login-controller.js';

const loginRoutes = express.Router();

loginRoutes
  .post('/login', LoginController.login);

export default loginRoutes;
