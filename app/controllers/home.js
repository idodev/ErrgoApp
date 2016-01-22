var router = require('express').Router();
var apps = require('../models/apps');

/* GET home page. */
router.get('/', function (req, res) {
    // List all applications
    apps.find(function (err, apps) {
        if (err) {
            res.send(err);
        }

        res.render('index', { title: 'Express', apps: apps });
    });
});


module.exports = router;
