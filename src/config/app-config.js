require('dotenv').config();

module.exports = {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DATABASE: process.env.DB_DATABASE,

    SERVER_PORT: process.env.SERVER_PORT,

    USER_FETCH_URL: 'https://randomuser.me/api/?results=10',
};