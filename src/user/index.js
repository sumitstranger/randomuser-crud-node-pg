//@ts-check

const router = require('express').Router();
const userService = require('./service');

//End Point: BASE_URL/user

router.get('/fetch-save', (req, res, next) => {
    console.log('[API] [fetch-save] INIT');
    userService.fetchUserAndSave().then(data => {
        res.send(data);
        console.log('[API] [fetch-save] success', data);
    })
        .catch(err => {
            console.error(new Date, 'Error in fetchUserAndSave', err);
            next();
        });
});

router.get('/', (req, res, next) => {
    userService.getUsers().then(data => res.send(data))
        .catch(err => {
            console.error(new Date, 'Error in getUsers', err);
            next();
        });
});

module.exports = router;