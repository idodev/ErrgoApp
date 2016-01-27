var router = require('express').Router();
var App = require('../models/apps');

/* CREATE app. */
router.post('/', function (req, res) {
    var app = new App();
    app.name = req.body.name;
    app.save(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

/* READ app. */
router.get('/:appId', function (req, res) {
    App.findById(req.params.appId, function (err, app) {
        if (err) {
            res.send(err);
        } else if (app === null) {
            res.status(404);
            res.json({
                msg: 'App not found'
            });
        } else {
            res.json(app);
        }
    });
});

/* UPDATE app. */
router.put('/:appId', function (req, res) {
    App.findById(req.params.appId, function (err, app) {
        if (err) {
            res.send(err);
        } else if (app === null) {
            res.status(404);
            res.json({
                msg: 'App not found'
            });
        } else {
            app.name = req.body.name;
            app.save(function (err, app) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({
                        msg: 'App has been updated successfully.',
                        app: app
                    });
                }
            });
        }
    });
});

/* DELETE app */
router.delete('/:appId', function (req, res) {
    App.findByIdAndRemove(req.params.appId, function (err, app) {
        if (err) {
            res.send(err);
        } else if (app === null) {
            res.status(404);
            res.json({
                msg: 'App not found.'
            });
        } else {
            res.json({
                msg: 'App has been deleted successfully.',
                app: app
            });
        }
    });
});

module.exports = router;
