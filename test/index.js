var server = require('./testServer');
var expect = require('expect.js');
var request = require('superagent');

describe('Home Page Validation', function () {
    before(function () {
        server.startup();
    });

    it('Responds to a GET request', function (done) {
        request
        .get('http://localhost:' + server.port)
        .end(function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });

    it('Has the expected title', function (done) {
        request
        .get('http://localhost:' + server.port)
        .end(function (err, res) {
            expect(res.text).to.contain('<p>Welcome to Express</p>');
            done();
        });
    });

    after(function () {
        server.shutdown();
    });
});
