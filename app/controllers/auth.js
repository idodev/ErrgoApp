var passport = require('passport');
var router = require('express').Router();
var Account = require('../models/account');

router.get('/register', function (req, res) {
    res.render('account/register', { });
});

router.post('/register', function (req, res) {
    var newAccount = new Account ({ username : req.body.username });
    Account.register(newAccount, req.body.password, function (err, account) {
        if (err) {
            return res.render('account/register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function (req, res) {
    res.render('account/login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
