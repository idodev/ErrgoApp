var app = require('../app/app');

app.set('port', process.env.PORT || 3000);
var server;

exports.startup = function () {
    server = app.listen(app.get('port'), function () {
        console.log('Express server listening on port '+server.address().port);
    });
};

exports.shutdown = function () {
    server.close();
    console.log('Terminated Express server');
};
exports.port = app.get('port');
