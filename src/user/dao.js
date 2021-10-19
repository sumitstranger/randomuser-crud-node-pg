//@ts-check
const {db, multiInsertTableFormatter} = require('../config/db-config');
const format = require('pg-format');

function insertUsers(userList) {
    console.log('[insertUsers] ', userList);
    const [query] = multiInsertTableFormatter('public.user_data', userList, ['location']);;
    return db.query(query);
}

function getUsers() {
    return db.query('SELECT * FROM public.user_data');
}

module.exports = {
    insertUsers,
    getUsers
};