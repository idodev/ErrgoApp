var app = require('./app/app');

app.set('port', process.env.PORT || 3000);

// connect to database
require('./app/db');

// start server
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
