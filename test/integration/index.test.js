var server = require('./testServer');
var expect = require('expect.js');
var request = require('superagent');

describe('Home Page Validation', function () {
    before(function (done) {
        server.startup();
        done();
    });

    after(function (done) {
        server.shutdown();
        done();
    });

    it('Responds to a GET request', function (done) {
        request
        .get(server.root)
        .end(function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });

    it('Has the expected title', function (done) {
        request
        .get(server.root)
        .end(function (err, res) {
            expect(res.text).to.contain('<p>Welcome to Express</p>');
            done();
        });
    });

});
