var expect = require('expect.js');
var app = require('../../app/app');
var supertest = require('supertest')(app);


describe('CRUD operations on Apps', function () {
    var tempAppId;

    before(function (done) {
        // Connect to database
        require('../../app/db');
        done();
    });

    it('Create an App with POST', function (done) {
        supertest
        .post('/apps/')
        .send({ name: 'JustPlainFoo' })
        .end(function (err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.exist;
            expect(res.body.name).to.equal('JustPlainFoo');
            expect(res.body._id).to.exist;
            tempAppId = res.body._id;

            done();
        });
    });

    it('Fetch App with GET', function (done) {
        supertest
        .get('/apps/' + tempAppId)
        .end(function (err, res) {
            // check this matches what was entered in the create test!
            expect(res.status).to.equal(200);
            done();
        });
    });

    it('Update app with PUT', function (done) {
        supertest
        .put('/apps/' + tempAppId)
        .send({ name: 'GoingOnBar' })
        .end(function (err, res) {
            // check return contains updates!
            expect(res.status).to.equal(200);
            expect(res.body.msg).to.contain('success');
            expect(res.body.app.name).to.exist;
            expect(res.body.app.name).to.equal('GoingOnBar');
            done();
        });
    });

    it('Remove app with DELETE', function (done) {
        supertest
        .delete('/apps/' + tempAppId)
        .end(function (err, res) {
            // check return data is as expected
            expect(res.status).to.equal(200);
            console.log(res.body);
            expect(res.body.msg).to.contain('success');
            expect(res.body.app._id).to.equal(tempAppId);
            done();
        });
    });

    it('Get 404 for (now deleted) app', function (done) {
        supertest
        .get('/apps/' + tempAppId)
        .end(function (err, res) {
            // check this matches what was entered in the create test!
            expect(res.status).to.equal(404);
            done();
        });
    });
});
