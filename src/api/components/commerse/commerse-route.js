const express = require('express');

const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const commerseControllers = require('./commerse-controller');
const commerseValidator = require('./commerse-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/commerse', route);

  // Get list of users
  route.get('/', authenticationMiddleware, commerseControllers.getCommerse);

  // Create user
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(commerseValidator.inputCommerse),
    commerseControllers.createCommerse
  );

  // Get user detail
  route.get('/:id', authenticationMiddleware, commerseControllers.getCommerseById);

  // Update user
  route.put(
    '/:id',
    authenticationMiddleware,
    celebrate(commerseValidator.inputCommerse),
    commerseControllers.updateCommerse
  );

  // Delete user
  route.delete('/:id', authenticationMiddleware, commerseControllers.deleteCommerse);

};
