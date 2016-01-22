var router = require('express').Router();

router.use('/', require('./home'));
router.use('/apps', require('./apps'));
router.use('/apps/:appId/users', require('./users'));

module.exports = router;
