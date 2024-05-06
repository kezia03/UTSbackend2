const { Commerse } = require('../../../models');

async function getCommerse() {
  return Commerse.find({});
}

async function getCommerseById(id) {
  return Commerse.findById(id);
}

async function createCommerse(name, type, product) {
  return Commerse.create({
    name,
    type,
    product,
  });
}

async function updateCommerse(id, name, type, product) {
  return Commerse.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        type,
        product,
      },
    }
  );
}

async function deleteCommerse(id) {
  return Commerse.deleteOne({ _id: id });
}

module.exports = {
  getCommerse,
  getCommerseById,
  createCommerse,
  updateCommerse,
  deleteCommerse,
};
