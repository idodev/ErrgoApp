var router = require('express').Router();
var apps = require('../models/apps');

/* GET home page. */
router.get('/', function (req, res) {
    // List all applications
    res.render('index', {
        title: 'Express',
        user: req.user
    });
});


module.exports = router;
