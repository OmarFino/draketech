const knex = require('../../database');

const getProduct = async (idUSer) => {
  const query = await knex
    .select()
    .from('product')
    .where({stateProduct: 'A', user_idUser:idUSer})
  return query;
};

const postProduct = async (
  nameProduct,
  priceProduct,
  imageProduct,
  idUser) => {
  return knex('product')
    .insert({
      nameProduct:nameProduct,
      priceProduct:priceProduct,
      imageProduct:imageProduct,
      user_idUser:idUser
    })
};

const putProduct = async (
  nameProduct,
  priceProduct,
  imageProduct,
  idProduct) => {
  return knex('product')
    .update({
      nameProduct:nameProduct,
      priceProduct:priceProduct,
      imageProduct:imageProduct,
    })
    .where({idProduct:idProduct})
};

const deleteProduct = async (
  idProduct) => {
  return knex('product')
    .update({
      stateProduct: 'I',
    })
    .where({idProduct:idProduct})
};

module.exports = { getProduct, postProduct, putProduct, deleteProduct };
