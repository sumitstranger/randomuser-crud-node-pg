//@ts-check
const axios = require('axios');
const appConfig = require('../config/app-config');
const userDao = require('./dao');
const apiUtils = require('../common/api-utils');

async function fetchUserAndSave() {
    // @ts-ignore
    const userDataFromServer = await axios.get(appConfig.USER_FETCH_URL);
    if (!userDataFromServer || !userDataFromServer.data || !userDataFromServer.data.results) {
        return apiUtils.errorResponse('Not able to fetch Data');
    }
    console.log('[fetchUserAndSave] [userDataFromServer.data.results]', userDataFromServer.data.results);
    await userDao.insertUsers(userDataFromServer.data.results.map(d => { return { location: d }; }));
    console.log('[fetchUserAndSave] [success]');
    return apiUtils.succesResponse(userDataFromServer.data.results);
}

async function getUsers() {
    const userListFromDB = await userDao.getUsers();
    return apiUtils.succesResponse(userListFromDB.rows);
}

module.exports = {
    fetchUserAndSave,
    getUsers
};