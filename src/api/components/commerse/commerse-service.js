const commerseRepository = require('./commerse-repository');

async function getCommerse() {
  return await commerseRepository.getCommerse();
}

async function getCommerseById(id) {
  return await commerseRepository.getCommerseById(id);
}

async function createCommerse(name, type, product) {
  try {
    await commerseRepository.createCommerse(name, type, product);
    return true;
  } catch (err) {
    console.error('Error creating Commerse:', err);
    return null;
  }
}

async function updateCommerse(id, name, type, product) {
  return await commerseRepository.updateCommerse(id, name, type, product);
}

async function deleteCommerse(id) {
  return await commerseRepository.deleteCommerse(id);
}

module.exports = {
  getCommerse,
  getCommerseById,
  createCommerse,
  updateCommerse,
  deleteCommerse,
};
