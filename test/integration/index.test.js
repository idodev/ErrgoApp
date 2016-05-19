var expect = require('expect.js');
var app = require('../../app/app');
var supertest = require('supertest')(app);


describe('Home Page Validation', function () {

    before(function (done) {
        // Connect to database
        require('../../app/db');
        done();
    });

    it('Responds to a GET request', function (done) {
        supertest
        .get('/')
        .end(function (err, res) {
            expect(res.status).to.equal(200);
            done();
        });
    });

    it('Has the expected title', function (done) {
        supertest
        .get('/')
        .end(function (err, res) {
            expect(res.text).to.contain('<p>Welcome to Express</p>');
            done();
        });
    });

});
