const commerseSerive = require('./commerse-service');
const { errorTypes } = require('../../../core/errors');

async function getCommerse(request, response, next) {
  try {
    const commerse = await commerseSerive.getCommerse();
    response.status(200).json(commerse);
  } catch (error) {
    next(error);
  }
}

async function getCommerseById(request, response, next) {
  try {
    const commerse = await commerseSerive.getCommerseById(request.params.id);

    if (!commerse) throw new Error('commerse not found');

    response.status(200).json(commerse);
  } catch (error) {
    next(error);
  }
}

async function createCommerse(request, response, next) {
  try {
    const { name, type, product } = request.body;

    const success = await commerseSerive.createCommerse(name, type, product);
    if (!success) {
      throw new Error('Failed to create commerse');
    }

    response.status(201).json({ name, type });
  } catch (error) {
    next(error);
  }
}

async function updateCommerse(request, response, next) {
  try {
    const id = request.params.id;
    const { name, type, product } = request.body;

    const success = await commerseSerive.updateBangking(
      id,
      name,
      type,
      product
    );
    if (!success) {
      throw new Error('Abort update');
    }

    response.status(200).json({ id });
  } catch (error) {
    next(error);
  }
}

async function deleteCommerse(request, response, next) {
  try {
    const id = request.params.id;
    const success = await commerseSerive.deleteCommerse(id);
    if (!success) {
      throw new Error('Abort delete');
    }

    response.status(200).json({ id });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCommerse,
  getCommerseById,
  createCommerse,
  updateCommerse,
  deleteCommerse,
};
