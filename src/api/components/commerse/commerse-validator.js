const Joi = require('joi');

module.exports = {
  inputCommerse: {
    body: {
      name: Joi.string().min(1).max(100).required().label('Name'),
      type: Joi.string().min(1).max(100).required().label('Type'),
      product: Joi.string().min(1).max(100).required().label('Product'),
    },
  },

};
