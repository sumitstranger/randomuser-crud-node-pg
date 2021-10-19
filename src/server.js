//@ts-check

let app = require('express')(),
    // @ts-ignore
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    allRoutes = require('./routes'),
    config= require('./config/app-config'),
    errorhandler = require('errorhandler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/v1', allRoutes);
app.use(errorhandler());


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     res.status(404).send();
// });


app.set('port', config.SERVER_PORT || 3000);

server.listen(app.get('port'), function () {
    console.log('Server Start on ', config.SERVER_PORT);
});

process.on('uncaughtException', function (err) {
});

process.on('unhandledRejection', (reason) => {
});

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
        process.exit(0);
    });
});