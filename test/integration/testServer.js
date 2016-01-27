var app = require('../../app/app');

app.set('port', process.env.PORT || 3000);
var server;

exports.startup = function () {
    // connect to database
    require('../../app/db');
    // start server
    server = app.listen(app.get('port'), function () {
        console.log('Running on port ' + server.address().port);
    });
};

exports.shutdown = function () {
    server.close();
    console.log('Terminated Express server');
};
exports.port = app.get('port');
