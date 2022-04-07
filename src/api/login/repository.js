
const knex = require('../../database');

const getUsersLogin = async (emailUser, password) => {
    const query = await knex
        .select(
            'idUser',
            'nameUser',
            'roleUser'
        )
        .from('user')
        .where({
            emailUser: emailUser,
            password: password
        });
    return query;
};

module.exports = { getUsersLogin };
