var router = require('express').Router();

router.use('/', require('./home'));
router.use('/apps', require('./apps'));
router.use('/apps/:appId/users', require('./users'));

router.use('/', require('./auth'));


module.exports = router;
