const knex = require('../../database');

const getuser = async () => {
  const query = await knex
    .select()
    .from('user')
  return query;
};

const postUser = async (
  nameUser,
  emailUser,
  password) => {
  return knex('user')
    .insert({
      nameUser:nameUser,
      emailUser:emailUser,
      password:password
    })
};

module.exports = { getuser, postUser };
